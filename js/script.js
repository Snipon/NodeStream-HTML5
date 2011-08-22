$(document).ready(function(){
      
  var ns_url = 'node.json';
      
  $.getJSON(ns_url, function(data){
    
    //foreach data.nid...
    // get created, title, 
    // 
    
    var formatted_data = '';
    formatted_data += '<h2>' + data.title + '</h2>';
    formatted_data += '<div>' + nodeDate(data.created) + '</div>'; // to better format...
    formatted_data += '<p>' + data.field_ns_article_lead.und[0].safe_value + '</p>'; // to better format...
    
    console.log(data);

    $('<div/>', {
      'class': 'news-list-item',
      html: formatted_data
      }).appendTo('.content');
      
  });
});