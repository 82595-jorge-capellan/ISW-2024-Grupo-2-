

const Formulario = () => {

    return (
        <div className="container mt-4 formulario">
          <h4>Publicar Pedido de Envío</h4>
          <form>
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
                <select className="form-select">
                  <option value="">Seleccionar</option>
                  <option value="prov1">Provincia 1</option>
                  <option value="prov2">Provincia 2</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Localidad</label>
                <select className="form-select">
                  <option value="">Seleccionar</option>
                  <option value="loc1">Localidad 1</option>
                  <option value="loc2">Localidad 2</option>
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
                <select className="form-select">
                    {/* aca va la API para ver las provincias */}
                  <option value="">Seleccionar</option>
                  <option value="prov1">Provincia 1</option>
                  <option value="prov2">Provincia 2</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Localidad</label>
                <select className="form-select">
                  <option value="">Seleccionar</option>
                  <option value="loc1">Localidad 1</option>
                  <option value="loc2">Localidad 2</option>
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
              <input type="file" className="form-control" multiple />
            </div>
    
            <button type="submit" className="btn btn-primary mt-4 mb-3">
              Publicar
            </button>
          </form>
        </div>
      );
    
}

export default Formulario;