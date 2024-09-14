import axios from "axios";


export const ProvinciasGet = async () => {

    try{
        let provinciasGet  = await axios.get("/api/provincias.json")
        return provinciasGet.data.provincias;
    }catch (error){
        return error.response;
    }

}

export const LocalidadesProvincia = async (provincia) => {

    console.log(provincia);
    try{
        let localidadesProvinciaGet = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia}&campos=id,nombre&max=100`) 
        
        return localidadesProvinciaGet.data.localidades;
    }catch(error){
        return error;
    }
}