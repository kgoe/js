var getMaxHeight = function ($elms) {
  var maxHeight = 0;
  $elms.each(function () {
    // In some cases you may want to use outerHeight() instead
    var height = $(this).height();
    if (height > maxHeight) {
    maxHeight = height;
    }
  });
  return maxHeight;
};

$(elements).height( getMaxHeight($(elements)) );