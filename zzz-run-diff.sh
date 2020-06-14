today_t00=$(date +"%Y-%m-%d")
today_t01=$(date +"%FT%T" )
today_t02=$(date +"%FT%H%M%S" )
today_t03=$(date +"%FT%H%M" )
today_t04=$(date +"%Y%m%dT%H%M" )
today_t04=$(date +"%Y%m%dT%H%M%S" )
git diff master > "${today_t04}-diff-master.log"