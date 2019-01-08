
module.exports = {

  callModalCrearGrupo:()=>{

    return modalCrearGrupo();
  },
  callModalError:(texto)=>{

    return modalError(texto);
  },
   callModalPregunta:()=>{

    return modalPregunta();
  }
}

function modalCrearGrupo(){

   let $grupoModal =$("<div id='addGrupoModal' class='bootstrapModal modal' tabindex='-1' role='dialog'>"+
  "<div class='modal-dialog' role='document'>"+
    "<div class='modal-content'>"+
      "<div class='modal-header'>"+
        "<h5 class='modal-title'>Login</h5>"+
        "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"+
          "<span aria-hidden='true'>&times;</span>"+
        "</button>"+
      "</div>"+
      "<div class='modal-body'>"+
        "<form>"+       
        "<div class='form-group'>"+
          "<label for='nombreGrupo'>Nombre de Grupo</label>"+
          "<input type='Text' class='form-control' id='nombreGrupo' placeholder='Nombre' autofocus>"+
          "<small id='emailHelp' class='form-text text-muted'>Nombre del Grupo</small>"+
        "</div>"+
      //  "<button type='submit' class='btn btn-primary'>Submit</button>"+
      "</form>"+
      "</div>"+
      "<div class='modal-footer'>"+
       "<button type='button' id='addGrupoButton' class='btn btn-primary d-none'>Agregar</button>"+
       "<button type='button' id='editGrupoButton' class='btn btn-primary d-none'>Modificar</button>"+
      "</div>"+
    "</div>"+
  "</div>"+
"</div>");

   return $grupoModal;
}

function modalError(textoError){

  let $myModal =$("<div id='errorModal' class='modal bootstrapModal' tabindex='-1' role='dialog'>"+
  "<div class='modal-dialog' role='document'>"+
    "<div class='modal-content'>"+
      "<div class='modal-header'>"+
        "<h5 class='modal-title'>Error</h5>"+
        "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"+
          "<span aria-hidden='true'>&times;</span>"+
        "</button>"+
      "</div>"+
      "<div class='modal-body'>"+
        "<p>"+textoError+"</p>"+
      "</div>"+
      "<div class='modal-footer'>"+
        "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>"+
      "</div>"+
    "</div>"+
  "</div>"+
"</div>");

  return $myModal;
}


function modalPregunta(){

  let $myModal =$("<div id='preguntaModal' class='modal bootstrapModal' tabindex='-1' role='dialog'>"+
  "<div class='modal-dialog' role='document'>"+
    "<div class='modal-content'>"+
      "<div class='modal-header'>"+
        "<h5 class='modal-title'>Atencion</h5>"+
        "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"+
          "<span aria-hidden='true'>&times;</span>"+
        "</button>"+
      "</div>"+
      "<div class='modal-body'>"+
        "<p>esta seguro que desea guardar los cambios?</p>"+
      "</div>"+
      "<div class='modal-footer'>"+
        "<button type='button' id='saveButtonGroup' class='btn btn-primary'>Guardar</button>"+
        "<button type='button' id='cancelButtonGroup' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>"+
      "</div>"+
    "</div>"+
  "</div>"+
"</div>");

  return $myModal;
}