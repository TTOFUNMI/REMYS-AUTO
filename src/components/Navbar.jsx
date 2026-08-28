const Navbar = () => {
  return (
        <nav className="navBox">
           <a className="siteName" href="/">RemyAutos</a>
           <ul className="navName">
            <li><a href="/cars">The Cars</a></li>
            <li><a href="/about">About</a></li>     
           </ul>
        </nav>
  )
}

export default Navbar;