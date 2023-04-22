import './Header.css'

function Header() {
    return <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <img src="/img/Logo-completo.png" alt='Logo MemeApp' />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link mx-5 active" aria-current="page" href="#">JPG</a>
                <a className="nav-link mx-5" href="#">GIF</a>
                <a className="nav-link mx-5" href="#">About</a>
                </div>
            </div>
            </div>
      </nav>

}

export default Header