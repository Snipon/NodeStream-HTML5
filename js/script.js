$(document).ready(function(){
      
  $.getJSON(ns.url, function(data){
    
    console.log(data);
    
    var formatted_data = '';
    formatted_data += '<h2>' + data.title + '</h2>';
    formatted_data += '<div>' + nodeDate(data.created) + '</div>'; // to better format...
    formatted_data += '<p>' + data.field_ns_article_lead.und[0].safe_value + '</p>'; // to better format...
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
      'class': 'news-item',
      'id': 'nid_' + data.nid,
      html: full_data
      }).appendTo('body');
  });
  
  // returns array with two items, first the formatted HTML list of articles for the menu, secondly all the items
/*  var new_data = ns.articles.create();
  
  $('<div/>',{
    'class': 'news-list-item',
    'id': 'nid_new',
    html: new_data.join('')
    }).appendTo('body');   */
});