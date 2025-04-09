import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import TherapistTable from '../../components/TherapistTable';
import TherapistForm from '../../components/TherapistForm';
import './TherapistPage.css';


const TherapistPage = () => {
    // State to store therapists
    const [therapists, setTherapists] = useState([]);
    const [selectedTherapist, setSelectedTherapist] = useState(null); // State for the selected therapist

    // Fetch therapists from the backend
    useEffect(() => {
        retrieveTherapists();
    }, []); // actives on load

    const retrieveTherapists = async () => {
        try {
            const response = await axios.get('/api/therapists');
            setTherapists(response.data);
        } catch (error) {
            console.error('Error fetching therapists:', error);
        }
    };

    // Handle row click
    const handleRowClick = (therapist) => {
        setSelectedTherapist(therapist); // Set the selected therapist
        console.log("Selected therapist:", therapist); // Log the selected therapist
    };

    const [newTherapist, setNewTherapist] = useState({
        id: null,
        title: "",
        name: "",
        email: "",
        location: "",
        years_of_practice: "",
        availability: "true",
    });
    
    const handleCreateTherapist = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            await axios.post('/api/therapists', {
                ...newTherapist,
                availability: newTherapist.availability === "true",
            });
            alert("Therapist created successfully!");
            setNewTherapist({
                title: "",
                name: "",
                email: "",
                location: "",
                years_of_practice: "",
                availability: "true",
            }); // Reset form
            retrieveTherapists()
        } catch (error) {
            console.error("Error creating therapist:", error);
            alert("Failed to create therapist.");
        }
    };

    const handleUpdateTherapist = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            await axios.put(`/api/therapists/${selectedTherapist.therapist_id}`, selectedTherapist);
            alert("Therapist updated successfully!");
            retrieveTherapists()
        } catch (error) {
            console.error("Error updating therapist:", error);
            alert("Failed to update therapist.");
        }
    };

    const handleDeleteTherapist = async () => {
        try {
            await axios.delete(`/api/therapists/${selectedTherapist.therapist_id}`);
            alert("Therapist deleted successfully!");
            retrieveTherapists() // not working
        } catch (error) {
            console.error("Error deleting therapist:", error);
            alert("Failed to delete therapist.");
        }
    }

    return (
        <div className="therapistPage">

            {/* Sidebar */}
            <div className="sidebar">
                {selectedTherapist ? (
                    <TherapistForm
                        therapist={selectedTherapist}
                        setTherapist={setSelectedTherapist}
                        onSubmit={handleUpdateTherapist}
                        isEditMode={true}
                        onDelete={() => handleDeleteTherapist(selectedTherapist)}
                        onCancel={() => setSelectedTherapist(null)}
                    />
                ) : (
                    <TherapistForm
                        therapist={newTherapist}
                        setTherapist={setNewTherapist}
                        onSubmit={handleCreateTherapist}
                        isEditMode={false}
                    />
                )}
            </div>

            {/* Main Content */}
            <div className="content">
                <h1>Therapist Page</h1>
                <div className="therapistTable">
                    <TherapistTable therapists={therapists} onRowClick={handleRowClick} />
                </div>
            </div>
        </div>
    );
};

export default TherapistPage;