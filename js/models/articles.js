ns.articles = {
  
  list: 'test',
  items: ['1', '23'],

  create: function(data){
  
    return [this.list, this.items];
  },
  
  build_list: function(){
    /* Create list representation */
    var list_data = '';
    list_data += "<a href='#nid_" + data.nid + "'><h2>" + data.title + '</h2></a>';
    list_data += '<span>' + data.created + '</span>'; // to better format...
    list_data += '<p>' + data.field_ns_article_lead[lang][0].safe_value + '</p>';
  },
  
  build_item: function(){
    /* Construct full node representation */
    var full_data = '';    
    full_data += '<h2>' + data.title + '</h2>';
    full_data += '<span>' + data.created + '</span>'; // to better format...
    full_data += '<p><em>' + data.field_ns_article_kicker[lang][0].safe_value + '</em></p>';
    full_data += '<p>' + data.field_ns_article_body[lang][0].safe_value + '</p>';
  },
}