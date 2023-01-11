<template>
  <div class="container-fluid">
    <div id="app" class="container py-2 px-0">
      <section class="section-2 container-fluid p-0">
        <div
            id="carouselExampleIndicators"
            class="carousel slide p-0"
            data-bs-ride="carousel"
        >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          id="img"
          src="https://media.revistagq.com/photos/5f0d9c5b42f91a64e56906c7/16:9/w_1920,c_limit/george-cox-l9Z93oauxgs-unsplash.jpg"
          class="mx-auto d-block w-100 h-100"
          alt="img1"
        />
      </div>
      <div class="carousel-item">
        <img
          id="img"
          src="https://www.letribunaldunet.fr/wp-content/uploads/2020/10/bieres.jpg"
          class="mx-auto d-block w-100 h-100"
          alt="img2"
        />
      </div>
      <div class="carousel-item">
        <img
          id="img"
          src="https://storage.lebonguide.com/crop-1600x700/81/10/F3CDF8D1-365F-4AB4-9C33-1F2E8A08C4A0.png"
          class="mx-auto d-block w-100 h-100"
          alt="img3"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
        <div class="container-fluid text-center">
          <div
            class="numbers d-flex flex-md-row flex-wrap justify-content-center"
          >
            <div class="rect">
              <h1>200</h1>
              <p>Fournisseurs</p>
            </div>
            <div class="rect">
              <h1>500</h1>
              <p>Clients heureux</p>
            </div>
            <div class="rect">
              <h1>180</h1>
              <p>Variété de bières</p>
            </div>
            <div class="rect">
              <h1>15'000</h1>
              <p>Bières vendues</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="row text-center">
      <div class="col-lg-4">
        <img
          class="img-cercle"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Official_portrait_of_Barack_Obama.jpg"
        />
        
        <h2>Milan</h2>
        <p>Ux designer</p>
        <p>
          <a class="btn btn-secondary" href="">View details &raquo;</a>
        </p>
      </div>
      <div class="col-lg-4">
        <img
          class="img-cercle"
          src="https://image.cnbcfm.com/api/v1/image/104332177-Elon_Musk_smile.jpg?v=1533729063&w=1920&h=1080"
        />

        <h2>Fredy</h2>
        <p>CEO</p>
        <p>
          <a class="btn btn-secondary" href="">View details &raquo;</a>
        </p>
      </div>
      <div class="col-lg-4">
        <img
          class="img-cercle"
          src="https://us.123rf.com/450wm/gstockstudio/gstockstudio1501/gstockstudio150100083/35274508-brasseur-heureux-bonne-jeune-brasseur-hommes-en-tablier-tenant-un-verre-de-bi%C3%A8re-et-regarder-avec-un.jpg"
        />

        <h2>Arthur</h2>
        <p>Brasseur</p>
        <p>
          <a class="btn btn-secondary" href="">View details &raquo;</a>
        </p>
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
}
.col-lg-4 {
  background-color: #1c1c1c;
  padding-top: 2em;
  border-radius: 0.5em;
}

</style>
