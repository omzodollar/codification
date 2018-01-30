<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ecole Supérieur Poytechnique</a>
       <div class="img">
                <img src="./esp.png" alt="">
            </div>
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">   
          <li class="nav-item">
            <a href="#" v-on:click="signOut" v-if="user" class="nav-link">
              Se deconnecter
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import DropDown from 'src/components/UIComponents/Dropdown.vue'
  import Firebase from "firebase";
  export default {
    components: {
      DropDown
    },
    computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    signOut: function() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.replace('/');
        });
    }
  }
  }
</script>
<style>
  img {
	width: 50px;
	height: 50px;
}
</style>
