define(["Modernizr"],function(i){i.addTest("history",function(){var i=navigator.userAgent;return-1===i.indexOf("Android 2.")&&-1===i.indexOf("Android 4.0")||-1===i.indexOf("Mobile Safari")||-1!==i.indexOf("Chrome")||-1!==i.indexOf("Windows Phone")?window.history&&"pushState"in window.history:!1})});