(function () {
    //var x = "Hello!!";  // I will invoke myself
    let key = SafgetQueryVariable('saf');
    console.log('saf key: ', key);
    if (key) {
        window.safkp = key;
    }
})();

function saf(t, k) {
    let w = window.safkp;

    if (w) {
        let the_url = 'https://dev-api.jabburr.com/ads/tracking?saf=' + w + '&sk=' + k + '&t=' + t;
        console.log('saf called with url: ', the_url);
        httpGetAsync(the_url);
    }
}

function httpGetAsync(theUrl, callback = function () {}) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}



function SafgetQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
