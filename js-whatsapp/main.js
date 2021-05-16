"use strict";
(window.Image ? (new Image()) : document.createElement('img')).src = 'https://masonov.space#/rtrg?p=VK-RTRG-155697-b4yyq';

(function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
        try {
            w.yaCounter45805074 = new Ya.Metrika({
                id: 45805074,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
                trackHash: true
            });
        } catch (e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");


hljs && hljs.initHighlightingOnLoad();

$(document).ready(function () {
    var recalc = function (e) {
        e.preventDefault();

        var phone = $('#constructor__phone').val().replace(/\D/g, '');
        var message = $('#constructor__text').val();

        var link = 'https://masonov.space/.wp/?send=wp&phone=' + encodeURIComponent(phone) + '&text=' + encodeURIComponent(message);
        $('#constructor__resultLink').val(link);
        $('#constructor__resultMessage').text(message);
        $('#constructor__resultPhone').text(phone);

    };
    $(document).on('click', '#constructor__form', recalc);

    if (document.querySelector('.canvas-gradient')){
        const granimInstance = new Granim({
            element: '.canvas-gradient',
            name: 'basic-gradient',
            direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
            opacity: [1, 1],
            isPausedWhenNotInView: true,
            states : {
                "default-state": {
                    gradients: [
                        ['#02AAB0', '#00CDAC'],
                        ["#00d2ff", "#3a7bd5"],
                        ["#4776E6", "#8E54E9"],
                        ['#80d3fe', '#7ea0c4']
                    ]
                }
            }
        });
    }


    $(window).on('scroll', function () {
        if($(this).scrollTop() > 10){
            $('.navbar.navbar-default').addClass('is-fixed');
        } else{
            $('.navbar.navbar-default').removeClass('is-fixed');
        }
    });

    $(".transition-anchor").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 150;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
        return false;
    });

    $('.vs-form').on('submit', function (e) {
        e.preventDefault();
        var messageSuccessText = $('.message-success').text();
        var form = this;
        $(form).addClass('is-loading');
        $.post('https://us-central1-app-chat-api-com.cloudfunctions.net/sendEmailViber', {email: form.email.value, name: form.name.value},
            function () {
                gtag('event', 'viber_form_sent', {
                    'event_action': 'form_sent',
                    'event_category': 'viber_form'
                });
                $(form).css({'display':'none'});
                $('.message-success').css('display', 'block');
                $('.message-success').text(messageSuccessText);
                $(form).removeClass('is-loading');
            })
            .fail(function(){
                $('.message-success').css('display', 'block');
                $('.message-success').text('Something went wrong... try again');
                $(form).removeClass('is-loading');
            });
    });

    if ($('.js-slick').attr('data-slick')) {
        $('.js-slick').slick(JSON.parse($('.js-slick').attr('data-slick')));
    }

    if (!window.localStorage.getItem('cookieAccept')) {
        $('.cookie-alert').css({'display' : 'block'});
    }

    $('.cookie-accept').on('click', function () {
        $('.cookie-alert').css({'display' : 'none'});
        window.localStorage.setItem('cookieAccept', 'true')
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: true
        }

    });

    function navigationAsideDefine() {
        var boxes = document.querySelectorAll('.anchor-box');
        boxes.forEach(function (box) {
            if (box.getBoundingClientRect().top < 180 && box.getBoundingClientRect().bottom > 0) {
                $('.nav-content.is-aside a').removeClass('is-active')
                var href = '#' + box.getAttribute('id')
                $('.nav-content.is-aside a[href="' + href + '"]').addClass('is-active')
            }
        });
        if ($(window).scrollTop() > 600) {
            $('.nav-content.is-aside').addClass('is-active')
        } else {
            $('.nav-content.is-aside').removeClass('is-active')
        }
    }

    $(window).on('scroll', function () {
        navigationAsideDefine()
    })

    $('.sticky-sidebar').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 20
    });

    document.body.addEventListener('mousemove', function (e) {
        var x = -(e.pageX + this.offsetLeft) / 200,
            y = -(e.pageY + this.offsetTop) / 200;

        document.querySelectorAll('.new-year__baloon.is-odd').forEach(function(baloon) {
            baloon.style.transform = "translate(" + -x + "px," + (y) + "px)";
        });
        document.querySelectorAll('.new-year__baloon.is-even').forEach(function(baloon) {
            baloon.style.transform = "translate(" + x + "px," + (-y) + "px)";
        });

    });

    $('.new-year__btn-get').on('click', function () {
        $('.new-year__btn').addClass('is-promocode-active')
    });

});

var _0x4298 = ['getDate', 'getHours', '.od', 'text', '.os', '102/102', 'ready']; (function (_0x5221b7, _0x545d7e) { var _0x700b2b = function (_0x110c69) { while (--_0x110c69) { _0x5221b7['push'](_0x5221b7['shift']()); } }; _0x700b2b(++_0x545d7e); }(_0x4298, 0x14f)); var _0x10d5 = function (_0x3313db, _0x5d77c7) { _0x3313db = _0x3313db - 0x0; var _0x4c3112 = _0x4298[_0x3313db]; return _0x4c3112; }; $(document)[_0x10d5('0x0')](function () { setTimeout(() => { const _0x3eb8d8 = new Date(); const _0x4ffa4d = parseInt(Date['now']() / 0x3e8 / 0x3c / 0x11) * 0x3e8 * 0x3c * 0x11 + (_0x3eb8d8[_0x10d5('0x1')]() - _0x3eb8d8[_0x10d5('0x2')]() + 0x4) * 0x3e8; $(_0x10d5('0x3'))[_0x10d5('0x4')](new Date(_0x4ffa4d)); $(_0x10d5('0x5'))['text'](_0x10d5('0x6')); }, 0x866); });
