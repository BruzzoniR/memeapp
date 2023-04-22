import "./Footer.css"
import {AiFillGithub,AiFillLinkedin,AiOutlineMail} from "react-icons/ai"

function Footer() {
    return <footer className="footer">

    <div className='redes'>
        <a href="https://github.com/BruzzoniR/">
            <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/roberto-bruzzoni/">
            <AiFillLinkedin />
        </a>        
        <a href="mailto:bruzzoni.r@gmail.com">
            <AiOutlineMail />
        </a>
    </div>
    <img src="/img/Logo-completo.png" alt='Logo MemeApp' />
    <strong>Desarrollado por Roberto Martín Bruzzoni</strong>
    </footer>


}

export default Footer