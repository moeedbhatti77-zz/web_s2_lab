$(function () { 
    var url = window.location.href;
    var id = url.split('=');
    show(id[1]);
    // $('.add_album').click(function(){
    //     $.ajax({
    //         method : 'POST',
    //         url: "https://jsonplaceholder.typicode.com/albums?userId="+id[1],
    //         data: "data",
    //         dataType: "dataType",
    //         success: function (response) {
    //         }
    //     });
    // });
});
function show(id) { 
    $.ajax({
        method : "GET",
        url : 'https://jsonplaceholder.typicode.com/albums?userId='+id,
        success : function (response){
            response.forEach(function(val){
                $('#t_body').append("<tr><td>"+val.id+"</td><td>"+val.title+"</td><td><button data-id="+val.id+" class='btn btn-primary'>Update</button></td><td><button data-id="+val.id+" class='btn btn-primary del' onclick='del("+val.id+")'>Delete</button></td></tr>");
            });
        }
    });
    $('.del').click(function() {
        var id = $(this).attr('data-id'); 
        console.log(id);
        del(id);
    });
}
function del (id){
    console.log(id);
    $.ajax({
        method : 'DELETE',
        url : "https://jsonplaceholder.typicode.com/albums/"+id,
        success : function(){ 
            alert('Deleted album '+id);
            temp = "[data-id="+id+"]";
            $(temp).parent().parent().hide();
    }
    });
}