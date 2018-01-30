<template>
  <card>
    <h4 slot="header" class="card-title">Création de couloire</h4>
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
                    label="Numero"
                    placeholder="" v-model="couloire.numero">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="texte"
                    label="Departement"
                    placeholder="" v-model="couloire.departementsFixer">
          </fg-input>
        </div>
      </div>
      <div class="row">
          <div class="col-md-4">
          <fg-input type="texte"
                    label="Nombre de chambre"
                    placeholder="" v-model="couloire.nombreChambre">
          </fg-input>
        </div>
       <div class="col-md-3">
          <label for="exampleFormControlSelect1">Niveau</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="couloire.anneeDetudeFixer">
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
        <button type="submit" class="btn btn-info btn-fill float-right" @click="openModal()"  v-on:click.prevent="addcouloire">
valider        </button>

      </div>
        <div id="wrapper" class="container"> 
          <modal v-if="showModal"> 
            <h3 slot="header" class="modal-title">
          Batiment crée avec succées  </h3>
          <!--   
            <div slot="body">
              <img src="./assets/logo.png" />
            </div> -->

            <div slot="footer">
            <button type="button" class="btn btn-outline-info" @click="closeModal()"> Close </button>
            </div>
          </modal>
      </div>  
    </form>
  </card>
</template>



<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import Modal from 'src/Components/Dashboard/Views/Modal'

  export default {
    components: {
      Card
    },
   data(){
        return{
          couloire:{},
          showModal: false 
        }
    },
    methods: {
      addcouloire(){
        let uri = 'http://localhost:8090/couloires';
        this.axios.post(uri, this.couloire).then((response) => {
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
</style>
