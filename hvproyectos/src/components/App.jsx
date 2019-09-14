import React, { Component } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Mis components

import IngresarDatos from "./IngresarDatos"
import ConsultarProyecto from "./ConsultarProyecto"
import ModificarProyecto from   "./ModificarProyecto"

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <IngresarDatos />
                <ConsultarProyecto/>
                <ModificarProyecto/>
            </React.Fragment>
        );
    }
}

export default App