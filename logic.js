

(function (g, e, n, es, ys) {
  alert("1 INSIDE FUNCTION");
  g['_genesysJs'] = e;
  g[e] = g[e] || function () {
    alert("2 BEFORE PUSH ARGUMENTS");
    (g[e].q = g[e].q || []).push(arguments)
  };
  g[e].t = 1 * new Date();
  g[e].c = es;
  ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  console.log("AFTER CREATE ELEMENT");
  console.log("END OF FUCNTION");
})(window, 'Genesys', 'https://apps.mypurecloud.ie/genesys-bootstrap/genesys.min.js', {
  environment: 'euw1',
  deploymentId: '8535b668-213d-4ee6-9786-023aadb614b7'
});

alert("3 SUBSCRIBING..");

//document.onload = Genesys("command", "Messenger.open");

//Genesys("subscribe", "Messenger.ready");

/*function myFunction(){
    alert("4 INSIDE THE READY BLOCK");
    Genesys("command", "Messenger.open");
}*/

