<template>
  <div class="content text-center">
    <h1 classe="txt-center">
      Bienvenues à votre application Suisse Beer Company
    </h1>
  </div>
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
        <a class="btn btn-secondary" href="https://www.bio-suisse.ch/fr/notre-association/portrait/le-bio-en-chiffres.html">View details &raquo;</a>
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
        <a class="btn btn-secondary" href="https://www.eda.admin.ch/aboutswitzerland/en/home/dossiers/einleitung---schweizer-uhren/schweizer-qualitaet----swiss-made-.html">View details &raquo;</a>
      </p>
    </div>
    <hr class="featurette-divider" />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>1. Ce que nous vous offrons</h2>
          <p>Une application de gestion de cave à bière</p>
          <p>Pratique, simple et rapide !</p>
          <h2>2. Pourquoi nous choisir ?</h2>
          <div>
            <p>Pourquoi nous choisir :</p>
            <P
              >Il y a plusieurs raisons pour lesquelles on pourrait vouloir
              utiliser une application de gestion de bière :
            </P>
          </div>
        </div>
      </div>
    </div>

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          Pour suivre sa consommation de bière :
          <span class="text-muted"
            >une application de gestion de bière peut aider à suivre combien de
            bières ont été consommées et à quelle fréquence.
          </span>
        </h2>
        <p class="lead">
          Cela peut être utile pour ceux qui essaient de limiter leur
          consommation de bière ou qui veulent simplement être conscients de
          celle-ci.
        </p>
      </div>
      <div class="col-md-5">
        <img
          id="img1"
          class="rounded mx-auto d-block"
          alt="image4"
          src="https://binaryinformatics.com/wp-content/uploads/2018/10/mobile-application.jpg"
        />
      </div>
    </div>
    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">
          Pour enregistrer les différentes bières testées :
          <span class="text-muted"
            >une application de gestion de bière peut aider à enregistrer les
            différentes bières testées, y compris le type de bière, la brasserie
            et les notes de dégustation.</span
          >
        </h2>
        <p class="lead">
          Cela peut être utile pour ceux qui aiment essayer de nouvelles bières
          et qui veulent garder une trace de leurs préférées.
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          class="rounded mx-auto d-block"
          alt="image5"
          id="img1"
          src="https://static.vecteezy.com/ti/vecteur-libre/p2/2756521-notation-etoiles-jaunes-gratuit-vectoriel.jpg"
        />
      </div>
    </div>
    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          Pour suivre les bières en stock :
          <span class="text-muted">
            une application de gestion de bière peut aider à suivre les bières
            en stock et à savoir quand il est temps de s'approvisionner en
            bière.</span
          >
        </h2>
        <p class="lead">
          Cela peut être utile pour ceux qui ont une grande collection de bières
          et qui veulent s'assurer de ne jamais être à court de leur bière
          préférée.
        </p>
      </div>
      <div class="col-md-5">
        <img
          id="img1"
          class="rounded mx-auto d-block"
          alt="image4"
          src="https://www.comptazine.fr/wp-content/uploads/2017/01/Stock-alerte-Stock-s%C3%A9curit%C3%A9.png"
        />
      </div>
    </div>
    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">
          Pour partager ses goûts en bière avec d'autres :
          <span class="text-muted">
            une application de gestion de bière peut permettre de partager ses
            goûts en bière avec d'autres utilisateurs de l'application.</span
          >
        </h2>
        <p class="lead">
          Cela peut être utile pour trouver de nouvelles bières à essayer ou
          pour recevoir des recommandations de bières de la part d'autres
          amateurs de bière.
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          class="rounded mx-auto d-block"
          alt="image5"
          id="img1"
          src="https://t3.ldh.be/0uNbQr_mxKACCtMNwp1iBHp2eU4=/0x150:2825x1562/1280x640/5c51ef20d8ad5878f04fdbd5.jpg"
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
