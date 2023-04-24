import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/Contacto';

function ContactoComponent(props) {
    const { Nombre, Apellido, Email, Conectado } = props.data;

    const [estado, setState] = useState(Conectado);

    const cambiarEstadoConexion = () => {
        setState(!estado); // Cambiamos el estado de estado
    }

    return (
        <div>
            <h2>Nombre: {Nombre}</h2>
            <h3>Apellido: {Apellido}</h3>
            <h4>Email: {Email}</h4>
            <h5>Conectado: {estado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h5>
            <button onClick={cambiarEstadoConexion}>Cambiar Estado</button>
        </div>
    );
}

ContactoComponent.propTypes = {
    data: PropTypes.instanceOf(Contacto)
};

export default ContactoComponent;
