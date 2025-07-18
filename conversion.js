(function () {
    let key = SafgetQueryVariable('saf');
    console.log('[conversion.js] Query param "saf":', key); // Debug log
    if (key) {
        window.safkp = key;
        console.log('[conversion.js] window.safkp set to:', window.safkp); // Debug log
    }
})();

// function saf(t, k) {
//     let w = window.safkp;
//     console.log('[conversion.js] saf() called with:', { t, k, w }); // Debug log
//     if (w) {
//         let the_url = url('ads/tracking?=saf=') + w + '&sk=' + k+ '&t='+t;
//         console.log('[conversion.js] Tracking URL:', the_url); // Debug log
//         httpGetAsync(the_url);
//     } else {
//         console.log('[conversion.js] window.safkp not set, skipping tracking'); // Debug log
//     }
// }

function saf(t, k, w) {
    let w = window.safkp;
    console.log('[conversion.js] saf() called with:', { t, k, w }); // Debug log
    if (w) {
        // Build the URL directly
        let the_url = 'https://dev-api.jabburr.com/ads/tracking?saf=' + encodeURIComponent(w) + '&sk=' + encodeURIComponent(k) + '&t=' + encodeURIComponent(t);
        console.log('[conversion.js] Tracking URL:', the_url); // Debug log
        httpGetAsync(the_url);
    } else {
        console.log('[conversion.js] window.safkp not set, skipping tracking'); // Debug log
    }
}

function httpGetAsync(theUrl, callback) {
    console.log('[conversion.js] httpGetAsync() called with URL:', theUrl); // Debug log
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log('[conversion.js] httpGetAsync() response:', xmlHttp.responseText); // Debug log
            if (callback) callback(xmlHttp.responseText);
        }
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function SafgetQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            console.log('[conversion.js] Found query variable:', variable, 'value:', pair[1]); // Debug log
            return pair[1];
        }
    }
    console.log('[conversion.js] Query variable not found:', variable); // Debug log
    return (false);
}
