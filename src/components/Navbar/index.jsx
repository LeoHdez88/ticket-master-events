import Image from 'react-bootstrap/Image';
import imgs from "../../utils/img/logo_Boletas.svg"
import { Link, useLocation  } from 'react-router-dom';



const Navbars = () =>{

    const location = useLocation();
    return(
        <>
       <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to={`/`} >
            <Image
                    alt="Logo"
                    src={imgs}
                    width="100%"
                    height="80"
                    style={{

                      }}
                    className="d-inline-block align-top"
                    roundedCircle 
                    />
                    {' '}
            </Link>
            <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header" style={{marginBottom: "-50px"}}>
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <Image
                      alt="Logo"
                      src={imgs}
                      width="300"
                      height="180"
                      className="d-inline-block align-top"
                      roundedCircle
                      />
                </h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link  to={`/`}  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={"offcanvas"} aria-current="page"> Inicio </Link>
                  </li>
                  <li className="nav-item">
                    <Link  to={`/events`}  className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`} onClick={"offcanvas"} >Eventos</Link>
                  </li>
                  <li className="nav-item">
                    <Link  to={`/profile`}   className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} onClick={"offcanvas"} >Perfil</Link>
                  </li>
                  <li className="nav-item">
                    <Link  to={`/signupform`}   className={`nav-link ${location.pathname === '/signupform' ? 'active' : ''}`} onClick={"offcanvas"}  >Registro</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
     </>
    );


};


export default Navbars;