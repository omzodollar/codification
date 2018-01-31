<template>
  <card>
     <div id="wrapper" class="container"> 
          <modal v-if="showModal"> 
            <h3 slot="header" class="modal-title">
             <div class="alert alert-success">
            <strong><i class="glyphicon glyphicon-thumbs-up"></i> Great!  chambre crée avec succées</strong>
          </div>  </h3>
          <!--   
            <div slot="body">
              <img src="./assets/logo.png" />
            </div> -->
          
            <div slot="footer">
            <button type="button" class="btn btn-outline-info" @click="closeModal()"> Close </button>
            </div>
          </modal>
      </div>  
    <h4 slot="header" class="card-title">Création de chambre</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
        <fg-input type="text"
                  label="Company"
                  :disabled="true"
                  placeholder="Sencodification dashboard"  >
        </fg-input>
      </div>
      </div>
      <div class="row">   
        <div class="col-md-3">
          <fg-input type="text"
                    label="Identifiant batiment"
                    placeholder="" v-model="batiment">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="texte"
                    label="identifiant etage "
                    placeholder="" v-model="idEtage">
          </fg-input>
        </div>           
      </div>
      <div class="row">
         <div class="col-md-3">
          <fg-input type="text"
                    label="Identifiant couloire"
                    placeholder="" v-model="idCouloire">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="texte"
                    label="Nombre chambre "
                    placeholder="" v-model="nombreChambre">
          </fg-input>
        </div>           
        
        <!-- <div class="col-md-3">
          <label for="exampleFormControlSelect1">Couloire</label>
          <select class="form-control" id="exampleFormControlSelect1" >
            <tr v-for="couloire in couloires"   :key="couloire.id">                  
            <option>{{couloire.id}}</option>  
            </tr>       
          </select>

        </div> -->
        
      </div>    
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click="openModal()" v-on:click.prevent="createChambre(idCouloire,nombreChambre)">
         valider  
        </button>
      </div>   
    </form><br><br><br><br><br> 
  </card>
</template>



<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import Modal from 'src/Components/Dashboard/Views/Modal'

  export default {
    components: {
      Card,
      Modal
    },
   data(){
        return{
          chambre:{},
          couloires: [],
          showModal: false 

        }
    },
    methods: {
       createChambre(id,nombre)
             {
                var param= {
                 id:id,
                 nombre:nombre 
               };
               let uri = 'http://localhost:8090/couloires/nombreChambre/';
               this.axios.put(uri, param).then((response) => {
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
    
    },
     created: function()
        {
            this.recupererCouloires();
        },
            recupererCouloires()
            {
              let uri = 'http://localhost:8090/couloires ';
              this.axios.get(uri).then((response) => {
                  this.couloires= response.data;
              });
            }
      }    
}
</script>

<style>
#wrapper {
  margin-top: 60px;
}
.col-md-3{
  height: 10px;
}
</style>



 