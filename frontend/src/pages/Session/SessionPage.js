import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import SessionTable from '../../components/SessionTable';
import SessionForm from '../../components/SessionForm';
import './SessionPage.css';

const SessionPage = () => {
    // State to store sessions
    const [sessions, setSessions] = useState([]);
    const [selectedSession, setSelectedSession] = useState(null); // State for the selected session

    // Fetch sessions from the backend
    useEffect(() => {
        retrieveSessions();
    }, []); // Activates on load

    const retrieveSessions = async () => {
        try {
            const response = await axios.get('/api/sessions');
            setSessions(response.data);
        } catch (error) {
            console.error('Error fetching sessions:', error);
        }
    };

    // Handle row click
    const handleRowClick = (session) => {
        setSelectedSession(session); // Set the selected session
        console.log("Selected session:", session); // Log the selected session
    };

    const [newSession, setNewSession] = useState({
        therapist_id: "",
        client_id: "",
        session_notes: "",
        session_date: "",
        session_length: "",
    });

    const handleCreateSession = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            await axios.post('/api/sessions', newSession);
            alert("Session created successfully!");
            setNewSession({
                therapist_id: "",
                client_id: "",
                session_notes: "",
                session_date: "",
                session_length: "",
            }); // Reset form
            retrieveSessions();
        } catch (error) {
            console.error("Error creating session:", error);
            alert("Failed to create session.");
        }
    };

    const handleUpdateSession = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            await axios.put(`/api/sessions/${selectedSession.session_id}`, selectedSession);
            alert("Session updated successfully!");
            retrieveSessions();
        } catch (error) {
            console.error("Error updating session:", error);
            alert("Failed to update session.");
        }
    };

    const handleDeleteSession = async () => {
        try {
            await axios.delete(`/api/sessions/${selectedSession.session_id}`);
            alert("Session deleted successfully!");
            retrieveSessions();
        } catch (error) {
            console.error("Error deleting session:", error);
            alert("Failed to delete session.");
        }
    };

    return (
        <div className="sessionPage">

            {/* Sidebar */}
            <div className="sidebar">
                {selectedSession ? (
                    <SessionForm
                        session={selectedSession}
                        setSession={setSelectedSession}
                        onSubmit={handleUpdateSession}
                        isEditMode={true}
                        onDelete={() => handleDeleteSession(selectedSession)}
                        onCancel={() => setSelectedSession(null)}
                    />
                ) : (
                    <SessionForm
                        session={newSession}
                        setSession={setNewSession}
                        onSubmit={handleCreateSession}
                        isEditMode={false}
                    />
                )}
            </div>

            {/* Main Content */}
            <div className="content">
                <h1>Session Page</h1>
                <div className="sessionTable">
                    <SessionTable sessions={sessions} onRowClick={handleRowClick} />
                </div>
            </div>
        </div>
    );
};

export default SessionPage;