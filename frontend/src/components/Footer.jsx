import instagramLogo from "../assets/icons/instagram.svg";
import mailLogo from "../assets/icons/mail.svg";
import twitterLogo from "../assets/icons/twitter.svg";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="main-line">
        <p>Copyright © 2023</p>
        <h3>Alcohol to be consumed in moderation</h3>
        <div className="social-network">
          <a href="https://www.instagram.com/cocktail.atom/">
            <img src={instagramLogo} alt="instagram logo" />
          </a>
          <a href="https://twitter.com/Cocktail_atom">
            <img src={twitterLogo} alt="twitter/X logo" />
          </a>
          <a href="mailto:cocktail.atom@gmail.com">
            <img src={mailLogo} alt="mail logo" />
          </a>
        </div>
      </div>
      <hr className="line" />
      <h3>Alcohol to be consumed in moderation</h3>
    </footer>
  );
}

export default Footer;
