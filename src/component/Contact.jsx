import React, { useState } from "react";
// import { Nav } from "./Nav";
import "../styles/contact.css";
// import { Footer } from "./Footer";
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import Seo from "./Seo";


export const Contact = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [projectInfo, setProjectInfo] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_ycnp4hh";
    const templateId = "template_nyndi2d";
    const publicKey = "3aqOKs-aknVY0-1-8";

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        service: service,
        project_info: projectInfo,
        email: email,
        budget: budget,
        to_name: "Team Dopastack", 
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setService("");
      setProjectInfo("");
      setEmail("");
      setBudget("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    {/* SInce its a single paged website for now no need of adding these metadata to avoid conflicting */}
    {/* <Seo
      title="Contact Us"
      description="Get in touch with Dopastack for expert tech solutions tailored to your needs. Fill out our contact form or reach us directly to discuss how we can assist you in achieving your business goals."
      addPostFixTitle={true}
      keywords="Contact Dopastack, Tech Solutions Inquiry, Customer Support"
      largeTwitterCard={true}
    /> */}
      <section className="contact" id="contact">
        <div className="contact__section">
          <div className="contact__header" data-aos="fade-up">
            <h1>Ping us a message</h1>
          </div>

          <div className="form__container">
            <div className="form__main" data-aos="fade-up">
              <form onSubmit={handleSubmit}>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="name">Name</label> <br />
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="service">Service</label> <br />
                    <div className="input__wrapper">
                      <input
                        type="text"
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      />
                       
                    </div>
                  </div>
                </div>

                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="projectInfo">Project Info</label> <br />
                    <input
                      type="text"
                      id="projectInfo"
                      value={projectInfo}
                      onChange={(e) => setProjectInfo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="email">Email</label> <br />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input__con">
                  <div className="name__form">
                    <label htmlFor="budget">Budget</label> <br />
                    <input
                      type="text"
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="form__btn">
                  <p>Send</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
