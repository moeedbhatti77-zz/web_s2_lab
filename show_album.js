$(function () { 
    var url = window.location.href;
    var id = url.split('=');
    show(id[1]);
});
function show(id) { 
    fetch('https://jsonplaceholder.typicode.com/albums?userId='+id)
    .then(response => response.json())
    .then(json => json.forEach(function(val) {
            $('#t_body').append("<tr><td>"+val.id+"</td><td>"+val.title+"</td><td><button class='btn btn-primary'>Update</button></td></tr>");
    })
    );
}