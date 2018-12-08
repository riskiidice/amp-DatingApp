<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <ul>
      <li v-for="(value,index) in allValues" :key="value.id">
         {{index+1}}.{{ value.name }}
      </li>
    </ul>
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
