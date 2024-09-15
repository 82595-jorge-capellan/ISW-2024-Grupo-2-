import axios from "axios";
import emailjs from '@emailjs/browser';

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

export const SendEmail = async (formCont) => {
    formCont = {
        destino: 'mecex61246@asaud.com',
        tipo_pedido: 'Envío Especial',
        provincia_origen: 'Buenos Aires',
        localidad_origen: 'Capital Federal',
        calle_origen: 'Av. Santa Fe',
        numero_origen: '1234',
        referencia_origen: 'Ref123',
        provincia_destino: 'CABA',
        localidad_destino: 'Villa Devoto',
        calle_destino: 'Calle Falsa',
        numero_destino: '5678',
        referencia_destino: 'Ref456',
        fecha_retiro: '2024-09-20',
        fecha_entrega: '2024-09-22'
    };
    try {
        const result = await emailjs.send("service_qpb1y7m", "template_whr2i5d", formCont, "X6FT9jkeR_LrJ9SeX");
        console.log(result)
    }catch(error){
        console.log(error)
    }
}