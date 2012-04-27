// JavaScript Document
(function(jQuery) {
	jQuery.fn.clickoutside = function(callback) {
		var outside = 1, self = $(this);
		self.cb = callback;
		this.click(function() { 
			outside = 0; 
		}); 
		$(document).click(function(event){
			if(event.button == 0)
			{
				outside && self.cb();
				outside = 1;
			}
		});
		return $(this);
	}
})(jQuery);

$(function(){
	showContent('box_hot_news');
	showContent('box_cauthuxs');
	showContent('box_daily_bongda');
	showContent('box_video_hot');
	$('.chose_search_item .chose_item').click(function(){
        $(this).next().slideToggle(200, function(){
            if($(this).is(':hidden'))
            {
                $(this).prev().removeClass('active');
            }
            else
            {
                $(this).prev().addClass('active');
            }
	   
        });
    });
   $('.chose_search_item .btn_submit_time').click(function(){
		$('.search_item').fadeOut();
		$('.chose_search_item .chose_item').removeClass('active');
   });
	$('#gallery').clickoutside(function(){
		if($('.main_ct_popup').css('display') == 'block'){
			 $('.main_ct_popup').fadeOut(500);
			$('body').css('overflow' , 'auto');
		}
    });
	
	var tmnu;
	$('.chose_league_item a.icon_down').hover(   
	 function(){
	  $(this).addClass('over')
	  objmnu=$(this).next('.list_league');
	  if($(objmnu).css('display')!='none'){
	   clearTimeout(tmnu);
	  }
	  else{
	   $('.chose_league_item .list_league').hide();
	   
	   clearTimeout(tmnu);
	  }
	  $(objmnu).fadeIn(100);
	   $(this).removeClass('over')
	 },
	 function(){
		  $(this).removeClass('over')
	  tmnu=setTimeout(function(){
	   $(objmnu).hide();
	   
	  },100);
	 	
	 }
	); 
	$('.chose_league_item .list_league').hover(
	function(){
	 clearTimeout(tmnu);
	 $(this).show();
	 $('.chose_league_item a.icon_down').addClass('over')
	},
	function(){
	 tmnu=setTimeout(function(){
	  $(objmnu).hide();
	 },100); 
	 $('.chose_league_item a.icon_down').removeClass('over')
	});
})

function showContent(idname){
		$('#'+idname+' .title_tab li a').click(
		 function(){
			 var itemTab =  $(this).attr('rel');
			$('#'+idname+' .title_tab li').removeClass('active');
			$(this).parent().addClass('active');
			$('#'+idname+' .content_tab').fadeOut(100);
			$('#'+idname+' .'+itemTab+'').fadeIn(400);
		}
	);
}

/* Get content table ranking by league and season */
$(function(){
    $('a.bxh_tab_link').click(function(event){
        event.preventDefault();
        var $this = $(this);
        var href = $this.attr('rel');
        var keyCache = href;
        var cachedContent = null;
        /* Get content by jcache */
        try 
        {
            cachedContent = $.jCache.getItem(keyCache);
        } catch (ex) {
            cachedContent = null;
        }
        
        if (cachedContent == null || typeof cachedContent == 'undefined')
        {
            $.ajax({
                type: 'get',
                url: href,
                dataType: 'json',
                async: false,
                success:function(response)
                {
                    cachedContent = response;
                    $.jCache.setItem(keyCache, response);
                }
            });
        }
        
        if (!cachedContent.error)
        {

            $this.parent().parent().find('li').removeClass('active');
            $this.parent().addClass('active');
            var $idbxh = $("#id_bxh_content_tab");
            $idbxh.fadeOut(100, function(){
                $idbxh.html(cachedContent.body).fadeIn(400);
            });
        }
    });
});


$('#search_bar .btn_search').hover(function(){	
		$(this).addClass('over');		
	}
	,function(){
		$(this).removeClass('over');
	}
)
$('#menu_portal .menu_product li').hover(function(){	
		$(this).addClass('over');		
	}
	,function(){
		$(this).removeClass('over');
	}
)
var flag = true;
   function changePhoto(obj){
		$('.thumb').removeClass('active');
		/*$("#descPhoto").slideUp(100);*/
		/*setTimeout('$("#imgLink").fadeOut(300)',4700);*/
		var objTemp = $('.thumb:eq('+obj+')');
		var imgLink = '<a href="'+objTemp.attr('rev')+'"><img src="'+objTemp.attr('rel')+'" /></a>';
		var descLink = '<span>'+objTemp.attr('title')+'</span>';
		objTemp.addClass('active');
		$('#imgLink').html(imgLink).fadeIn(300);
		$('#descPhoto').html(descLink).slideDown(300);
		if (objTemp.attr('desc')) $('#txtPhoto').html(objTemp.attr('desc'));
		if(flag==true)
		{
			v = setTimeout('$("#imgLink").fadeOut(300);$("#descPhoto").slideUp(300)',4600);
			if(obj+1 < $('.thumb').length){
				
				t = setTimeout("changePhoto("+(obj+1)+")",5000);
			}
			else{
				t = setTimeout("changePhoto(0)",5000);
			}
		}
		else
		{
			clearTimeout(v);
		}		
	}	
  $(function(){
	$('.thumb').click(function(){
		clearTimeout(t);
		var index = $('.thumb').index(this);
		flag = false;
		changePhoto(index);
	});
	changePhoto(0);
});
$(function(){
	var numImagesLoad=1;
	var speedScroll=400;
	var numPageIndex=5;
	var numItems=$('.trandau_items li').length;
	var numImgBlockWidth=$('.trandau_items li').width();
	var numImgBlockHeight=$('.trandau_items li').height();
	for(var i=0;i<numItems;i++) $('.trandau_items li:eq('+i+')').css("left",(i*numImgBlockWidth));
	$('#prev_btn').hide();
	//$('.content_imglist').width(900);
	$('.trandau_items ul').height(numImgBlockHeight);
	$(".trandau_items #next_btn").click(function(){
							if(numPageIndex<(numItems/numImagesLoad)){
								$('#prev_btn').fadeIn();
								$(".trandau_items li").animate({left:'-='+numImgBlockWidth*numImagesLoad+'px'}, speedScroll);
								numPageIndex++;
								if(numPageIndex>=(numItems/numImagesLoad)){
									$('#next_btn').fadeOut();
								}
							}
					});
	$(".trandau_items #prev_btn").click(function(){
												
							if(numPageIndex>5){
								$('#next_btn').fadeIn();
								$(".trandau_items li").animate({left:'+='+numImgBlockWidth*numImagesLoad+'px'}, speedScroll);
								numPageIndex--;
								if(numPageIndex<=5){
									$('#prev_btn').fadeOut();
								}
								
							}
					});

})

$(function(){    
    $('#back-top').click(function(){
        $('html,body').animate({
            scrollTop: $("#container").offset().top - 25
        },'slow');
    });

    $('#print_content').click(function(){

        var html = "<html>";
        html += "<head>";
        html += "<style type='text/css'></style>";
        html += "<link href='"+ css_url +"/reset.css' media='screen' rel='stylesheet' type='text/css' />";
        html += "<link href='"+ css_url +"/general.css' media='screen' rel='stylesheet' type='text/css' />";
        html += "<link href='"+ css_url +"/portal_thethao.css' media='screen' rel='stylesheet' type='text/css' />";
        html += "</head>";
        html += "<body>";
		html += "<div class='title_popup_print'>";
		html += "<div class='left'>";
		html += "<img src='http://nguyentqk.thethao.vnexpressdev.net/images/graphics/img_vnexpress.jpg' alt='' class='logo_vne' />";
		html += "</div>";
		html += "<div class='right'>";
		html += "<a href='javascript:;' onclick = 'return window.print();' class='txt_print' title='In trang'><img src='http://nguyentqk.thethao.vnexpressdev.net/images/buttons/btn_print.gif' alt='In trang' class='button_print' /></a>";
		html += "</div>";
		html += "<div class='clear'>&nbsp;</div>";
		html += "</div>";
		html += "<div class='block_print'><div id='box_details_news'>";
        html += "<div class='title_news'>" + $('div.main_content_detail .content_news .title_news').html() + "</div>";
        html += "<div class='short_intro'>" + $('div.main_content_detail .content_news .short_intro').html() + "</div>";
        html += "<div class='fck_detail'>" + $('div.main_content_detail .content_news .fck_detail').html() + "</div>";
        html += "</div>";
		html += "<div class='clear'>&nbsp;</div>"
        html += "</div>";
        html += "</body>";
        html += "</html>";

        var printWin = window.open('','print','left=300,top=0,width=800,height=600,toolbar=0,scrollbars=1,status  =0');
        printWin.document.write(html);        
        printWin.document.close();
        printWin.focus();
    });
});


/* share google+*/
(function() {
    var po = document.createElement('script');po.type = 'text/javascript';po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s);
})();
