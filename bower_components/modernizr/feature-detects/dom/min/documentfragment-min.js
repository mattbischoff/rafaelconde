define(["Modernizr","docElement"],function(n,e){n.addTest("documentfragment",function(){return"createDocumentFragment"in document&&"appendChild"in e})});