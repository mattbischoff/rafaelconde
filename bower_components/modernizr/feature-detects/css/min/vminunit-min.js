define(["Modernizr","docElement","testStyles","roundedEquals"],function(t,e,i,d){i("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}",function(i){var n=i.childNodes[1],l=i.childNodes[0],o=parseInt((l.offsetWidth-l.clientWidth)/2,10),r=e.clientWidth/100,h=e.clientHeight/100,s=parseInt(50*Math.min(r,h),10),c=parseInt((window.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);t.addTest("cssvminunit",d(s,c)||d(s,c-o))},2)});