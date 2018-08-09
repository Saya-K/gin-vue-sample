<template>
  <div class="hello">
    <button @click="post()"></button>
    {{ posts }}
    <h1 class="errmsg" v-if="posts.err != null">{{ posts.err }}</h1>
    <table border="1" v-if="posts.name != null">
      <tr>
        <th><h1>id</h1></th>
        <th><h1>name</h1></th>
      </tr>
      <tr>
        <td><h2>{{ posts.id }}</h2></td>
        <td><h2>{{ posts.name }}</h2></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        posts: ""
      }
    },
    mounted() {
      axios.get('http://localhost:8000/1').then(res => {
        // console.log(res.data);
        var a = res.data;
        this.posts = a
        console.log(this.posts);
      }).catch(function (error) {
        console.log(error)
        this.posts = {err: error.message}
      });
    },
    methods: {
      post() {
        axios.get('http://localhost:8000/2').then(res => {
          // console.log(res.data);
          var a = res.data;
          this.posts = a
          console.log(this.posts);
        }).catch(function (error) {
          console.log(error)
          this.posts = {err: error.message}
        });
      }
    }
  }


  // console.log(a)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
