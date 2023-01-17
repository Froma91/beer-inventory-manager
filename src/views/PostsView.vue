<template>
  <div id="app" class="container py-2 px-0">
    <div class="content text-center">
      <h1 classe=" text text-center">Suisse Beer Company</h1>
    </div>

    <div class="row">
      <div class="col-md-3">
        <button @click="this.listBeers()" class="btn btn-primary" type="submit">
          Demo
        </button>
        <h2>Ajouter une bière</h2>
        <div class="card card-body">
          <form ref="userForm" v-on:submit.prevent="processBeer">
            <div class="form-group">
              <input
                type="text"
                ref="name"
                v-model="beer.name"
                class="form-control"
                placeholder="Nom"
                minlength="6"
                maxlength="50"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="beer.price"
                class="form-control"
                placeholder="Prix"
                minlength="4"
                maxlength="50"
                required
              />
              <input
                type="text"
                v-model="beer.image"
                class="form-control"
                placeholder="Image"
                minlength="4"
                maxlength="150"
                required
              />
            </div>
            <div class="form-group py-1">
              <input
                type="submit"
                class="btn btn-success btn_block text-dark"
                v-bind:value="operation"
              />
            </div>
            <div class="form-group">
              <input
                type="reset"
                class="btn btn-primary btn_block"
                value="Effacer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <h1>Liste de bières favorites</h1>
    <h2>Total: {{ beers.length }}</h2>
    <hr />
    <div class="row">
      <div
        id="carteBiere"
        class="card col-12 col-sm-4 col-md-0 col-lg-2 mb-3"
        v-for="beer in beers"
        :key="beer.id"
      >
        <img
          id="img"
          :src="beer.image"
          onerror="this.onerror=null; this.src='https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png'"
          :alt="`image-${image}`"
          class="card-img-top"
        />
        <div class="card-body">
          <h6 class="card-title">{{ beer.name }}</h6>
          <p class="card-text text-success">{{ beer.price }}<span></span></p>
          <div class="div">
            <button
              id="btnUpdate"
              @click="editBeer(beer.id)"
              class="btn btn-info btn-block"
            >
              Mettre à jour
            </button>
          </div>
          <hr />
          <div class="div">
            <button
              id="ButtonDelete"
              @click="deleteBeer(beer.id, $event)"
              class="btn btn-danger btn-block"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beers: [],
      beer: {
        id: "",
        name: "",
        price: "",
        image: "",
      },
      operation: "Enregistrer",
      beerIndex: -1,
    };
  },
  created() {
    if (localStorage.getItem("vue3.beers") != null) {
      this.beers = JSON.parse(localStorage.getItem("vue3.beers"));
    }
  },
  mounted() {
    this.$refs.name.focus();
  },
  methods: {
    listBeers: async function () {
      const res = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await res.json();
      console.log(data);
      this.beers = data.slice(0, 5);
      this.updateLocalStorage();
    },
    updateLocalStorage: function () {
      localStorage.setItem("vue3.beers", JSON.stringify(this.beers));
    },
    processBeer: function () {
      if (this.operation == "Enregistrer") {
        this.beer.id = this.findMaxId() + 1;
        this.beers.push({
          id: this.beer.id,
          price: this.beer.price,
          name: this.beer.name,
          image: this.beer.image,
        });
      } else {
        this.beers[this.beerIndex].price = this.beer.price;
        this.beers[this.beerIndex].name = this.beer.name;
        this.beers[this.beerIndex].image = this.beer.image;
      }
      this.updateLocalStorage();
      this.findMaxId();
      this.clearFields();
    },
    findMaxId: function () {
      const maxId = Math.max.apply(
        Math,
        this.beers.map(function (beer) {
          return beer.id;
        })
      );
      return maxId;
    },
    editBeer(id) {
      this.operation = "Update";
      const beerFound = this.beers.find((beer, index) => {
        this.beerIndex = index;
        return beer.id == id;
      });
      this.beer.price = beerFound.price;
      this.beer.name = beerFound.name;
      this.beer.image = beerFound.image;
    },
    deleteBeer(id, event) {
      const confirmation = confirm("Do you want to delete the beer?");
      if (confirmation) {
        this.beers = this.beers.filter((beer) => beer.id != id);
        this.updateLocalStorage();
      } else {
        event.preventDefault();
      }
    },
    clearFields() {
      this.beer.id = "";
      this.beer.price = "";
      this.beer.name = "";
      this.beer.image = "";
      this.operation = "Register";
      this.$ref.name.focus();
    },
  },
};
</script>
<style scoped>
#img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 50%;
  width: 110px;
  height: 154px;
}
#carteBiere {
  margin: 20px;
}
</style>
