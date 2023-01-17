<template>
  <div class="container-fluid" :style="image">
    <div id="app" class="container py-2 px-0">
      <section class="section-2 container-fluid p-0">
        <div class="cover">
          <div class="content text-center">
            <h1>Les points qui nous rendent uniques</h1>
          </div>
        </div>
        <div class="container-fluid text-center">
          <div
            class="numbers d-flex flex-md-row flex-wrap justify-content-center"
          >
            <div class="rect">
              <h1>20</h1>
              <p>Marques</p>
            </div>
            <div class="rect">
              <h1>500</h1>
              <p>Clients heureux</p>
            </div>
            <div class="rect">
              <h1>50</h1>
              <p>Variétés de bière</p>
            </div>
            <div class="rect">
              <h1>5'000</h1>
              <p>Bières ajoutées aux favoris</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="col d-flex justify-content-center">
      <div class="col-lg-4 mb-3">
        <img
          class="img-cercle"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Official_portrait_of_Barack_Obama.jpg"
        />

        <h2 class="margin">Milan</h2>
        <p class="margin">Ux designer</p>
        <p class="margin">
          <a
            class="btn btn-secondary"
            href="https://www.linkedin.com/in/milan-augstburger-74116623a/"
            target="_blank"
            >View details &raquo;</a
          >
        </p>
      </div>
      <div class="col-lg-4 mb-3">
        <img
          class="img-cercle"
          src="https://image.cnbcfm.com/api/v1/image/104332177-Elon_Musk_smile.jpg?v=1533729063&w=1920&h=1080"
        />

        <h2 class="margin">Fredy</h2>
        <p class="margin">CEO</p>
        <p class="margin">
          <a
            class="btn btn-secondary"
            href="https://www.linkedin.com/in/fredy-rodriguez-1a736a132/"
            target="_blank"
            >View details &raquo;</a
          >
        </p>
      </div>
      <div class="col-lg-4 mb-3">
        <div class="card-body">
          <img
            class="img-cercle"
            src="https://us.123rf.com/450wm/gstockstudio/gstockstudio1501/gstockstudio150100083/35274508-brasseur-heureux-bonne-jeune-brasseur-hommes-en-tablier-tenant-un-verre-de-bi%C3%A8re-et-regarder-avec-un.jpg"
          />

          <h2 class="margin">Arthur</h2>
          <p class="margin">Brasseur</p>
          <p class="margin">
            <a
              class="btn btn-secondary"
              href="https://www.linkedin.com/in/arthur-montandon/"
              target="_blank"
              >View details &raquo;</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: {
        backgroundImage:
          "url(https://www.eatthis.com/wp-content/uploads/sites/4/2022/02/Beer-flight.jpg?quality=82&strip=all)",
      },
    };
  },
};
</script>
<style scoped>
.cover {
  width: 100%;
  height: 55vmin;
  background: url("https://www.rts.ch/2022/11/29/10/22/13583999.image?w=1280&h=720");
  background-position: 1rem -5rem;
  position: relative;
}
.cover .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.cover .content {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding-top: 19vmin;
}
.numbers .rect {
  position: relative;
  background: #1c1c1c;
  width: 17rem;
  height: 12rem;
  padding-top: 3.5vmin;
  margin: 1rem;
  border-radius: 0.5em;
}
.numbers {
  margin-top: -15vmin;
}
.numbers .rect h1 {
  font-size: 5rem;
  color: #f39c12;
}
.img-cercle {
  width: 140px;
  height: 140px;
  border-radius: 180px;
  margin-left: 135px;
}
.col-lg-4 {
  background-color: #1c1c1c;
  padding-top: 2em;
  border-radius: 0.5em;
  width: 400px;
  margin-left: 20px;
  margin-right: 20px;
}
.margin {
  text-align: center;
}
</style>
