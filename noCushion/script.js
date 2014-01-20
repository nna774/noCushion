$(function(){
    if (location.hostname === "2ch-c.net"){
        var url = $('#pickup').attr("href");
    }
    if (location.hostname === "news-choice.net"){
        var url = $(".pickuptitle > a").attr("href");
    }
    if (location.hostname === "besttrendnews.net"){
        var url = $(".select > a").attr("href");
    }
    if (location.hostname === "uhouho2ch.com"){
        var url = $(".pickup > a").attr("href");
    }
    if (location.hostname === "newmofu.doorblog.jp"){
        var url = $(".title_link > a").attr("href");
    }

    location.href = url;
});
