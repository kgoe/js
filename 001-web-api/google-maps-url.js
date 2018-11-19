const gmapURL = "https://www.google.com/maps/search/?api=1&query=";
const log = console.log;

var ph_mm_cities = [
  "metro manila ph",
  "manila city ncr ph",
  "quezon city ncr ph",
  "makati city ncr ph",
  "mandaluyong city ncr ph",
  "san juan city ncr ph",
  "pasig city ncr ph",
  "paranaque city ncr ph",
  "pasay city ncr ph",
  "taguig city ncr ph",
  "caloocan city ncr ph",
  "las pinas city ncr ph",
  "malabon city ncr ph",
  "marikina city ncr ph",
  "muntinlupa city ncr ph",
  "navotas city ncr ph",
  "valenzuela city ncr ph",
  "pateros ncr ph"
];

ph_regions = [
  "metro manila ph",
  "ilocos region ph",
  "cagayan valley region ph",
  "northern mindanao region ph",
  "region 1 ph",
  "region 2 ph",
  "region 3 ph",
  "region 4 ph",
  "region 5 ph",
  "region 6 ph",
  "region 7 ph",
  "region 8 ph",
  "region 9 ph",
  "region 10 ph",
  "region 11 ph",
  "region 12 ph",
  "region 13 ph",
  "region 14 ph",
  "region 15 ph",
  "region 16 ph",
];

ph_islands = [
  "luzon ph",
  "mindanao ph",
  "palawan ph",
  "cebu ph",
];

ph_mm_cities.forEach(function(value){
  log(gmapURL + encodeURI(value));
});
