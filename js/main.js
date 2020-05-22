$(function(){

    $('input[type="radio"],input[type="checkbox"]').styler();


    //     start script drop-down menu   //

    $(document).mouseup(function (e){ 
        var element = $(".drop-down.active, .popup");
        if (!element.is(e.target) && element.has(e.target).length === 0) {
            $(".drop__down-list-wrapper, .drop-down, .popup-wrapper").removeClass("active");
        };
    });

    $('.drop-down').on('click', function(){
        var menu = $(this).find('.drop__down-list-wrapper');
        menu.toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.block-questions__content-item').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.header__menu-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
    });


    //     end script drop-down menu   //



    $("#price").ionRangeSlider({
        min: 0,
        max: 200000,
        from: 50000
    });
    $("#term").ionRangeSlider({
        min: 2,
        max: 12,
        from: 8
    });

    $('select').selectize();

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top -80;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });

    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.popular-loans, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.product-one__tabs .tabs, .settings__tabs .tab').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
    });

    var abtn = $('a[id="abtn"]'),
    bbtn = $('a[id="bbtn"]'),
    cbtn = $('a[id="cbtn"]');
    dbtn = $('a[id="dbtn"]');

    abtn.on('click',function(){
        $(location).attr('href','index.html');
    });
    bbtn.on('click',function(){
        $(location).attr('href','categories.html');
    });
    cbtn.on('click',function(){
        $(location).attr('href','loan-card.html');
    });
    dbtn.on('click',function(){
        $(location).attr('href','reviews-MFO.html');
    });

    //     popup     //
    
    $('.open-popup').on('click', function(){
        $('.popup-wrapper').toggleClass('active');
    });
    $('.popup-btn').on('click', function(){
        $('.popup-wrapper').removeClass('active');
    });

    //     popup     //



   
});