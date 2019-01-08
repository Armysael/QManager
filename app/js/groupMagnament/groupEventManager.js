const XLSX = require('xlsx');
require('popper.js'); //revisar esto si sirve o se arga por otro metodo luego
//const table = require('../js/tableTest.js');
const dataMag = require('../groupMagnament/dataMagnament.js');
const screenE = require('../groupMagnament/groupScreenEngine.js');
const groupModal = require('../groupMagnament/groupModalEngine.js');

$(() => {

/*----------------Filtros------------------------------------------------------*/
    //filtrado por continente
  $( "body" ).on("change","#prioridadControlGroup",function(){
    screenE.pintarBanderas($("input[name=continentOptions]:checked").val(),$("#teamSearchBar").val(),true);
    let $temp =$("input[name=continentOptions]:checked");

    $(this).find(".btn").each(function(index){
      $(this).removeClass("active");
      $(this).children().prop("checked",false);
    });
      
    $($temp).parent().addClass("active");
    $($temp).prop("checked",true);     
  });


 //filtrado por nombre de equipo
  $("body").on("keyup","#teamSearchBar",function(){  
    screenE.pintarBanderas($("input[name=continentOptions]:checked").val(),$("#teamSearchBar").val(),true);
  });
  
   
  //Boton de ventana para abrir modal de agregar un grupo nuevo
 $("#mainContainer").on("click","#addGrupo",function(){
   
    $('body').append(groupModal.callModalCrearGrupo());
    $('#addGrupoModal').modal({backdrop: 'static', keyboard: false});
    $('#addGrupoModal').modal('show');
    $('#addGrupoButton').removeClass("d-none"); 

  });


   $("#mainContainer").on("click","#saveGrupo",function(){
   
    $('body').append(groupModal.callModalPregunta());
    $('#preguntaModal').modal({backdrop: 'static', keyboard: false});
    $('#preguntaModal').modal('show');
  });


  //boton de modal para agregar grupo 
  $("body").on("click","#addGrupoButton",function(){
    screenE.addNewGroup();
  });

    //boton de modal para agregar grupo 
  $("body").on("click","#editGrupoButton",function(){
    
    screenE.editGroup(dataMag.getEditGroup());
  });

  //Agrega grupo dandole enter
  $("body").on("keypress","#nombreGrupo",function(event){
      //TODO: condicionar dependiendo de que boton este activo
    if(event.which=='13'){
     screenE.addNewGroup();
    }
  });

  $("body").on("click","#saveButtonGroup",function(){
    dataMag.guardarGrupoJsonCall("app/resources/grupoData.json",JSON.stringify(dataMag.getGrupo()));
     dataMag.guardarGrupoJsonCall("app/resources/listaPaisesFixed.json",JSON.stringify(dataMag.getEquiposDisponibles()));
    
  });

  //generico del modal para hacer focus al textfield principal
  $("body").on("show.bs.modal","#addGrupoModal", function () {
    $("#nombreGrupo").trigger("focus");
  });

  //generico del modal para que al  ocultarse se borre del html
  $("body").on("hidden.bs.modal",".bootstrapModal", function () {
    $(this).remove();
  });


  //Abre modal  con el valor de titulo de grupo para editar
  $("#workArea").on("click","[id^=editTaskOption-]",function(event){
    let  pattern = /\d+/g;
    $('body').append(groupModal.callModalCrearGrupo());
    $('#addGrupoModal').modal({backdrop: 'static', keyboard: false});
    $('#addGrupoModal').modal('show');
    $('#editGrupoButton').removeClass("d-none"); 
    dataMag.setEditGroup($("#groupContainer-"+$(this).attr("id").match(pattern).pop()));
    
    $("#nombreGrupo").val($("#groupContainer-"+$(this).attr("id").match(pattern).pop()).find("#titulo").text());
  
  });

  //TODO: En un futuro hacer una bdd de errores
  $("#workArea").on("click","[id^=deleteTaskOption-]",function(event){

    let  pattern = /\d+/g;
    let errorText = "No se puede eliminar grupos con equipos";

    if($("#taskGroupBody-"+$(this).attr("id").match(pattern).pop()+" > div").length > 0)
    {
      $('body').append(groupModal.callModalError(errorText));
      $('#errorModal').modal({backdrop: 'static', keyboard: false});
      $('#errorModal').modal('show');
      
    }
    else{
      dataMag.getGrupo().splice(dataMag.getGrupo().indexOf(dataMag.getGrupo().find(Element => Element["Id"]==$(this).attr("id").match(pattern).pop())),1);
      $("#groupContainer-"+$(this).attr("id").match(pattern).pop()).remove();
    }
  });

  //llamado a sortableevents
  screenE.refreshHooks();
});
