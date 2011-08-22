$(document).ready(function(){
      
  var ns_url = 'node.json';
      
  $.getJSON(ns_url, function(data){
    
    var formatted_data = '';
    formatted_data += '<h2>' + data.title + '</h2>';
//    formatted_data += '<div>' + data.body + '</div>';

    $('<div/>', {
      'class': 'news-list',
      html: formatted_data
      }).appendTo('.content');
      
  });
});