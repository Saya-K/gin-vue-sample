<template>
  <div class="hello">
    <h1 class="errmsg" v-if="err != null">{{ err.status }}</h1>
    <h1>Create new user {{ user.id }} {{ user.name }}</h1>
    <div>
    </div>
    <router-link to="/">top page</router-link>
  </div>
</template>

<script>
  export default {
    name: 'New',
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
      this.setUserFromStore()
    },
    methods: {
      setUserFromStore() {
        this.user = this.$store.getters.getUser
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
