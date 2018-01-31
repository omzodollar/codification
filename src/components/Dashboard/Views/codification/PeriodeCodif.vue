<template>


<div class="bootstrap-iso">
     <div id="wrapper" class="container"> 
          <modal v-if="showModal"> 
            <h3 slot="header" class="modal-title">
             <div class="alert alert-success">
            <strong><i class="glyphicon glyphicon-thumbs-up"></i> Great!operation reussie</strong>
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
 <div class="container-fluid">
  <div class="row">
   <div class="col-md-6 col-sm-6 col-xs-12">
       <div class="text-center">
<h2 slot="header" class="card-title">Periode des codifications</h2>
</div>
<br><br>
<br>
<br>

    <form  class="form-horizontal">
        <div class="form-group ">
      <label class="control-label col-sm-2 requiredField" for="date">
        Codification concerné               <span class="asteriskField">
        *
       </span>
      </label>
      <div class="col-sm-10">
       <div class="input-group">
        <div class="input-group-addon">
        </div>
        <input class="form-control" v-model="codif" id="date" name="date" placeholder="" type="text"/>
       </div>
      </div>
     </div>
    <div class="form-group ">
      <label class="control-label col-sm-2 requiredField" for="date">
        Année scolaire
               <span class="asteriskField">
        *
       </span>
      </label>
      <div class="col-sm-10">
       <div class="input-group">
        <div class="input-group-addon">
         <i class="fa fa-calendar">
         </i>
        </div>
        <input class="form-control" v-model="anneeScolaire" id="date" name="date" placeholder="YYYY" type="text"/>
       </div>
      </div>
      <div class="col-sm-10 col-sm-offset-2">
       <input name="_honey" style="display:none" type="text"/>
       <button class="btn btn-primary " name="submit" type="submit" @click="openModal()" v-on:click.prevent="dateDebut(codif,anneeScolaire)">
        valider
       </button>
      </div>
     </div>
     <div class="form-group ">
      <label class="control-label col-sm-2 requiredField" for="date">
       Date d'ouverture'
       <span class="asteriskField">
        *
       </span>
      </label>
      <div class="col-sm-10">
       <div class="input-group">
        <div class="input-group-addon">
         <i class="fa fa-calendar">
         </i>
        </div>
        <input class="form-control" v-model="dateDeDebut" id="date" name="date" placeholder="YYYY/MM//DD" type="text"/>
       </div>
      </div>
      <div class="form-group">
      <div class="col-sm-10 col-sm-offset-2">
       <input name="_honey" style="display:none" type="text"/>
       <button class="btn btn-primary " name="submit" type="submit" @click="openModal()" v-on:click.prevent="dateDebut(codif,dateDeDebut)">
        valider
       </button>
      </div>
     </div>
     </div>
     <div class="form-group ">
      <label class="control-label col-sm-2 requiredField" for="date">
       Date de cloture 
       <span class="asteriskField">
        *
       </span>
      </label>
      <div class="col-sm-10">
       <div class="input-group">
        <div class="input-group-addon">
         <i class="fa fa-calendar">
         </i>
        </div>
        <input class="form-control" v-model="dateDeFin" id="date" name="date" placeholder="YYYY/MM//DD" type="text"/>
       </div>
      </div>
     </div>
     <div class="form-group">
      <div class="col-sm-10 col-sm-offset-2">
       <input name="_honey" style="display:none" type="text"/>
       <button class="btn btn-primary " @click="openModal()" name="submit" type="submit" v-on:click.prevent="dateFin(codif,dateDeFin)">
        valider
       </button>
      </div>
     </div>
    </form>
   </div>
  </div>
 </div>
</div>

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
       dateDebut(id,startDate)
             {
                var param= {
                 id:id,
                 startDate:startDate 
               };
               let uri = 'http://localhost:8090/codificationSpecs/dateDebut';
               this.axios.put(uri, param).then((response) => {
               console.log(response)
              }) 
             },
              annee(id,annee)
             {
                var param= {
                 id:id,
                 annee:annee 
               };
               let uri = 'http://localhost:8090/codificationSpecs/anneeScolaire';
               this.axios.put(uri, param).then((response) => {
               console.log(response)
              }) 
             },
             dateFin(id,endDate)
             {
                var param= {
                 id:id,
                 endDate:endDate 
               };
               let uri = 'http://localhost:8090/codificationSpecs/dateFin';
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
