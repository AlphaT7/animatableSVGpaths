import { animate, svg, stagger } from 'animejs';

animate(svg.createDrawable('.svg-text-path'), {
    draw: ['0 0', '0 1', '1 1'],
    ease: 'inOutQuad',
    duration: 4000,
    delay: stagger(100),
    loop: true
});