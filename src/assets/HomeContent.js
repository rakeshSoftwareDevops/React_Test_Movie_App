import './HomeContent.css';
import {Link} from "react-router-dom";


function HomeContent() {
  return (
    <div className="HomeContent">
        <div className="MovieTitles">
            <div className="Tiles">
                <div className="Series">
                    <p>SERIES</p>
                </div>
                    <p className="Category"><Link to="/series">Popular Series</Link></p>
            </div>
            <div className="Tiles2">
                 <div className="Series">
                    <p>MOVIES</p>
                 </div>
                    <p className="Category"><Link to="/movies">Popular Movies</Link></p>
        
            </div>
        </div>
    </div>
  );
}

export default HomeContent;