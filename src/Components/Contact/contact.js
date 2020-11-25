import React, { useCallback } from "react";
import { data } from "../../Static";
import "./contact.scss";
import Button from "../Button/button";

const Contact = () => {
  const { contacts } = data;

  const handleSocialClasses = useCallback(link => {
    let targetSocial;
    const socials = ["git", "medium", "facebook", "linkedin"];
    socials.forEach(social => {
      if (link.includes(social)) targetSocial = social;
    });

    return targetSocial;
  }, [])

  return (
    <section
      id="contact"
      className="contacts-container"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="800"
      data-aos-once={true}
      data-testid="test-contact"
    >
      <div className="contacts inner-wrapper">
        <div className="contact-list-container">
          <h1>{contacts.info.title}</h1>
          <p>{contacts.info.description}</p>
          <div className="social-items-container" data-testid="test-social-container">
            {contacts.info.social.map(socialLink => (
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
            <Button
              className="call-btn"
              data-testid="call-btn"
              type="link"
              content="Let's Talk"
              link={`tel:${contacts.info.phone}`}
              hasHover
            />
            <Button
              className="mail-btn"
              data-testid="mail-btn"
              type="link"
              content="Let's Chat"
              link={`mailto:${contacts.info.mail}`}
              hasHover
            />
          </div>
          <Button
            className="resume-btn"
            data-testid="resume-btn"
            type="link"
            content="Resume"
            link={contacts.info.resumeLink}
            hasHover
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
