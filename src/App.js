import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

// Para este proyecto vamos a utilizar classes

class App extends Component {
    state = {
        citas : []

     }

     //Para guardar las citas en el localStorage

     // Cuando la aplicacion carga

     componentDidMount() {
        const citasLS = localStorage.getItem('citas');
        if(citasLS) {
            this.setState({
                citas : JSON.parse(citasLS)
            })
        }
     }

     // Cuando eliminamos o agragamos una nueva cita

     componentDidUpdate() {
         localStorage.setItem('citas', JSON.stringify(this.state.citas));
     }

     //Podemaos crear una funcion que recoja datos del hijo hacia el padre

     crearNuevaCita = datos => {
         // Primero copiamos el state actual
         const citas = [...this.state.citas, datos]

         // Luego agregamos el nuevo state

         this.setState({
             citas
         })
     }

     eliminarCita = id => {
         // Primero tomamos una copia del state
         const citasActuales = [...this.state.citas];

         // Luego utilizamos el filter para sacar el elemento @id del array
         const citas = citasActuales.filter(cita => cita.id !== id )

         // Finalmente actualizamos el state
         this.setState({
             citas
         })
     }

    render() { 
        return (
            // La clase container es de bootstrap
            <div className="container">
                <Header 
                    titulo ='Administrador pacientes veterinaria'
                />
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <NuevaCita
                            crearNuevaCita={this.crearNuevaCita}
                        />
                    </div>

                    <div className="mt-5 col-md-10 mx-auto">
                        <ListaCitas 
                            citas={this.state.citas}
                            eliminarCita={this.eliminarCita}
                        />
                    </div>
                </div>

            </div>
        );
    }
}
 
export default App;
