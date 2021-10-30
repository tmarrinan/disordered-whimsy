function init() {
    // initialize Foundation CSS framework
    $(document).foundation();

    // adjust main content spacing
    adjustMainContentPadding();
    $(window).resize(adjustMainContentPadding);
    $(window).scroll(adjustHeaderVisibility);
}

function adjustMainContentPadding() {
    let mobile_nav_height = $("#headerMobile").height();
    let desktop_nav_height = $("#headerDesktop").height();
    let nav_height = Math.max(mobile_nav_height, desktop_nav_height);
    $("#main").css("padding-top", nav_height + "px");
}

function adjustHeaderVisibility() {
    let scroll_top = $(window).scrollTop();
    let mobile_nav_height = $("#headerMobile").height();
    let desktop_nav_height = $("#headerDesktop").height();
    let nav_height = Math.max(mobile_nav_height, desktop_nav_height);
    if (scroll_top > nav_height) {
        let diff = nav_height - scroll_top;
        $("#headerMobile").css("top", diff + "px");
        $("#headerDesktop").css("top", diff + "px");
    }
    else {
        $("#headerMobile").css("top", "0px");
        $("#headerDesktop").css("top", "0px");
    }
}