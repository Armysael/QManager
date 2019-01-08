/*const screenE = require('../js/screenEngine.js');

module.exports = {

	loadTeams: (data)=>{

          
      $contenedor = $("#mainTeamBody");


    for (var i = 0; i < data.length; i++) {
        
        if(data[i]["estado"]=="mainTeamBody"){
           screenE.addSortableItem(data[i]["name"],data[i]["path"],data[i]["code"]).appendTo($contenedor);
        }
       
      }

  },
  filterTeams: (data,filtroContinente,filtroBusqueda)=>{

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
}

*/