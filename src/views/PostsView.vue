<template>
  <h1>Beer's List</h1>
  <hr />
    <div class="row">
      <div class="card col-12 col-sm-4 col-md-0 col-lg-2 mb-3" v-for="(beer,index) in beers" :key="index">
        <img
          id="img"
          :src="beer.image"
          :alt="`image-${image}`"
          class="card-img-top"
        />
        <div class="card-body" >
          <h6 class="card-title">{{ beer.name }}</h6>
          <p class="card-text text-success">{{ beer.price }}<span></span></p>
          <button class="btn btn-info">Acheter</button>
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
      operation: "Register",
      beerIndex: -1,
    };
  },
  created() {
    if (localStorage.getItem("vue3.beers") != null) {
      this.beers = JSON.parse(localStorage.getItem("vue3.beers"));
    } else {
      this.listBeers();
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
      debugger;
      this.beers = data.slice(0, 5);
      this.updateLocalStorage();
    },
    updateLocalStorage: function () {
      localStorage.setItem("vue3.beers", JSON.stringify(this.beers));
    },
    processBeer: function () {
      if (this.operation == "Register") {
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
  max-width: 100px;
  max-height: 150px;
}

.container{
  background-color: blue;
}

</style>
