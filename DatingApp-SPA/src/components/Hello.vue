<template>
  <div class="hello text-center">
    <h1>Find your match</h1>
    <p>View your matches need signup</p>
    <router-link :to="{name: 'Signup'}" class="btn btn-primary mr-2">Register</router-link>
    <button class="btn btn-info mr-2">Learn more</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods: {
    ...mapActions(['fetchValues'])
  },
  computed: {
    ...mapGetters(['allValues'])
  },
  created(){
    this.fetchValues();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  margin-top: 5em;
}
</style>
