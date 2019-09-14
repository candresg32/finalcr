import React, { Component } from "react";
import axios from "axios";
import Card from "./Card"

class IngresarDatos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            proyectos: []
        }
    }

    componentDidMount() {
        axios.get("https://hvproyectos.herokuapp.com/api/v1/get/proyectos")
            .then((proyectos) => {
                this.setState({
                    proyectos: proyectos.data
                })
                console.log(this.state.proyectos)
            }).catch((err) => {
                console.log(err)
            })
    }
    submit = () => {
        let nombreProyecto = document.getElementById("Nombre").value
        let categoriaProyecto = document.getElementById("Categoria").value
        let tipo = document.querySelector('input[name="tipo"]:checked').value;
        let location = document.getElementById("ubicacion").value
        let seguimiento = document.getElementById("avances").value
        let observaciones = document.getElementById("infoadicional").value
        const dataInicial = {
            nombre: nombreProyecto,
            categoria: categoriaProyecto,
            tipo_proyecto: tipo,
            location: location,
            seguimiento: seguimiento,
            observaciones: observaciones
        }
        axios.post("https://hvproyectos.herokuapp.com/api/v1/create/proyecto", dataInicial)
            .then((proyecto) => {
                return axios.get("https://hvproyectos.herokuapp.com/api/v1/get/proyectos")
            }).then((proyectos) => {
                this.setState({
                    proyectos: proyectos.data
                })
                console.log(this.state.proyectos)
            }).catch((err) => {
                console.log(err)
            })
    }

    renderProyectos = () => {
        if (this.state.proyectos.length > 0) {
            return this.state.proyectos.map((elem, i) => {
                return <Card titulo={elem.nombre} categoria={elem.categoria} tipo_proyecto={elem.tipo} location={elem.location} seguimiento={elem.seguimiento} observaciones={elem.observaciones} />
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <img src="http://images.homify.com/image/upload/v1453735832/p/user/avatar/483725/3._AF_Logo_CONVEL_Color.jpg" className="img-fluid" alt="Responsive image" className="col-md-5 my-3" />
                </div>
                <div>
                    <input id="Nombre" className="form-control form-control-lg col-12 col-md-3 my-1" type="text" placeholder="Nombre del Proyecto" />
                </div>
                <div>
                    <label htmlFor="exampleFormControlSelect1"></label>
                    <select id="Categoria" className="form-control form-control-lg col-12 col-md-3 my-(-1)">
                        <option disabled selected defaultValue="">Categoria</option>
                        <option value="Vivienda">Vivienda</option>
                        <option value="Industria">Industria</option>
                        <option value="Comercial">Comercial</option>
                        <option value="otros">otros</option>
                    </select>
                </div>
                <div className="form-check form-check-inline form-control-lg col-2 col-md-1 my-(-1)">
                    <input id="Diseño" className="form-check-input" type="radio" name="tipo" value="Diseño" />
                    <label className="form-check-label" htmlFor="Diseño">Diseño</label>
                </div>

                <div className="form-check form-check-inline form-control-lg col-2 col-md-1 my-(-1)">
                    <input id="Construccion" className="form-check-input" type="radio" name="tipo" value="Construcción" />
                    <label className="form-check-label" htmlFor="Construccion">Construcción</label>
                </div>
                <div>
                    <input id="ubicacion" className="form-control form-control-lg col-12 col-md-3 my-3" type="text" placeholder="Ubicacion del Proyecto" />
                </div>
                <div>
                    <input id="avances" className="form-control form-control-lg col-12 col-md-3 my-3" type="text" placeholder="Avance del Proyecto" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Información del Proyecto</label>
                    <textarea id="infoadicional" className="form-control form-control-lg col-12 col-md-3 my-3" rows="3"></textarea>
                </div>

                <div>
                    <button onClick={this.submit} type="button" className="btn col-2 col-md-2 my-1 btn-primary">Crear Proyecto</button>
                </div>
                <div className='row'>
                    {this.renderProyectos()}
                </div>
            </div>


        );
    }
}


export default IngresarDatos;





