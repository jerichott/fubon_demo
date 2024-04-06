$(document).ready(function () {
        // 點擊加按鈕 限制最大上限為30
        $(".js-btn-plus").click(function () {
                var $counter = $(this).prev();
                var count = parseInt($counter.text());
                if (count < 30) {
                        $counter.text(count + 1);
                }
        });

        // 點擊減按鈕 限制最低下限為0
        $(".js-btn-minus").click(function () {
                var $counter = $(this).next();
                var count = parseInt($counter.text());
                if (count > 0) {
                        $counter.text(count - 1);
                }
        });

        // 錨點-捲動到對應區塊
        $("js-anchor").click(function (event) {
                event.preventDefault();
                var target = $(this).attr("href");
                var targetOffset = $(target).offset().top;
                $('html, body').animate({
                        scrollTop: targetOffset
                }, 1000);
        });

        // 點擊手機版選單連結
        $(".mobile-menu-link").click(function () {
                // 關閉選單
                $("#navbarNavDropdown").removeClass("show");
                $(".navbar-toggler").addClass("collapsed").attr("aria-expanded", "false");
                $(".main-kv-navbar").removeClass("show");
        });
});