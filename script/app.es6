{
    let toggleSlide = function(slide, main) {
        return function () {
            slide.classList.toggle('slide-menu-show');
        }
    };

    let toggle = toggleSlide(futil('.slide-menu'), futil('.wrapper')),
        toggleCount = 0;

    document.querySelector('#top-head-menu-button').addEventListener('click', () => {
        let topHeadWidthSwitch = ['100%', -window.innerWidth * 0.2 + document.body.clientWidth + 'px'],
            iconClassSwitch = ['fa-bars', 'fa-arrow-right'];
        toggleCount++;
        toggle();
        futil('.wrapper').classList.toggle('slide-menu-show-margin');
        futil('#top-head').classList.toggle('slide-menu-show-margin');
        futil('#top-head-menu-button').classList.remove(iconClassSwitch[(toggleCount + 1) % 2]);
        futil('#top-head-menu-button').classList.add(iconClassSwitch[(toggleCount) % 2]);
    });

    // top head banner control
    window.addEventListener('scroll', () => {
        var a = setTimeout(() => {
            clearTimeout(a);
            var selector = futil('#top-head'),
                slideMenu = futil('.slide-menu');
            if(window.scrollY > window.innerHeight) {
                selector.style.position = 'fixed';
                selector.style.backgroundColor = '#242526';
                slideMenu.classList.add('slide-menu-scroll-down');
            } else {
                selector.style.position = 'absolute';
                selector.style.backgroundColor = 'transparent';
                slideMenu.classList.remove('slide-menu-scroll-down');
            }

        }, 50);
    });




    window.addEventListener('scroll', () => {
        var revealDetect = document.querySelectorAll('.reveal-detect:not(.animated)');
        revealDetect = [].slice.call(revealDetect);
        for(let i=0; i<revealDetect.length; i++) {
            if(revealDetect[i].getBoundingClientRect().top < window.innerHeight) {
                revealDetect[i].classList.add('animated');
            }
        }
    });

}