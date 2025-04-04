import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import CloudIcon from '../../components/icons/CloudIcon';
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
    }, []);

    // Handle row click
    const handleRowClick = (therapist) => {
        setSelectedTherapist(therapist); // Set the selected therapist
    };

    return (
        <div>
            <h1>Therapist Page</h1>
            
            {/* Display therapists in a table */}
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
                                onClick={() => handleRowClick(therapist)} // Pass the therapist object
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
    );
};

export default TherapistPage;