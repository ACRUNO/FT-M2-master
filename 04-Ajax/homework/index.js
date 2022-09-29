
$('#boton').click(function(){
    $.get("http://localhost:5000/amigos/", data => {
        $('ul').empty();
        data.forEach(element => {
            var lista = document.createElement('li');    
            lista.innerHTML = element.name;   
            $('#lista').append(lista);    
        });
    });
});

$('#search').click(function(){
    $.get("http://localhost:5000/amigos/", data =>{
        $('#amigo').empty();
        data.forEach((element, index) => {
            if (element.name === $("#input").val()){
                $('#amigo').text(element.name);2
            }
            //  if (element.id === $("#input").val()){
            //      $('#amigo').text(element.name);
            //  }
        })
    })
});


$('#delete').click(function(){
    var index = $("#inputDelete").val();
    $.ajax({
        url: 'http://localhost:5000/amigos/' + index,
        type: 'DELETE',
        success: () =>{
            $('#success').text("Fue borrado con Exito");
        },
        error: () => {
            $('#success').text("Error 404: ID Amigo not found");
        }
    })
})