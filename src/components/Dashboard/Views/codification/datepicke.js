var Main = {
    data() {
      return {
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')