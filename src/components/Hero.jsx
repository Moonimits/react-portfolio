import profile from "../assets/profile.png";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 text-center py-lg-5 fade-in" style={{"--i": 9}}>
          <img src={profile} alt="" className="img-fluid hero-image w-75"/>
        </div>
        <div className="col-12 col-lg-6 order-lg-first mt-4 mt-lg-0">
          <h3 className="hero-subtitle fade-left" style={{"--i": 6}}>
            Hi, I'm <span>Marco</span>
          </h3>
          <h1 className="hero-title fade-left" style={{"--i": 7}}>
            <span>Web</span> Developer
          </h1>
          <p className="hero-p lead mt-3 fade-left" style={{"--i": 8}}>
            Motivated and results oriented professional with proven work experience in computer programming and web
            development. Eager to expand technical expertise in modern development practices and stay aligned with
            current industry trend. Seeking to contribute to a well-established organization that values continuous
            learning, innovations and growth. Committed to enhancing skills, mastering efficient techniques, and learning
            new technologies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
