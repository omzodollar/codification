<template>
  <card>
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
                    label="Numero de chambre"
                    placeholder="" v-model="chambre.numero">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="texte"
                    label="Sexe fixé"
                    placeholder="" v-model="chambre.sexeFixer">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="texte"
                    label="Nombre de position "
                    placeholder="" v-model="chambre.nombreDePosition">
          </fg-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label for="exampleFormControlSelect1">Couloire</label>
          <select class="form-control" id="exampleFormControlSelect1" >
            <tr v-for="couloire in couloires"   :key="couloire.id">                  
            <option>{{couloire.id}}</option>  
            </tr>
        
          </select>

        </div>
         <div class="col-md-3">
          <label for="exampleFormControlSelect1">Niveau</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="chambre.anneeDetudeFixer">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>

          </select>
        </div>
      </div>    
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" v-on:click.prevent="addchambre">
valider        </button>

      </div>
    
    </form>
  </card>
</template>



<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    },
   data(){
        return{
          chambre:{},
          couloires: []

        }
    },
    methods: {
      addchambre(){
        let uri = 'http://localhost:8090/chambres';
        this.axios.post(uri, this.chambre).then((response) => {
        console.log(response)
        })

      }
    },
     created: function()
        {
            this.recupererCouloires();
        },

        methods: {
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
