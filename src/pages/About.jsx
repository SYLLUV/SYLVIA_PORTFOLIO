import React from "react";
import Navbar from "../Components/Navbar";

export default function About() {
  return (
    <>
      <section>
        <header className="header-1">
          <Navbar />
          <h1 className="about-h1">BELVIA.</h1>
        </header>
      </section>

      <div className="about-h2">
        <div className="about-div">
          <p>
            <span>
              <a href="">HOME</a>
            </span>
          </p>
          <p>
            <span>
              <a href="">ABOUT US</a>
            </span>
          </p>
        </div>
        <h1>About Us</h1>
      </div>
      <div className="about-h3">
        <section className="h3-sub">
          <div className="About__Grid">
            <div className="about-page">
              <h2 className="about-sub">5,000</h2>
              <p>Happy Clients</p>
            </div>
            <div className="about-page">
              <h2 className="about-sub">1,200</h2>
              <p>Projects Done</p>
            </div>
            <div className="about-page">
              <h2 className="about-sub">500</h2>
              <p>Cups of coffee</p>
            </div>
            <div className="about-page">
              <h2 className="about-sub">587</h2>
              <p>Working hours</p>
            </div>
          </div>
        </section>
        <section className="address-page">
          <p>ABOUT ME</p>
          <h1>
            A Full Stack Web Developer <br /> based in Nigeria
          </h1>
          <h4>Full Stack Web Developer</h4>
          <div className="address">
            <div className="address-sub">
              <div>
                <p>Name:</p>

                <p className="color">Ikwuka Chinenye Sylvia</p>
              </div>
              <div>
                <p>DOB:</p>
                <p className="color">30th Dec.2020.</p>
              </div>
              <div>
                <p>Address:</p>
                <p className="color">
                  No 8 Pope Johnpaul Seminary Road Okpuno Anambra State.
                </p>
              </div>
            </div>
            <div className="address-sub2">
              <div>
                <p>Zip Code:</p>
                <p className="color">1000</p>
              </div>
              <div>
                <p>Email:</p>
                <p className="color">Totsy2013@gmail.com</p>
              </div>
              <div>
                <p>Phone:</p>
                <p className="color">07032591765</p>
              </div>
            </div>
          </div>
          <div className="cv">
            <a href="">DOWNLOAD CV</a>
          </div>
        </section>
      </div>
      <div>
        <div className="skill">
          <p>SKILLS</p>
          <h1>My Skills</h1>
        </div>
      </div>
      <div className="skill-sub">
        <div>
          <h4>
            HTML5 <span className="span-1">80%</span>
          </h4>
          <div className="div-1">
            <div className="div-2"></div>
          </div>
        </div>
        <div>
          <h4>
            CSS3 <span className="span-1">80%</span>
          </h4>
          <div className="div-1">
            <div className="div-2"></div>
          </div>
        </div>
        <div>
          <h4>
            JAVASCRIPT <span className="span-2">70%</span>
          </h4>
          <div className="div-1">
            <div className="div-3"></div>
          </div>
        </div>
        <div>
          <h4>
            REACT <span className="span-2">60%</span>
          </h4>
          <div className="div-1">
            <div className="div-4"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="testimonial">
          <p>TESTIMONIAL</p>
          <h1>Happy Guests</h1>
        </div>
        <div>
          <div className="remarks">
            <div className="remark-main">
              <h2>Roger Scott</h2>
              <p>
                <span>
                  <i class="bx bxs-quote-left"></i>
                </span>
                MARKETING MANAGER
              </p>
              <h5>
                Far far away,behind the word mountains, <br />
                far from the countries, <br />
                there lives a blind text.
              </h5>
            </div>
            <div className="remark-main">
              <h2>Roger Scott</h2>
              <p>
                <span>
                  <i class="bx bxs-quote-left"></i>
                </span>
                MARKETING MANAGER
              </p>
              <h5>
                Far far away,behind the word mountains, <br />
                far from the countries, <br />
                there lives a blind text.
              </h5>
            </div>
            <div className="remark-main">
              <h2>Roger Scott</h2>
              <p>
                <span>
                  <i class="bx bxs-quote-left"></i>
                </span>
                MARKETING MANAGER
              </p>
              <h5>
                Far far away,behind the word mountains, <br />
                far from the countries, <br />
                there lives a blind text.
              </h5>
            </div>
          </div>
        </div>
        <div className="footer">
          <p className="about-footer">
            Copyright <i className="bx bx-copyright"></i> 2023 All right
            reserved | This template is made with{" "}
            <i className="bx bxs-heart"></i>
            by <a href="">Colorlib</a>
          </p>
        </div>
      </div>
    </>
  );
}
