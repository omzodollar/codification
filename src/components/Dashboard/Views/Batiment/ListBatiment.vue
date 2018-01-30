<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            
            <router-link to="Createbatiment" >
              	    <button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#create-batiment"> Ajouter un batiment</button><br><br>
            </router-link>     
                 <table id="example" class="table table-striped table-bordered" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Nombre d'etage</th>
                    <th>Genre</th>
                    <th>Année d'étude Reservée </th>
                   <th>Parametre <span class="glyphicon glyphicon-cog"></span></th>
                </tr>
        </thead>
        <tfoot>
                <tr v-for="batiment in batiments" :key="batiment.id">                  
                    <td>{{ batiment.nom }}</td>
                    <td>{{ batiment.nombreEtage }}</td>
                    <td>{{ batiment.sexeFixer }}</td>
                    <td>{{ batiment.anneeDetudeFixer }}</td>
                   <td><button type="submit" class="btn btn-info btn-fill float-left" @click="openModal()">
                    Ajouter chambre  </button>
                      <button type="submit" class="btn btn-info btn-fill float-left" @click="openModal()">
                    Ajouter couloire  </button>    
                    <button type="submit" class="btn btn-info btn-fill float-left" @click="openModal()">
                    Ajouter etages  </button>       
                     <!-- <router-link :to="{name: 'Editbatiment', params: { id: batiment.id }}" class="btn btn-primary float-right">modifier  </router-link> -->
                    <button class="btn btn-danger  float-right" v-on:click="deleteBatiment(batiment.id)">supprimer</button></td>
                   

                   <div id="wrapper" class="container"> 
              <modal v-if="showModal"> 
                <h3 slot="header" class="modal-title">
                <h4 slot="header" class="card-title">Ajout d'etage</h4>

                <!-- <div class="alert alert-success">
                  <strong><i class="glyphicon glyphicon-thumbs-up"></i> Great!  Batiment crée avec succées</strong>
                    </div>  -->
                    <div slot="body">
                      <img src="./esp.png" />
                    </div>
                    <div class="col-md-15">
                    <fg-input type="text"
                              label="Nombre couloire"
                              placeholder=""  v-model="batiment.etages.nombreCouloire" >
                    </fg-input>
                    </div>
                    <div class="col-md-15">
                   <label for="exampleFormControlSelect1">Sexe</label>
                    <select class="form-control" id="exampleFormControlSelect1"  v-model="batiment.etages.sexeFixer">
                      <option>M</option>
                      <option>F</option>
                      <option>I</option>
                    </select>
                    </div>
                    <div class="col-md-15">
                   <label for="exampleFormControlSelect1">Nieau</label>
                    <select class="form-control" id="exampleFormControlSelect1" v-model="batiment.etages.anneeDetudeFixer" >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </select>
                    </div>
                  </h3>             
            <div slot="footer">
             <button type="button" class="btn btn-primary"   @click="closeModal()"> fermer </button>
            <button type="button" class="btn btn-primary"   v-on:click="createEtage(batiment.id)"> Valider </button>
            </div>
          </modal>
      </div>  
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
  import Modal from 'src/Components/Dashboard/Views/Modal'

  export default {
    components: {
      Card,
      Modal

    },
   data(){
            return{
                batiments: [],
                showModal: false 

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
            },
             deleteBatiment(id)
            {
              let uri = 'http://localhost:8090/batiments/'+id;
              this.batiments.splice(id, 1);
              this.axios.delete(uri);
              recupererBatiments();
            },
              createEtage(id)
             {
               let uri = 'http://localhost:8090/batiments/'+id;
              this.batiments.splice(id, 1);
              this.axios.post(uri, this.batiments).then((response) => {
               console.log(response)
              }) 
             },
             
             openModal() { 
            this.showModal = true; 
              } ,
              closeModal() {
                this.showModal = false;
              },
              submitAndClose() {
              
              }
        }
  }
</script>
