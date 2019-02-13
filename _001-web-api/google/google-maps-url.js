;

const gmapURL = 'https://www.google.com/maps/search/?api=1&query=';
const log = console.log;

var ph_mm_cities =
`
metro manila ph
manila city ncr ph
quezon city ncr ph
makati city ncr ph
mandaluyong city ncr ph
san juan city ncr ph
pasig city ncr ph
paranaque city ncr ph
pasay city ncr ph
taguig city ncr ph
caloocan city ncr ph
las pinas city ncr ph
malabon city ncr ph
marikina city ncr ph
muntinlupa city ncr ph
navotas city ncr ph
valenzuela city ncr ph
pateros ncr ph'
`;

var ph_regions =
`
metro manila ph
ilocos region ph
cagayan valley region ph
car region ph
central luzon region ph
northern mindanao region ph
armm region ph
region 1 ph
region 2 ph
region 3 ph
region 4 ph
region 5 ph
region 6 ph
region 7 ph
region 8 ph
region 9 ph
region 10 ph
region 11 ph
region 12 ph
region 13 ph
region 14 ph
region 15 ph
region 16 ph
region 17 ph
region 18 ph
`;

var ph_regional_capital =
`
san fernando la union city ph
baguio city ph
tuguegarao city ph
san fernando pampanga city ph
manila city ph
calamba city ph
legazpi city ph
calapan city ph
iloilo city ph
cebu city ph
tacloban city ph
pagadian city ph
cagayan de oro city ph
butuan city ph
cotabato city ph
koronadal city ph
davao city ph
`;

var ph_province =
`
`;

var ph_islands =
`
luzon ph
mindanao ph
palawan ph
cebu ph
`;

ph_mm_cities.split('\n').forEach(function(value) {
  log(gmapURL + encodeURI(value));
});
