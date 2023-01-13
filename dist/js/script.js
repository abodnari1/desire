"use strict";function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var rightsideMenuOpen=document.querySelector(".header__btn"),rightsideMenuClose=document.querySelector(".rightside-menu__close"),rightsideMenu=document.querySelector(".rightside-menu");rightsideMenuOpen.addEventListener("click",function(){rightsideMenu.classList.remove("rightside-menu--close")}),rightsideMenuClose.addEventListener("click",function(){rightsideMenu.classList.add("rightside-menu--close")}),null!==document.querySelector(".swiper")&&new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},loop:!0,autoplay:{delay:6e3,disableOnInteraction:!0}});var mixer,containerEl=document.querySelector(".gallery__inner");containerEl&&(mixer=mixitup(containerEl,{animation:{clampWidth:!1},load:{filter:".living"}}));var aboutVideoContainer=document.querySelector(".video-container"),aboutVideo=document.querySelector(".video-file"),aboutClose=document.querySelector(".video-close"),aboutPlay=document.querySelector(".about__video-play");aboutPlay&&aboutVideoContainer&&null!==aboutVideo&&aboutPlay.addEventListener("click",function(){aboutVideoContainer.classList.add("video-container--active"),aboutVideo.classList.add("video--active")}),aboutClose&&aboutVideoContainer&&null!==aboutVideo&&aboutClose.addEventListener("click",function(){aboutVideo.pause(),aboutVideoContainer.classList.remove("video-container--active"),aboutVideo.classList.remove("video--active")});var blogPlay=document.querySelector(".blog__article-play");if(blogPlay&&aboutVideoContainer&&null!==aboutVideo&&blogPlay.addEventListener("click",function(){aboutVideoContainer.classList.add("video-container--active"),aboutVideo.classList.add("video--active")}),null!==document.querySelector(".slider-contact")&&new Swiper(".slider-contact",{pagination:{el:".swiper-pagination",clickable:!0},loop:!0,spaceBetween:20,breakpoints:{1900:{slidesPerView:10,slidesPerGroup:10},1850:{slidesPerView:9,slidesPerGroup:9},1500:{slidesPerView:8,slidesPerGroup:8},1300:{slidesPerView:7,slidesPerGroup:7},1100:{slidesPerView:6,slidesPerGroup:6},900:{slidesPerView:5,slidesPerGroup:5},750:{slidesPerView:4,slidesPerGroup:4},550:{slidesPerView:3,slidesPerGroup:3},320:{slidesPerView:2,slidesPerGroup:2}}}),null!==document.querySelector(".article-slider")&&new Swiper(".article-slider",{navigation:{nextEl:".article-slider__btn-next",prevEl:".article-slider__btn-prev"},autoHeihgt:!0}),null!==document.querySelector("textarea")){var resize=function(){var e=this;setTimeout(function(){e.style.cssText="height:auto; padding:100",e.style.cssText="height:"+e.scrollHeight+"px"},1)},textarea=document.getElementsByTagName("textarea")[0];textarea.addEventListener("keydown",resize)}var _step,mobileBtn=document.querySelector(".header__menu-btn"),menu=document.querySelectorAll(".menu"),menuLink=document.querySelectorAll(".menu__link"),_iterator=_createForOfIteratorHelper(menu);try{var _loop=function(){var e=_step.value;mobileBtn.addEventListener("click",function(){e.classList.toggle("menu--close")});var t,r=_createForOfIteratorHelper(menuLink);try{for(r.s();!(t=r.n()).done;){t.value.addEventListener("click",function(){e.classList.toggle("menu--close"),mobileBtn.classList.toggle("header__menu-btn--open")})}}catch(e){r.e(e)}finally{r.f()}};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}mobileBtn.addEventListener("click",function(){mobileBtn.classList.toggle("header__menu-btn--open")});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyaWdodHNpZGVNZW51T3BlbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJpZ2h0c2lkZU1lbnVDbG9zZSIsInJpZ2h0c2lkZU1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwiYXV0b3BsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsIm1peGVyIiwiY29udGFpbmVyRWwiLCJtaXhpdHVwIiwiY2xhbXBXaWR0aCIsImxvYWQiLCJmaWx0ZXIiLCJhYm91dFZpZGVvQ29udGFpbmVyIiwiYWJvdXRWaWRlbyIsImFib3V0Q2xvc2UiLCJhYm91dFBsYXkiLCJhZGQiLCJjbGFzc0xpc3QiLCJwYXVzZSIsInJlbW92ZSIsImJsb2dQbGF5IiwibG9vcCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzbGlkZXNQZXJHcm91cCIsIjE4NTAiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYXV0b0hlaWhndCIsInJlc2l6ZSIsInRoaXMiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJjc3NUZXh0Iiwic2Nyb2xsSGVpZ2h0IiwidGV4dGFyZWEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1vYmlsZUJ0biIsIm1lbnUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUxpbmsiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsInRvZ2dsZSIsIl9zdGVwMiIsIl9pdGVyYXRvcjIiLCJzIiwibiIsImRvbmUiLCJ2YWx1ZSIsImVyciIsImUiLCJmIiwiX3N0ZXAiXSwibWFwcGluZ3MiOiJvcENBQ0EsSUFBSUEsa0JBQW9CQyxTQUFTQyxjQUFjLGdCQUMzQ0MsbUJBQXFCRixTQUFTQyxjQUFjLDBCQUM1Q0UsY0FBZ0JILFNBQVNDLGNBQWMsbUJBSDNDRixrQkFBQUssaUJBQUEsUUFBQSxXQUNJTCxjQUFBQSxVQUFvQkMsT0FBU0MsMkJBT2pDQyxt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QUFBLENBQUFKLEVBQUFLLE1BQ2FsRCxpQkFBWUgsUUFBYyxXQUM1QkQsRUFBQUEsVUFBUzRDLE9BQUFBLGVBQ1JGLFVBQVlFLFVBQUFBLE9BQWlCLDZCQUN0QixNQUFBVyxHQUFBTCxFQUFBTSxFQUFBRCxHQUFBLFFBQUFMLEVBQUFPLE1BQW5CLElBQUFYLFVBQUFLLE1BQUFPLE1BQUFaLFVBQUFNLEtBQUFDLE1BZm1CckQsUUFlQSxNQUFBdUQsR0FBQVQsVUFBQVUsRUFBQUQsR0FBQSxRQUFBVCxVQUFBVyxJQVduQmYsVUFYbUJ0QyxpQkFBQSxRQUFBLFdBQUFzQyxVQUFSckIsVUFBQTJCLE9BQUEiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmlnc3Rhci1tZW51IFxyXG5sZXQgcmlnaHRzaWRlTWVudU9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idG4nKSxcclxuICAgIHJpZ2h0c2lkZU1lbnVDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodHNpZGUtbWVudV9fY2xvc2UnKSxcclxuICAgIHJpZ2h0c2lkZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHRzaWRlLW1lbnUnKTtcclxuXHJcbnJpZ2h0c2lkZU1lbnVPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmlnaHRzaWRlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdyaWdodHNpZGUtbWVudS0tY2xvc2UnKTtcclxufSk7XHJcbnJpZ2h0c2lkZU1lbnVDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJpZ2h0c2lkZU1lbnUuY2xhc3NMaXN0LmFkZCgncmlnaHRzaWRlLW1lbnUtLWNsb3NlJyk7XHJcbn0pO1xyXG4vLyDQmNC90LjRhtC40LvQuNC30LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQsFxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJykgIT09IG51bGwpIHtcclxuICAgIG5ldyBTd2lwZXIoJy5zd2lwZXInLHtcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiA2MDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8g0JzQuNGF0LjRgtCw0LFcclxudmFyIGNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX2lubmVyJyk7XHJcbnZhciBtaXhlcjtcclxuXHJcbmlmIChjb250YWluZXJFbCkge1xyXG4gICAgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XHJcbiAgICAgICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgICAgICBjbGFtcFdpZHRoOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgIGxvYWQ6IHtcclxuICAgICAgICAgICAgIGZpbHRlcjogJy5saXZpbmcnXHJcbiAgICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyDQktC40LTQtdC+IEFib3V0XHJcbmxldCBhYm91dFZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvLWNvbnRhaW5lcicpLFxyXG4gICAgYWJvdXRWaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlby1maWxlJyksXHJcbiAgICBhYm91dENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvLWNsb3NlJyksXHJcbiAgICBhYm91dFBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX3ZpZGVvLXBsYXknKTtcclxuaWYgKGFib3V0UGxheSAmJiBhYm91dFZpZGVvQ29udGFpbmVyICYmIGFib3V0VmlkZW8gIT09IG51bGwpIHtcclxuICAgIGFib3V0UGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBhYm91dFZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZpZGVvLWNvbnRhaW5lci0tYWN0aXZlJyk7XHJcbiAgICAgICAgYWJvdXRWaWRlby5jbGFzc0xpc3QuYWRkKCd2aWRlby0tYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufTtcclxuaWYgKGFib3V0Q2xvc2UgJiYgYWJvdXRWaWRlb0NvbnRhaW5lciAmJiBhYm91dFZpZGVvICE9PSBudWxsKSB7XHJcbiAgICBhYm91dENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGFib3V0VmlkZW8ucGF1c2UoKTtcclxuICAgICAgICBhYm91dFZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3ZpZGVvLWNvbnRhaW5lci0tYWN0aXZlJyk7XHJcbiAgICAgICAgYWJvdXRWaWRlby5jbGFzc0xpc3QucmVtb3ZlKCd2aWRlby0tYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufTtcclxuLy8g0JLQuNC00LXQviBCbG9nXHJcbmxldCBibG9nUGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nX19hcnRpY2xlLXBsYXknKTtcclxuaWYgKGJsb2dQbGF5ICYmIGFib3V0VmlkZW9Db250YWluZXIgJiYgYWJvdXRWaWRlbyAhPT0gbnVsbCkge1xyXG4gICAgYmxvZ1BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgYWJvdXRWaWRlb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aWRlby1jb250YWluZXItLWFjdGl2ZScpO1xyXG4gICAgICAgIGFib3V0VmlkZW8uY2xhc3NMaXN0LmFkZCgndmlkZW8tLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8vIFNsaWRlciBDb250YWN0XHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY29udGFjdCcpICE9PSBudWxsKSB7XHJcbiAgICBuZXcgU3dpcGVyKCcuc2xpZGVyLWNvbnRhY3QnLHtcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMTkwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMTAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMTBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTg1MDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogOSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiA5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDE1MDA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDgsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogOFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMzAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA3LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTEwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiA2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDkwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiA1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc1MDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiA0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDU1MDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBTbGlkZXItYXJ0aWNsZVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZS1zbGlkZXInKSAhPT0gbnVsbCkge1xyXG4gICAgbmV3IFN3aXBlcignLmFydGljbGUtc2xpZGVyJyx7XHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuYXJ0aWNsZS1zbGlkZXJfX2J0bi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLmFydGljbGUtc2xpZGVyX19idG4tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRvSGVpaGd0OiB0cnVlLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyDQkNCy0YLQvtCy0YvRgdC+0YLQsCDRgtC10YXRgtCw0YDQtdCwXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpICE9PSBudWxsKSB7XHJcbiAgICBsZXQgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCByZXNpemUpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcclxuICAgICAgICBsZXQgZWwgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OmF1dG87IHBhZGRpbmc6MTAwJztcclxuICAgICAgICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6JyArIGVsLnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vINCc0L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxyXG5sZXQgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudS1idG4nKSxcclxuICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudScpLFxyXG4gICAgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9fbGluaycpO1xyXG5mb3IgKGxldCBlbCBvZiBtZW51KSB7XHJcbiAgICBtb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS0tY2xvc2UnKTtcclxuICAgIH0pO1xyXG4gICAgZm9yIChsZXQgc3ViRWwgb2YgbWVudUxpbmspIHtcclxuICAgICAgICBzdWJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS0tY2xvc2UnKTtcclxuICAgICAgICAgICAgbW9iaWxlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbWVudS1idG4tLW9wZW4nKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufTtcclxubW9iaWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9iaWxlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbWVudS1idG4tLW9wZW4nKVxyXG59KTtcclxuXHJcblxyXG4iXX0=