ns.articles = {
  
  list: '',
  items: [],

  /* Constructor */
  create: function(data){
    
    this.list = ns.articles._buildList(data);
    
    $.each(data, function() {
      ns.articles.items.push(ns.articles._buildItem(this));
    });
    
    return [this.list, this.items];
  },


  /* Create list representation */  
  _buildList: function(data){

    articlesList = '';
    
    $.each(data, function() {
      var lang = this.language;
      
      articlesList += "<div class='list-item'>"; //replace with JQuery for nicer looks
      articlesList += "<a href='#nid_" + this.nid + "'><h2>" + this.title + '</h2></a>';
      articlesList += '<span>' + this.created + '</span>'; // to better format...
      articlesList += "</div>";
    });
    
    return articlesList;
  },


  /* Construct full node representation */  
  _buildItem: function(data){
    console.log(data);

    articleNode = '';
    
    articleNode += "<div id='" + data.nid + "'class='article-item'>";
    articleNode += "<h2>" + data.title + "</h2>";
    articleNode += "<span>" + data.created + "</span>";
    articleNode += "</div>";
    
    return articleNode;
  
  },
}