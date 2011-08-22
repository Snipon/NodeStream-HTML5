$(document).ready(function(){
      
  var ns_url = 'node.json';
      
  $.getJSON(ns_url, function(data){
    
    console.log(data);
    
    var lang = data.language;
    
    /* Create list representation */
    var list_data = '';
    list_data += "<a href='#nid_" + data.nid + "'><h2>" + data.title + '</h2></a>';
    list_data += '<span>' + data.created + '</span>'; // to better format...
    list_data += '<p>' + data.field_ns_article_lead[lang][0].safe_value + '</p>';

    $('<div/>',{
      'class': 'news-list-item',
      html: list_data
      }).appendTo('#home');

    /* Construct full node representation */
    var full_data = '';    
    full_data += '<h2>' + data.title + '</h2>';
    full_data += '<span>' + data.created + '</span>'; // to better format...
    full_data += '<p><em>' + data.field_ns_article_kicker[lang][0].safe_value + '</em></p>';
    full_data += '<p>' + data.field_ns_article_body[lang][0].safe_value + '</p>';
    
    $('<div/>',{
      'class': 'news-list-item',
      'id': 'nid_' + data.nid,
      html: full_data
      }).appendTo('body');
    
  });
});