
const dataMag = require('../groupMagnament/dataMagnament.js');
const groupModal = require('../groupMagnament/groupModalEngine.js');

//funciones a exportar
module.exports = {

  loadToolBar: ()=>{
    loadToolBarMain();
  },
  prepareTeamScreen: ()=>{
    prepareTeamScreenMain();
  },
  teamMaker: ()=>{
    teamMakerMain();
  },
  groupMaker: (nombreGrupo,grupoNextId)=>{
    groupMakerMain(nombreGrupo,grupoNextId);
    
  },
  teamSortable: ()=>{
    //construye lista de paises
    teamSortableMain();
  },
  addSortableItem: (value,path,code)=>{
    return  addSortableItemMain(value,path,code);
  },
  refreshHooks: ()=> {  
    refreshHooksMain();
  },
  pintarBanderas: (continentFilter,valueFilter,fromFilter)=>{
    pintarBanderasMain(continentFilter,valueFilter,fromFilter);
  },
  loadTeams: (data)=>{
    loadTeamsMain(data);    
  },
  filterTeams: (data,filtroContinente,filtroBusqueda)=>{
    return filterTeamsMain(data,filtroContinente,filtroBusqueda);
  },
  editGroup: (data)=>{
    return editGroupMain(data);
  },
  addNewGroup: ()=>{
     addNewGroupMain();
  },
  loadGroups: (obj)=>{
     return loadGroupsMain(obj);
  }
}
/*


/* funciones del archivo*/
function prepareTeamScreenMain(){
  let $allGroupsContainer = $("<div id='allGroupsContainer' class='col-8 row'></div>");
  let $allTeamsContainer = $("<div id='allTeamsContainer' class='col-4 row justify-content-center'></div>");

  let $workArea = $("#workArea");

  $allGroupsContainer.appendTo($workArea);
  $allTeamsContainer.appendTo($workArea);
}

function teamMakerMain(){
  let $teamContainer=$("<div id='teamContainer' class='row col-12'></div>");
  let $teamBanner =$("<div id='teamBanner' class='col-4'></div>");
  let $teamName = $("<div id='teamName' class='col-6'></div>");
  let $teamAcronym = $("<div id='teamAcronym' class='col-2'></div>");

  $teamBanner.appendTo($teamContainer);
  $teamName.appendTo($teamContainer);
  $teamAcronym.appendTo($teamContainer);

  $teamList =$("#teamList");

  $teamContainer.appendTo($teamList);
}

function groupMakerMain(nombreGrupo,grupoNextId){
  let $taskGroup=$("<div id='groupContainer-"+grupoNextId+"' class='taskGroup col-12 categoria-align'></div>");
  let $taskHeader =$("<div id='groupHeader' class='row justify-content-around'></div>");
  let $divOption=$("<div> <i class='optionButtons fas fa-grip-vertical'></i></div>");
  let $titulo=$("<div id='titulo'>"+nombreGrupo+"</div>");
  
  let $iconosRow=$("<div id='iconosRow' class='row justify-content-center' data-toggle='tooltip' data-placement='bottom'>"+
                "<div class='dropdown col-1'>"+
                                    "<button class='btn btn-secondary dropdown-toggle noBordersOption dropArrowSection' type='button' id='dropdownSection-"+grupoNextId+"' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+
                                    "<i id ='option-1' class='optionButtons fas fa-ellipsis-v'></i>"+
                                    "</button>"+
                                    "<div  class='dropdown-menu noBordersOption' aria-labelledby='dropdownSection-"+grupoNextId+"'>"+
                                       "<div class='btn-group' role='group' aria-label='Basic example'>"+
                                           "<button id='editTaskOption-"+grupoNextId+"' type='button' class='btn btn-sm btn-secondary'><i class='fas fa-pen'></i></span></button>"+
                                          "<button id='deleteTaskOption-"+grupoNextId+"' type='button' class='btn btn-sm btn-secondary'><i class='fas fa-skull'></i></span></button>"+
                                       "</div>"+
                                    "</div>"+
                                 "</div>"+
                "<a class='col-1' data-toggle='collapse' href='#taskGroupBodyMain-"+grupoNextId+"' role='button' aria-expanded='false' aria-controls='taskGroupBodyMain-"+grupoNextId+"'>"+
                "<i class='optionButtons fas fa-chevron-down'></i></a>"+
              "</div>");
  
  let $taskGroupBodyMain=$("<div id='taskGroupBodyMain-"+grupoNextId+"' class='taskGroupBodyMain  multi-collapse row justify-content-center collapse show'></div>");
  let $taskGroupBody=$("<div id='taskGroupBody-"+grupoNextId+"' class='row justify-content-center connectedSortable taskGroupBody col-12'></div>");

  $divOption.appendTo($taskHeader);
  $titulo.appendTo($taskHeader);
  $iconosRow.appendTo($taskHeader);
  $taskHeader.appendTo($taskGroup);
  $taskGroupBody.appendTo($taskGroupBodyMain);
  $taskGroupBodyMain.appendTo($taskGroup);

$allGroupContainer = $("#allGroupsContainer");
 
$taskGroup.appendTo($allGroupContainer);
refreshHooksMain();
}

function loadToolBarMain(){

  let $toolBarMain = $("<nav id='barra-herramientas' class='row navbar navbar-expand-lg justify-content-center'> </nav>");

  let $buttonGroupToolBar =$("<div id='toolBarEstatiscFilter' class='col-6 row justify-content-around'></div>");

  let $addGroup = $("<button id='addGrupo' type='button' class='col-4 btn btn-primary' data-toggle='tooltip' data-placement='bottom' title='lista de jugadores'>"+
                    "<span>Agregar Grupos</span></button>");

  let $saveButton  = $("<button id='saveGrupo' type='button' class='col-4 btn btn-success' data-toggle='tooltip' data-placement='bottom' title='ventana Equipos'>"+
                       "<span>Guardar</span></button>");

  $addGroup.appendTo($buttonGroupToolBar);
  $saveButton.appendTo($buttonGroupToolBar);  
  $buttonGroupToolBar.appendTo($toolBarMain);  

   $contenedor = $("#mainContainer");

   $toolBarMain.prependTo($contenedor);
       
}
 function teamSortableMain(){
  let $mainTeamGrouper = $("<div id='mainTeamGrouper' class='row justify-content-center'></div>")
  let $mainTeamHeader = $("<div id='mainTeamHeader' class='row justify-content-center col-12'></div>"); 
  let $mainTeamBody =$("<div id='mainTeamBody' class='connectedSortable row justify-content-center list-container'></div>");
  let $teamBodyWrapper=$("<div id='teamBodyWrapper' class='col-10'></div>")


  let $searchBar =$("<div id='searchBar' class='col-8'><input type='text' id='teamSearchBar' class='form-control'  aria-label='Recipient's username' aria-describedby='basic-addon2'></div>");

   let $filterOption =   $( "<div id='prioridadControlGroup' class='btn-group btn-group-toggle col-8' >"+
      "<label class='btn btn-sm btn-light active'>"+
        "<input type='radio' class='globeOption' name='continentOptions' id='option1' autocomplete='off' value='Globe' checked><i class='fas fa-globe'></i></span>"+
      "</label>"+
      "<label class='btn btn-sm btn-light'>"+
        "<input type='radio' class='globeOption' name='continentOptions' id='option2' autocomplete='off' value='America'> <i class='fas fa-globe-americas'></i></span>"+
      "</label>"+
      "<label class='btn btn-sm btn-light'>"+
        "<input type='radio' class='globeOption' name='continentOptions' id='option3' autocomplete='off' value='Europe'><i class='fas fa-globe-europe'></i></span>"+
      "</label>"+
      "<label class='btn btn-sm btn-light'>"+
        "<input type='radio' class='globeOption' name='continentOptions' id='option4' autocomplete='off' value='Asia'><i class='fas fa-globe-asia'></i></span>"+
      "</label>"+
      "<label class='btn btn-sm btn-light'>"+
        "<input type='radio' class='globeOption' name='continentOptions' id='option5' autocomplete='off' value='Africa'><i class='fas fa-globe-africa'></i></i></span>"+
      "</label>"+
      "<label class='btn btn-sm btn-light'>"+
        "<input type='radio' class='globeOption' name='continentOptions' id='option6' autocomplete='off' value='Oceania'><i class='fas fa-globe-asia'></i></span>"+
      "</label>"+
    "</div>");

  $searchBar.appendTo($mainTeamHeader);
  $filterOption.appendTo($mainTeamHeader);

  $mainTeamHeader.appendTo($mainTeamGrouper); 
  $mainTeamBody.appendTo($teamBodyWrapper);
  $teamBodyWrapper.appendTo($mainTeamGrouper); 

  $allTeams= $("#allTeamsContainer");

  $mainTeamGrouper.appendTo($allTeams);
}

function refreshHooksMain(){
 let objGrupo = dataMag.getGrupo();
  let auxEquipo=[];
  let maxLimit = true;
  $(".connectedSortable").sortable({
    items: ".ui-state-default",
    connectWith: ".connectedSortable",
    placeholder: "ui-state-highlight",
    receive: function(event, ui) {

      if(!maxLimit){
      let  pattern = /\w+/g;
      let  pattern2 = /\d+/g;
      let objAux = dataMag.getEquiposDisponibles();

      if(!(auxEquipo.length > 0)){  
        auxEquipo.push({"code":ui.item.attr('id').match(pattern)[1]})
      }
      
      if(event.target.id!="mainTeamBody"){
          objGrupo.find(Element => Element["Id"]==event.target.id.match(pattern2).pop())["Equipos"].push(auxEquipo[0]);
      }
      objAux.find(Element => Element["code"]==ui.item.attr('id').match(pattern)[1]).estado=event.target.id

       
      dataMag.setEquiposDisponibles(objAux);
      auxEquipo=[]
    }else{
       $(ui.sender).sortable('cancel');
       $('body').append( groupModal.callModalError("maxima cantidad de equipos es 6"));
       $('#errorModal').modal({backdrop: 'static', keyboard: false});
       $('#errorModal').modal('show');
    }
    },
      remove: function(event,ui){
         if(!maxLimit){
        let  pattern = /\w+/g;

        let indice;
        if(event.target.id!="mainTeamBody"){
        let arr = objGrupo.find(Element => Element["Equipos"].find(Element => Element["code"]==ui.item.attr('id').match(pattern)[1]))["Equipos"];

         $.each(arr,function(index,value){
            if(value["code"]==ui.item.attr('id').match(pattern)[1])
            {
              indice =index;
            }              
         });
     
       auxEquipo = objGrupo.find(Element => Element["Equipos"].find(Element => Element["code"]==ui.item.attr('id').match(pattern)[1]))["Equipos"].splice(indice,1);
     }
   }
      },
      change: function(event,ui){
        let  pattern = /[A-Za-z]+[-][\d]{1,2}/g;
        if($(this).attr("id").match(pattern)){
         
          if($(this).children().length < 7){
            maxLimit=false;

          }else{
            maxLimit=true;

          }
        }
        
      }
  }).disableSelection();
}

function pintarBanderasMain(continentFilter,valueFilter,fromFilter){
  if(fromFilter == null){
    fromFilter=false;
  }
  $("#mainTeamBody").empty();
  if(fromFilter){
    loadTeamsMain(filterTeamsMain(dataMag.getEquiposDisponibles().filter(Element => Element["estado"]=="mainTeamBody"),continentFilter,valueFilter));  
  }else{
     loadTeamsMain(filterTeamsMain(dataMag.getEquiposDisponibles(),continentFilter,valueFilter));  
  }
}

function  addSortableItemMain(value,path,code){
  $mainTeamItem = $("<div id='mainTeamItem-"+code+"' class='ui-state-default col-4'></div>")
  $teamItemHeader = $("<div id='teamItemHeader' class=''><img class='banderas' src='../resources/flags/png/"+path+"'></div>")
  $teamItemBody = $("<div id='teamItemBody' class=''>"+value+"</div>");

  $teamItemHeader.appendTo($mainTeamItem);
  $teamItemBody.appendTo($mainTeamItem);

  return $mainTeamItem;
}

function loadTeamsMain(data){    
 
  for (var i = 0; i < data.length; i++) {
       let  $contenedor = $("#"+data[i]["estado"]);
      addSortableItemMain(data[i]["name"],data[i]["path"],data[i]["code"]).appendTo($contenedor);
  }
}

function filterTeamsMain(data,filtroContinente,filtroBusqueda){
  let filtered = data;
  //filtramos por continente dejando la seleccion o todos
  if(filtroContinente != "Globe"){
    filtered = filtered.filter( element => element["continente"]==filtroContinente);
  }
  //filtramos los paises que busque en la barra de busqueda hace chain con el filtrado de continentes
  let regex = new RegExp("^"+filtroBusqueda,"gi")

  return filtered.filter(function(currentItem) {
    return currentItem["name"].match(regex);// !== -1;
  });
}

//edita el nombre del grupo tanto en FE como BE
function editGroupMain (objGrupo){
 let  pattern = /\d+/g;

  dataMag.getGrupo().find(Element => Element["Id"]==objGrupo.attr("id").match(pattern).pop()).Nombre=$("#nombreGrupo").val();
  objGrupo.find("#titulo").text($("#nombreGrupo").val())
  $("#addGrupoModal").modal("hide");
}

function addNewGroupMain(){

   let obj = dataMag.armadorGrupo(dataMag.getGrupo(),$("#nombreGrupo").val());
      dataMag.setGrupo(obj);
      groupMakerMain(obj["Nombre"], obj["Id"]);

      $("#addGrupoModal").modal("hide");
}


 function loadGroupsMain(obj){


  let  pattern = /\w+/g;
  let objAux = dataMag.getEquiposDisponibles();

    for (var i = 0; i < obj.length; i++) {
      dataMag.setGrupo(obj[i]);
      groupMakerMain(obj[i]["Nombre"], obj[i]["Id"]);  
 
      $.each(obj[i]["Equipos"],function(index,value){
        objAux.find(Element => Element["code"]==value["code"]).estado="taskGroupBody-"+obj[i]["Id"];
      });
    }

  return objAux;
}