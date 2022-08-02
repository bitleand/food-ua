// Defining the Operating System on Mobile
  import { mobileCheck } from "./functions/mobile-check";
  
  console.log(mobileCheck())

// Determine the width of the screen
  import { isMobile, isTablet, isDesktop } from './functions/check-viewport';

  if (isDesktop()) {
    console.log('...')
  }

// Throttling functions (for resize, entering into input, scrolling, etc.)
  import { throttle } from './functions/throttle';

  let yourFunc = () => console.log('throttle');
  let func = throttle(yourFunc);

  window.addEventListener('resize', func);

// Fix full-screen blocks
  import './functions/fix-fullheight';

// Implementation of the burger menu
  import { burger } from './functions/burger';

// Implementing a scroll stop (don't forget to call the function)
  import { disableScroll } from './functions/disable-scroll';

// Implement enabling scrolling (don't forget to call the function)
  import { enableScroll } from './functions/enable-scroll';

// Implement a modal window
  import GraphModal from 'graph-modal';

  const modal = new GraphModal();

// Implementing tabs
  import GraphTabs from 'graph-tabs';

  const tabs = new GraphTabs('tab');

// Get the height of the site header (don't forget to call the function)
  import { getHeaderHeight } from './functions/header-height';

// Connecting a custom scroll plugin
  import 'simplebar';

// Connecting a plugin for positioning tulips
  import { createPopper, right} from '@popperjs/core';

  createPopper(el, tooltip, {
    placement: 'right'
  });

// Connecting a swiper
  import Swiper, { Navigation, Pagination } from 'swiper';

  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper(el, {
    slidesPerView: 'auto',
  });

// Connecting scrolling animations
  import AOS from 'aos';

  AOS.init();

// Connection of parallax blocks when scrolling
  import Rellax from 'rellax';

  const rellax = new Rellax('.rellax');

// Connect smooth scrolling to anchors
  import SmoothScroll from 'smooth-scroll';

  const scroll = new SmoothScroll('a[href*="#"]');

// Connecting Swipe Events on Mobile
  import 'swiped-events';

  document.addEventListener('swiped', function(e) {
    console.log(e.target);
    console.log(e.detail);
    console.log(e.detail.dir);
  }

  import { validateForms } from './functions/validate-forms';
  
  const rules1 = [...];

  const afterForm = () => console.log('A sending has occurred');

  validateForms('.form-1', rules1, afterForm);
