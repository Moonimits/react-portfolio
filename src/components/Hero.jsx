import profile from "../assets/profile.png";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 text-center py-lg-5">
          <img src={profile} alt="" className="img-fluid hero-image w-75" />
        </div>
        <div className="col-12 col-lg-6 order-lg-first d-flex flex-column justify-content-center pt-5 pt-lg-0">
          <h3 className="hero-subtitle">
            Hi, I'm <span>Marco</span>
          </h3>
          <h1 className="hero-title">
            <span>Front-End</span> Developer
          </h1>
          <p className="hero-p lead mt-3">
            A fresh graduate of Information Technology from Batangas State
            University - JPLPC Malvar, has a burning passion in programming and
            aspiring to become a professional Web Developer. Seeking a
            well-established organization that offers me a stable and positive
            workplace, inspiring me to enhance and develop new skills and to
            learn new technologies that will be utilized for the betterment of
            the company.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
