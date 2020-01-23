// ==UserScript==
// @name         mp3.365bncz.com/Download
// @version      0.1
// @description  随手写的脚本
// @author       Kuai
// @include         *://mp3.365bncz.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var src, name;
    src = document.getElementById("imgbb").src;
    name = document.getElementsByClassName("content")[0].innerHTML.replace(/(^\s*)|(\s*$)/g, "");
    console.log(src);
    console.log(name);
    var x = new XMLHttpRequest();
    x.open("GET", src, true);
    x.responseType = 'blob';
    x.onload = function(e) {
        var url = window.URL.createObjectURL(x.response);
        var a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
    }
    x.send();

})();