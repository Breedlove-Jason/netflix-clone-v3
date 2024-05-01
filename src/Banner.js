import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhjukkwcishwdbbo3vp5m.jpeg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Nostrud occaecat consequat veniam do anim cupidatat ullamco id fugiat nisi amet consectetur incididunt. Incididunt ad cupidatat tempor cupidatat cupidatat duis qui excepteur minim sint nisi laboris. Ullamco dolor nostrud aliqua amet nostrud ullamco nostrud proident exercitation dolore. Irure ad voluptate ullamco Lorem labore. Ea nisi eu nisi esse proident adipisicing mollit magna. Minim excepteur minim ea labore adipisicing Lorem duis id eu fugiat exercitation voluptate. Est ullamco veniam ad cupidatat dolore cupidatat laborum labore reprehenderit amet proident adipisicing ut.`,
            150,
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
