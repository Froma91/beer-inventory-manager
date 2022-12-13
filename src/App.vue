<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Vue3 localStorage</a>

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
  </nav>

  <div id="app" class="container py-4">
    <div class="row">
      <div class="col-md-3">
        <h2>Wine</h2>

        <div class="card card-body">
          <form ref="userForm" v-on:submit="processUser">
            <div class="form-group">
              <input
                type="text"
                ref="name"
                v-model="user.name"
                class="form-control"
                placeholder="Name"
                minlength="10"
                maxlength="50"
                required
              />
            </div>

            <div class="form-group">
              <input
                type="text"
                v-model="user.username"
                class="form-control"
                placeholder="Username"
                minlength="6"
                maxlength="20"
                required
              />
            </div>

            <div class="form-group">
              <input
                type="email"
                v-model="user.email"
                class="form-control"
                placeholder="Email"
                minlength="10"
                maxlength="50"
                required
              />
            </div>

            <div class="form-group">
              <input
                type="submit"
                class="btn btn-success btn_block text-dark"
                v-bind:value="operation"
              />
            </div>

            <div class="form-group">
              <input
                type="reset"
                class="btn btn-primary btn_block"
                value="Clear"
              />
            </div>
          </form>
        </div>
      </div>

      <div class="col-md-9">
        <h1>Wines's list</h1>

        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Number</th>

                <th>Name</th>

                <th>Color</th>

                <th>Producer</th>

                <th>Region</th>

                <th colspan="2" options></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(user, index) in users">
                <!--parcours de mon array user-->

                <td>{{ user.id }}</td>
                <!-- interpollation -->

                <td>{{ user.name }}</td>

                <td>{{ user.username }}</td>

                <td>{{ user.email }}</td>

                <td>
                  <button
                    @click="editUser(user.id)"
                    class="btn btn-info btn-block"
                  >
                    Update
                  </button>
                </td>

                <td>
                  <button
                    @click="deleteUser(user.id, $event)"
                    class="btn btn-danger btn-block"
                  >
                    Delete
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
      users: [],

      user: {
        id: "",

        name: "",

        username: "",

        email: "",
      },

      operation: "Register",

      userIndex: -1,
    };
  },

  created() {
    if (localStorage.getItem("vue3.users") != null) {
      this.users = JSON.parse(localStorage.getItem("vue3.users"));
    } else {
      this.listUsers();
    }
  },

  mounted() {
    this.$refs.name.focus();
  },

  methods: {
    listUsers: async function () {
      const res = await fetch(
        "https://portal.winedata.io/api/wines?language=en&per-page=20&page=1"
      );

      const data = await res.json();

      console.log(data);

      this.users = data.slice(0, 5);

      this.updateLocalStorage();
    },

    updateLocalStorage: function () {
      localStorage.setItem("vue3.users", JSON.stringify(this.users));
    },

    processUser: function (event) {
      event.preventDefault();

      if (this.operation == "Register") {
        this.user.id = this.findMaxId() + 1;

        this.users.push({
          id: this.user.id,

          name: this.user.name,

          username: this.user.username,

          email: this.user.email,
        });
      } else {
        this.users[this.userIndex].name = this.user.name;

        this.users[this.userIndex].username = this.user.username;

        this.users[this.userIndex].email = this.user.email;
      }

      this.updateLocalStorage();

      this.findMaxId();

      this.clearFields();
    },

    findMaxId: function () {
      const maxId = Math.max.apply(
        Math,
        this.users.map(function (user) {
          return user.id;
        })
      );

      return maxId;
    },

    editUser(id) {
      this.operation = "Update";

      const userFound = this.users.find((user, index) => {
        this.userIndex = index;

        return user.id == id;
      });

      this.user.name = userFound.name;

      this.user.username = userFound.username;

      this.user.email = userFound.email;
    },

    deleteUser(id, event) {
      const confirmation = confirm("Do you want to delete the user?");

      if (confirmation) {
        this.users = this.users.filter((user) => user.id != id);

        updateLocalStorage();
      } else {
        event.preventDefault();
      }
    },

    clearFields() {
      this.user.id = "";

      this.user.name = "";

      this.user.username = "";

      this.user.email = "";

      this.operation = "Register";

      this.$ref.name.focus();
    },
  },
};
</script>
