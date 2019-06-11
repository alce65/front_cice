export function ajax(url, metodo, callback) {

    const http = new XMLHttpRequest()

    http.addEventListener('readystatechange', onResponse)
    //  http.onreadystatechange = onResponse

    http.open(metodo, url)
    http.send(null)

    function onResponse() {
        console.log(http.readyState)
        if (http.readyState == 4 && http.status == 200) {
            callback(http.responseText)
        }
    }
}