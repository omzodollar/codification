<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Striped Table with Hover</h4>
              <p class="card-category">Here is a subtitle for this table</p>
            </template>
            <router-link to="Createcodification" >
            </router-link>     
              <table id="example" class="table table-striped table-bordered" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nom  </th>
                    <th>Prénom  </th>
                    <th>Parametre </th>                   
                </tr>
        </thead>
        <tfoot>
                <tr v-for="codification in codifications"   :key="codification.id">                  
                    <td>{{ codification.etudiant.id }}</td>
                    <td>{{ codification.etudiant.nom }}</td>
                    <td>{{ codification.etudiant.prenom }}</td>
                </tr>
                </tfoot>
            </table>  
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  
  export default {
   data(){
            return{
                codifications: []
            }
        },

        created: function()
        {
            this.recuperercodifications();
        },

        methods: {
            recuperercodifications()
            {
              let uri = 'http://localhost:8090/codifications/'+ this.$route.params.id; 
              this.axios.get(uri).then((response) => {
              this.codifications= response.data;
              });
            }
        }
  }
</script>
