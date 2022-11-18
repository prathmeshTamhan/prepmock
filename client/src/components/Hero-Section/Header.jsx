import React from "react";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <div className="class">
      <Navbar />
      <div className="name">
        <h1>
          What is
          <span> Prepmock?</span>
        </h1>
        <p className="details">
          {" "}
          "Interview being the most important part of any recruitment process.
          Before actual interview several rounds used to conduct and final ones
          are technical and HR rounds. There are many platforms where students
          can conduct there coding practices but none to practice there actual
          interviwee skills.repMOCK is the platform where student can practice
          his interview skills and also one can get interviwed by authorized
          mentor. It provides mock interview where question appear over the
          screen and video is being recorded as per questions and that video can
          be downloaded and sent for evaluation via emails. Video conferencing
          with mentors, feature provide get interviewed by authorised mentors."
        </p>
        <a href="#" className="cv-btn">
          {"Contact Us"}
        </a>
        {/* <img src={headerpic} id="headerpic" style={{ height: "100px" }} alt="/"></img> */}
      </div>
    </div>
  );
}

export default Header;
