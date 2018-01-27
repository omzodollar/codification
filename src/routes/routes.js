import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import Createbatiment from 'src/components/Dashboard/Views/Batiment/Createbatiment.vue'
import ListBatiment from 'src/components/Dashboard/Views/Batiment/ListBatiment.vue'
import CreateChambre from 'src/components/Dashboard/Views/Chambre/CreateChambre.vue'
import ListChambre from 'src/components/Dashboard/Views/Chambre/ListChambre.vue'
import CreateCouloire from 'src/components/Dashboard/Views/Couloire/CreateCouloire.vue'
import ListCouloire from 'src/components/Dashboard/Views/Couloire/ListCouloire.vue'
import Codification from 'src/components/Dashboard/Views/Codification/Codification.vue'
import InfoEtudiant from 'src/components/Dashboard/Views/Codification/InfoEtudiant.vue'

import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import SignIn from '../components/SignIn.vue';


const routes = [
  {
    path: '/',
    name:'SignIn',
    component: SignIn,
  },

 /*  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  }, */
  {
    path: '/admin',
    name:'admin',
    component: DashboardLayout,

    meta: {
      requiresAuth: true
    }, 
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'Createbatiment',
        name: 'Createbatiment',
        component: Createbatiment
      },
      {
        path: 'ListBatiment',
        name: 'ListBatiment',
        component: ListBatiment
      },
      {
        path: 'CreateChambre',
        name: 'CreateChambre',
        component: CreateChambre
      },
      {
        path: 'ListChambre',
        name: 'ListChambre',
        component: ListChambre
      },
      {
        path: 'CreateCouloire',
        name: 'CreateCouloire',
        component: CreateCouloire
      },
      {
        path: 'ListCouloire',
        name: 'ListCouloire',
        component: ListCouloire
      },
      {
        path: 'Codification',
        name: 'Codification',
        component: Codification
      },
      {
        path: 'InfoEtudiant',
        name: 'InfoEtudiant',
        component: InfoEtudiant
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
