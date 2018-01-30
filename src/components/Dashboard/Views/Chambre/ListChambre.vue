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
            <router-link to="CreateChambre" >
              	    <button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#create-item"> Ajouter une chambre</button><br><br>
            </router-link>     
                 <table id="example" class="table table-striped table-bordered" width="100%" cellspacing="0">
            <thead>
                <tr>
                   <th><strong> id </strong></th>
                    <th>Numéro </th>
                    <th>position 1 </th>
                    <th>Nom</th>
                    <th>Prénom</th>                   
                    <th>Parametre <span class="glyphicon glyphicon-cog"></span></th>
                </tr>
        </thead>
        <tfoot>
                <tr v-for="chambre in chambres"   :key="chambre.id">                  
                    <td>{{ chambre.id }}</td>
                    <td>{{ chambre.numero }}</td>
                    <td>{{ chambre.sexeFixer }}</td>
                    <td>{{ chambre.anneeDetudeFixer }}</td>
                    <td>{{ chambre.nombreDePosition }}</td>
                     <td><router-link :to="{name: 'Editchambre', params: { id: chambre.id }}" class="btn btn-primary">modifier  </router-link>
                    <button class="btn btn-danger" v-on:click="deletechambre(chambre.id)">supprimer</button></td>              
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
                chambres: []
            }
        },

        created: function()
        {
            this.recupererchambres();
        },

        methods: {
            recupererchambres()
            {
              let uri = 'http://localhost:8090/chambres ';
              this.axios.get(uri).then((response) => {
                  this.chambres= response.data;
              });
            }
        }
  }
</script>
