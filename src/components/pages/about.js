import React from "react";
import profilePicture from "../../../static/assets/images/bio/head-thumb.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit
        amet lorem eu purus mollis sodales. Donec eu mollis risus. Morbi non sem
        eu enim pharetra volutpat at a nisl. Proin fermentum finibus velit.
        Etiam ex nibh, semper quis libero in, aliquet dapibus nisl. Integer
        congue et leo pellentesque pellentesque. Sed facilisis velit eget urna
        fermentum volutpat.
      </div>
    </div>
  );
}
