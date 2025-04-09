import React from 'react';

const SessionTable = ({ sessions, onRowClick }) => (
    <table>
        <thead>
            <tr>
                <th>Therapist ID</th>
                <th>Client ID</th>
                <th>Session Notes</th>
                <th>Session Date</th>
                <th>Session Length (minutes)</th>
            </tr>
        </thead>
        <tbody>
            {sessions.map((session) => (
                <tr 
                    key={session.session_id} 
                    onClick={() => onRowClick(session)} 
                    className="clickable-row"
                >
                    <td>{session.therapist_id}</td>
                    <td>{session.client_id}</td>
                    <td>{session.session_notes}</td>
                    <td>{new Date(session.session_date).toLocaleString()}</td>
                    <td>{session.session_length}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default SessionTable;