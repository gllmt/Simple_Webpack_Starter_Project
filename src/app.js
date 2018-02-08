const css = require('./app.scss');
var $ = require("jquery");
var imagesLoaded = require('imagesloaded');
import {TweenMax, Power2, TimelineLite,} from "gsap";
import controller from 'scrollmagic';
import Smooth from 'smooth-scrolling';

// console.log for fun :
var FunnyCslLg = [
    'background: linear-gradient(#00c92b, #00a022)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 20px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 15px'
].join(';');
console.log('%c Hello, developer person 👋🌐 !', FunnyCslLg);

// Smooth-scrolling init :

// ********TEST-1*******
// const section = document.querySelector('.vs-section')
// const smooth = new Smooth({
//   native: true,
//   section: section,
//   ease: 0.1
// })
// smooth.init()
// ********END TEST-1*******

// testing gsap :

// LOADER :
