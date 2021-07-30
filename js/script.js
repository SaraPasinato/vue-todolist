/*
 * Descrizione:
    * Rifare l'esercizio della to do list come fatto assieme in classe:
      1. stampare in pagina un item per ogni elemento contenuto in un array
      2. ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
      3. predisporre un input per aggiungere un nuovo item alla lista: ciccando su un pulsante, 
        il testo digitato viene aggiunto alla lista.
   * ?BONUS 1: Fare un controllo di validazione per non aggiungere degli item vuoti.
    ?BONUS 2: Dedicarsi alla parte grafica aggiungendo un tocco personale e gestendo anche il mobile.
 */

Vue.config.devtools=true;



var app = new Vue({
    el: '#app',
    data: {
     currentTask:"",
     currentSearch:"",
     todos:[
      {text:"fare la spesa",done:false},
      {text:"pagare le bollette",done:false},
      {text:"pulire la macchina ",done:false},
      {text:"chiamare l'idraulico",done:false},
     ],
    },
    methods:{
      removeTask(i){
        this.todos.splice(i,1);
      },
      addTaskTail(){
        if (this.currentTask.trim()!= "") this.todos.push({text:this.currentTask,done:false});
        this.currentTask="";
      },
      addTaskHead(){
        if (this.currentTask.trim()!= "") this.todos.unshift({text:this.currentTask,done:false});
        this.currentTask="";
      },
      showTask(text){
        const filter= this.currentSearch.trim().toLowerCase();
        text=text.toLowerCase();
        return text.includes(filter);
      },
      toggleDone(i){
        this.todos=this.todos.map((todo,todoIndex)=>{
          if(todoIndex=== i){
            todo.done=!todo.done;
          }
          return todo;
        });
      },
      isDone(i){
       return this.todos[i].done;
      },
    },
  });