<template>
  <nav class="navbar navbar-expand-lg bg-info">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"
        ><img
          src="../assets/logo.svg"
          alt="logo biere"
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
            <router-link to="/" class="nav-link active" aria-current="page">
              <span class="material-icons-two-tone">home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link"
              ><span class="material-icons-two-tone">info</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/posts" class="nav-link"
              ><span class="material-icons-two-tone"
                >reorder
              </span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
