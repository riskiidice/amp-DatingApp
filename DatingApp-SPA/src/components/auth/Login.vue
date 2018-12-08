<template>
  <div class="login">
    <br>
    <br>
     <div class="col-md-6 col-lg-6 mx-auto mt-5">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="login(userForm)" >
              <div class="form-group">
                <label for="">Username</label>
                <input type="text" class="form-control" name="username" placeholder="Username" v-model="userForm.username">
              </div>
               <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" name="password"  placeholder="Password" v-model="userForm.password">
              </div>
              <button class="btn btn-info btn-lg btn-block">Login</button>
              <small v-if="isErrors" id="helpId" class="form-text text-danger text-center">{{ isErrors }} text</small>
            </form>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Login',
  data(){
    return {
      userForm: {}
    }
  },
  methods:{
    ...mapActions(['login'])
  },
  computed:{
    ...mapGetters(['isErrors'])
  }
}
</script>

<style scoped>
  .login {
    height: 100vh;
     background:     
    linear-gradient(
      rgba(255, 255, 255, 0.8), 
      rgba(2, 2, 2, 0.7)
    ), url('../../assets/img/bg.jpg')
  }
  body {
   
  }
</style>
