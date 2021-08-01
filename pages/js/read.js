const fs = window.require('fs');
const path = window.require('path');

var app = new Vue({
  el: '#app',
  data: {
    dreams: []
  },
  created() {
    this.readDreams()
  },
  methods: {
    readDreams: function() {
      var dreamFile = fs.readFileSync("./pages/dreams.json")
      var dreams = JSON.parse(dreamFile)
      this.dreams = dreams

    }
  }
})
