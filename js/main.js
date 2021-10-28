function init() {
    adjustMainContentPadding();
    $(window).resize(adjustMainContentPadding);
}

function adjustMainContentPadding() {
    let mobile_nav_height = $("#headerMobile").height();
    let desktop_nav_height = $("#headerDesktop").height();
    let nav_height = Math.max(mobile_nav_height, desktop_nav_height);
    $("#main").css("padding-top", nav_height + "px");
}