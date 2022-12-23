<template>
  <div class="container-fluid" :style="image">
    <div id="app" class="container py-2 px-0">
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <img
              class="card-img-top"
              src="https://www.liquor.com/thmb/zzY3QbT5h9S9utBkexhECycXZIc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-519728153-7dca4b18c59f4b1fa3654e4d5c9db884.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">
                Les bières artisanals sont les meilleurs bieres du coin
              </h5>
              <p class="card-text">
                Les bieres viennent d'une contrée lointaine très lointaine au
                dela des montagnes et des rivières
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-body">Hello</div>
        </div>
        <div class="col-md-5">
          <div class="card card-body"></div>
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
