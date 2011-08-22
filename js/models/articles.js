ns.articles = {
  
  list: '',
  items: [],

  /* Constructor */
  create: function(data){
    
    this.list = ns.articles._buildList(data);
    
    $.each(data, function() {
      ns.articles.items[this.nid] = ns.articles._buildItem(this);
    });
    
    return [this.list, this.items];
  },


  /* Create list representation */  
  _buildList: function(data){

    articlesList = '';
    
    $.each(data, function() {
      var lang = this.language;
      
      articlesList += "<div class='list-item'>"; //replace with JQuery for nicer looks
//      articlesList += "<a href='#" + this.nid + "'><h2>" + this.title + '</h2></a>';
      articlesList += "<a href='" + this.nid + "'><h2 class='title'>" + this.title + '</h2></a>';
      articlesList += "<span class='created'>" + nodeDate(this.created) + '</span>'; // to better format...
      articlesList += "</div>";
    });
    
    return articlesList;
  },


  /* Construct full node representation */  
  _buildItem: function(data){

    articleNode = '';
    
    articleNode += "<div id='" + data.nid + "'class='article-item'>";
    articleNode += "<h2 class='title'>" + data.title + "</h2>";
    articleNode += "<span class='created'>" + nodeDate(data.created) + "</span>";
    articleNode += "</div>";
    
    return articleNode;
  
  },
}