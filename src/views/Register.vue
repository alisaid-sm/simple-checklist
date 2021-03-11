<template>
 <div id="register">
    <div class="p-3 shadow form-login">
      <h1>Simple-CheckList</h1>
      <form @submit.prevent='register'>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="form.email"
            required
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            v-model="form.username"
            required
          />
          <small
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" v-model="form.password" id="exampleInputPassword1" required/>
        </div>
        <button type="submit" class="btn btn-primary btn-block btn-login" >Register</button>
      </form>
      <p class="mt-3">Anda sudah memiliki akun ? <router-link to="/login" >Login</router-link></p>
    </div>
 </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      form: {
        email: '',
        password: '',
        username: ''
      }
    }
  },
  methods: {
    register () {
      this.actionRegister(this.form)
        .then((response) => {
          alert('register success')
          window.location = '/login'
        }).catch((err) => {
          alert(err)
        })
    },
    ...mapActions({
      actionRegister: 'auth/register'
    })
  }
}
</script>

<style>
#register {
  background-color: #EBEDEF !important;
  height: 100vh;
  padding: 50px 400px 0px 400px;
}
.btn-login{
    font-size: 20px !important;
    border-radius: 10px !important;
    border: none !important;
    color: #FFFFFF !important;
}
.btn-login:hover{
    background-color: #29b2be !important;
}
.btn-login:active{
    background-color: #29b2be !important;
}
.title{
  top: 10%;
}
#register .form-login{
  border-radius: 10px !important;
  background-color: white;
}
@media (max-width: 992px) {
  #register {
    padding: 0px !important;
    height: auto !important;
  }
  #register .form-login{
  border-radius: 0px !important;
}
}
</style>
