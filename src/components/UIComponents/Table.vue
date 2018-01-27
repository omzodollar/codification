<template>
  <table class="table">
    <thead>
      <slot name="batiments">
        <th v-for="column in batiments">{{column}}</th>
      </slot>
    </thead>
    <tbody>
    <tr v-for="batiment in data">
      <slot :row="batiment">
        <td v-for="column in batiments" v-if="hasValue(batiment, column)">{{batimentValue(batiment, column)}}</td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
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
              let uri = 'http://localhost:3000/Batiments ';
              this.axios.get(uri).then((response) => {
                  this.batiments= response.data;
              });
            }
        }
    }
</script>
<style>
</style>
