import './Header.css';

function Header(props) {
  return (
    <div className="Header">
      <div className="Header-up">
        <div className="Left-content">
            <p>DEMO Streaming</p>
        </div>
        <div className="Right-content">
            <p className="LoginPara">Login</p>
            <div className="InnerRight-content">
               <p className="HeaderSlogan">Start Your free trial</p>
            </div>
        </div>
      </div>
      <div className="Main-content">
        <p>{props.headingTitle}</p>
      </div>
    </div>
  );
}

export default Header;