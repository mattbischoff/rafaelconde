define(["Modernizr","docElement","testStyles","roundedEquals"],function(t,e,d,i){d("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}",function(d){var n=d.childNodes[1],l=d.childNodes[0],o=parseInt((l.offsetWidth-l.clientWidth)/2,10),r=e.clientWidth/100,s=e.clientHeight/100,h=parseInt(50*Math.max(r,s),10),c=parseInt((window.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);t.addTest("cssvmaxunit",i(h,c)||i(h,c-o))},2)});