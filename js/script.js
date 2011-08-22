$(document).ready(function(){
      
  var ns_url = 'node.json';
      
  $.getJSON(ns_url, function(data){
    
    //foreach data.nid...
    // get created, title, 

    console.log(data);
    
    var list_data = '';
    list_data += "<a href='#nid_" + data.nid + "'><h2>" + data.title + '</h2></a>';
    list_data += '<span>' + data.created + '</span>'; // to better format...
    list_data += '<p>' + data.field_ns_article_lead.und[0].safe_value + '</p>';

    $('<div/>',{
      'class': 'news-list-item',
      html: list_data
      }).appendTo('#home');

    var full_data = '';    
    full_data += '<h2>' + data.title + '</h2>';
    full_data += '<span>' + data.created + '</span>'; // to better format...
    full_data += '<p>' + data.field_ns_article_body.und[0].safe_value + '</p>';
    
    $('<div/>',{
      'class': 'news-list-item',
      'id': 'nid_' + data.nid,
      html: full_data
      }).appendTo('body');
    
  });
});