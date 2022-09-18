import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>COMPONENTE B</h2>

            <h3>Nombre: { contact.nombre }</h3>
            <h3>Apellido: { contact.apellido }</h3>
            <h3>Email: { contact.email }</h3>
            <h4>Contacto { contact.conectado ? 'En Línea' : 'No Disponible' }</h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};

export default ContactComponent;
