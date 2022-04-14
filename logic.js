

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

{
  "launcherButton": { visibility: "Off"} ; //set visibility to "off" or "ondemand" to disable/hide the launcher button
}

function myFunction() {
  alert("hello");
  console.log(document. getElementById('lang').selectedOptions[0].value);
  console.log(document. getElementById('topic').selectedOptions[0].value);
  Genesys("command", "Messenger.open", {},
      function(o){},  // if resolved
      function(o){    // if rejected
        Genesys("command", "Messenger.close");
      }
    );
}



