new Vue({
  el: '#app',
  data: {
    running: true,
    playerLife: 0,
    monsterLife: 100
  },
  computed: {
    hasResult(){
      return this.playerLife == 0 || this.monsterLife == 0
    }
  },
  methods: {

  },
  watch: {
    
  }
})