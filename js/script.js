$(document).ready(function(){
      
  $.getJSON(ns.url, function(data){
      
    var formatted_articles_data = ns.articles.create(data);
    
    $('<div/>',{
      'class': 'news-list-item',
      html: formatted_articles_data[0]
      }).appendTo('#home');
    
    $('<div/>',{
      'class': 'news-item',
      'id': 'nid_' + data.nid,
      html: formatted_articles_data[1].join('')
      }).appendTo('body');
    
    console.log(ns.articles.items);
  });
});