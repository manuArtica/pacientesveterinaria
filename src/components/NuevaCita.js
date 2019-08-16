import React, { Component } from 'react';

// Importamos la librería uuid para poder asignar un id a las propiedades
import uuid from 'uuid';

// Creamos un state inicial

const stateInicial = {
    // Creamos el objeto cita para recoger los valores del formulario
        // Iniciamos las propiedades del objeto como un string vacio
        cita : {
            mascota : '',
            propietario : '',
            fecha : '',
            hora : '',
            sintomas : ''
        },
        error : false
}

class NuevaCita extends Component {

    // El state siempe es un objeto en el que podemos crear propiedades
    state = { ...stateInicial }
     // Cuando el usuario escribe en los inputs
     handleChange = e => {
         // Colocamos lo que el usuario escribe en el state
         this.setState({
             cita : {
                 ...this.state.cita,
                 [e.target.name] : e.target.value
             }
         })
     }

     // Cuando el usuario envia el formulario
     handleSubmit = e => {
         e.preventDefault();

         // Extraemos los valores del state
         const {mascota, propietario, fecha, hora, sintomas } = this.state.cita;

         // validamos que todos los campos esten llenos

         if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            });
            // Si entra en este if detenemos la ejecucion con un return
            return;
         }

         //Generamos un objeto con los datos

         const nuevaCita = {...this.state.cita};

         nuevaCita.id = uuid();

         //Agregamos la cita al state de App

         this.props.crearNuevaCita(nuevaCita);

         // Colocar en el state el stateInicial
         this.setState({
             ...stateInicial
         })


     }
    render() { 

        // Extraemos el valor del state
        const { error } = this.state;


        return (  
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Rellena el formulario para crear una nueva cita
                    </h2>
                    
                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatios</div> : null}
                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 clo-form-label">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 clo-form-label">
                                Nombre Propietario
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Propietario"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 clo-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 clo-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 clo-form-label">
                                Síntomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los síntomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div>
                            <input 
                                type="submit"
                                className="py-3 mt-2 btn btn-success btn-block"
                                value="Agregar Nueva Cita"
                            />
                    </form>
                </div>
            </div>
        );
    }
}
 
export default NuevaCita;