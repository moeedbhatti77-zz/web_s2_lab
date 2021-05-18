$(function () { 
    var url = window.location.href;
    var id = url.split('=');
    show(id[1]);
    $('.add_album').click(function(){
        $.ajax({
            method : 'POST',
            url: "https://jsonplaceholder.typicode.com/albums?userId="+id[1],
            data: "data",
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    });
});
function show(id) { 
    fetch('https://jsonplaceholder.typicode.com/albums?userId='+id)
    .then(response => response.json())
    .then(json => json.forEach(function(val) {
            $('#t_body').append("<tr><td>"+val.id+"</td><td>"+val.title+"</td><td><button class='btn btn-primary'>Update</button></td><td><button class='btn btn-primary'>Delete</button></td></tr>");
    })
    );
}