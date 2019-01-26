;

var emmet = require('emmet');
var abbr = {};

// basic
abbr.e001 = '#page>div.logo+ul#navigation>li*5>a{Item $}';

// child
abbr.e002 = 'div>ul>li';

// sibling
abbr.e003 = 'div+p+bq';

// climb up
abbr.e004 = 'div+div>p>span+em';

// climb up ^
abbr.e005 = 'div+div>p>span+em^bq';

// climb up ^^^
abbr.e006 = 'div+div>p>span+em^^^bq';

// multiplication
abbr.e007 = 'ul>li*5';

// grouping
abbr.e008 = 'div>(header>ul>li*2>a)+footer>p';

// grouping
abbr.e009 = '(div>dl>(dt+dd)*3)+footer>p';

// id and class
abbr.e010 = 'div#header+div.page+div#footer.class1.class2.class3';

// custom attributes
abbr.e011 = 'td[title="Hello world!" colspan=3]';

// item numbering
abbr.e012 = 'ul>li.item$*5';

// item numbering padded zeros
abbr.e013 = 'ul>li.item$$$*5';

// changing numbering base and direction
abbr.e014 = 'ul>li.item$@-*5';

// change base value
abbr.e015 = 'ul>li.item$@3*5';

// change base and direction
abbr.e016 = 'ul>li.item$@-3*5';

// text
abbr.e017 = 'a{Click me}';

// text
abbr.e018 = 'a{click}+b{here}';

// text
abbr.e019 = 'a>{click}+b{here}';

// complex text
abbr.e020 = 'p>{Click }+a{here}+{ to continue}';

// complex text
abbr.e021 = 'p{Click }+a{here}+{ to continue}';

// correct
abbr.e022 = '(header>ul.nav>li*5)+footer';

// no spacing !!!
abbr.e023 = '(header > ul.nav > li*5) + footer';

console.log(emmet.expandAbbreviation(abbr.e022));
