import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import './TherapistPage.css';


const TherapistPage = () => {
    // State to store therapists
    const [therapists, setTherapists] = useState([]);
    const [selectedTherapist, setSelectedTherapist] = useState(null); // State for the selected therapist

    // Fetch therapists from the backend
    useEffect(() => {
        const fetchTherapists = async () => {
            try {
                const response = await axios.get('/api/therapists');
                setTherapists(response.data);
            } catch (error) {
                console.error('Error fetching therapists:', error);
            }
        };
        fetchTherapists();
    }, []); // actives on load

    // Handle row click
    const handleRowClick = (therapist) => {
        setSelectedTherapist(therapist); // Set the selected therapist
    };

    const handleUpdateTherapist = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/therapists/${selectedTherapist.id}`, selectedTherapist);
            alert("Therapist updated successfully!");
            
        } catch (error) {
            console.error("Error updating therapist:", error);
            alert("Failed to update therapist.");
        }
    };

    const handleDeleteTherapist = async (id) => {
        try {
            await axios.delete(`/api/therapists/${id}`);
            setTherapists(therapists.filter((therapist) => therapist.id !== id)); // Remove the deleted therapist from the list
            alert("Therapist deleted successfully!");
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
                <div className="therapistDetails">
                    <h2>Details</h2>
                    <form onSubmit={(e) => handleUpdateTherapist(e)}>
                        <label>
                            <strong>Title:</strong>
                            <input
                                type="text"
                                value={selectedTherapist.title}
                                onChange={(e) =>
                                    setSelectedTherapist({
                                        ...selectedTherapist,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label>
                            <strong>Name:</strong>
                            <input
                                type="text"
                                value={selectedTherapist.name}
                                onChange={(e) =>
                                    setSelectedTherapist({
                                        ...selectedTherapist,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label>
                            <strong>Email:</strong>
                            <input
                                type="email"
                                value={selectedTherapist.email}
                                onChange={(e) =>
                                    setSelectedTherapist({
                                        ...selectedTherapist,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label>
                            <strong>Location:</strong>
                            <input
                                type="text"
                                value={selectedTherapist.location}
                                onChange={(e) =>
                                    setSelectedTherapist({
                                        ...selectedTherapist,
                                        location: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label>
                            <strong>Years of Practice:</strong>
                            <input
                                type="number"
                                value={selectedTherapist.years_of_practice}
                                onChange={(e) =>
                                    setSelectedTherapist({
                                        ...selectedTherapist,
                                        years_of_practice: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label>
                            <strong>Availability:</strong>
                            <select
                                value={selectedTherapist.availability}
                                onChange={(e) =>
                                    setSelectedTherapist({
                                        ...selectedTherapist,
                                        availability: e.target.value === "true",
                                    })
                                }
                            >
                                <option value="true">Available</option>
                                <option value="false">Unavailable</option>
                            </select>
                        </label>
                        <div className="formButtons">
                            <button id="update" type="submit">Update</button>
                            <button id="delete" type="button" onClick={() => handleDeleteTherapist(selectedTherapist.id)}>Delete</button>
                            <button id="cancel" type="button" onClick={() => setSelectedTherapist(null)}>Cancel</button>
                        </div>
                    </form>
                </div>
            ) : (
                <h2>Details</h2>
            )}
        </div>

            {/* Main Content */}
            <div className="content">
                <h1>Therapist Page</h1>
                <div className="therapistTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Years of Practice</th>
                                <th>Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {therapists.map((therapist) => (
                                <tr 
                                    key={therapist.id} 
                                    onClick={() => handleRowClick(therapist)} 
                                    className="clickable-row"
                                >
                                    <td>{therapist.title}</td>
                                    <td>{therapist.name}</td>
                                    <td>{therapist.email}</td>
                                    <td>{therapist.location}</td>
                                    <td>{therapist.years_of_practice}</td>
                                    <td>{therapist.availability ? 'Available' : 'Unavailable'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TherapistPage;