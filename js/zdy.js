$(function(){
	/*var wzzt=500/7.5;*/
	
	/*$('body *').each(function(){
        $(this).css('font-size','0.18rem');
    });
	if($(window).width()>750){
		$('html').css('font-size',750/7.5);
		}else{
			$('html').css('font-size',$(window).width()/7.5+(750-$(window).width())*0.0558);
		}*/
	
/*	100        100          750 - 17.9167
	0
	
	24 
	42.6667    66.6667          320*/
	/*$('body *').each(function(){
        $(this).attr('font-size',parseFloat($(this).css('font-size')));
        $(this).attr('line-height',parseFloat($(this).css('line-height'))/100*wzzt);
    });*/
	/*if($(window).width()<500){
		$('body *').each(function(){
			console.log($(this).attr('font-size'));
			$(this).css('font-size',$(this).attr('font-size')+'rem');
			$(this).css('line-height',$(this).attr('line-height')+'rem');
		});
		}*/
	xydh();
	win_w();
	if($('.banner').size()){
		var mybantp = new tpgd({
			b:$('.banner'),
			c:{
				a:$('.bandd')
				}
			})
	}
	
	$(".ss input").focus(function(){
		$(".ss").addClass('on');
	});
	$(".ss input").blur(function(){
		if($(this).val()==''){$(".ss").removeClass('on');}
	});
	$(".ss span,.ss a").click(function(){
		$(".ss input").focus();
	});
	$('.ny_bt_fl').click(function(){
		$(".ny_fl_bg").show();
	});
	$('.ny_fl i').click(function(){
		$(".ny_fl_bg").hide();
	});
	img1200($('.bat img'));


})
	function fhdb(){
	$('html,body').animate({scrollTop:0},500)	
	}