
let getAmigos = () => {
    $.get("http://localhost:5000/amigos/", data => {
        $('#lista').empty();
        data.forEach(element => {
            var lista = document.createElement('li');    
            lista.innerHTML = `${element.id}: ${element.name}`;   
            $('#lista').append(lista);    
        });
    });
}


$('#boton').click(getAmigos);

// ASI LO HABIA HECHO YO Y BUSCABA POR NOMBRE. EL EJERCICIO PEDIA POR ID
/* $('#search').click(() => {
    $.get("http://localhost:5000/amigos/", data =>{
        $('#amigo').empty();
        data.forEach((element, index) => {
            if (element.name === $("#input").val()){
                $('#amigo').text(element.name);
            }
            //  if (element.id === $("#input").val()){
            //      $('#amigo').text(element.name);
            //  }
        })
    })
}); */

//RESOLUCION DEL PROFE DEL SEARCH

$('#search').click(() => {
    let index = $('#input').val();
    $.get(`http://localhost:5000/amigos/${index}`, data =>{
        $('#amigo').empty();
        $('#amigo').text(data.name);
    })
});


$('#delete').click(() => {
    var index = $("#inputDelete").val();
    // $('#success').empty();
    $.ajax({
        url: 'http://localhost:5000/amigos/' + index,
        type: 'DELETE',
        success: () =>{
            $('#success').text("Fue borrado con Exito");
            getAmigos();
        },
        error: () => {
            $('#success').text("Error 404: ID Amigo not found");
            
        }
    })
})