<template>
  <div id="app" class="container py-2 px-0">
    <div class="row">
      <div class="col-md-3 ">
        <h2>Add Beer</h2>
        <div class="card card-body">
          <form ref="userForm" v-on:submit="processBeer">
            <div class="form-group">
              <input
                type="text"
                ref="name"
                v-model="beer.name"
                class="form-control"
                placeholder="Name"
                minlength="6"
                maxlength="20"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="beer.price"
                class="form-control"
                placeholder="Price"
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
                value="Clear"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-9">
        <h1>Beers's list</h1>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr class="text-center">
                <th>Number</th>
                <th>Price</th>
                <th>Name</th>
                <th>Image</th>
                <th colspan="4" options></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(beer, index) in beers">
                <td>{{ beer.id }}</td>
                <td>{{ beer.price }}</td>
                <td>{{ beer.name }}</td>
                <td><img :src="beer.image" :alt="image" /></td>
                <td>
                  <button
                    @click="editBeer(beer.id)"
                    class="btn btn-info btn-block"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    @click="deleteBeer(beer.id, $event)"
                    class="btn btn-danger btn-block"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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
      beer:{
        id: "",
        name: "",
        price:"",
        image: "",
      },
      operation: "Register",
      userIndex: -1,
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
      const res = await fetch(
        "https://api.sampleapis.com/beers/ale"
      );
      const data = await res.json();
      console.log(data);
    debugger
      this.beers = data.slice(0,100);
      this.updateLocalStorage();
    },
    updateLocalStorage: function () {
      localStorage.setItem("vue3.users", JSON.stringify(this.beers));
    },
    processBeer: function (event) {
      event.preventDefault();
      if (this.operation == "Register") {
        this.beer.id = this.findMaxId()+1;
        this.beers.push({
          id: this.user.id,
          price: this.beer.price,
          name: this.beer.name,
          image: this.beer.image,
        });
      } else {
        this.beers[this.userIndex].price = this.beer.price;
        this.beers[this.userIndex].name = this.beer.name;
        this.beers[this.userIndex].image = this.beer.image;
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
      const userFound = this.beers.find((beer, index) => {
        this.userIndex = index;
        return beer.id == id;
      });
      this.beer.price = userFound.price;
      this.beer.name = userFound.name;
      this.beer.image = userFound.image;
    },
    deleteBeer(id, event) {
      const confirmation = confirm("Do you want to delete the user?");
      if (confirmation) {
        this.beers = this.beers.filter((beer) => beer.id != id);
        updateLocalStorage();
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

