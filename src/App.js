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

     //Podemaos crear una funcion que recoja datos del hijo hacia el padre

     crearNuevaCita = datos => {
         // Primero copiamos el state actual
         const citas = [...this.state.citas, datos]

         // Luego agregamos el nuevo state

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
                        />
                    </div>
                </div>

            </div>
        );
    }
}
 
export default App;
