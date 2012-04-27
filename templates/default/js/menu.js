// JavaScript Document
$(function () {
    var tmnu;
    $('.main_menu a.parent_menu').hover(function () {

		var objmnu = $(this).next('.menu_site_sub');
        
		if (objmnu.css('display') != 'none') 
		{
            clearTimeout(tmnu);
        } 
		else 
		{
			clearTimeout(tmnu);
            $('.main_menu .menu_site_sub').hide();
        }
		
        $(objmnu).stop(true, true).fadeIn(100);
        $('.sub_title_menu .txt_news').hide();
		
    }, function () {
        tmnu = setTimeout (function () {
			
			
            
			$('.main_menu .menu_site_sub').hide();
            $('.main_menu .active .menu_site_sub').show();
            $('.sub_title_menu .txt_news').show();
        }, 100);
    });
	
    $('.main_menu .menu_site_sub').hover(

    function () {
        clearTimeout(tmnu);
        $(this).show();
        $(this).prev().addClass('over')
    }, function () {
        tmnu = setTimeout(function () {
            $(objmnu).hide();
        }, 100);
        $('.main_menu a.parent_menu').removeClass('over');
        $('.main_menu .menu_site_sub').hide();
        $('.main_menu .active .menu_site_sub').show();
        $('.sub_title_menu .txt_news').show();
    });
})