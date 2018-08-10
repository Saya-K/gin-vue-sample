<template>
  <div class="hello">
    <h1 class="errmsg" v-if="err != null">{{ err.status }}</h1>
    <table border="1" v-if="user.name != null">
      <tr>
        <th><h1>id</h1></th>
        <th><h1>name</h1></th>
      </tr>
      <tr>
        <td><h2>{{ user.id }}</h2></td>
        <td><h2>{{ user.name }}</h2></td>
      </tr>
    </table>
    <div>
      <button @click="getUser(index)">get next user id:{{ index }}</button>
    </div>
    <router-link to="createUser">create new user</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        user: {
          id: 1,
          name: "",
        },
        index: 1,
        err: "",
      }
    },
    mounted() {
      this.getUser(this.index);
    },
    methods: {
      getUser(id) {
        axios.get('http://localhost:8000/' + id).then(res => {
          this.user = res.data;
          this.index++;
        }).catch(err => {
          this.err = err.response.data;
        });
      }
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
