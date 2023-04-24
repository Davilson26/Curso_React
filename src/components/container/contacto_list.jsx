import React from 'react'
import { Contacto } from '../../models/Contacto'
import ContactoComponent from '../pure/contacto';


function ContactoListComponent(props) {
    const contacto = new Contacto('Davilson', 'Agudelo', 'micorreo@gmail.com', true)
    return (
        <div>
            <div>
                <h1>
                    Datos de Contacto
                </h1>
            </div>
            <ContactoComponent data={contacto}></ContactoComponent>
        </div>
    );
}

export default ContactoListComponent;
