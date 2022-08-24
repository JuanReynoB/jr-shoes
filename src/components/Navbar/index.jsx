import CartWidget from "../Cartwidget/cartWidget";

const Navbar = () => {
    return (

        <header className='header'>
            <h1 className='header-brand-name'>JR Shoes</h1>
            <nav className='header-nav'>
                <ul>
                    <li><a href=''>MODELOS</a></li>
                    <li><a href=''>NOSOTROS</a></li>
                    <li><a href=''>CONTACTO</a></li>
                    <li> <CartWidget/> </li>
                </ul>
            </nav>
        </header>
    )

}

export default Navbar;