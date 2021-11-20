$(document).ready(function(){
	$('.sec01_slider').slick({
		arrows:false,
		dots:true,
		focusOnSelect: true,
		appendDots: $('.dots'), //커스터마이징 닷
		customPaging: function(slider, i) { 
			console.log($(slider.$slides[i]).html());
			return '<button class="tab">' +  $(slider.$slides[i]).find('.sec01_slide').attr('data-dot-title') + '</button>';
		}
	});
	if($('.dots ul').hasClass('slick-dots')){
		$('.dots ul').addClass('active')
	}
	$('.dots ul li').click(function(e){ //닷을 움직이는 효과
		var cnt = $(this).index();
		$('.dots ul li').removeClass('on').eq(cnt).addClass('on');
		$('.dots ul').removeClass().addClass('active' + cnt);
		e.preventDefault();
	})

});
