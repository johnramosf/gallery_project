import { Link } from "react-router-dom";
import { Landscape1 } from "./Landscape1";
import { Landscape2 } from "./Landscape2";
import { Landscape3 } from "./Landscape3";
import { Landscape4 } from "./Landscape4";
import { Landscape5 } from "./Landscape5";
import { Landscape6 } from "./Landscape6";
import { Landscape7 } from "./Landscape7";
import { Landscape8 } from "./Landscape8";
import { Landscape9 } from "./Landscape9";
import { Landscape10 } from "./Landscape10";

export const Navigation = () => {
  return (
    <div className="container thumbnail-container mt-2">
      <Link to="/landscape1" className="links">
        <figure className="thumbnail-image-size">
          <Landscape1 />
          <figcaption>Paisaje 1</figcaption>
        </figure>
      </Link>
      <Link to="/landscape2" className="links">
        <figure className="thumbnail-image-size">
          <Landscape2 />
          <figcaption>Paisaje 2</figcaption>
        </figure>
      </Link>
      <Link to="/landscape3" className="links">
        <figure className="thumbnail-image-size">
          <Landscape3 />
          <figcaption>Paisaje 3</figcaption>
        </figure>
      </Link>
      <Link to="/landscape4" className="links">
        <figure className="thumbnail-image-size">
          <Landscape4 />
          <figcaption>Paisaje 4</figcaption>
        </figure>
      </Link>
      <Link to="/landscape5" className="links">
        <figure className="thumbnail-image-size">
          <Landscape5 />
          <figcaption>Paisaje 5</figcaption>
        </figure>
      </Link>
      <Link to="/landscape6" className="links">
        <figure className="thumbnail-image-size">
          <Landscape6 />
          <figcaption>Paisaje 6</figcaption>
        </figure>
      </Link>
      <Link to="/landscape7" className="links">
        <figure className="thumbnail-image-size">
          <Landscape7 />
          <figcaption>Paisaje 7</figcaption>
        </figure>
      </Link>
      <Link to="/landscape8" className="links">
        <figure className="thumbnail-image-size">
          <Landscape8 />
          <figcaption>Paisaje 8</figcaption>
        </figure>
      </Link>
      <Link to="/landscape9" className="links">
        <figure className="thumbnail-image-size">
          <Landscape9 />
          <figcaption>Paisaje 9</figcaption>
        </figure>
      </Link>
      <Link to="/landscape10" className="links">
        <figure className="thumbnail-image-size">
          <Landscape10 />
          <figcaption>Paisaje 10</figcaption>
        </figure>
      </Link>
    </div>
  );
};
