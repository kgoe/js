;

const emmet = require('emmet');

const child = '';
const doc = {};
doc.toc =
`
https://docs.emmet.io/

abbreviations
- syntaxes
- element types
- implicit tag names
- lorem ipsun generator

css abbreviations
- vendor prefixes
- gradients
- fuzzy search

actions
- expand abbreviations
- balance
- go to matching pair
- wrap with abbreviation
- go to edit point
- select item
- toggle comment
- split / join tag
- remove tag
- merge lines
- update image size
- evaluate math expression
- increment / decrement number
- reflect css value
- encode / decode image to data:URL

filters
- yandex BEM/OOCSS

customization
- snippets.json
- preferences.json
- syntaxProfiles.json

cheat sheet
`;

doc.snippets_json =
`
{
  "html": {
      "abbreviations": {
          "a": "<a href=\"\">",
          "link": "<link rel=\"stylesheet\" href=\"\" />",
          "bq": "blockquote",
          "ol+": "ol>li"
          ...
      },
      "snippets": {
          "cc:ie6": "<!--[if lte IE 6]>\n\t${child}|\n<![endif]-->"
          ...
      }
  },

  "css": {
      ...
  }
}

// link[rel=prefetch title="Hello world"]
// link>xsl:apply-templates
`;

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

// list + body
abbr.e024 = 'ul>li*3>{This is list item $}';

// list
abbr.e025 = 'ul>.list-item-$*3';

// list
abbr.e026 = 'ul>.list-item-$$$*3';

// implicit
// ul or ol >>> li
// table or tbody or thead or tfood >>> tr
// tr >>> td
// select or optgroup >>> option
// .wrap>.content = div.wrap>div.content
// em>.info = em>span.info
// ul>.item*3 = ul>li.item*3
// table>#row$*4>[colspan=2] = table>tr#row$*4>td[colspan=2]

// lorem ipsun generator
abbr.e024 = 'lorem';
abbr.e025 = 'p*4>lorem';
abbr.e026 = 'ul.generic-list>lorem10.item*4';

// css properties ????
abbr.c001 = 'm10';
abbr.c002 = 'p!+m10e!';

console.log(emmet.expandAbbreviation(abbr.c001));
