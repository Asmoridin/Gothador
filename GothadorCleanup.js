// ==UserScript==
// @name        GothadorCleanup
// @namespace   Asmoridin
// @description Cleaning up images in Gothador
// @include     https://www.gothador.com/*
// @version     1
// @run-at      document-start
// ==/UserScript==

(function() {

  var urls = [
    //pairs of 2 URLs: original then replacement
    ["http://www.my-page.com/public/style_images/logo1.gif", "http://www.some-image-host.com/images/923467304/fakelogo.gif"],
    ["http://www.my-page.com/public/style_images/original.gif", "http://www.otherpage.com/replacement.jpg"]
  ];
  var timer, lastImageCount = 0;

  function process() {
    var i, j, ele, images = document.images, urlPair;
    for (i = lastImageCount, ele = images[i]; i < images.length; i++) {
      for (j = 0, urlPair = urls[j]; j < urls.length; j++) {
        if (ele.src == urlPair[0]) {
          ele.src = urlPair[1];
        }
      }
    }
    lastImageCount = images.length;
  }

  addEventListener("DOMContentLoaded", function() {
    window.clearInterval(timer);
  }, false);
  timer = window.setInterval(process, 200);

}();
