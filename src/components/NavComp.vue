<template>
  <nav class="navbar navbar-expand-lg bg-info">
    <div class="container-fluid">
      <router-link to="/">>
        <img
          src="https://static.pratique.fr/images/unsized/le/les-differents-types-de-bieres-istock-com-ridofranz-219-1575366544.jpg"
          width="80"
          height="80"
          class="d-inline-block align-top"
          alt=""
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/posts" class="nav-link">Posts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>