
<template>
<div class="limiter">
	
		<div class="container-login100 form-container" style="background-image: url('images/bg-01.jpg');">
			<div class="wrap-login100">
				<form class="login100-form validate-form" v-on:submit.prevent>
					<span class="login100-form-logo">
						<i class="zmdi zmdi-landscape"></i>
					</span>

					<span class="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="email" placeholder="Email" v-model="email">
						<span class="focus-input100" ></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100"  name="pass" placeholder="Password" type="password" v-model="password">
						<span class="focus-input100" ></span>
					</div>

					<div class="contact100-form-checkbox">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>

					<div class="container-login100-form-btn">
						<button type="button" class="btn btn-primary btn-lg" v-on:click="signIn">Valider</button>

<!-- 						<button type="submit" class="button is-primary" v-on:click="signIn">Sign-in</button>
 -->					</div>

					<div class="text-center p-t-90">
						<a class="txt1" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	
</div>
	
</template>
<script>
import Firebase from "firebase";
import "./loginStyle/vendor/bootstrap/css/bootstrap.min.css";
import "./loginStyle/fonts/font-awesome-4.7.0/css/font-awesome.min.css"; 
import "./loginStyle/fonts/iconic/css/material-design-iconic-font.min.css";
import "./loginStyle/vendor/animate/animate.css";
import "./loginStyle/vendor/css-hamburgers/hamburgers.min.css";
import "./loginStyle/vendor/animsition/css/animsition.min.css";
import "./loginStyle/vendor/select2/select2.min.css";
import "./loginStyle/vendor/daterangepicker/daterangepicker.css";
import "./loginStyle/css/util.css";
import "./loginStyle/css/main.css";
export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('admin');
          },
          error => {
            alert(error.message);
          }
        );
    }
  }
};
</script>

<style lang="scss">
	
body{
	background-image: url("chambre.png");
	position: absolute;
		z-index: 1;
		height: 100%;
		width: 100%;
		display: block;
		top: 0;
		left: 0;
		background-size: cover;
		background-position: 50%;
		/* -webkit-filter: blur(7px);
		-moz-filter: blur(7px);
		-o-filter: blur(7px);
		-ms-filter: blur(7px);
		filter: blur(7px); */
}
.container-login100  {
	position: relative;
	z-index: 8;
	
}
.container-login100::before {
	background-color: rgba(255, 255, 255, 0);
}
.wrap-login100{
	margin-bottom:100%;
}

</style>





