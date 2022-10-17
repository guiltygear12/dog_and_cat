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
	$(".choice li").hover(function () {
		$(this).addClass("active")
		$(this).siblings().removeClass("active")
	});

	// 강아지 품종 슬라이드
	$(".breed-img").slick({
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$(".breed-thumb-slide").slick({
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
	});

	$(".tab").click(function(){
		if($(this).hasClass("tab1")){
			$(".faq-1").addClass("active")
			$(".faq-1").siblings().removeClass("active")
		}
		if($(this).hasClass("tab2")){
			$(".faq-2").addClass("active")
			$(".faq-2").siblings().removeClass("active")
		}
		if($(this).hasClass("tab3")){
			$(".faq-3").addClass("active")
			$(".faq-3").siblings().removeClass("active")
		}
		if($(this).hasClass("tab4")){
			$(".faq-4").addClass("active")
			$(".faq-4").siblings().removeClass("active")
		}
		if($(this).hasClass("tab5")){
			$(".faq-5").addClass("active")
			$(".faq-5").siblings().removeClass("active")
		}
	})
});
