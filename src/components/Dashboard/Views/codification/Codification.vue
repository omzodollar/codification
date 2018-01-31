<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <table id="example" class="table table-striped table-bordered" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Numero</th>
                    <th>Validée</th>
                    <th>Date de reservation</th>
                   <th>Parametre <span class="glyphicon glyphicon-cog"></span></th>
                </tr>
        </thead>
        <tfoot>
                <tr v-for="codification in codifications" :key="codification.id">                  
                    <td>{{ codification.id }}</td>
                    <td>{{ codification.valider }}</td>
                    <td>{{ codification.dateDeReservation }}</td>
                    <td>
                    <button type="submit" class="btn btn-info btn-fill float-left" @click="openModal()">
                     Details resident(s)  </button>       
                     <!-- <router-link :to="{name: 'Editcodification', params: { id: codification.id }}" class="btn btn-primary float-right">modifier  </router-link> -->
                    </td>
                   <div id="wrapper" class="container"> 
                 <modal v-if="showModal"> 
                    <h3 slot="header" class="modal-title">
                     <h4 slot="header" class="card-title">info Etudiant</h4>
                    </h3> 
                        <div slot="body">
                          <img src="./esp.png"/>
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
                        </div>                     
            <div slot="footer">
             <button type="button" class="btn btn-primary"   @click="closeModal()"> fermer </button>
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
                codifications: [],
                showModal: false ,


            }
        },

        created: function()
        {
            this.recuperercodifications();
        },
        created: function()
        {
            this.recuperercodifications();
        },
        methods: {
             recuperercodifications() 
            {
              let uri = 'http://localhost:8090/codifications'; 
              this.axios.get(uri).then((response) => {
              this.codifications= response.data;
              });
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
.container{
  width: 400%;
}
</style>
