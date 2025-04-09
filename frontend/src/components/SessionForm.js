import React from 'react';
import './Forms.css';

const SessionForm = ({ session, setSession, onSubmit, isEditMode, onDelete, onCancel }) => (
    <form onSubmit={onSubmit}>
        <label>
            <strong>Therapist ID:</strong>
            <input
                type="number"
                name="therapist_id"
                value={session.therapist_id}
                onChange={(e) =>
                    setSession({ ...session, therapist_id: parseInt(e.target.value, 10) || "" })
                }
            />
        </label>
        <label>
            <strong>Client ID:</strong>
            <input
                type="number"
                name="client_id"
                value={session.client_id}
                onChange={(e) =>
                    setSession({ ...session, client_id: parseInt(e.target.value, 10) || "" })
                }
            />
        </label>
        <label>
            <strong>Session Notes:</strong>
            <textarea
                name="session_notes"
                value={session.session_notes}
                onChange={(e) =>
                    setSession({ ...session, session_notes: e.target.value })
                }
            />
        </label>
        <label>
            <strong>Session Date:</strong>
            <input
                type="datetime-local"
                name="session_date"
                value={session.session_date}
                onChange={(e) =>
                    setSession({ ...session, session_date: e.target.value })
                }
            />
        </label>
        <label>
            <strong>Session Length (minutes):</strong>
            <input
                type="number"
                name="session_length"
                value={session.session_length}
                onChange={(e) =>
                    setSession({ ...session, session_length: parseInt(e.target.value, 10) || "" })
                }
            />
        </label>
        <div className="formButtons">
            <button id="createUpdate" type="submit">{isEditMode ? "Update" : "Create"}</button>
            {isEditMode && (
                <>
                    <button id="delete" type="button" onClick={onDelete}>Delete</button>
                    <button id="cancel" type="button" onClick={onCancel}>Cancel</button>
                </>
            )}
        </div>
    </form>
);

export default SessionForm;