

  (function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.ie/genesys-bootstrap/genesys.min.js', {
    environment: 'euw1',
    deploymentId: '8535b668-213d-4ee6-9786-023aadb614b7'
  });


function myFunction(){
  Genesys("command", "Messenger.open");
}




/*Genesys("subscribe", "Messenger.ready", function(o) {
    document.getElementById("start").click();
});*/
