$(document).ready(function () {
    show_users(); 
});
function show_users(){
    $.ajax({
        meyhod : 'GET',
        url: "https://jsonplaceholder.typicode.com/users",
        success: function (response) {
            response.forEach(function(temp) {
                $('#t_body').append("<tr ><td>"+temp.name+"</td><td>"+temp.email+"</td><td><a href='./user_album.html?id="+temp.id+"'><button data-id="+temp.id+" class='btn btn-primary albums'>Albums</button></a></td><td><button class='btn btn-primary update' >Update</button></td></tr>");
            });

        }
    });
}