import React from 'react'
import './App.scss'  
const App = () => {
  return (
    <>
    {/* ======= Mobile nav toggle button ======= */}
    <i className="bi bi-list mobile-nav-toggle d-xl-none" />
    {/* ======= Header ======= */}
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <a href="./images/me.jpg">
            <img
              src="./images/me1.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
          </a>
          <h1 className="text-light">
            <a href="./html/index.html">Hamid Raza</a>
          </h1>
          <div className="social-links mt-3 text-center">
            {/* Social Links */}
            <a href="./html/profile.php.html" className="facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="./html/vipul___kumar____.html" className="instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="./html/abhishek-kumar-261897187.html" className="linkedin">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="./html/vipul1020.html" className="github">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto">
                <i className="fa-solid fa-house" />
                <span> Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="fa-regular fa-user" />
                <span> About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="fa-regular fa-file-lines" />
                <span> Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <i className="fa-solid fa-briefcase" />
                <span> Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto">
                <i className="fa-solid fa-gears" />
                <span> Services</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    {/* ======= Hero Section ======= */}
    <section id="hero" className="p-0">
      <div className="hero-section-inner-wrapper d-flex flex-column justify-content-center align-items-start h-100">
        <div
          className="hero-container aos-init aos-animate ms-5"
          data-aos="fade-in"
        >
          <h1>Hamid Raza</h1>
          <p>
            I'm
            <span
              className="typed"
              data-typed-items=" Frontend Developer, Web Designer, Programmer"
            />
            <span className="typed-cursor typed-cursor--blink" aria-hidden="true">
              |
            </span>
          </p>
        </div>
      </div>
    </section>
    <main id="main">
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#149ddd" }}>About</h2>
            <p style={{ color: "#b0bec5" }}>
              As a Frontend Web Developer with expertise in HTML, CSS, JavaScript,
              Bootstrap, Tailwind CSS, SASS, and React, I thrive on building
              modern, responsive, and high-performance web applications. My
              passion for clean design and efficient code ensures that every
              project I work on delivers a flawless, user-friendly experience.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
              <img src="./images/me.jpg" className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate about-my-info"
              data-aos="fade-left"
            >
              <h3>Frontend Web Developer</h3>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="fa-solid fa-chevron-right me-3" />
                      <strong>Birthday:</strong> <span>24 April 2004</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-chevron-right me-3" />
                      <strong>Email:</strong>
                      <span>hamidashiq008@gmail.com</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-chevron-right me-3" />
                      <strong>City:</strong> <span>Faisalabad, Pakistan</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="fa-solid fa-chevron-right me-3" />
                      <strong>Age:</strong> <span>21</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-chevron-right me-3" />
                      <strong>Degree:</strong> <span>BSCS in progress</span>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <h5 className="text-light">
                Building modern, responsive, and user-friendly web applications
              </h5>
              <p>
                As a Frontend Web Developer with expertise in HTML, CSS,
                Bootstrap, and React, I specialize in building dynamic,
                responsive, and user-friendly web interfaces. My skills focus on
                crafting clean designs and seamless user experiences, ensuring
                that every project I work on meets high standards of quality,
                performance, and usability. I am passionate about continuous
                learning and committed to delivering
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Facts Section ======= */}
      <section id="facts" className="facts">
        <div className="container">
          <div className="facts-title">
            <h2>Facts</h2>
            <p style={{ color: "#333333" }}>
              With a proven track record of developing high-quality web
              applications showcased in my projects, I am proficient in delivering
              robust solutions that meet client needs. I am also available for
              freelance opportunities to bring your ideas to life with precision
              and excellence.
            </p>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-4 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={2}
                  data-purecounter-duration={0}
                  className="purecounter"
                >
                  2
                </span>
                <p>
                  <strong>Experience</strong> Years of experience in development.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={6}
                  data-purecounter-duration={0}
                  className="purecounter"
                >
                  6
                </span>
                <p>
                  <strong>Projects</strong> Built projects.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate box-last-card"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="count-box">
                <i className="bi bi-headset" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={100}
                  data-purecounter-duration={0}
                  className="purecounter"
                >
                  100
                </span>
                <p>
                  <strong>Hours Of Support</strong> Hours in freelancing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Skills Section ======= */}
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#149ddd" }}>Skills</h2>
            <p style={{ color: "#b0bec5" }}>
              Over the time i have gained many skills that have been my assistance
              since day one in this amazing field , but learning is infinite so i
              continue to acquire more skills along the way by building on what i
              have already acquired.
            </p>
          </div>
          <div className="skills-content">
            <div className="row aos-init aos-animate" data-aos="fade-up">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="progress">
                  <span className="skill">
                    React <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "55%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Resume Section ======= */}
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#173b6c" }}>Resume</h2>
            <p style={{ color: "#333333" }}>
              Full-stack developer with a Degree in Computer Science, skilled in
              the MERN stack. My education and projects reflect a strong focus on
              building dynamic web applications. Available for freelance work.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
              <div className="resume-item">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-content">
                  <h4>Hamid Raza</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven Web Developer and Designer
                      with skills in designing and developing user-centered
                      websites with all the modern and demanded features.
                    </em>
                  </p>
                  <ul>
                    <li>Mansoorabad, Faisalabad</li>
                    <li>hamidashiq008@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="resume-item">
                <h3 className="resume-title">Education</h3>
                <div className="resume-content">
                  <div className="education-list">
                    <div className="education-card">
                      <h4>Matriculation</h4>
                      <h5>2021</h5>
                      <p>
                        <em>Govt Muslim High School, Tariqabad, Faisalabad</em>
                      </p>
                      <p>Completed my 10th matriculation.</p>
                    </div>
                    <div className="education-card">
                      <h4>Intermediate in Computer Science (ICS)</h4>
                      <h5>2018 - 2022</h5>
                      <p>
                        <em>
                          Government Islamia College, Sargodha road, Faisalabad
                        </em>
                      </p>
                      <p>
                        Here, I gained multiple skills and valuable experiences
                        throughout my learning journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="resume-item">
                <div className="resume-content">
                  <div className="education-card">
                    <h4>
                      Bachelor of Science in Computer Science (BSCS) – In Progress
                    </h4>
                    <h5>2024-2028</h5>
                    <p>
                      <em>Virtual University, Faisalabad</em>
                    </p>
                    <p>Learning never ends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#149ddd" }}>Projects</h2>
            <p style={{ color: "#b0bec5" }}>My Projects</p>
          </div>
          <div
            className="row portfolio-container aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay={100}
            style={{ position: "relative", height: 460 }}
          >
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              style={{ position: "absolute", left: 0, top: 0 }}
            >
              <div className="portfolio-wrap">
                <img src="./images/EDOC.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="./images/EDOC.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Image"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="./html/E-Doc.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              style={{ position: "absolute", left: "396.656px", top: 0 }}
            >
              <div className="portfolio-wrap">
                <img src="./images/Project2.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="./images/Project2.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Image"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="./html/Restaurant-Management.html"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              style={{ position: "absolute", left: "793.312px", top: 0 }}
            >
              <div className="portfolio-wrap">
                <img src="./images/SEO.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="./images/SEO.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Image"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="./html/SEO-Audit-Report.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              style={{ position: "absolute", left: 0, top: 230 }}
            >
              <div className="portfolio-wrap">
                <img src="./images/project 4.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="./images/project 4.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Image"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="./html/Main.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              style={{ position: "absolute", left: "396.656px", top: 230 }}
            >
              <div className="portfolio-wrap">
                <img src="./images/linkedin.jpg" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="./images/linkedin.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Image"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="./html/Linkedin-Connect-All-Chrome-Extension.html"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              style={{ position: "absolute", left: "793.312px", top: 230 }}
            >
              <div className="portfolio-wrap">
                <img src="./images/gama.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="./images/gama.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Image"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="./html/GAMA.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title aos-init aos-animate" data-aos="fade-up">
            <h2 style={{ color: "#173b6c" }}>Services</h2>
            <p
              style={{
                color: "#333333",
                fontFamily: '"Lato", sans-serif',
                marginBottom: "1rem",
                textAlign: "center",
                fontWeight: 400
              }}
            >
              All your digital needs covered.
            </p>
          </div>
          <div
            className="card-grid aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="card">
              <div className="card-image">
                <img src="./images/gd.jpg" alt="Web Application Development" />
              </div>
              <div className="card-content">
                <h3>Web Application</h3>
              </div>
            </div>
            <div
              className="card aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="card-image">
                <img src="./images/contentwr.jpg" alt="content writing" />
              </div>
              <div className="card-content">
                <h3>Content Writing</h3>
              </div>
            </div>
            <div
              className="card aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="card-image">
                <img src="./images/cw.png" alt="SEO" />
              </div>
              <div className="card-content">
                <h3>SEO</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Testimonials Section ======= */}
      {/* <section id="testimonials" class="testimonials section-bg">
    <div class="container">
      <div class="section-title">
        <h2 style="color: #149ddd">Testimonials</h2>
        <p style="color: #b0bec5">Freelancing &amp; Team Reviews</p>
      </div>
  
      <div
        class="testimonials-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div
          class="swiper-wrapper"
          id="swiper-wrapper-992ed1e7abc9f3db"
          aria-live="off"
          style="
            transform: translate3d(-1976.67px, 0px, 0px);
            transition-duration: 0ms;
          "
        >
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            data-swiper-slide-index="2"
            role="group"
            aria-label="3 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Abhishek was an asset to our project. His skills and
                positive attitude made a big difference. Highly recommended
                for any team.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="./images/default.png"
                class="testimonial-img"
                alt=""
              />
              <h3>Ayush Kumar</h3>
              <h4>Team Member</h4>
            </div>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
            data-swiper-slide-index="3"
            role="group"
            aria-label="4 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Abhishek was great to work with. He is dedicated, helpful,
                and contributed a lot to our project's success.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="./images/testis.png"
                class="testimonial-img"
                alt=""
              />
              <h3>Rajyavardhan</h3>
              <h4>Project Team Member</h4>
            </div>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate"
            data-swiper-slide-index="4"
            role="group"
            aria-label="5 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Absolutely thrilled with the service! The work was
                professional, and the results exceeded my expectations.
                Highly recommend to anyone seeking top-notch quality!
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="./images/sam.png" class="testimonial-img" alt="" />
              <h3>Sangeet Sagar</h3>
              <h4>Customer</h4>
            </div>
          </div>
          <div
            class="swiper-slide"
            data-swiper-slide-index="0"
            role="group"
            aria-label="1 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Abhishek was an enthusiastic, dedicated team member with a
                keen willingness to learn, consistently contributing
                innovative ideas and strong problem-solving skills during my
                tenure.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="./images/default.png"
                class="testimonial-img"
                alt=""
              />
              <h3>Riddhi Bhagat</h3>
              <h4>GDSC Lead</h4>
            </div>
          </div>
          <div
            class="swiper-slide swiper-slide-prev"
            data-swiper-slide-index="1"
            role="group"
            aria-label="2 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Collaborating with Abhishek is seamless. His expertise,
                creativity, and team spirit enrich our web projects. I value
                his contributions.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="./images/default.png"
                class="testimonial-img"
                alt=""
              />
              <h3>Rehan Faizal</h3>
              <h4>Team member</h4>
            </div>
          </div>
          <div
            class="swiper-slide swiper-slide-active"
            data-swiper-slide-index="2"
            role="group"
            aria-label="3 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Abhishek was an asset to our project. His skills and
                positive attitude made a big difference. Highly recommended
                for any team.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="./images/default.png"
                class="testimonial-img"
                alt=""
              />
              <h3>Ayush Kumar</h3>
              <h4>Team Member</h4>
            </div>
          </div>
          <div
            class="swiper-slide swiper-slide-next"
            data-swiper-slide-index="3"
            role="group"
            aria-label="4 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Abhishek was great to work with. He is dedicated, helpful,
                and contributed a lot to our project's success.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="./images/testis.png"
                class="testimonial-img"
                alt=""
              />
              <h3>Rajyavardhan</h3>
              <h4>Project Team Member</h4>
            </div>
          </div>
          <div
            class="swiper-slide"
            data-swiper-slide-index="4"
            role="group"
            aria-label="5 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Absolutely thrilled with the service! The work was
                professional, and the results exceeded my expectations.
                Highly recommend to anyone seeking top-notch quality!
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="./images/sam.png" class="testimonial-img" alt="" />
              <h3>Sangeet Sagar</h3>
              <h4>Customer</h4>
            </div>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate"
            data-swiper-slide-index="0"
            role="group"
            aria-label="1 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Abhishek was an enthusiastic, dedicated team member with a
                keen willingness to learn, consistently contributing
                innovative ideas and strong problem-solving skills during my
                tenure.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="./images/default.png"
                class="testimonial-img"
                alt=""
              />
              <h3>Riddhi Bhagat</h3>
              <h4>GDSC Lead</h4>
            </div>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
            data-swiper-slide-index="1"
            role="group"
            aria-label="2 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Collaborating with Abhishek is seamless. His expertise,
                creativity, and team spirit enrich our web projects. I value
                his contributions.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="./images/default.png"
                class="testimonial-img"
                alt=""
              />
              <h3>Rehan Faizal</h3>
              <h4>Team member</h4>
            </div>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            data-swiper-slide-index="2"
            role="group"
            aria-label="3 / 5"
            style="width: 375.333px; margin-right: 20px"
          >
            <div
              class="testimonial-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <p class="teams-review">
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Abhishek was an asset to our project. His skills and
                positive attitude made a big difference. Highly recommended
                for any team.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="./images/default.png"
                class="testimonial-img"
                alt=""
              />
              <h3>Ayush Kumar</h3>
              <h4>Team Member</h4>
            </div>
          </div>
        </div>
        <div
          class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
        >
          <span
            class="swiper-pagination-bullet"
            tabindex="0"
            role="button"
            aria-label="Go to slide 1"
          ></span
          ><span
            class="swiper-pagination-bullet"
            tabindex="0"
            role="button"
            aria-label="Go to slide 2"
          ></span
          ><span
            class="swiper-pagination-bullet swiper-pagination-bullet-active"
            tabindex="0"
            role="button"
            aria-label="Go to slide 3"
            aria-current="true"
          ></span
          ><span
            class="swiper-pagination-bullet"
            tabindex="0"
            role="button"
            aria-label="Go to slide 4"
          ></span
          ><span
            class="swiper-pagination-bullet"
            tabindex="0"
            role="button"
            aria-label="Go to slide 5"
          ></span>
        </div>
        <span
          class="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </div>
  </section> */}
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#173b6c" }}>Contact</h2>
            <p
              style={{
                color: "#333333",
                padding: "0 0 10px 0",
                marginBottom: 20,
                fontSize: "17.6px",
                textAlign: "center",
                width: "100%",
                boxSizing: "border-box"
              }}
            >
              Contact me for work and related stuff, also you can send any
              messages regarding any queries.
            </p>
          </div>
          <div className="row aos-init aos-animate" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>Mansoorabad, Faisalabad, Pakistan</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>hamidashiq008@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="assets/submit_feedback.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* ======= Footer ======= */}
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          <p>
            © Copyright
            <a
              href="https://www.linkedin.com/in/hamid-raza-b403b233a/"
              target="_blank"
            >
              hamidashiq
            </a>
          </p>
        </div>
      </div>
    </footer>
    <a
      href="#"
      className="back-to-top d-flex align-items-center justify-content-center active"
    >
      <i className="fa-solid fa-arrow-up" style={{ fontSize: 15 }} />
    </a>
    <style
      data-typed-js-cursor-css="true"
      dangerouslySetInnerHTML={{
        __html:
          "\n      .typed-cursor {\n        opacity: 1;\n      }\n\n      .typed-cursor.typed-cursor--blink {\n        animation: typedjsBlink 0.7s infinite;\n        -webkit-animation: typedjsBlink 0.7s infinite;\n        animation: typedjsBlink 0.7s infinite;\n      }\n\n      @keyframes typedjsBlink {\n        50% {\n          opacity: 0;\n        }\n      }\n\n      @-webkit-keyframes typedjsBlink {\n        0% {\n          opacity: 1;\n        }\n\n        50% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n    "
      }}
    />
  </>
  
  )
}

export default App