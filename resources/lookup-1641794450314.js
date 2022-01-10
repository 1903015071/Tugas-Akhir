(function(window, undefined) {
  var dictionary = {
    "193fb426-3cc2-46d8-96fe-320d81ff3f28": "Semua Koleksi Akun",
    "5a2957c1-b04d-4dc3-a2dd-31bf1c8adfb6": "Semua Koleksi",
    "3d63a0ea-03d3-4b27-a28e-a25d138e3246": "Informasi Akun",
    "1aeaf3d1-51e9-4271-ba57-fe9b1935171e": "Informasi",
    "01784c7f-9725-476e-b639-1455ded04d46": "Konfirmasi Pembayaran Akun",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Dashboard",
    "19ff3ebb-81db-4c6d-a2df-833a584bb4a6": "Clone Pembayaran",
    "45133336-f0b3-473a-8faf-0eba0104fbb5": "Halaman Login",
    "ddbdd373-9ae9-49ad-9bd7-75bdaf306386": "Halaman Register",
    "b105339b-a610-4979-91b2-a9d79837aebb": "Dashboard Akun",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);