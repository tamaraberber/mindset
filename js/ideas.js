var topic = window.location.hash.slice(1)
var things = JSON.parse(window.localStorage.getItem(topic)) || []

var htmlThings = ''
things.forEach(function(thing) {
  htmlThings += '<li>' + thing + '</li>'
})
$('#ideas').html(htmlThings)
