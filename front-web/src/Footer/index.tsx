import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg'
import {ReactComponent as LinkedinIcon} from './linkedin.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'

function Footer(){
    return(
        <footer className="main-footer">
            AbiFood: App desenvolvido durante a Semana DevSuperior 2.0 - 2021
            <div className="footer-icons">
                <a href="https://www.youtube.com/devsuperior" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/abigail-i-66b534117" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/lopes_abih/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;