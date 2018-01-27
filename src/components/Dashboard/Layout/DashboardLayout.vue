<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/ListBatiment">
      <i class="fa fa-building-o" aria-hidden="true"></i>
        <p>Details des batiments</p>
      </sidebar-link>
      <sidebar-link to="/admin/ListChambre">
        <i class="fa fa-home"></i>
        <p>Details des chambres</p>
      </sidebar-link>
      <sidebar-link to="/admin/ListEtages">
      <i class="fa fa-building-o" aria-hidden="true"></i>
        <p>Details des Etages</p>
      </sidebar-link>
      <sidebar-link to="/admin/ListCouloire">
      <i class="fa fa-building-o" aria-hidden="true"></i>
        <p>Details des couloires</p>
      </sidebar-link>
      <sidebar-link to="/admin/Codification">
        <i class="nc-icon nc-paper-2"></i>
        <p>Etat des codifications</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
<style>
i{
font-weight : bold;
}
</style>
