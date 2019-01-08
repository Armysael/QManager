

let data=[];
let equiposDisponibles;
let grupoEquipos=[]
let editGroup;


module.exports = {

	setData:(obj)=>{
		data.push(obj);
	},

	getData:()=>{
		return data;
	},
	clearData:()=>{
		data=[];
	},
    setGrupo:(obj)=>{
        grupoEquipos.push(obj);
    },

    getGrupo:()=>{
        return grupoEquipos;
    },
    clearGrupo:()=>{
        grupoEquipos=[];
    },
    setEditGroup:(obj)=>{
        editGroup =obj;
    },

    getEditGroup:()=>{
        return editGroup;
    },

    clearEditGroup:()=>{
        editGroup="";
    },
    setEquiposDisponibles:(obj)=>{
        equiposDisponibles =obj;
    },

    getEquiposDisponibles:()=>{
        return equiposDisponibles;
    },

    clearEquiposDisponibles:()=>{
        equiposDisponibles="";
    },

    fetchAsyncData:(url)=>{
        return getSomeData(url);
    },

    armadorGrupo:(objGrupo,nombre)=>{

        return armarGrupo(objGrupo,nombre);
    },
    guardarGrupoJsonCall:(dir,obj)=>{

         guardarGrupoJson(dir,obj);
    }



}

    async function getSomeData(url){

      let response = await fetch(url);
      return await response.json();
    }

    function agregarEquipoAGrupo(idGrupo,objEquipo){

        let objGrupo = getGrupo();

        for (var i = objGrupo.length - 1; i >= 0; i--) {
            if(objGrupo[i]["Id"]==idGrupo){


            }
        }
    }

    function armarGrupo(objGrupo,nombre){

        let nuevoId;

        if(objGrupo.length > 0){
          nuevoId =  objGrupo[objGrupo.length-1]["Id"]+1
        }else{
            nuevoId=0;
        }

        let grupo ={"Id":nuevoId,"Nombre":nombre,"Equipos":[]}

            return grupo;
    }


 function guardarGrupoJson(dir,obj){


  let fs = require('fs');
    fs.writeFile(dir, obj, function(err) {
    if (err) {
        console.log(err);
    }
});
$('#preguntaModal').modal('hide');
}