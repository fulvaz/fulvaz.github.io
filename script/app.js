'use strict';

{
    (function () {
        var toggleSlide = function toggleSlide(slide, main) {
            var futil = window.futil,
                widthSwitch = ['0px', '20vw'],
                count = 0;
            return function () {
                count++;
                slide.style.width = widthSwitch[count % 2];
            };
        };

        var toggle = toggleSlide(futil('.slide-menu'), futil('.wrapper')),
            toggleCount = 0;

        // top head banner control
        window.addEventListener('scroll', function () {
            var a = setTimeout(function () {
                clearTimeout(a);
                var selector = futil('#top-head');
                if (window.scrollY > window.innerHeight) {
                    selector.style.position = 'fixed';
                    selector.style.backgroundColor = '#242526';
                } else {
                    selector.style.position = 'absolute';
                    selector.style.backgroundColor = 'transparent';
                }
            }, 50);
        });

        window.onload = function () {
            document.querySelector('#top-head-menu-button').addEventListener('click', function () {
                var marginSwitch = ['0px', '19vw'],
                    topHeadWidthSwitch = ['100%', -window.innerWidth * 0.2 + document.body.clientWidth + 'px'];
                toggleCount++;
                toggle();
                futil('.wrapper').style.marginRight = marginSwitch[toggleCount % 2];
                futil('#top-head').style.width = topHeadWidthSwitch[toggleCount % 2];
            });
        };
    })();
}
