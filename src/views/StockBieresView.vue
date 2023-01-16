<template>
  <div id="app" class="container-fluid py-2 px-0">
    <div class="row px-5">
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
            <tbody class="container">
              <tr class="text-center" v-for="beer in beers" :key="beer.id">
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
                <td></td>
                <td class="td">
                  <button id="btn1" @click="addBeer(beer)" class="btn btn-info btn-block">
                    Ajouter aux favorites
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
  },
};
</script>
<style scoped>
#img {
  max-width: 100px;
  max-height: 150px;
}
.td {
  position: relative;
}
#btn1 {
  position: absolute;
  bottom: 8px;
  right: 2px;
  font-size: 18px;
}

</style>
