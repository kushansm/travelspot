import React, { useState } from "react";
import "../App.css"; // If you have shared styles

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {
      firstName: firstName ? "" : "First name is required",
      lastName: lastName ? "" : "Last name is required",
      email: email ? "" : "Email is required",
      message: message ? "" : "Message is required",
    };
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((e) => e === "");

    if (isValid) {
      alert(
        `Form Submitted:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nTelephone: ${telephone}\nMessage: ${message}`
      );

      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setTelephone("");
      setMessage("");
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Heading */}
      <section className="px-[7vw] py-8">
        <h2 className="text-2xl mb-2 cursor-pointer transition-colors hover:text-orange-500 hover:underline">
          How to reach us
        </h2>
        
      </section>

      {/* Contact Form + Map */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 px-[7vw] py-[7vw]">
        {/* Form Section */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validate();
          }}
          noValidate
          className="flex flex-col gap-4"
        >
          <h3 className="text-xl font-semibold mb-4 cursor-pointer hover:text-orange-500 hover:underline">
            Contact Form
          </h3>

          {/* First Name */}
          <div>
            <label htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.firstName}
              className={`w-full p-3 bg-neutral-900 border ${
                errors.firstName ? "border-red-500" : "border-gray-500"
              } rounded text-white`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.lastName}
              className={`w-full p-3 bg-neutral-900 border ${
                errors.lastName ? "border-red-500" : "border-gray-500"
              } rounded text-white`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.email}
              className={`w-full p-3 bg-neutral-900 border ${
                errors.email ? "border-red-500" : "border-gray-500"
              } rounded text-white`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Telephone */}
          <div>
            <label htmlFor="telephone">Telephone</label>
            <input
              id="telephone"
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-full p-3 bg-neutral-900 border border-gray-500 rounded text-white"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.message}
              className={`w-full p-3 bg-neutral-900 border ${
                errors.message ? "border-red-500" : "border-gray-500"
              } rounded text-white min-h-[100px] resize-y`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded font-bold self-end hover:bg-yellow-300 hover:text-black transition"
          >
            SUBMIT
          </button>
        </form>

        {/* Map Section */}
        <div aria-label="Location map" className="w-full h-full min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.843675749436!2d79.86885866428683!3d6.909288153243437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25979d6606a2d%3A0x1a49b9a18777f55e!2zU3LEqyBTYW1ixY1kaGkgTWFoYXZpaMSBcmEgVGVtcGxl!5e0!3m2!1sen!2slk!4v1755074288070!5m2!1sen!2slk"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
