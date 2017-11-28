var urlArr = [];
var x = 0;

function reRemove(id) {
    if (id == '0') {
        urlArr = [];
        x = 0;
    }
    chrome.bookmarks.getChildren(id, function(res) {
        for (let i in res) {
            if (res[i].url != undefined) {
                if ($.inArray(res[i].url, urlArr) != -1) {
                    chrome.bookmarks.remove(res[i].id);
                    x++;
                    $('#num').text(x);
                    $('.remove').append(" <li>" + res[i].title + "</li>");
                } else {
                    urlArr.push(res[i].url);
                }
            } else {
                reRemove(res[i].id)
            }
        }
    });
}

$('#test').click(function() {
    reRemove('0')
})