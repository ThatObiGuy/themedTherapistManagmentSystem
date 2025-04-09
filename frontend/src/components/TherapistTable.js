import React from 'react';

const TherapistTable = ({ therapists, onRowClick }) => (
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
                    key={therapist.therapist_id} 
                    onClick={() => onRowClick(therapist)} 
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
);

export default TherapistTable;