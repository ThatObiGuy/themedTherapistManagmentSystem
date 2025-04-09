import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import ClientTable from '../../components/ClientTable';
import ClientForm from '../../components/ClientForm';
import './ClientPage.css';


const ClientPage = () => {
    // State to store clients
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null); // State for the selected client

    // Fetch clients from the backend
    useEffect(() => {
        retrieveClients();
    }, []); // Activates on load

    const retrieveClients = async () => {
        try {
            const response = await axios.get('/api/clients');
            setClients(response.data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    // Handle row click
    const handleRowClick = (client) => {
        setSelectedClient(client); // Set the selected client
        console.log("Selected client:", client); // Log the selected client
    };

    const [newClient, setNewClient] = useState({
        id: null,
        name: "",
        email: "",
        phone_number: "",
        regularity: "true",
    });

    const handleCreateClient = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            await axios.post('/api/clients', {
                ...newClient,
                regularity: newClient.regularity === "true",
            });
            alert("Client created successfully!");
            setNewClient({
                name: "",
                email: "",
                phone_number: "",
                regularity: "true",
            }); // Reset form
            retrieveClients();
        } catch (error) {
            console.error("Error creating client:", error);
            alert("Failed to create client.");
        }
    };

    const handleUpdateClient = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            await axios.put(`/api/clients/${selectedClient.client_id}`, selectedClient);
            alert("Client updated successfully!");
            retrieveClients();
        } catch (error) {
            console.error("Error updating client:", error);
            alert("Failed to update client.");
        }
    };

    const handleDeleteClient = async () => {
        try {
            await axios.delete(`/api/clients/${selectedClient.client_id}`);
            alert("Client deleted successfully!");
            retrieveClients();
        } catch (error) {
            console.error("Error deleting client:", error);
            alert("Failed to delete client.");
        }
    };

    return (
        <div className="clientPage">

            {/* Sidebar */}
            <div className="sidebar">
                {selectedClient ? (
                    <ClientForm
                        client={selectedClient}
                        setClient={setSelectedClient}
                        onSubmit={handleUpdateClient}
                        isEditMode={true}
                        onDelete={() => handleDeleteClient(selectedClient)}
                        onCancel={() => setSelectedClient(null)}
                    />
                ) : (
                    <ClientForm
                        client={newClient}
                        setClient={setNewClient}
                        onSubmit={handleCreateClient}
                        isEditMode={false}
                    />
                )}
            </div>

            {/* Main Content */}
            <div className="content">
                <h1>Client Page</h1>
                <div className="clientTable">
                    <ClientTable clients={clients} onRowClick={handleRowClick} />
                </div>
            </div>
        </div>
    );
};

export default ClientPage;