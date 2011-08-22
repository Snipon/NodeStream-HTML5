$(document).ready(function(){
      
  $.getJSON(ns.url, function(data){
      
    var formatted_articles_data = ns.articles.create(data);
    
    $('<div/>',{
      'class': 'news-list-item',
      html: formatted_articles_data[0]
      }).appendTo('#content-teaser-list');

    $('.news-list-item a').bind('click', function(event){      
      $("#shown-article").replaceWith("<div id='shown-article'>" + ns.articles.items[$(this).attr('href')] + '</div>');
      event.preventDefault();     
    });
    
  });
});