// DIY Function
function convertPhpToJs($php){
  $php=str_split($php,1); $js='';
  $str='';                                                                                      // state; either empty or a quote character
  $strs=array('\'','`','"');                                                                    // string quotes; single double and backtick
  $nums=array('0','1','2','3','4','5','6','7','8','9');                                         // numerals
  $wsps=array(chr(9),chr(10),chr(13),chr(32));                                                  // remove whitespace from code
  foreach($php as $n=>$c){
      $p=isset($php[$n-1])?$php[$n-1]:'';
      $f=isset($php[$n+1])?$php[$n+1]:'';
      if($str!='' && $str!=$c){ $js.=$c; continue; }                                        // in a string
      if($str=='' && in_array($c,$strs)){ $str=$c; $js.=$c; continue; }                     // starting a string
      if($str!='' && $str==$c){ $str='';  $js.=$c; continue; }                              // ending a string
      // else, it is inside code
      if($c=='$')continue;                                                                  // filter out perl-style variable names
      if($c==':' && $f==':'){ $js.='.'; continue; }                                         // replace 1st of :: to .
      if($p==':' && $c==':')continue;                                                       // filter out 2nd char of ::
      if($c=='-' && $f=='>'){ $js.='.'; continue; }                                         // replace 1st of -> to .
      if($p=='-' && $c=='>')continue;                                                       // filter out 2nd char of ->
      if($c=='.' && (!in_array($p,$nums) || !in_array($f,$nums))){ $js.='+'; continue; }    // replace string concat op . to +
      if(in_array($c,$wsps))continue;                                                       // filter out whitespace
      $js.=$c;
  }
  return $js;
}
