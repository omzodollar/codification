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
            <router-link to="CreateCouloire" >
              	    <button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#create-item"> Ajouter une couloire</button><br><br>
            </router-link>     
                 <table id="example" class="table table-striped table-bordered" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Numéro </th>
                    <th>Batiment </th>
                    <th>Etage </th>                    
                    <th>Sexe fixé </th>
                    <th>Niveau</th>
                    <th>Nombre de chambre</th>
                </tr>
        </thead>
        <tfoot>
                <tr v-for="couloire in couloires"   :key="couloire.id">                  
                    <td>{{ couloire.id }}</td>
                    <td>{{ couloire.numero }}</td>
                     <td>{{ couloire.idConteneur }}</td>
                      <td>{{ couloire.etage_id }}</td>
                    <td>{{ couloire.sexeFixer }}</td>
                    <td>{{ couloire.anneeDetudeFixer }}</td>
                    <td>{{ couloire.nombreChambre }}</td>
                     <td><router-link :to="{name: 'Editbatiment', params: { id: couloire.id }}" class="btn btn-primary">modifier  </router-link>
                    <button class="btn btn-danger" v-on:click="deletecouloire(couloire.id)">supprimer</button></td>
                   
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
                couloires: []
            }
        },

        created: function()
        {
            this.recuperercouloires();
        },

        methods: {
            recuperercouloires()
            {
              let uri = 'http://localhost:8090/couloires ';
              this.axios.get(uri).then((response) => {
                  this.couloires= response.data;
              });
            }
        }
  }
</script>
