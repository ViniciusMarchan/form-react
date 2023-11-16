import "../components/styles/Header.css"

function Header() {
    return(
        <header>
        <h2 class="logo"><ion-icon name="logo-github"></ion-icon></h2>
        <nav class="navigation">
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Contato</a>
            <button class="btnLogin-popup">Login</button>
        </nav>
        </header>
    )
}

export default Header;