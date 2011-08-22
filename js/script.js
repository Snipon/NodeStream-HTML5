/* 
// JQuery AJAX...
$(document).ready(function(){
      
  // replace... Unauthenticated call.
  var ns_url = '/drupal7services/testservice/node/';
  var node_id = 1;
      
  $.getJSON(ns_url + node_id, function(data){
    var items = [];
    $.each(data, function(key, val) {
      items.push('<li>' + key + " => " + val + '</li>');
    });

    $('<ul/>', {
      'class': 'my-new-list',
      html: items.join('')
      }).appendTo('body');
  });
}); */