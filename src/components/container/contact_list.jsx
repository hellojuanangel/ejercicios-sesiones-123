import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const contact = new Contact('Pepe', 'Pérez', 'pepe@mail.com', false);

    return (
        <div>
            <h2>COMPONENTE A</h2>

            <ContactComponent contact={contact}></ContactComponent>
        </div>
    );
};

export default ContactListComponent;
