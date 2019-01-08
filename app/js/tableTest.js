

/*
$(document).ready(function() {

  $("#myTable").DataTable({
    ajax: {
      url: "https://jsonplaceholder.typicode.com/users", // De dónde vamos a buscar los datos de la tabla
      dataSrc: "" // Qué atributo queremos acceder de la respuesta
    },
    columns: [
      { title: "Nombre", data: "name" },
      { title: "Nombre de Usuario", data: "username"},
      { title: "Calle", data: "address.street"},
    ]
  });

});*/



module.exports = {

  cargarATabla: (obj)=>{
    cargarTabla3(obj);
  }
}

/*
function fuiLlamado(){
  console.log("asdasdsads");
}*/

//preparar objeto tipo ID, Nombre, PuntosTotales
function cargarTabla3(obj){
  $("#myTable").DataTable({
    responsive: true,
    data: obj,
    columns: [
      { title: "ID", data: "Id" },
      { title: "Nombre", data: "Nombre"},
      { title: "Puntos", data: getpuntos("Id")},
    ]
  });
}

function getpuntos(obj){
  console.log(obj);
}
function cargarATabla(){


    $("#myTable").DataTable({
    order: [ 1, "asc" ],
    pageLength: 5,
    lengthMenu: [ [3, 5, 10, 25, 50, -1], [3, 5, 10, 25, 50, "Todas"] ],
    stateSave: true,
    // responsive: false,
    columnDefs: [
        {
         className: 'dt-body-center dt-head-left',
         targets: [0]       
        },
      {
         className: 'dt-body-right dt-head-right',
         targets: [1]       
        }
    ],
    language: {
      paginate: {
        previous: "Anterior",
        next: "Siguiente"
      },
      lengthMenu: "Mostrar _MENU_ entradas",
      infoFiltered: " - filtrado de _MAX_ entradas",
      infoEmpty: "No hay entradas para mostrar",
      info: "Mostrando página _PAGE_ de _PAGES_",
      search: "Buscar:",
      zeroRecords: "No hay entradas para mostrar"
    }
  });
}


function cargarTabla2(obj){

$(document).ready(function() {
  $("#myTable").DataTable({
    lengthMenu: [2, 3, 5],
    order: [ 3, "desc" ],
    stateSave: true,
    columnDefs: [
        {
            targets: [0,1],
            className: 'dt-head-left'
        },
        {
            targets: [2,3],
            className: 'dt-head-right dt-body-right'
        }
      
    ],
    language: {
      paginate: {
        previous: "Anterior",
        next: "Siguiente"
      },
      lengthMenu: "Mostrar _MENU_ entradas",
      infoFiltered: " - filtrado de _MAX_ entradas",
      infoEmpty: "No hay entradas para mostrar",
      info: "Mostrando página _PAGE_ de _PAGES_",
      search: "Buscar:",
      zeroRecords: "No hay entradas para mostrar"
    },
    ajax: {
      url: obj,
      data: "" 
    },
    columns: [
      { title: "ID", data: "artists.0.name" },
      { title: "Album", data: "name" },
      { title: "Cantidad de canciones", data: "total_tracks" },
      { title: "Fecha de lanzamiento", data: "release_date" },
    ]
  });
});


}




/*---------------------------------------------------*/

  /*  $(function() {
        let auxEquipo;
        $(".connectedSortable").sortable({
            items: ".ui-state-default",
            connectWith: ".connectedSortable",
            placeholder: "ui-state-highlight",
            receive: function(event, ui) {
             let  pattern = /\w+/g;
          

            let objAux = dataMag.getEquiposDisponibles();

          //  console.log(ui.item.attr('id').match(pattern)[1]+"=="+event.target.id);

               objAux.find(Element => Element["code"]==ui.item.attr('id').match(pattern)[1]).estado=event.target.id//=event.target.id;
                console.log(objAux.find(Element => Element["code"]==ui.item.attr('id').match(pattern)[1]).estado+"="+event.target.id);
              dataMag.setEquiposDisponibles(objAux);

             

            *//*,
            remove: function(event,ui){
                console.log(event.target.id);
            }*/
       /* }).disableSelection();
    });*/

/*
    $("#loadURL").on("click", function() {

        table.cargarATabla(dataMag.getData());
    });


    module.exports = {

    showObject: (text) => {

        for (var i = text.length - 1; i >= 0; i--) {

            returnJSON("../xlsx/" + text[i], formarObjetoNuevo);
        }

    },

    testOnLoad: (text) => {

       /* for (var i = text.length - 1; i >= 0; i--) {

            returnJSON("../xlsx/" + text[i], formarObjetoNuevo);
        }*/
      //  dataMag.loadTeamJson("../resources/listaPaises.json",screenE.addSortableItem,text);
        
       // console.log("Se ejecuto el onload");
        //console.log(text);
   /* }

}
*/