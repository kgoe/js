document.body.style.marginTop = 0;
document.body.style.marginBottom = 0;

var parallaxMod = false;

var ParallaxMod = function(params) {
  parallaxMod = this;

  // document.body.style.marginTop = 0;
  // document.body.style.marginBottom = 0;

  this.initialLoad = 1;

  var windowFrame = window.frameElement;
  this.frame = windowFrame;
  this.params = params;

  // href
  // float_link
  if (typeof params.link !== 'undefined') {
    this.link = params.link;
  } else {
    this.link = 'http://www.tgmanetwork.com/';
  }

  // check getBoundingClientRect support
  var windowFrameRect = windowFrame.getBoundingClientRect();
  this.initialMaxPct = 0.60;

  // scenario 1 : ad is loaded above 50% of screen display
  // if ( this.initialMaxPct > window.frameElement.getBoundingClientRect().top / window.parent.innerHeight ) {
  if (this.initialMaxPct > window.frameElement.offsetTop / window.parent.innerHeight) {
    this.initialMaxPct = window.frameElement.getBoundingClientRect().top / window.parent.innerHeight;
  }

  // scenario 2 : ad is loaded during scroll above 50% of screen display
  if (this.initialMaxPct < 0) {
    this.initialMaxPct = 0.6;
  }

  // scenario 3 : configured to start from bottom
  if (params && typeof params.fromBottom !== 'undefined' && params.fromBottom) {
    this.initialMaxPct = 0.96;
  }

  // windowFrame.style.width = params.width + "px";
  windowFrame.style.width = '100%';
  windowFrame.parentElement.parentElement.style.width = '100%';
  windowFrame.parentElement.parentElement.style.margin = '0px !important';
  windowFrame.parentElement.parentElement.style.marginLeft = '0px !important';
  windowFrame.style.height = params.viewHeight + 'px';

  var parentWidth = window.parent.innerWidth;


  // var body = document.createElement('body');

  var html = '<a id="ad-link" href="' + this.link + '" onclick="parallaxMod.clkListener( event );">';
  html += '<div id="ad-image" style="height: ' + params.height + 'px;text-align:center;">';

  if (parentWidth <= 320) {
    html += '<img src="' + params.creativeImg + '" style="width:290px;max-width:290px;" />';
  } else {
    html += '<img src="' + params.creativeImg + '" />';
  }


  // html += '<img src="https://tpc.googlesyndication.com/simgad/16535384497001047862" />';
  html += '</a>';
  html += '</div>';

  document.body.innerHTML = html;
  document.body.style.margin = '0';
  document.body.style.padding = '0';

  var thisElement = document.getElementById('ad-image');
  var thisViewHeight = params.viewHeight;
  // var thisHeight = thisElement.clientHeight;
  var thisHeight = params.height;

  if (typeof window.frameElement !== 'undefined' && window.frameElement) {
    var elemRect = window.frameElement.parentElement.getBoundingClientRect();
  }

  thisElement.style.marginTop = thisViewHeight - thisHeight;
  var ad = document.getElementById('ad-image');

  if (typeof window.frameElement !== 'undefined' && window.frameElement) {
    var windowContainer = window.frameElement.parentElement;
  }

  var testMid = function() {
    // check pageYOffset support
    var parentTop = parent.pageYOffset;
    var parentHeight = parentTop + parent.innerHeight;
    var elTop = windowContainer.offsetTop;
    var elHeight = elTop + windowContainer.offsetHeight;
    return ((elHeight <= parentHeight) && (elTop >= parentTop));
  };

  this.clkListener = function clkListener(event) {
    var self = parallaxMod;
    // console.log('clicked',evt);

    /*
        if (parallaxMod.initialLoad === 1) {
            //force mrec resize
            parallaxMod.initialLoad = 2;
            //window.frameElement.style.height = parallaxMod.params.height;
            parallaxMod.frame.style.transition = "all 0.5s";
            parallaxMod.frame.style.height = parallaxMod.params.height + "px";
            thisElement.style.marginTop = "0px";
            event.preventDefault();
            event.stopPropagation();
        } else {
         */
    // proceed to link
    // console.log('loading link ',evt.target);
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    // window.open('http://www.google.com','_parent');
    var thisUrl = document.getElementById('ad-link').href;
    window.open(thisUrl, '_blank');
    // if ( typeof event.path[1] !== 'undefined' && typeof event.path[1].href !== 'undefined' ) {
    // window.open(thisUrl,'_blank');
    // }
    // return false;
    /*
        }
         */
  };

  var sListener = function(evt) {
    var self = parallaxMod;
    var windowFrameRect = windowFrame.getBoundingClientRect();
    var parentHeight = window.parent.innerHeight;
    var parentWidth = window.parent.innerWidth;
    var mid = testMid();
    // var posYtop = parent.scrollY;
    // var posYbot = parent.scrollY + parent.innerHeight;
    var adHeightOffset = 1;
    var adHeightPct = 1;

    var rectTop = windowFrameRect.top;
    var rectBot = windowFrameRect.bottom;

    var rectTopPct = rectTop / parentHeight;
    var rectBotPct = rectBot / parentHeight;

    var headerTopPx = 100;

    if (params && typeof params.headerTopPx !== 'undefined' && params.headerTopPx) {
      headerTopPx = params.headerTopPx;
    }

    var headerTopPct = headerTopPx / parentHeight;

    var factorAdjust = 1;

    var itemPct = rectBotPct - rectTopPct;

    var maxPct = self.initialMaxPct;

    var minPct = 0;
    var adHeightPct = 0;

    var delta = maxPct - headerTopPct;
    // var deltaPct = delta / 100;

    adHeightPct = 0;

    adHeightPct = 1 - ((rectTopPct) / delta) + (headerTopPct / delta);

    // less than top
    if (rectTopPct < (minPct)) {
      adHeightPct = 1;
    }

    // more than bottom
    if (maxPct < rectTopPct) {
      adHeightPct = 0;
    }

    // below zero
    if (adHeightPct < 0 + headerTopPct) {
      adHeightPct = 0;
    }

    // above 1
    if (adHeightPct > 1) {
      adHeightPct = 1;
    }

    // below header level
    if (rectTopPct <= headerTopPct) {
      marginTop = 0;
    } else {
      var deltaPct = maxPct - headerTopPct - itemPct;
      var marginCompute = (rectTopPct - headerTopPct - (1 - maxPct)) * (params.height - thisViewHeight) / (maxPct - itemPct - headerTopPct);
      marginTop = -marginCompute;
      // console.log( marginCompute );
    }

    // above bottom level
    if (rectBotPct > maxPct) {
      marginTop = -(params.height - thisViewHeight);
    }

    // var marginTop = ( ( 1 - adHeightPct + itemPct ) * factorAdjust) * ( -thisHeight + thisViewHeight );

    // console.log(marginTop,adHeightPct,rectTopPct,windowFrame,thisHeight);
    // console.log(adHeightPct,itemPct,headerTopPct);
    // console.log(rectTopPct,rectBotPct,headerTopPct,marginTop);

    if (parallaxMod.initialLoad === 1) {
      thisElement.style.marginTop = marginTop;
    } else {
      thisElement.style.marginTop = '0px';
    }
  };

  parallaxMod.frame.style.transition = 'all 0.5s';
  parent.addEventListener('scroll', sListener, false);
};
