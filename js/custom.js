$(function () {
	$(".trigger").click(function () {
		$(this).toggleClass("active");
		$(".gnb").toggleClass("active");
	});
	$("section, .menu a").click(function () {
		$(".gnb").removeClass("active");
		$(".trigger").removeClass("active");
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
			$("header").addClass("active");
			$(".gototop").addClass("active");
		} else {
			$("header").removeClass("active");
			$(".gototop").removeClass("active");
		}
	});

	// slick.js
	$(".region-slider").slick({
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 2,
	});

	// char slick.js
	$(".char-photo").slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	// 메인페이지
	$(".home-inner .title").hover(function () {
		$(".home-inner").toggleClass("active");
	});

	$(".about-slide").slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",
	});

	// 강아지 고양이 선택
	$(".choice-dog, .choice-cat").hover(function () {
		$(this).addClass("active")
		$(this).siblings().removeClass("active")
	});
});
