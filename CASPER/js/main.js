




const saveChecked = JSON.parse(localStorage.getItem("checked"));
if (saveChecked) {
    $("body").removeClass("popupOn");
} else {
    $("body").addClass("popupOn");
}


const $noticeModal = $(".layerPop .noticeModal");
const $noticeChk = $noticeModal.find("#chk");

let isChecked = false;

// 메인 팝업 체크 이벤트 발생시 로컬스토리지에 true/false 전달 기능
$noticeChk.on("change", function() {

    // $(this).prop("checked") <- 체크되어있으면 true 아니면 false
    if ( $(this).prop("checked") ) { // 체크가 참
        isChecked = true;
    } else {  // 체크가 거짓
        isChecked = false;
    }

    localStorage.setItem("checked", isChecked);
});

$noticeModal.find(".close").on("click", function() {
    $("body").removeClass("popupOn");
});

$noticeModal.find(".slider").slick({
    arrows: true,
    prevArrow: $noticeModal.find(".prevArrow"),
    nextArrow: $noticeModal.find(".nextArrow"),

    dots: true,
    appendDots: $noticeModal.find(".dots"),
    dotsClass: "customDots"
});








$(".best #slider").slick({
    centerMode: true,
    centerPadding: "23%",
    arrows: true,
    prevArrow: $(".best").find(".prevArrow"),
    nextArrow: $(".best").find(".nextArrow"),

    dots: true,
    appendDots: $(".best").find(".dotsArea"),
    dotsClass: "customDots",

    responsive: [
        {
            breakpoint: 768,
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: false,
                slidesToShow: 1,
            }
        }
    ]
});

$(".event #eventSlider").slick({
    dots: true,
    appendDots: $(".event").find(".dotsArea"),
    dotsClass: "customDots",

    arrows: true,
    prevArrow: $(".event").find(".prevArrow"),
    nextArrow: $(".event").find(".nextArrow"),
});


function showFloatingMenu() {
    const floatingTop = $(".floatingTop");
    const floatingBtm = $(".floatingBtm");
    const $header = $(".header");

    let scrollTop = 0;

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();
        $(".pos").text( scrollTop );

        if ( scrollTop > 200 ) {
            $header.addClass("on");
        } else {
            $header.removeClass("on");
        }

        // if ( scrollTop > 1000 ) {
        //     floatingTop.addClass("on");
        //     floatingBtm.addClass("on");
        // } else {
        //     floatingTop.removeClass("on");
        //     floatingBtm.removeClass("on");
        // }
    });
}
showFloatingMenu();

