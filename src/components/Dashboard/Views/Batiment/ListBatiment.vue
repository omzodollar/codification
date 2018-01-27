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
            <router-link to="Createbatiment" >
              	    <button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#create-batiment"> Ajouter un batiment</button><br><br>
            </router-link>     
                 <table id="example" class="table table-striped table-bordered" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nom</th>
                    <th>Nombre d'etage</th>
                    <th>Genre</th>
                    <th>Année d'étude Reservée </th>
                    <th>Parametre<span class="glyphicon glyphicon-cog"></span></th>

                </tr>
        </thead>
        <tfoot>
                <tr v-for="batiment in batiments"   :key="batiment.id">                  
                    <td>{{ batiment.id }}</td>
                    <td>{{ batiment.nom }}</td>
                    <td>{{ batiment.nombreEtage }}</td>
                    <td>{{ batiment.sexeFixer }}</td>
                    <td>{{ batiment.anneeDetudeFixer }}</td>
                    <td><router-link :to="{name: 'Editbatiment', params: { id: batiment.id }}" class="btn btn-primary">modifier  </router-link>
                    <button class="btn btn-danger" v-on:click="deletebatiment(batiment.id)">supprimer</button></td>
                   
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
                batiments: []
            }
        },

        created: function()
        {
            this.recupererBatiments();
        },

        methods: {
            recupererBatiments()
            {
              let uri = 'http://localhost:8090/batiments ';
              this.axios.get(uri).then((response) => {
                  this.batiments= response.data;
              });
            }
        }
  }
</script>
