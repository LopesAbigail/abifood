import './styles.css';
import { ReactComponent as MainImage } from './main.svg'
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Place your order and <br /> we’ll deliver to you <br /> quickly!!!
                        </h1>
                        <h3 className="home-subtitle">
                            Choose your order and in a few minutes take us to <br /> your door
                        </h3>
                        <Link to="/orders" className="home-btn-order">PLACE THE ORDER</Link>
                    </div>
                    <div className="home-image">
                        <MainImage />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;