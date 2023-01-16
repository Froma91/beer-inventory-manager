<template>
  <div id="app" class="container-fluid py-2 px-0">
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-3" id="Menu">
          <h1>Stock de bières</h1>
          <div class="input-group mb-3">
            <input
              type="text"
              ref="name"
              v-model="beer.name"
              placeholder="Une biere ?"
              minlength="6"
              maxlength="50"
              required
            />
            <div class="input-group-append">
              <button
                @click="filtrer(beer.name)"
                class="btn btn-outline-secondary success"
                type="button"
              >
                Rechercher
              </button>
            </div>
          </div>
        </div>
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
                <td>
                  <img
                    :src="beer.image"
                    onerror="this.onerror=null; this.src='https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png'"
                    :alt="`image-${image}`"
                  />
                </td>
                <td>
                  <button @click="addBeer(beer)" class="btn btn-info btn-block">
                    Ajouter à liste favorits
                  </button>
                </td>
                <td></td>
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
    this.listBeers();
  },
  methods: {
    listBeers: async function () {
      const res = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await res.json();
      console.log(data);
      this.beers = data;
    },
    addBeer(beer) {
      const oldItems = JSON.parse(localStorage.getItem("vue3.beers")) || [];
      oldItems.push(beer);
      localStorage.setItem("vue3.beers", JSON.stringify(oldItems));
    },
    filtrer: async function (beerName) {
      console.log(beerName);
      const liste = [];
      const res = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await res.json();
      for (var key in data) {
        var beerTrouver = data[key];
        if (
          beerTrouver["name"].toLowerCase().includes(beerName.toLowerCase())
        ) {
          liste.push(beerTrouver);
        }
      }
      this.beers = liste;
    },
  },
};
</script>
<style scoped>
#img {
  max-width: 100px;
  max-height: 150px;
}
#Menu {
  margin-left: 20px;
}
</style>
