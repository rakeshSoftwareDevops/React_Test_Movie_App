import './Footer.css';
import facebookLogo from '../images/facebook-white.svg';
import twitterLogo from '../images/twitter-white.svg';
import instagramLogo from '../images/instagram-white.svg';
import appStoreLogo from '../images/app-store.svg';
import playStoreLogo from '../images/play-store.svg';
import windowsStoreLogo from '../images/windows-store.svg';


function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-up">
        <p>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
        
      </div>
      <div className="Footer-content">
        <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
      </div>
      <div className="Footer-icons">
        <div className="FooterLeftIcons">
          <img src={facebookLogo} width="100" height="35" alt="facebookLogo"/>
          <img src={twitterLogo} width="100" height="35" alt="twitterLogo"/>
          <img src={instagramLogo} width="100" height="35" alt="instagramLogo"/>
        </div>
        <div className="FooterRightIcons">
          <img className="FooterRightIcons1" src={appStoreLogo} width="100" height="35" alt="appStoreLogo"/>
          <img className="FooterRightIcons2" src={playStoreLogo} width="100" height="35" alt="playStoreLogo"/>
          <img className="FooterRightIcons3" src={windowsStoreLogo} width="100" height="35" alt="windowsStoreLogo"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;