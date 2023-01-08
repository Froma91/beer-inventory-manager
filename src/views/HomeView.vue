<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide p-0"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators p-5">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          id="img"
          src="https://media.revistagq.com/photos/5f0d9c5b42f91a64e56906c7/16:9/w_1920,c_limit/george-cox-l9Z93oauxgs-unsplash.jpg"
          class="mx-auto d-block w-100 h-100"
          alt="img1"
        />
        <p class="text text-center fs-4">
          Refresh-toi avec la meilleur biere du moment
        </p>
      </div>
      <div class="carousel-item">
        <img
          id="img"
          src="https://www.letribunaldunet.fr/wp-content/uploads/2020/10/bieres.jpg"
          class="mx-auto d-block w-100 h-100"
          alt="img2"
        />
        <p class="text text-center fs-4">Le vrai partage de la vie</p>
      </div>
      <div class="carousel-item">
        <img
          id="img"
          src="https://storage.lebonguide.com/crop-1600x700/81/10/F3CDF8D1-365F-4AB4-9C33-1F2E8A08C4A0.png"
          class="mx-auto d-block w-100 h-100"
          alt="img3"
        />
        <p class="text text-center fs-4">Produits de notre région</p>
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

  <!-- Trois columnes de texte au-dessous de carousel -->
  <div class="row text-center">
    <div class="col-lg-4">
      <img
        class="img-cercle"
        src="https://www.lamentounasc.fr/file/si916015/biere-entre-amis-fi17423796x640.jpg"
      />

      <h2>Partage</h2>
      <p>
        Le partage avec la famille et avec des amis fait partie du bien-être
      </p>
      <p>
        <a
          class="btn btn-secondary"
          href="https://www.pourquoidocteur.fr/Mieux-Vivre/33820-Passer-temps-amis-serait-cle-du-bonheur"
          >View details &raquo;</a
        >
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-cercle"
        src="https://c8.alamy.com/compfr/pwahe0/letiquette-des-aliments-biologiques-sains-bio-produit-de-haute-qualite-et-de-badges-100-eco-bio-et-naturels-sur-licone-du-produit-emblemes-pour-cafe-lemballage-etc-vector-pwahe0.jpg"
      />
      <h2>100% Bio</h2>
      <p>Nous faisons attention à l'environnement et à nos clients</p>
      <p>
        <a class="btn btn-secondary" href="#">View details &raquo;</a>
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-cercle"
        src="https://thumbs.dreamstime.com/z/made-switzerland-badge-made-switzerland-round-seal-ribbon-switzerland-made-switzerland-121703186.jpg"
      />
      <h2>Produit de qualité</h2>
      <p>Produits d'origine suisse</p>
      <p>
        <a class="btn btn-secondary" href="#">View details &raquo;</a>
      </p>
    </div>
    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          Les bières artisanals sont les meilleurs bieres du coin.
          <span class="text-muted">Vraiment les meilleures</span>
        </h2>
        <p class="lead">
          Les bieres viennent d'une contrée lointaine très lointaine au dela des
          montagnes et des rivières
        </p>
      </div>
      <div class="col-md-5">
        <img
          id="img1"
          class="rounded mx-auto d-block"
          alt="image4"
          src="https://www.liquor.com/thmb/zzY3QbT5h9S9utBkexhECycXZIc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-519728153-7dca4b18c59f4b1fa3654e4d5c9db884.jpg"
        />
      </div>
    </div>
    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">
          Un moment conviviale autour d'un verre.
          <span class="text-muted"
            >On ne choisie pas la famille, mais les amis oui !</span
          >
        </h2>
        <p class="lead">On se voit ce weekend ;)</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          class="rounded mx-auto d-block"
          alt="image5"
          id="img1"
          src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/02/Beer-flight.jpg?quality=82&strip=all"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#img {
  max-width: 1800px;
  max-height: 800px;
  filter: brightness(0.9);
}
#img1 {
  max-width: 500px;
  max-height: 500px;
}
.img-cercle {
  width: 140px;
  height: 140px;
  border: 180px;
  border-radius: 180px;
}
</style>
