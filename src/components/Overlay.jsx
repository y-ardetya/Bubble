import "./sass/Overlay.scss";

const Overlay = () => {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <div className="nav--logo">
            <h1>Playfull Bubbles</h1>
          </div>
          <div className="nav--links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#resume">Resume</a>
          </div>
        </nav>
        <div className="sectionOne">
          <div className="sectionOne--text">
            <h1>
              Bubbles? We have more bubble. Join us to venture the bubble
              universe
            </h1>
          </div>
        </div>
        <div className="sectionTwo">
          <div className="sectionTwo--text">
            <h1>Still looking for bubble? You might want to check threejs, r3f, and poimandres works</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
