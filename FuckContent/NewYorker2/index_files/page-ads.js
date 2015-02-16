var docCookies = document.cookie.split(';');
var origRefer = null;
for(var i=0;i < docCookies.length;i++) {
	var c = docCookies[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf("original_referrer=") == 0) {
		origRefer = c.substring("original_referrer=".length,c.length);
	}
}
if(origRefer == null){
	document.cookie = "original_referrer=" + document.referrer + "; path=/";
}
// This product includes GeoLite data created by MaxMind, available from http://www.maxmind.com
var pageAdsParams = {"site_prefix":"newyorker","position_list":"AMS_NYR_MAGAZINE_TEXTLINK,AMS_NYR_ARTICLE_BLOG_RIGHTRAIL_A,AMS_NYR_GLOBAL_FOOTER,AMS_NYR_GLOBAL_HEADER,AMS_NYR_GLOBAL_HEADERCALLOUT,AMS_NYR_GLOBAL_NAVBAR,AMS_NYR_GLOBAL_NAVBAR_ROLLOVER,AMS_NYR_GLOBAL_NAVBAR_STICKY,AMS_NYR_GLOBAL_NAVBAR_ROLLOVER_STICKY","subdomain":"mprod","url_name":"unravelling","browser_path":"/magazine/2015/02/23/unravelling","keywords":"","ajax":1,"ad_category_prefix":"magazine","cat_prefixes":",magazine,2015,02,23,unravelling"};
var pageAds = {"AMS_NYR_GLOBAL_HEADERCALLOUT":"<img src=\"https://subscribe.newyorker.com/circulation/shared/ads/Airplane_150x110_HeaderCallout.png\" width=\"150\" height=\"110\" border=\"0\" usemap=\"#HCMap\" />\r\n<map name=\"HCMap\" id=\"HCMap\">\r\n  <area shape=\"rect\" coords=\"0,0,78,110\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2691&campaign_id=24337&creative_id=27754&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling\" target=\"_blank\" alt=\"Subscribe Now\"/>\r\n  <area shape=\"rect\" coords=\"78,5,153,31\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2691&campaign_id=24337&creative_id=27754&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling\" target=\"_blank\" alt=\"Subscribe Now\" />\r\n  <area shape=\"rect\" coords=\"78,31,150,52\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2691&campaign_id=24337&creative_id=27754&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling&target_url_index=1\" target=\"_blank\" alt=\"Renew your Subscription to The New Yorker magazine\" />\r\n  <area shape=\"rect\" coords=\"78,51,152,72\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2691&campaign_id=24337&creative_id=27754&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling&target_url_index=2\" target=\"_blank\" alt=\"Give a Subscription to The New Yorker as a Gift\" />\r\n  <area shape=\"rect\" coords=\"78,72,155,110\" href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2691&campaign_id=24337&creative_id=27754&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling&target_url_index=3\" target=\"_blank\" alt=\"Subscribe to The New Yorker outside the USA\" />\r\n</map>","AMS_NYR_GLOBAL_FOOTER":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=3543&campaign_id=24335&creative_id=27752&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling\"  target=\"_blank\" ><img src=\"https://subscribe.newyorker.com/circulation/shared/ads/Airplane_Desktop_Footer_1020x180.png\">\r\n</a>","AMS_NYR_GLOBAL_NAVBAR_STICKY":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=3837&campaign_id=24340&creative_id=27757&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling\" target=\"_blank\">Subscribe</a>\r\n","AMS_NYR_GLOBAL_NAVBAR_ROLLOVER_STICKY":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=3836&campaign_id=24334&creative_id=27751&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling\"  target=\"_blank\" ><img src=\"https://subscribe.newyorker.com/circulation/shared/ads/ReadSomething_300x200_Desktop_Rollover.png\">\r\n</a>","AMS_NYR_GLOBAL_NAVBAR_ROLLOVER":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2689&campaign_id=24332&creative_id=27749&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling\"  target=\"_blank\" ><img src=\"https://subscribe.newyorker.com/circulation/shared/ads/ReadSomething_300x200_Desktop_Rollover.png\">\r\n</a>","AMS_NYR_GLOBAL_HEADER":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2690&campaign_id=24336&creative_id=27753&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling\"  target=\"_blank\" ><img src=\"https://subscribe.condenet.com/images_covers/cover_newyorker_80.jpg\">\r\n\r\n</a>","AMS_NYR_GLOBAL_NAVBAR":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=2692&campaign_id=24338&creative_id=27755&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling\" target=\"_blank\">Subscribe</a>\r\n","AMS_NYR_MAGAZINE_TEXTLINK":"<script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 0;var init_time = exp.getTime() + 315360000000;\nexp.setTime(exp_time);var value = 24040 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_3549_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=newyorker.com;\"</script>Subscribers have complete access to the archive. Not a subscriber? Get immediate access for just $1 a week by <u><a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=3549&campaign_id=24040&creative_id=27459&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling\"target=\"_blank\" rel=\"nofollow\" title=\"Subscribe to The New Yorker\">subscribing now</a></u>.\r\n\r\n\r\n","AMS_NYR_ARTICLE_BLOG_RIGHTRAIL_A":"<a href=\"http://subscribe.newyorker.com//ams/amsClick?pos_id=3540&campaign_id=24045&creative_id=27464&site_id=796&top_level_section_prefix=magazine&full_url=/magazine/2015/02/23/unravelling\"  target=\"_blank\" ><img src=\"//subscribe.newyorker.com/circulation/shared/ads/Beach_300x600_Desktop_RightRail.png\">\r\n</a>"};

