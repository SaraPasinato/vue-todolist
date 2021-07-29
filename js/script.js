/*
 * Descrizione:
     Rifare l'esercizio della to do list come fatto assieme in classe:
      1. stampare in pagina un item per ogni elemento contenuto in un array
      2. ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
      3. predisporre un input per aggiungere un nuovo item alla lista: ciccando su un pulsante, il testo digitato viene aggiunto alla lista.
    ?BONUS 1: Fare un controllo di validazione per non aggiungere degli item vuoti.
    ?BONUS 2: Dedicarsi alla parte grafica aggiungendo un tocco personale e gestendo anche il mobile.
 */

Vue.config.devtools=true;



var app = new Vue({
    el: '#app',
    data: {
     todos:[
      "fare la spesa",
      "pagare le bollette",
      "pulire la macchina ",
      "chiamare l'idraulico"
     ],
    },
    methods:{
      removeTask(i){
        this.todos.splice(i,1);
      }
    }
  })