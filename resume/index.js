$('body').ready(() => {
    $('.header__inner').css({
        'transition': '3s',
        'opacity': '1',
        'top': '40%'
    })
    $('.btn-language').click(() => {
        if($('.btn-language').hasClass('btn-language--vn')){
            $('.btn-language').removeClass('btn-language--vn');
            $('.btn-language').addClass('btn-language--en');
            $('.btn-language').text('En');
        }
        else{
            $('.btn-language').removeClass('btn-language--en');
            $('.btn-language').addClass('btn-language--vn');
            $('.btn-language').text('Vn');
        }
    })
})
