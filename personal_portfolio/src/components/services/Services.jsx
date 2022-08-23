import React from "react";
import "./services.css";

// import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="rounded-3xl text-center py-16 px-12">
          <h5>What I Offer</h5>
          <h2 className="mb-5 text-5xl font-bold">Services</h2>

          <div className="container services__container">
            <article className="service">
              <div className="service__head">
                <h3>Frontend Development</h3>
              </div>

              <ul className="service__list">
                {/* <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li> */}
              </ul>
            </article>

            <article className="service">
              <div className="service__head">
                <h3>Backend Development</h3>
              </div>

              <ul className="service__list">
                {/* <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li> */}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
