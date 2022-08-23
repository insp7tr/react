import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_682hoso",
        "template_arp4bcs",
        form.current,
        "9XEB4qGhEYvW-NwKq"
      )
      .then((result) => {
        if (result.status === 200) {
          setStatus({ success: true, message: "Message sent successfully" });
        } else {
          setStatus({
            success: false,
            message: "Something went wrong, please try again later.",
          });
        }
      });

    setButtonText("Send");

    e.target.reset();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <h2 className="text-center">Get In Touch</h2>

        <Row className="align-items-center">
          <Col size={12} md={6}>
            <div className="flex flex-col gap-5 mb-5 mr-0 sm:mt-14 sm:mr-12">
              <article className="bg-theme-bg p-5 rounded-2xl border border-theme-border text-center overflow-scroll">
                <MdOutlineEmail className="text-2xl mb-2 mx-auto" />
                <h4>Email</h4>
                <h5 className="text-light">talhapatel5412@gmail.com</h5>
                <a
                  href="mailto:talhapatel5412@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline text-2xl text-purple-700 font-bold hover:text-white transition"
                >
                  Send a message
                </a>
              </article>
              <article className="bg-theme-bg p-5 rounded-2xl border border-theme-border text-center">
                <BsWhatsapp className="text-2xl mb-2 mx-auto" />
                <h4>Whatsapp</h4>
                <h5 className="text-light">+27794518891</h5>
                <a
                  href="https://wa.me/+27794518891"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline text-2xl text-purple-700 font-bold hover:text-white transition"
                >
                  Send a message
                </a>
              </article>
            </div>
          </Col>
          <Col size={12} md={6}>
            <div className="mx-3">
              <form onSubmit={handleSubmit} ref={form}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" name="phone" placeholder="Phone No." />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
          {status.message && (
            <Col>
              <p
                className={
                  status.success === false
                    ? "text-red-500 text-center mt-5 sm:mt-0 text-4xl bg-theme-bg p-3 border border-theme-border"
                    : "text-green-400 text-center text-4xl bg-theme-bg p-3 border border-theme-border"
                }
              >
                {status.message}
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};
