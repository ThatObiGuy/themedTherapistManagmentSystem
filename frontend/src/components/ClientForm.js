import React from 'react';
import './Forms.css';

const ClientForm = ({ client, setClient, onSubmit, isEditMode, onDelete, onCancel }) => (
    <form onSubmit={onSubmit}>
        <label>
            <strong>Name:</strong>
            <input
                type="text"
                name="name"
                value={client.name}
                onChange={(e) =>
                    setClient({ ...client, name: e.target.value })
                }
            />
        </label>
        <label>
            <strong>Email:</strong>
            <input
                type="email"
                name="email"
                value={client.email}
                onChange={(e) =>
                    setClient({ ...client, email: e.target.value })
                }
            />
        </label>
        <label>
            <strong>Phone Number:</strong>
            <input
                type="text"
                name="phone_number"
                value={client.phone_number}
                onChange={(e) =>
                    setClient({ ...client, phone_number: e.target.value })
                }
            />
        </label>
        <label>
            <strong>Regularity:</strong>
            <select
                name="regularity"
                value={client.regularity ? "true" : "false"}
                onChange={(e) =>
                    setClient({
                        ...client,
                        regularity: e.target.value === "true",
                    })
                }
            >
                <option value="true">Regular</option>
                <option value="false">Irregular</option>
            </select>
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

export default ClientForm;