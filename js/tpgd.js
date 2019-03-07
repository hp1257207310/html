function tpgd(cs){
	
var szqm=0,//当前left

	szqd=0,//当前序列号
	
	a=cs.a||1,//滚动个数默认1
	
	b=cs.b,//滚动元素父级  必填
	
	c=cs.c||false,//c.a 分页器小点父级  c.b 左切换 c.c 右切换
	
	t=cs.t||5000,//自动切换  默认3000
	
	xg=cs.xg||1,//切换效果1滚动
	
	kzq=true,//控制器
	
	d=cs.d||'banner',//选择切换插件，默认banner
	
	ds=cs.ds||0,//一行显示几个
	
	blilength=b.find('li').length;//li个数
	
	b.children('ul').append(b.children('ul').html());
	
	//创建分页按钮
	if(c.a){
		if(!ds){
			for(var i=0;i<Math.ceil(blilength/a);i++){
			c.a.append('<span></span>');
			}
		}else{
			for(var i=0;i<blilength-(ds-1);i++){
				c.a.append('<span></span>');
			}
		}
		c.a.find('span').eq(szqd).addClass('on')
	}

szq();

b.hover(function(){clearInterval( b.t1 )},function(){szq()})

//分页器切换
if(c.a)c.a.find('span').click(function(){
	if(kzq){
		kzq=false;
		szqd=$(this).index();
		szqm=szqd*b.find('li').outerWidth(true);
		b.find('ul').stop(true,true).animate({left:-szqm},function(){
			kzq=true;
			});
		c.a.find('span').removeClass('on').eq(szqd).addClass('on')
	}
})

function szq(){
	b.t1=setInterval(function(){
		tabqh(true);
		},t);
}


if(c.b&&c.c){
	c.b.click(function(){tabqh(false);})
	c.c.click(function(){tabqh(true);})
	}
	
//左右切换
function tabqh(tabqha){
	if(tabqha){
		qhy();
	}else{
		qhz();
	}

function qhy(){
	if(d=='banner'){
		if(kzq){
		kzq=false;
		if(szqd==Math.ceil(blilength/a)){
			szqd=0;
			szqm=szqd*b.width();
			b.find('ul').css('left',-szqm);
			console.log(szqm);
		}
		szqd++;
		//szqd%=Math.ceil(blilength/a);
		szqm=szqd*b.width();
		if(c.a)if(szqd<c.a.find('span').size()){c.a.find('span').removeClass('on').eq(szqd).addClass('on')}else{c.a.find('span').removeClass('on').eq(0).addClass('on')};
		b.find('ul').animate({left:-szqm},function(){
			kzq=true;
			});
		}
		}else if(d=='单个'){
			if(kzq){
			kzq=false;
			if(szqd==blilength){
					szqd=0;
					b.find('ul').css('left',-szqd);
					szqd++;
				}else{
					szqd++;
				};
			szqm=szqd*b.find('li').outerWidth(true);
			b.find('ul').animate({left:-szqm},function(){
				kzq=true;
				});
			}
		}
	}
function qhz(){
	if(d=='banner'){
		if(kzq){
			kzq=false;
			if(szqd==0){
				szqd=Math.ceil(blilength/a);
				szqm=szqd*b.width();
				b.find('ul').css('left',-szqm);
				console.log(szqm)
			}
			szqd>0?szqd--:szqd=Math.ceil(blilength/a)-1;
			szqm=szqd*b.width();
			if(c.a)c.a.find('span').removeClass('on').eq(szqd).addClass('on');
			b.find('ul').animate({left:-szqm},function(){
				kzq=true;
				});
			}
	}else if(d=='单个'){
		if(kzq){
		kzq=false;
		if(szqd==0){
				szqd=blilength;
				szqm=szqd*b.find('li').outerWidth(true);
				b.find('ul').css('left',-szqm);
				szqd--;
			}else{
				szqd--;
			}
		szqm=szqd*b.find('li').outerWidth(true);
		b.find('ul').animate({left:-szqm},function(){
			kzq=true;
			});
		}
	}
}
}

var cmwz,cmwz2,cmwz3;
b.find('ul')[0].addEventListener('touchstart', function(event) {  /*手指触摸了*/
    if (event.targetTouches.length == 1) {
　　　　 //event.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
		cmwz=touch.pageX;
		cmwz3=cmwz;
		clearInterval( b.t1 );

        }
}, false);  
b.find('ul')[0].addEventListener('touchmove', function(event) {  /*手指移动了*/
	
     // 如果这个元素的位置内只有一个手指的话
    if (event.targetTouches.length == 1) {
　　　　 //event.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
		cmwz2=touch.pageX;
		cmwz4=cmwz2-cmwz3;
		cmwz3=cmwz2;
		b.find('ul').css('left',parseFloat(b.find('ul').css('left'))+cmwz4)
        }
}, false);  
b.find('ul')[0].addEventListener('touchend', function(event) {  /*手指离开了*/
　　　　 //event.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
		if(cmwz-cmwz2>=80){tabqh(true);}else if(cmwz-cmwz2<-80){tabqh(false);}else{b.find('ul').animate({left:-szqm})};
		szq();
}, false);
  
/*鼠标事件*/  
var lastX,lastX2,lastX3,lastX4,djydpd=false;
		b.find('ul').mousedown(function(e){
　　　　 	e.preventDefault();// 阻止浏览器默认事件，重要 
         lastX = e.pageX;
		 lastX3=lastX;
		 djydpd = true;
		 bulLeft=b.find('ul').css('left');
		 
        $(this).mousemove(function(e) {
			if(djydpd){
				lastX2=e.pageX;
				lastX4=lastX2-lastX3;
				lastX3=lastX2;
			b.find('ul').css('left',parseFloat(b.find('ul').css('left'))+lastX4)
			}
        });
		$(this).mouseup(function(e){
		 djydpd = false;
		 if(lastX2){if(lastX2<lastX&&lastX-lastX2>80){tabqh(true);}else if(lastX2>lastX&&lastX2-lastX>80){tabqh(false);}else{b.find('ul').css('left',bulLeft)}}
			lastX=0;lastX2=0;
        });
		
		})
}
function xydh(){

	$('script').remove();
	var $dh=$('.sj_dh');
	$dh.append('<i class="dhgb"></i>').parent().append('<div class="dhan"><div class="dhan_1"></div><div class="dhan_2"></div><div class="dhan_3"></div></div>');
	$dh.attr('class','').addClass('sjdh').remove();
	$('body').append('<div class="body_st"></div><div class="body_bg"></div>');
	$('body').append($dh);
	$('.body_st').append($('.body_st').siblings())
	$('.dhgb').click(function(){
		$dh.toggleClass('dhov');
		$('.dhan').toggleClass('hover');
		$('.body_st').toggleClass('on');
		$('.body_bg').stop().fadeToggle(500);
		$('body').toggleClass('on');
		});
	$('.dhan').click(function(){
		$dh.toggleClass('dhov');
		$('.dhan').toggleClass('hover');
		$('.body_st').toggleClass('on');
		$('.body_bg').stop().fadeToggle(500);
		$('body').toggleClass('on');
		});
	$('.body_bg').click(function(e){
		$('.dhan').toggleClass('hover');
		$('.body_st').toggleClass('on');
		$('.body_bg').stop().fadeToggle(500);
		$('body').toggleClass('on');
		$dh.toggleClass('dhov');
		});
};

/*图片手机端自动1200等比例缩放*/function img1200(imgzd){xyimg();$(window).resize(function(){xyimg();});function xyimg(){if($(window).width()<1200){imgzd.css({'position':'relative','left':'50%','width':1920/1200*$(window).width(),'margin-left':-1920/1200*$(window).width()/2});}}}
/*浏览器宽度改变刷新页面*/function win_w(){var $win_w=$(window).width();$(window).resize(function(){if($win_w!=$(window).width()){window.location.reload();}})};