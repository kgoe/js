# 2016_04_25_10_30_AM.log
echo "test" > "$(date +"%Y_%m_%d_%I_%M_%p").log"

echo "$(date +"%Y_%m_%d_%I_%M_%p").log"

echo "$(date +"%Y%m%d%I%M%S")-file.log"

curl www.google.com > "$(date +"%Y%m%d%I%M%S")-curl-google.html"

curl www.gmanetwork.com > "$(date +"%Y%m%d%I%M%S")-curl-gmanetwork.html"

curl www.gmanetwork.com/news > "$(date +"%Y%m%d%I%M%S")-curl-gmanetwork-news.html"

curl www.gmanetwork.com/entertainment > "$(date +"%Y%m%d%I%M%S")-curl-gmanetwork-entertainment.html"