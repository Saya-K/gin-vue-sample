<template>
  <div class="hello">
    <h1 class="errmsg" v-if="err != null">{{ err.status }}</h1>
    <h1>{{ user.name }}</h1>
    <table border="1">
      <tr>
        <td><h1><label for="name">name</label></h1></td>
        <td><input v-model="user.name" id="name"/></td>
      </tr>
    </table>
    <div>
      <button v-on:click="createNewUser">create new user</button>
    </div>
    <router-link to="/">top page</router-link>
  </div>
</template>

<script>
  export default {
    name: 'CreateUser',
    data() {
      return {
        user: {
          id: 0,
          name: "",
        },
        err: "",
      }
    },
    mounted() {

    },
    methods: {
      createNewUser: function () {
        if (this.user.name === "") {
          this.err = {status: 'enter your name'};
          return;
        }

        axios({
          method: 'post',
          url: 'http://localhost:8000/createNewUser',
          headers: {'Content-Type': 'application/json'},
          data: {name: this.user.name},
        }).then(res => {
          this.user = res.data;
          this.$store.commit('setUser', this.user);
          this.$router.push({path: "/new"});
        }).catch(err => {
          this.err = err.response.data;
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    margin-right: auto;
    margin-left: auto;
  }
</style>
