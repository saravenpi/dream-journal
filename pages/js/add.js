const fs = window.require('fs');
const path = window.require('path');

var app = new Vue({
  el: '#app',
  data: {
    title: "",
    type: "",
    content: ""
  },
  methods: {
    addDream: function() {

      console.log(`${this.title}, ${this.type}, ${this.content}, `);
      var date = new Date().toLocaleString()
      var dream = {
        date: date,
        title: this.title,
        type: this.type,
        content: this.content
      }
      var dreamFile = fs.readFileSync("./pages/dreams.json")
      var dreams = JSON.parse(dreamFile)
      dreams.push(dream)
      var dreamJSON = JSON.stringify(dreams)
      fs.writeFileSync('./pages/dreams.json', dreamJSON)
      console.log('COUCOU');
      this.title = ""
      this.type = ""
      this.content = ""

    }
  }
})
