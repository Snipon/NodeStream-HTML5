$(document).ready(function(){
  console.log('document.ready');
      
  $.getJSON(ns.url, function(data){
  
    var formatted_articles_list = ns.articles.create(data);
    
    $('<div/>',{
      'class': 'news-list-item',
      html: formatted_articles_list
      }).appendTo('#content-teaser-list');

    // Could/should this be moved to the model?
    $('.news-list-item a').bind('click', function(event){      
      $("#shown-article").replaceWith("<div id='shown-article'>" + ns.articles.items[$(this).attr('href')] + '</div>');
      event.preventDefault();
      $('.list-item.active').removeClass("active");
      $(this).parent().addClass("active");
    });        
    
  }); /* /getJSON */
    
});