import './styles.css';
import { ReactComponent as MainImage } from './main.svg'
import { ReactComponent as Logo } from './logo.svg'

function Navbar(){
    return(
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        Place your order and <br/> we’ll deliver to you <br/> quickly!!!
                    </h1>
                    <h3 className="home-subtitle">
                        Choose your order and in a few minutes take <br/> us to your door
                    </h3>
                    <a href="orders" className="home-btn-order">PLACE THE ORDER</a>
                </div>
                <div className="home-image">
                    <MainImage/>
                </div>
            </div>
        </div> 
    )
}

export default Navbar;