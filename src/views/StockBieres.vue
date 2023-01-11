<template>
  <div id="app" class="container-fluid py-2 px-0">
    <div class="row">
      <div class="col-md-12">
        <h1>Stock de bières</h1>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr class="text-center">
                <th>Numero</th>
                <th>Prix</th>
                <th>Nom</th>
                <th>Image</th>
                <th colspan="4" options></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="beer in beers" :key="beer.id">
                <td>{{ beer.id }}</td>
                <td>{{ beer.price }}</td>
                <td>{{ beer.name }}</td>
                <td><img :src="beer.image" :alt="image" /></td>
                <td>
                  <button
                    @click="addBeer(beer.id)"
                    class="btn btn-info btn-block"
                  >
                    Ajouter à liste favorits
                  </button>
                </td>
                <td>
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
      beer: {
        id: "",
        name: "",
        price: "",
        image: "",
      },
    };
  },
  created() {
      this.listBeers ();  
  },
  methods: {
    listBeers: async function () {
      const res = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await res.json();
      console.log(data);
      //debugger;
      this.beers = data;
    },
    updateLocalStorage() {
      localStorage.setItem("vue3.beers", JSON.stringify(this.beers));
    },
    addBeer(){
      if (this.operation == "Register") {
        console.log('biere');
      }
      this.updateLocalStorage();
    },
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
};
</script>
<style scoped>
#img {
  max-width: 100px;
  max-height: 150px;
}
</style>
