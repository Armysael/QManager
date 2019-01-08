const dataMag = require('../js/groupMagnament/dataMagnament.js');
const screenE = require('../js/groupMagnament/groupScreenEngine.js');
require('../js/groupMagnament/groupEventManager.js');



$(() => {

  //construye la ventana de armado de grupos
	//$("#armarGrupos").on("click",function(){
	$(function(){
      screenE.loadToolBar();
		  screenE.prepareTeamScreen();
    	screenE.teamSortable();

    	dataMag.fetchAsyncData("../resources/listaPaisesFixed.json").then(function(result){
    	dataMag.setEquiposDisponibles(result);
   
    	}).then(function(){
       		dataMag.fetchAsyncData("../resources/grupoData.json").then(function(groupResult){

        screenE.loadTeams(screenE.filterTeams(
                       screenE.loadGroups(groupResult),
                         $("input[name=continentOptions]:checked").val(),
                        $("#teamSearchBar").val()));  

       }).catch(function(error){
      console.log(error);
    })

    }).catch(function(error){
      console.log(error);
    })

	});

  //auto colapsa la barra de navegacion al elegir una opcion
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

});