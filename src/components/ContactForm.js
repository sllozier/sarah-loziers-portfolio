import React, { useState } from "react";
import { send } from "emailjs-com";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    payRange: "",
    details: "",
    to: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    send("service_l0cgp5o", "contact_form", form, "pGfeSYBA1M9SEbdKl")
      .then((response) => {
        navigate("/emailConfirmation");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        console.log("EMAIL FAILED...", error);
      });
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="is-form-page animate-fadeUp">
      <section className="is-white has-text-centered">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <img className="avatar" src="/piccies/sarahAvatar.png" alt="" />
              <h1 className="title has-text-white is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                I am excited to hear about your project! Ready to chat?
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="is-white">
        <div className="container">
          <form id="form" onSubmit={handleSubmit}>
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="field">
                  <label
                    className="label is-medium has-text-white"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <div className="control is-expanded">
                    <input
                      className="input is-large"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label
                    className="label is-medium has-text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="control is-expanded">
                    <input
                      className="input is-large"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-half">
                <div className="field">
                  <label
                    className="label is-medium has-text-white"
                    htmlFor="projectType"
                  >
                    Type of project
                  </label>
                  <div className="control is-expanded">
                    <div className="select is-fullwidth">
                      <select
                        className="is-large"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        required
                      >
                        {/* <option value='0' disabled selected hidden></option> */}
                        <option>Select One:</option>
                        <option>Personal Blog/Website</option>
                        <option>NGO Project</option>
                        <option>Full-time Position</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label
                    className="label is-medium has-text-white"
                    htmlFor="payRange"
                  >
                    Pay Range
                  </label>
                  <div className="control is-expanded">
                    <div className="select is-fullwidth">
                      <select
                        className="is-large"
                        name="payRange"
                        value={form.payRange}
                        onChange={handleChange}
                        required
                      >
                        {/* <option value='0' disabled selected hidden></option> */}
                        <option>Select One:</option>
                        <option>Undecided</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $25,000</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column">
                <div className="field">
                  <label
                    className="label is-medium has-text-white"
                    htmlFor="details"
                  >
                    Additional details
                  </label>
                  <div className="control is-expanded">
                    <textarea
                      className="textarea is-large"
                      name="details"
                      rows="5"
                      value={form.details}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="field is-hidden">
                  <label className="is-hidden"></label>
                  <div className="control is-expanded is-hidden">
                    <input
                      className="is-hidden"
                      name="to"
                      value="Sarah Lozier"
                      type="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-one-third">
                <div className="field">
                  <div className="control">
                    <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
