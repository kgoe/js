function excerpt(str, nwords) {
  var words = str.split(' ');
  words.splice(nwords, words.length-1);
  return words.join(' ') + 
    (words.length !== str.split(' ').length ? '&hellip;' : '');
}