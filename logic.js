

(function (g, e, n, es, ys) {
  console.log("INSIDE FUNCTION");
  g['_genesysJs'] = e;
  g[e] = g[e] || function () {
    console.log("BEFORE PUSH ARGUMENTS");
    (g[e].q = g[e].q || []).push(arguments)
  };
  g[e].t = 1 * new Date();
  g[e].c = es;
  ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  console.log("AFTER CREATE ELEMENT");
  document.getElementById("start").style.backgroundColor="#000000";
  document.getElementById("start").style.color="#000000";
  console.log("END OF FUCNTION");
})(window, 'Genesys', 'https://apps.mypurecloud.ie/genesys-bootstrap/genesys.min.js', {
  environment: 'euw1',
  deploymentId: '8535b668-213d-4ee6-9786-023aadb614b7'
});



function myFunction() {
    console.log(document. getElementById('lang').selectedOptions[0].value);
  console.log(document. getElementById('topic').selectedOptions[0].value);
  Genesys("command", "Messenger.open", {},
      function(o){},  // if resolved
      function(o){    // if rejected
        Genesys("command", "Messenger.close");
      }
    );
}



