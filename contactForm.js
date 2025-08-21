import React, { useState } from 'react';
/**
 * ContactForm is a React functional component that renders a simple contact form
 * with fields for name, email, and message. It manages form state and validation
 * using React's useState hook.
 *
 * Features:
 * - Tracks input values for name, email, and message.
 * - Validates that all fields are filled in.
 * - Validates that the email field contains a valid email address format.
 * - Displays inline error messages for invalid or missing fields.
 * - Prevents form submission if validation fails.
 * - Shows an alert on successful submission.
 *
 * Usage:
 * <ContactForm />
 */
function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    /**
     * Validates the form fields.
     * @returns {Object} An object containing error messages for invalid fields.
     */
    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required.';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'Invalid email format.';
        }
        if (!form.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };
    /**
     * Handles input changes and clears the error for the changed field.
     * @param {Object} e - The input change event.
     */
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: undefined
        });
    };
    /**
     * Handles form submission, validates fields, and shows an alert if valid.
     * @param {Object} e - The form submit event.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        alert('Form submitted!');
        // Optionally reset form here
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>
            <div>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
            </div>
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;