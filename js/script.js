$(document).ready(function(){
      
  $.getJSON(ns.url, function(data){
      
    var formatted_articles_data = ns.articles.create(data);
    
    $('<div/>',{
      'class': 'news-list-item',
      html: formatted_articles_data
      }).appendTo('#content-teaser-list');

    // Could/should this be moved to the model?
    $('.news-list-item a').bind('click', function(event){      
      $("#shown-article").replaceWith("<div id='shown-article'>" + ns.articles.items[$(this).attr('href')] + '</div>');
      event.preventDefault();
/*    
      Idea:
      - remove active class from whatever object has it,
      - add active class to currently active object
      
      //trigger event('not-active', function(){
        $(.news-list-item a.active).toggle(remove active class...);
//      };
      $(this).toggle(active-class...)
      $(this).bind('not-active', function(){
        remove active css-class...
      });
*/
      $('.list-item.active').removeClass("active");
      $(this).parent().addClass("active");
    });    
  });
});