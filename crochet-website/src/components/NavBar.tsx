import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#dad8eb"}}>
                <header
                 className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between"
                 style={{ backgroundColor: "#dad8eb"}}
                >
                    <div className="col-md-3 mb-2 mb-md-0">
                        <NavLink className="navbar-Brand" to="/">
                            <img src="/logo.jpg" alt="logo" width="150" height="80"></img>
                        </NavLink>
                    </div>
                        <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => 
                                    "nav-link" + (isActive ? " active text-dark fw-bold" : " text-dark")
                                }>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/gallery" className={({ isActive }) => 
                                    "nav-link" + (isActive ? " active text-dark fw-bold" : " text-dark")
                                }>Gallery/Items</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => 
                                    "nav-link" + (isActive ? " active text-dark fw-bold" : " text-dark")
                                }>Contact Me!</NavLink>
                            </li>
                        </ul>
                    
                </header>
            </div>
        </>
    )
}

export default NavBar