<template>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Bienvenue</title>
    </head>
    <body>
      <h1>Bienvenue</h1>
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
                <ul class="list-group">
                  <li class="list-group-item">
                    Pour suivre sa consommation de bière : une application de
                    gestion de bière peut aider à suivre combien de bières ont
                    été consommées et à quelle fréquence. Cela peut être utile
                    pour ceux qui essaient de limiter leur consommation de bière
                    ou qui veulent simplement être conscients de leur
                    consommation.
                  </li>
                  <li class="list-group-item">
                    Pour enregistrer les différentes bières testées : une
                    application de gestion de bière peut aider à enregistrer les
                    différentes bières testées, y compris le type de bière, la
                    brasserie et les notes de dégustation. Cela peut être utile
                    pour ceux qui aiment essayer de nouvelles bières et qui
                    veulent garder une trace de leurs préférées.
                  </li>
                  <li class="list-group-item">
                    Pour suivre les bières en stock : une application de gestion
                    de bière peut aider à suivre les bières en stock et à savoir
                    quand il est temps de s'approvisionner en bière. Cela peut
                    être utile pour ceux qui ont une grande collection de bières
                    et qui veulent s'assurer de ne jamais être à court de leur
                    bière préférée.
                  </li>
                  <li class="list-group-item">
                    Pour partager ses goûts en bière avec d'autres : une
                    application de gestion de bière peut permettre de partager
                    ses goûts en bière avec d'autres utilisateurs de
                    l'application. Cela peut être utile pour trouver de
                    nouvelles bières à essayer ou pour recevoir des
                    recommandations de bières de la part d'autres amateurs de
                    bière.
                  </li>
                </ul>
              </P>
            </div>
          </div>
          <div class="col">
            <img
              src="https://images.pexels.com/photos/1267292/pexels-photo-1267292.jpeg"
              class="img-thumbnail"
              alt="Image de 3 bières différentes sur une table"
              height="400"
              width="800"
            />
          </div>
        </div>
      </div>

      <div classe="formulaireQuestion">
        <h2>Une question ou sugestion ?</h2>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Votre addresse mail</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Votre message</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </body>
  </html>
</template>
<style>
body {
  padding: 10px 50px 20px;
}
</style>
