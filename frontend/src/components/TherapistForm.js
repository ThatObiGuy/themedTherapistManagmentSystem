import React from 'react';
import './Forms.css';

const TherapistForm = ({ therapist, setTherapist, onSubmit, isEditMode, onDelete, onCancel }) => (
    <form onSubmit={onSubmit}>
        <label>
            <strong>Title:</strong>
            <input
                type="text"
                name="title"
                value={therapist.title}
                onChange={(e) =>
                    setTherapist({ ...therapist, title: e.target.value })
                }
            />
        </label>
        <label>
            <strong>Name:</strong>
            <input
                type="text"
                name="name"
                value={therapist.name}
                onChange={(e) =>
                    setTherapist({ ...therapist, name: e.target.value })
                }
            />
        </label>
        <label>
            <strong>Email:</strong>
            <input
                type="email"
                name="email"
                value={therapist.email}
                onChange={(e) =>
                    setTherapist({ ...therapist, email: e.target.value })
                }
            />
        </label>
        <label>
            <strong>Location:</strong>
            <input
                type="text"
                name="location"
                value={therapist.location}
                onChange={(e) =>
                    setTherapist({ ...therapist, location: e.target.value })
                }
            />
        </label>
        <label>
            <strong>Years of Practice:</strong>
            <input
                type="number"
                name="years_of_practice"
                value={therapist.years_of_practice}
                onChange={(e) =>
                    setTherapist({
                        ...therapist,
                        years_of_practice: parseInt(e.target.value, 10) || 0,
                    })
                }
            />
        </label>
        <label>
            <strong>Availability:</strong>
            <select
                name="availability"
                value={therapist.availability ? "true" : "false"}
                onChange={(e) =>
                    setTherapist({
                        ...therapist,
                        availability: e.target.value === "true",
                    })
                }
            >
                <option value="true">Available</option>
                <option value="false">Unavailable</option>
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

export default TherapistForm;