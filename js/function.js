function nodeDate(date) {
  var d = new Date(date*1000);
  var y = d.getFullYear();
  var m = d.getMonth();
  var d = d.getDate();
  return (y + '/' + m + '/' + d);
};