import main from "../assets/images/main.svg";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Etsy hammock umami jianbing hell of bespoke slow-carb twee man braid
            forage banh mi. Woke ugh cred gatekeep cornhole, snackwave activated
            charcoal. Austin slow-carb ascot selfies, DSA ugh farm-to-table.
            Celiac typewriter actually iPhone drinking vinegar green juice
            mukbang JOMO iceland.
          </p>
          <Link className="btn btn-hero" to="/register">
            login | register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
