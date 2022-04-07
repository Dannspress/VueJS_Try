const app = new Vue({
  el: '#main',
  data: {
    title: 'THE HACKATHON',
    names: [
      'Daniel Walter',
      'Gabriel Lima',
      'Gustavo Carvalho',
      'Vinicius Morselli'
    ]
  },
  computed: {
    emoji: function() {
      if(this.names[0] == 'Daniel Walter') {
        return '☕'
      } else {
        return ''
      }
    }
  },
  methods: {
    changeTitle: function() {
      if(this.title == "THE HACKATHON") {
        this.title = "BY UNDEFINED"
      } else {
        this.title = "THE HACKATHON"
      }
    }
  }
})