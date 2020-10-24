import React, { useCallback } from "react";
import { data } from "../../Static";
import "./contact.scss";

export default function Contact() {
  const { contacts } = data;

  const handleSocialClasses = useCallback((link) => {
    let targetSocial;
    const socials = ["git", "medium", "facebook", "linkedin"];
    socials.forEach((social) => {
      if (link.includes(social)) targetSocial = social;
    });

    return targetSocial;
  }, []);

  return (
    <section
      id="contact"
      className="contacts-container"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once={true}
    >
      <div className="contacts inner-wrapper">
        <div className="contact-list-container">
          <h1>{contacts.info.title}</h1>
          <p>{contacts.info.description}</p>
          <div className="social-items-container">
            {contacts.info.social.map((socialLink) => (
              <div className="social-item" key={Math.random() * 500}>
                <a
                  href={socialLink}
                  key={socialLink}
                  className={handleSocialClasses(socialLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {""}
                </a>
              </div>
            ))}
          </div>
          <div className="contact-me-btn-container">
            <a className="call-btn" href={`tel:${contacts.info.phone}`}>
              Let's Talk
            </a>
            <a className="mail-btn" href={`mailto:${contacts.info.mail}`}>
              Let's Chat
            </a>
          </div>
          <a
            className="resume-btn"
            href="https://drive.google.com/file/d/1jwCkpzKIuwl_IM_-qFfhEN1Sehg3pXoK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
