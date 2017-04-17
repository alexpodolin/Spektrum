'use strict';
 
//ждем загрузки страницы
$(document).ready(function() { 

//Карусель начало
//Обработка клика на стрелку влево
$(document).on('click', ".carousel-btn-prev", function() {
	var carouselLeft = $(this).parents('.carousel');
	left_carousel(carouselLeft);
	return false;	
});

//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-btn-next", function() {
	var carouselRight = $(this).parents('.carousel');
	right_carousel(carouselRight);
	return false;
});

//Функция вызываемая обработкой клика на левую кнопку

function left_carousel(carouselLeft) {
	//Р’РЅСѓС‚СЂРё Р±Р»РѕРєР° carousel РЅР°Р№РґРµРј РІСЃРµ СЌР»-С‚С‹ carousel-box-item, РїРѕР»СѓС‡РёРј РёС… С€РёСЂРёРЅСѓ СЃ РѕС‚СЃС‚СѓРїР°РјРё(padding)
	var block_width = $('.carousel').find('.carousel-box-item').outerWidth();

	//Р’РЅСѓС‚СЂРё Р±Р»РѕРєР° carousel РЅР°Р№РґРµРј РІСЃРµ СЌР»-С‚С‹ carousel-box-item, cРѕРєСЂР°С‰Р°РµРј С‡РёСЃР»Рѕ СЃРѕРІРїР°РІС€РёС… СЌР»РµРјРµРЅС‚РѕРІ РґРѕ РѕРґРЅРѕРіРѕ РІР»РµРІРѕ (РїРѕСЃР»РµРґРЅРёР№ СЌР»-С‚),
	//СЃРєРѕРїРёСЂСѓРµРј СЌС‚РѕС‚ СЌР»-С‚, РґРѕР±Р°РІРёРј РµРіРѕ РІ РЅР°С‡Р°Р»Рѕ СЌР»РµРјРµРЅС‚РѕРІ СЃ РєР»Р°СЃСЃРѕРј carousel-box'
	$('.carousel').find('.carousel-box .carousel-box-item').eq(-1).clone().prependTo($('.carousel').find('.carousel-box'));
	
	//Р”Р»СЏ СЌР»-С‚РѕРІ .carousel-box-item РёР·РјРµРЅРёРј СЃРІ-РІРѕ css left
    $('.carousel').find('.carousel-box-item').css({"left":"-"+block_width+"px"});
    
    //Р”Р»СЏ СЌР»-РѕРІ .carousel-box-item СѓРґР°Р»РёРј РїРѕСЃР»РµРґРЅРёР№
    $('.carousel').find('.carousel-box .carousel-box-item').eq(-1).remove();    
    
    //Р”Р»СЏ СЌР»-РѕРІ .carousel-box-item СЃРјРµСЃС‚РёРј РІР»РµРІРѕ
    $('.carousel').find('.carousel-box-item').animate({left: "0px"}, 200);	
}


//Функция вызываемая обработкой клика на правую кнопку
function right_carousel(carouselRight) {
	//Внутри блока carousel найдем все эл-ты carousel-box-item, получим их ширину с отступами(padding)
	var block_width = $('.carousel').find('.carousel-box-item').outerWidth();

	//Найдем все эл-ы .carousel-box и подвинем их с помощью анимации 
	$('.carousel').find('.carousel-box').animate({left: "-"+ block_width +"px"}, 200, function() {
	  	$('.carousel').find('.carousel-box .carousel-box-item').eq(0).clone().appendTo($('.carousel').find('.carousel-box')); 
	  	$('.carousel').find('.carousel-box .carousel-box-item').eq(0).remove(); 
	  	$('.carousel').find('.carousel-box').css({"left":"0px"}); 
	  	}); 	
}
/*
//РђРІС‚РѕРјР°С‚РёС‡РµСЃРєР°СЏ РїСЂРѕРєСЂСѓС‚РєР°
$(function() {
//Р Р°СЃРєРѕРјРјРµРЅС‚РёСЂСѓР№С‚Рµ СЃС‚СЂРѕРєСѓ РЅРёР¶Рµ, С‡С‚РѕР±С‹ РІРєР»СЋС‡РёС‚СЊ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєСѓСЋ РїСЂРѕРєСЂСѓС‚РєСѓ РєР°СЂСѓСЃРµР»Рё
	auto_right('.carousel:first');
})

function auto_right(carousel){
	setInterval(function(){
		if (!$(carousel).is('.hover'))
			right_carousel(carousel);
	}, 3000)
}
*/
//Карусель конец

//Появляющееся меню при нажатии на кнопку content-main-service-button-mobile	
$('.content-main-service-button-mobile').click(function(){
	$('.content-main-service nav').show();
	$('.content-main-service-button-mobile').hide();
	console.log();
	});


}) ;//Завершение ожидания загрузки страницы
//http://tj-s.ru/tod/prostaya-karusel-na-jquery.html





