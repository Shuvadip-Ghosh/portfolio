import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [responseMessage, setResponseMessage] = useState("");

    document.title = "Contact - Shuvadip - Developer Portfolio ";
    let metas = document.getElementsByTagName("meta");
    metas.description.content = "Get in touch for collaborations, freelance work, or inquiries about my development expertise. Let’s connect and create innovative solutions!";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://backend-shuvadip-portfolio.vercel.app/submit-form", formData);
            setResponseMessage(response.data.message);
            setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
        } catch (error) {
            console.error("Error submitting form:", error);
            setResponseMessage("Failed to send message.");
        }
    };

    return (
        <section className="contact">
            <div className="left-contact">
                <h1>Contact Me</h1>
                <p>Have a project or an idea? Let’s connect and make it happen!</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="ne">
                    <div className="name">
                        <label htmlFor="name">Name</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        <input type="text" id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16" >
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg>
                        <input type="email" id="email" placeholder="johndoe@example.com" value={formData.email} onChange={handleChange} required />
                    </div>
                </div>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Please leave your message here....(500 characters)" value={formData.message} onChange={handleChange} required />
                <div className="formbtm">
                    <button className="snd-msg" type="submit">Send Message</button>
                    <p className="response">{responseMessage}</p>
                </div>
            </form>
        </section>
    );
}
