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
                 <table id="example" class="table table-striped table-bordered" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Numéro </th>
                    <th>Nombre couloire </th>
                    <th>Niveau </th>                    
                    <th>Sexe fixé </th>  
                    <th>Parametre </th>                                    
                </tr>
        </thead>
        <tfoot>
                <tr v-for="etage in etages"   :key="etage.id">                  
                    <td>{{ etage.id }}</td>
                    <td>{{ etage.numero }}</td>
                    <td>{{ etage.nombreCouloire }}</td>
                    <td>{{ etage.anneeDetudeFixer }}</td>
                    <td>{{ etage.sexeFixer }}</td>
                     <td><router-link :to="{name: 'Editbatiment', params: { id: etage.id }}" class="btn btn-primary">modifier  </router-link>
                    <button class="btn btn-danger" v-on:click="deleteEtage(etage.id)">supprimer</button></td>
                   
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
                etages: [],
                batiments:[]
            }
        },

        created: function()
        {
            this.recupererEtages();
        },

        methods: {
            recupererEtages()
            {
              let uri = 'http://localhost:8090/etages ';
              this.axios.get(uri).then((response) => {
                  this.etages= response.data;
              });
            },
             recupererBatiments()
            {
              let uri = 'http://localhost:8090/batiments ';
              this.axios.get(uri).then((response) => {
              this.batiments= response.data;
              });
            },
        }
  }
</script>
