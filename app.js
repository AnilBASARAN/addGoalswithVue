const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      inputMe:"",
     };
  },
  methods:{
    addGoal(){
      if(this.inputMe.trim() !== "" ){
        let newOne = this.inputMe
      this.goals.push(newOne);
      this.inputMe = "";
      }
      
    },
        resetGoals(){
     this.goals = [];
      
    }
  }
});

app.mount('#user-goals');
