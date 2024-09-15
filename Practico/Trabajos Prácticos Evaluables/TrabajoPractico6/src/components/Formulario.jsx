
import { ProvinciasGet, LocalidadesProvincia} from "../services/formularioService.service";
import { useState } from "react";


const Formulario = () => {

    function submitPedidoDeEnvio(e){
      e.preventDefault();
      console.log("Me envio");
    }

    const [datosProvincias, setDatosProvincias] = useState([]);
    const [datosLocalidades, setDatosSeleccionados] = useState([]);
    const [datosLocalidadesDestino, setLocalidadesDestino] = useState([]);
    const [datosProvinciasDestino, setDatosProvinciasDestino] = useState([]);

    const HandleGet = async() => {
      
      let provincias = await ProvinciasGet();        
      setDatosProvincias(provincias);
    }

    const HandleProvinciaGet = async(event) => {
        const provinciaSeleccionada = event.target.value;
        console.log(provinciaSeleccionada)

        let localidades = await LocalidadesProvincia(provinciaSeleccionada);
        setDatosSeleccionados(localidades)

    }


    const HandleGetDestino = async() => {
      
      let provincias = await ProvinciasGet();        
      setDatosProvinciasDestino(provincias);
    }

    const HandleLocalidadesDestino = async(event) => {
      
      const provinciasDestino = event.target.value;
      let localidadesDestino = await LocalidadesProvincia(provinciasDestino);

      setLocalidadesDestino(localidadesDestino);

    }
    

    return (
      <>
      {console.log(datosProvincias)}
        <div className="container mt-4 formulario">
          <h4 className="titulo">Publicar Pedido de Envío</h4>
          <form onSubmit={(e) => submitPedidoDeEnvio(e)}>
            <div className="mb-3">
              <label className="form-label">Ingrese el tipo de carga:</label>
              <select className="form-select">
                <option value="">Seleccionar</option>
                <option value="tipo1">Tipo 1</option>
                <option value="tipo2">Tipo 2</option>
              </select>
            </div>
    
            {/* Domicilio de Retiro */}
            <h5>Domicilio de Retiro</h5>
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">Calle</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Número</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="form-label">Provincia</label>
                <select className="form-select" onClick={HandleGet} onChange={HandleProvinciaGet}>
                  <option value="">Seleccionar</option>
                  {datosProvincias.length > 0 ? (
                    datosProvincias.map((fila, index) => (
                      <option key={index} value={fila.id}>
                        {fila.nombre}
                      </option>
                    ))
                    ) : (
                    <option value="">Cargando provincias...</option>
                  )}
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Localidad</label>
                <select className="form-select">
                  <option value="">Seleccionar</option>
                  {datosLocalidades.length > 0 ? (
                    datosLocalidades.map((fila, index) => (
                      <option key={index} value={fila.nombre}>
                        {fila.nombre}
                      </option>
                    ))
                    ) : (
                    <option value="">Cargando Localidades...</option>
                  )}

                </select>
              </div>
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Referencia (opcional)</label>
              <textarea className="form-control" rows="2"></textarea>
            </div>
    
            {/* Domicilio de Destino */}
            <h5>Domicilio de Destino</h5>
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">Calle</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Número</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="form-label">Provincia</label>
                <select className="form-select" onClick={HandleGetDestino} onChange={HandleLocalidadesDestino}>
                  <option value="">Seleccionar</option>
                  {datosProvinciasDestino.length > 0 ? (
                    datosProvinciasDestino.map((fila, index) => (
                      <option key={index} value={fila.id}>
                        {fila.nombre}
                      </option>
                    ))
                    ) : (
                    <option value="">Cargando provincias...</option>
                  )}
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Localidad</label>
                <select className="form-select">
                  <option value="">Seleccionar</option>
                  <option value="">Seleccionar</option>
                  {datosLocalidadesDestino.length > 0 ? (
                    datosLocalidadesDestino.map((fila, index) => (
                      <option key={index} value={fila.nombre}>
                        {fila.nombre}
                      </option>
                    ))
                    ) : (
                    <option value="">Cargando Localidades...</option>
                  )}
                </select>
              </div>
            </div>
            <div className="mb-3 mt-2">
              <label className="form-label">Referencia (opcional)</label>
              <textarea className="form-control" rows="2"></textarea>
            </div>
    
            {/* Fechas y Fotos */}
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">Fecha de Retiro</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Fecha de Entrega</label>
                <input type="date" className="form-control" />
              </div>
            </div>
    
            {/* Subir Fotos */}
            <div className="mt-3">
              <label className="form-label">Fotos</label>
              <input type="file" className="form-control" multiple accept=".jpg,.png" />
            </div>
    
            <button type="submit" className="btn btn-primary mt-4 mb-3">
              Publicar
            </button>
          </form>
        </div>

      </>
      );
    
}

export default Formulario;