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
    
    const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    function calcSumm(){
        var summ = $(".calculator__summ").val().toString().replace(/[^0-9.]/g, "")
            
        if(!$("#term").hasClass("month")){
            var term = $(".calculator__term").val().toString().replace(/[^0-9.]/g, "")            
        }else{
            var term = Number($(".calculator__term").val().toString().replace(/[^0-9.]/g, "")) * 30
        }
        $(".you-take").html(summ.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +" ₽")
        $(".you-give").html(Number(Number(summ)+Number(((summ * term)*0.01))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +" ₽")
        $(".your-commission").html(Number((summ * term)*0.01) +" ₽")
        const d = new Date();
        if(!$("#term").hasClass("month")){
            d.setDate(d.getDate() + Number(term))
        }else{
            d.setMonth(d.getMonth() + Number(Number(term) / 30))            
        }
        var currYear = d.getFullYear(),
            currMonth = monthNames[d.getMonth()],
            currDay = d.getDate()
        $(".date-end").text(currDay+" "+currMonth+" "+currYear)
    }
    
    if($("div").hasClass("calculator")){
        calcSumm()        
    }
    
    $('#price').rangeslider({
        polyfill: false,
        onSlide: function(position, value) {
            $(".calculator__summ").val(value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
            calcSumm()
        }
    });
    
    $('#term').rangeslider({
        polyfill: false,
        onSlide: function(position, value) {
            if(!$("#term").hasClass("month")){
                $(".calculator__term").val("На "+value+" дней").attr("data-val", value)
                if(value > 30 || value == 31){
                    $("#term").attr("step", "2.27")
                    $("#term").addClass("month")
                    $(".calculator__term").addClass("month")
                    $("#term").rangeslider('update', true)                    
                }
            }else{
                if(value < 31.97){
                    $("#term").removeClass("month")
                    $(".calculator__term").removeClass("month")
                    $("#term").attr("step", "1")
                    $("#term").rangeslider('update', true)
                }
                if(value == 31.97){
                    $(".calculator__term").val("На 2 месяца")
                }
                if(value == 34.24){
                    $(".calculator__term").val("На 3 месяца")
                }
                if(value == 36.51){
                    $(".calculator__term").val("На 4 месяца")
                }
                if(value == 38.78){
                    $(".calculator__term").val("На 5 месяцев")
                }
                if(value == 41.05){
                    $(".calculator__term").val("На 6 месяцев")
                }
                if(value == 43.32){
                    $(".calculator__term").val("На 7 месяцев")
                }
                if(value == 45.59){
                    $(".calculator__term").val("На 8 месяцев")
                }
                if(value == 47.86){
                    $(".calculator__term").val("На 9 месяцев")
                }
                if(value == 50.13){
                    $(".calculator__term").val("На 10 месяцев")
                }
                if(value == 52.4){
                    $(".calculator__term").val("На 11 месяцев")
                }
                if(value == 54.67){
                    $(".calculator__term").val("На 12 месяцев")
                }
            }
            calcSumm()
        }
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

    //     popup     //


});