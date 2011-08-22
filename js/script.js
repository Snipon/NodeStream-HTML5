$(document).ready(function(){
      
  // replace... Unauthenticated call.
  var ns_url = 'node.json';
      
  $.getJSON(ns_url, function(data){

    var items = [];
    $.each(data, function(key, val) {
      items.push('<li>' + key + " => " + val + '</li>');
    });

    $('<ul/>', {
      'class': 'my-new-list',
      html: items.join('')
      }).appendTo('body');
      
  });
});