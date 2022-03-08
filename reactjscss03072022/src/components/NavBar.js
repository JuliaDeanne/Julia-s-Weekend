import { Outlet,Link} from "react-router-dom";

const NavBar = () => {
    return (
        <>
        
        <div className="NavPage">
        <nav class="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
        {/*Nav bar logo*/}
       
        <Link to ="/Homepage" className="nav-link" aria-current="page">
        <a class="navbar-brand" href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="30" height="30" class="d-inline-block align-top" alt="logo"/>
            &nbsp;Julia Deanne  </a>
         </Link> 
       
        {/*Creating Nav bar*/}
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to ="/Homepage" className="nav-link" aria-current="page">
                        Homepage
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link to ="/Saturday" className="nav-link" aria-current="page">
                        Saturday
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to ="/Sunday" className="nav-link" aria-current="page">
                        Sunday
                    </Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    <Outlet />
    </div>
    </>
       
    )
}

export default NavBar;