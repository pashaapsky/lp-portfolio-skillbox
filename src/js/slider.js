$(document).ready(function () {

    //инициализация слайдера
    $('.works__list').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 600,
        easing: 'ease',
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]});

   const slickArrowElem = $('.slick-arrow');   //стрелки слайдера

    //наведение на стрелки слайдера
    $(slickArrowElem).hover(function (event) {
            const elem = event.target;
            $(elem).animate({
                width : "+=5px",
                height : "+=5px",
                top : "-=5px"
            })
        },
        function (event) {
            const elem = event.target;
            $(elem).animate({
                width : "-=5px",
                height : "-=5px",
                top : "+=5px"
            })
        }
    )
});