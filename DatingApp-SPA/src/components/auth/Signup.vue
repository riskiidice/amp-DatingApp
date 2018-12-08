<template>
  <div class="signup">
     <div class="col-md-6 col-lg-6 mx-auto">
        <div class="card">
          <img class="card-img-top" src="../../assets/img/register.gif" width="64" alt="Card image cap">
          <div class="card-body">
            <form @submit.prevent="register(userForm)" >
              <div class="form-group">
                <label for="">Username</label>
                <input type="text" class="form-control" name="username" placeholder="Username" v-model="userForm.username">
              </div>
               <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" name="password"  placeholder="Password" v-model="userForm.password">
              </div>
               <div class="form-group">
                <label for="">Comfirm Password</label>
                <input type="password" class="form-control" name="cofirm" placeholder="Confirm Password" v-model="userForm.confirm_password">
              </div>
              <button :disabled="userForm.password !== userForm.confirm_password" class="btn btn-success btn-lg btn-block">SingUp</button>
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
    name: 'SingUp',
    data(){
      return {
        userForm: {}
      }
    },
   methods:{
    ...mapActions(['register'])
  },
  computed: {
        ...mapGetters(['isErrors'])
  }
}
</script>

<style scoped>
  .signup {
    margin-top: 7em;
  }
</style>
