function NavBar() {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#dad8eb"}}>
                <header
                 className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between"
                 style={{ backgroundColor: "#dad8eb"}}
                >
                    <div className="col-md-3 mb-2 mb-md-0">
                        <a className="navbar-Brand" href="#">
                            <img src="/logo.jpg" alt="logo" width="150" height="80"></img>
                        </a>
                    </div>
                        <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link text-dark active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Gallery/Items</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Contact Me!</a>
                            </li>
                        </ul>
                    
                </header>
            </div>
        </>
    )
}

export default NavBar