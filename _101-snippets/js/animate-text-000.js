$.fn.animateText = function(delay, klass) {
  
  var text = this.text();
  var letters = text.split('');
  
  return this.each(function(){
    var $this = $(this);
    $this.html(text.replace(/./g, '<span class="letter">$&</span>'));
    $this.find('span.letter').each(function(i, el){
      setTimeout(function(){ $(el).addClass(klass); }, delay * i);
    });
  });
  
};

$('p').animateText(15, 'foo');