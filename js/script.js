$(function(){
   $('a[href^="#"]').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: (parseInt($(target).offset().top) - 80)}, 1000);
       $('.menu li a').removeClass('active-anchor');
       $(this).addClass('active-anchor');
       return false;
   });



    // window.widget = new Widget({
    //     placeholder: '#widget',
    //     actionDateId: 243595,
    //     companyId: 5229,
    //     host: 'http://concert.ru/widget/',
    //     schemeUrl: 'http://concert.ru/SchemeApi'
    // }).clearState().loadTemplatesFromFile('http://concert.ru/widget2/Home/TemplatesUrl?filename=templates.html', function () {
    //     window.widget.show();
    // });


    // window.widget = new Widget({
    //             placeholder: '#widget, #widget_sheme',
    //             actionId: 76765,
    //             companyId: 6251,
    //             lang: 'ru',
    //             host: 'http://concert.ru/widget',
    //             schemeUrl: 'http://concert.ru/SchemeApi'
    //         }).clearState().loadTemplatesFromFile('http://concert.ru/widget2/Home/TemplatesUrl?filename=templates.html', function () {
    //             window.widget.show();
    //     });

    // $('.variable-width').slick({
    //     dots: false,
    //     infinite: true,
    //     arrows: false,
    //     speed: 300,
    //     infinite: false,
    //     initialSlide: 6,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     variableWidth: true,
    //     centerMode: true,
    //     touchMove: true
    // });
    $(".variable-width").smoothDivScroll({
        hotSpotScrolling: true,
        touchScrolling: true,
        manualContinuousScrolling: true,
        mousewheelScrolling: false,
        autoScrollingMode: "onStart"

    });

    $('.btn-tab').click(function(e){
        $(this).siblings('.btn-tab').removeClass('active');
        $(this).addClass('active');
        $('[id="' + $(this).attr('data-selector') + '"]').siblings('div').removeClass('active');
        if ($a = $(this).data('selector')){
            $('#'+$(this).data('selector')).addClass('active');
        }
    });
    $('.btn-tab-blue').click(function(e){
        $('.btn-tab').removeClass('active');
        $('#tab-2').addClass('active');
        $('[id="' + $(this).attr('data-selector') + '"]').siblings('div').removeClass('active');
        if ($a = $(this).data('selector')){
            $('#'+$(this).data('selector')).addClass('active');
        }
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        initialSlide: 2,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        initialSlide: 2,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    dots: false,
                    centerMode: true,
                    arrows: true,
                    focusOnSelect: true,
                    touchMove: true
                }
            }
        ]
    });

    $('#all-star').click(function(e){
        var heightPhotoWrap = $('.photo-star-wrap').height();

        $(this).fadeOut();
        $('.photo-block').addClass('open')
            .animate({
                    "max-height": heightPhotoWrap
                },
                500
            );
        e.preventDefault();

    });


    $('[modal_type]').click(function() {
        var modal = $('#' + $(this).attr('modal_type'));
        modal.fadeIn();
        $('.dark-fon').fadeIn();
    });

    $(function() {
        // $('.modal-wrap').click(function(event) {
        //     if ($(event.target).closest(".modal").length) return;
        //     $('.modal').fadeOut();
        //     $('.dark-fon').fadeOut();
        //     event.stopPropagation();
        // });
        // $('.dark-fon').click(function(event) {
        //     if ($(event.target).closest(".modal").length) return;
        //     $('.modal').fadeOut();
        //     $('.dark-fon').fadeOut();
        //     event.stopPropagation();
        // });
        $('.close-modal').click(function(event) {
            $('.modal').fadeOut();
            $('.dark-fon').fadeOut();
        });
    });

    $("#makeMeScrollable").smoothDivScroll({
        hotSpotScrolling: true,
        touchScrolling: true,
        manualContinuousScrolling: true,
        mousewheelScrolling: false
    });

    if ($('html').width() <= 800) {
        $('br').replaceWith(' ');
    }


//     $(document).on('click', '.', function() {
//         var $video = $('.slick-center iframe'),
//             src = $video.attr('src');
    
//         $video.attr('src', src + '&autoplay=1');
//     });
// 55.825372, 37.390626
ymaps.ready(function(){e=new ymaps.Map("map",{center:[55.825372,37.390626],zoom:17}),c=new ymaps.Placemark([55.825372,37.390626],{balloonContent:'«Крокус Сити Холл» - 65-66 км МКАД, ( м. Мякинино  )'},{iconLayout:"default#image",iconImageHref:"img/pinmap.png",iconImageSize:[40,40],iconImageOffset:[-20,-20]}),e.geoObjects.add(c),e.behaviors.disable("scrollZoom"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e.behaviors.disable("drag")})

$.fn.shuffle=function(){var allElems=this.get(),getRandom=function(max){return Math.floor(Math.random()*max)},shuffled=$.map(allElems,function(){var random=getRandom(allElems.length),randEl=$(allElems[random]).clone(!0)[0];allElems.splice(random,1);return randEl});this.each(function(i){$(this).replaceWith($(shuffled[i]))});return $(shuffled)}

  // $('.variable-width .slick-slide').shuffle();
  $('.photo-star-wrap .one-star').shuffle();

// $('#widget').on('click', '#go-submit', function(){ gtag('event', 'paycash', {'event_category': 'pay', 'event_action': 'click'}); })
// $('#widget').on('click', '#idPay', function(){ gtag('event', 'paycash', {'event_category': 'pay', 'event_action': 'click'}); })
// $('.dark-fon').on('click', '#buy', function(){ $('#idPay').attr('onclick', 'gtag'+'('+'event'+','+'paycash'+',{'+'event_category'+':'+'pay'+','+'event_action'+':'+'click'+'}'+');')});


//как вариант
// $iframe = $( document.getElementById("go-submit").contentWindow.document );

// $iframe.find("body").click(function(){
//     gtag('event', 'paycash', {'event_category': 'pay', 'event_action': 'click'});
// });


// function targetOne() {
// 	$('#idPay').click(function() {
//     	// gtag('event', 'application', {'event_category': 'order', 'event_action': 'send'});
//     	gtag('event', 'paycash', {'event_category': 'pay', 'event_action': 'click'});
//     });
// }

});
function youTubes_makeDynamic() {
    var $ytIframes = $('iframe[src*="youtube.com"]');
        $ytIframes.each(function (i,e) {
    var $ytFrame = $(e);
    var ytKey; 
    var tmp = $ytFrame.attr('src').split(/\//); 
        tmp = tmp[tmp.length - 1]; 
        tmp = tmp.split('?'); ytKey = tmp[0];
    var $ytLoader = $('<div class="ytLoader">');
            // $ytLoader.append($('<img class="cover" src="https://i.ytimg.com/vi/’+ytKey+’/hqdefault.jpg">'));
            $ytLoader.append($('<img class="playBtn" src="http://daewoo-power.com.ua/image/icon/play_button.png">'));
            $ytLoader.data('$ytFrame',$ytFrame);
            $ytFrame.replaceWith($ytLoader);
            $ytLoader.click(function () {
    var $ytFrame = $ytLoader.data('$ytFrame');
            $ytFrame.attr('src',$ytFrame.attr('src')+'?autoplay=1');
            $ytLoader.replaceWith($ytFrame);
            });
        });
    };
$(document).ready(function() {
    youTubes_makeDynamic()
});



