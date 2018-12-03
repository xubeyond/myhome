
  $(document).ready(function() {
	 $("#menu2 li a").wrapInner( '<span class="out"></span>' );
	 $("#menu2 li a").each(function() {
		 $( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
	});


	$("#menu2 li a").hover(function() {
		$(".out",	this).stop().animate({'top':	'48px'},	300); // move down - hide
		$(".over",	this).stop().animate({'top':	'0px'},		300); // move down - show

	}, function() {
		$(".out",	this).stop().animate({'top':	'0px'},		300); // move up - show
		$(".over",	this).stop().animate({'top':	'-48px'},	300); // move up - hide
	});
});



   $(window).load(function() {

        $('#outer').unleash({

			    duration: 700,

				childClassName: '.box',

				captionClassName: '.caption_1',

                SliderWidth: '1000px',

				OpenFirstOnload: true,

                SliderHeight: '350px',

                width: 0.63,

                Event: "hover",

                easing:  "easeOutQuad",

				captionEasing:  "easeInOutBack",

                CollapseOnMouseLeave: true,

                CaptionAnimation: "pop-up"

			});

			

    }); 






  $(function () {
        $('.image-list').on('click', '.cover', function () {
            var this_ = $(this);
            var images = this_.parents('.image-list').find('.cover');
            var imagesArr = new Array();
            $.each(images, function (i, image) {
                imagesArr.push($(image).children('img').attr('src'));
            });
            $.pictureViewer({
                images: imagesArr, //��Ҫ�鿴��ͼƬ���������Ϊ����
                initImageIndex: this_.index() + 1, //��ʼ�鿴�ڼ���ͼƬ��Ĭ��1
                scrollSwitch: true //�Ƿ�ʹ���������л�ͼƬ��Ĭ��false
            });
        });
    });

  //div������
  
  $(function(){
    $('.div1').find('.div2').hide(); 
    $('.div1').hover(function(){
        $(this).find('.div2').stop(true,true).slideDown();    
        },function(){
        $(this).find('.div2').stop(true,true).slideUp(100);        
    });    
});

$(function(){
    $('.divgx').find('.divgx1').hide(); 
    $('.divgx').hover(function(){
        $(this).find('.divgx1').stop(true,true).slideDown();    
        },function(){
        $(this).find('.divgx1').stop(true,true).slideUp(100);        
    });    
});




 
function pageScroll(){
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',20);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
}



$(window).scroll(function(){
  		
  	var height=$(window).scrollTop();
  	
	if(height>400)
	{
		 $('.top').fadeIn(1000);
	}
	else{
		$('.top').fadeOut(2000);			
	}
      
  })


 $(function()
{
   $(".canvas1 .menu").hover(function(){
  		  $("#menu2").slideDown(1);
  	},function(){
  		  $("#menu2").slideUp(1);
    })
  		  $(".canvas1 .menu").hover(function()
  	{
  		  $(this).css("display","block");
  	})
 })
 
 //登陆弹出框
$(function(){
		$('body').find('.divdl').hide()
		$('body').find('.divzz').hide()
		$('#btn').click(function(){
			$('.divdl').show(400)
			$('.divzz').show(300)
			
		})
		$('#btn1').click(function(){
			$('.divdl').hide(400)
			$('.divzz').hide(300)
		})
	})


//验证登陆选项
$(function(){
	$('.divdl').find('#pa').hide()
	$('.divdl').find('#pb').hide()
	$('body').find('.load').hide()
	$('.userin').hide()
	$('#btn3').click(function(){
		var x=document.getElementById("inputa").value
		var y=document.getElementById("inputb").value
	  
		if(x=="")
		{
			$('.divdl').find('#pa').show()
		}
		 if(y=="")
		{
			$('.divdl').find('#pb').show()
		}
		else
		{
			//setTimeout(function () {$(".load").show();}, 2000);
		  $('.divdl').hide()
		  $('.userin').show()
			$('.divzz').hide()
		  document.getElementById('username').innerText=$('#inputa').val()
	  }
	})
})

//退出登录
$(function(){
	 $('#close').click(function(){
		 $('.userin').hide();
	 })
})

//验证是否输入
$(function(){
	 $('#inputa').keyup(function()
{
	var x=document.getElementById("inputa").value
	if(x!="")
	{
		  $('.divdl').find('#pa').hide()
	}
})
	  $('#inputb').keyup(function()
{
	var x=document.getElementById("inputb").value
	if(x!="")
	{
		  $('.divdl').find('#pb').hide()
	}
})
	 
})


$(function(){
	$('#xix').click(function(){
		window.location.href='information.html'
	})
})


$(function () {
            function setRem() {
                var clientWidth=$(window).width();
                var nowRem=(clientWidth/375*10);
                $("html").css("font-size",parseInt(nowRem,10)+"px");
            };
            setRem();
 
            $(function () {
                var timer;
                $(window).bind("resize",function () {
                    clearTimeout(timer);
                    timer=setTimeout(function () {
                        setRem();
                    },100)
                })
            });
        })





