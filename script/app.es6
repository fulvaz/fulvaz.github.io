{
    let toggleSlide = function(slide, main) {
        let futil = window.futil,
            widthSwitch = ['0px', '20vw'],
            count = 0;
        return function () {
            count++;
            slide.style.width = widthSwitch[(count) % 2];
        }
    };

    let toggle = toggleSlide(futil('.slide-menu'), futil('.wrapper')),
        toggleCount = 0;



    // top head banner control
    window.addEventListener('scroll', () => {
        var a = setTimeout(() => {
            clearTimeout(a);
            var selector = futil('#top-head');
            if(window.scrollY > window.innerHeight) {
                selector.style.position = 'fixed';
                selector.style.backgroundColor = '#242526';
            } else {
                selector.style.position = 'absolute';
                selector.style.backgroundColor = 'transparent';
            }

        }, 50);
    });

    window.onload = () => {
        document.querySelector('#top-head-menu-button').addEventListener('click', () => {
            let marginSwitch = ['0px', '19vw'],
                topHeadWidthSwitch = ['100%', -window.innerWidth * 0.2 + document.body.clientWidth + 'px'];
            toggleCount++;
            toggle();
            futil('.wrapper').style.marginRight = marginSwitch[(toggleCount) % 2];
            futil('#top-head').style.width = topHeadWidthSwitch[(toggleCount) % 2];
        });
    }
}