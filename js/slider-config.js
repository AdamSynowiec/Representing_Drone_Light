$('.slider-responsive').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: false,
    prevArrow: false,
    centerPadding: '120px',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});