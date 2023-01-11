<template>
  <nav class="navbar navbar-expand-lg bg-warning">
    <div class="container justify-content-around">
      <router-link to="/" class="nav-link active" aria-current="page">
        <a class="nav-link active">Liste de bières favorites</a>
      </router-link>

      <router-link to="/about" class="nav-link"
        ><a class="nav-link active">Nous</a>
      </router-link>

      <router-link to="/BeerFilterView" class="nav-link"
        ><a class="nav-link active">Stock de bières</a>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
  .nav-link{
  color: rgb(23, 19, 19);
  font-size: 1.0em;
  background-color: rgba(229, 223, 223, 0.246);
  padding: 0.5em;
  border-radius: 50%;
  margin: 0.1em;    
  }
  .navbar{
    padding: 0.2em 1rem;
  }
</style>
