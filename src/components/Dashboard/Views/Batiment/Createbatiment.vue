
<template>
  <card>
    <div id="wrapper" class="container"> 
          <modal v-if="showModal"> 
            <h3 slot="header" class="modal-title">
             <div class="alert alert-success">
               <strong><i class="glyphicon glyphicon-thumbs-up"></i> Great!  Batiment crée avec succées</strong>
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
    <h4 slot="header" class="card-title">Creation de batiment</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
        <fg-input type="text"
                  label="Esp"
                  :disabled="true"
                  placeholder="Sencodification dashboard"  >
        </fg-input>
      </div>
      </div>
      <div class="row">   
        <div class="col-md-3">
          <fg-input type="text"
                    label="Nom"
                    placeholder="" v-model="batiment.nom">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="texte"
                    label="Nombre etage"
                    placeholder="" v-model="batiment.nombreEtage">
          </fg-input>
        </div>
       
      </div>
      <div class="row">
       <div class="col-md-3">
          <label for="exampleFormControlSelect1">Sexe</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="batiment.sexeFixer">
            <option>M</option>
            <option>F</option>
            <option>I</option>
          </select>
        </div>
        <div class="col-md-3">
          <label for="exampleFormControlSelect1">Niveau</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="batiment.anneeDetudeFixer">
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
      </div>    
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click="openModal()"  v-on:click.prevent="addBatiment">
valider        </button>
      </div>     
    </form>
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
          batiment:{},
          showModal: false 

        }
    },
    methods: {
      addBatiment(){
        let uri = 'http://localhost:8090/batiments';
        this.axios.post(uri, this.batiment).then((response) => {
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



<style>
#wrapper {
  margin-top: 60px;
}
.col-md-3{
  height: 20px;
}
</style>
