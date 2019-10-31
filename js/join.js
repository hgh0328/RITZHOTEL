$(document).ready(function () {
    $(".Base2 > .FirstLine > ul > .Line-HighSpace > .fa-angle-down").click(function () {
        $(".InsideText").slideToggle();
        $(".Base2 > .FirstLine > ul > .Line-HighSpace >.fa-angle-down").toggleClass("on");
    });
    $(".Base2 > .FirstLine > ul > .Line-HighSpace2 > .fa-angle-down").click(function () {
        $(".InsideText2").slideToggle();
        $(".Base2 > .FirstLine > ul > .Line-HighSpace2 >.fa-angle-down").toggleClass("on");
    });
    $(".Base2 > .SecondLine > ul > .Line-HighSpace > .fa-angle-down").click(function () {
        $(".Inside-Info").slideToggle();
        $(".Base2 > .SecondLine > ul > .Line-HighSpace > .fa-angle-down").toggleClass("on");
    });
    $(".Base2 > .SecondLine > ul > .Line-HighSpace2 > .fa-angle-down").click(function () {
        $(".Inside-Info2").slideToggle();
        $(".Base2 > .SecondLine > ul > .Line-HighSpace2 > .fa-angle-down").toggleClass("on");
    });
    $(".Base2 > .ThirdLine > ul > .Line-HighSpace > .fa-angle-down").click(function () {
        $(".Inside-Info3").slideToggle();
        $(".Base2 > .ThirdLine > ul > .Line-HighSpace > .fa-angle-down").toggleClass("on");
    });
    
    $(".Base .btn").click(function () {
        $(".Base").hide();
        $(".Base2").show();
        $(".Base3").hide();
    });
    $(".Base2 .ClearBtn").click(function () {
        $(".Base").hide();
        $(".Base2").hide();
        $(".Base3").show();
    });

});
