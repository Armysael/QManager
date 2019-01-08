




//funcion para cargar tablas ... por aplicar
function formarObjetoNuevo(data) {


    let obj = data;

    let id = obj["0"]["ID"];
    let nombre = obj["0"]["Nombre"];
    let juegos = [];
    for (var i = obj.length - 1; i >= 0; i--) {
        let juego = {
            "Equipo1": obj[i]["Equipo1"],
            "Equipo2": obj[i]["Equipo2"],
            "Resultado": obj[i]["Resultado"]
        };
        juegos.push(juego);
    }
    let objFinal = { "Id": id, "Nombre": nombre, "juegos": juegos };

    dataMag.setData(objFinal);
    console.log(objFinal);
}


function returnJSON(path, callback) {

    let obj;
    let url = path;
    let oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";



    /*oReq.onload = */
    oReq.onreadystatechange = function(e) {
        let arraybuffer = oReq.response;

        /* convert data to binary string */
        let data = new Uint8Array(arraybuffer);
        let arr = new Array();
        for (let i = 0; i != data.length; ++i) {
            arr[i] = String.fromCharCode(data[i]);
        }
        let bstr = arr.join("");

        /* Call XLSX */
        let workbook = XLSX.read(bstr, { type: "binary" });

        /* DO SOMETHING WITH workbook HERE */
        let first_sheet_name = workbook.SheetNames[0];
        /* Get worksheet */
        let worksheet = workbook.Sheets[first_sheet_name];
        //console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));

        obj = XLSX.utils.sheet_to_json(worksheet, { raw: true });

        if (oReq.readyState == 4 && oReq.status == 200) {
            callback(obj); // Another callback here
        }

    }

    oReq.send();

}