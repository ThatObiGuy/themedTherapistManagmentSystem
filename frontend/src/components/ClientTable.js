import React from 'react';

const ClientTable = ({ clients, onRowClick }) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Regularity</th>
            </tr>
        </thead>
        <tbody>
            {clients.map((client) => (
                <tr 
                    key={client.client_id} 
                    onClick={() => onRowClick(client)} 
                    className="clickable-row"
                >
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.phone_number}</td>
                    <td>{client.regularity ? 'Regular' : 'Irregular'}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default ClientTable;