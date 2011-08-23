function nodeDate(date) {
  var d = new Date(date*1000);
  var y = d.getFullYear();
  var m = d.getMonth();
  if(m < 10) {
    m = '0' + m;
  }
  var d = d.getDate();
  if(d < 10) {
    d = '0' + d;
  }
  return (y + '/' + m + '/' + d);
};