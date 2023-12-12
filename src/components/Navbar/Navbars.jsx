import { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import imgs from "../../utils/img/logo_Boletas.svg"
import logo from "../../utils/img/logo_B.svg"
import { Link, useLocation  } from 'react-router-dom';
import { useUserContext, useUserToggleContext } from "../../hooks/UserProvider";
import User from '../User/User';


const Navbars = () =>{

    const user = useUserContext();

    const location = useLocation();

    return(
      <div className="container-fluid px-0 fixed-top">
        <nav className="navbar navbar-expand-sm navbar-dark bg-black py-0 px-0">
            <Link className="navbar-brand" to={`/`} >
                <Image
                        alt="Logo"
                        src={imgs}
                        width="200"
                        height="50"
                        />{''}
            </Link>
          <span style={{ backgroundColor: "gray", width: "1px", height: "50px"}}></span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" >
                <Link  to={`/`}  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} style={{ margin: "0px 30px"}}> Inicio </Link>
              </li>
              <li className="nav-item">
                <Link  to={`/events`}  className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`} style={{ margin: "0px 30px"}} >Eventos</Link>
              </li>
              {!user ?
                (
                <li className="nav-item">
                  <Link  to={`/signupform`}   className={`nav-link ${location.pathname === '/signupform' ? 'active' : ''}`} style={{ margin: "0px 30px"}} >Registro</Link>
                </li>
                ):
                (
                  <li className="nav-item">
                    <Link  to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} style={{ margin: "0px 30px"}}>Perfil</Link>
                  </li>
                )
              }
            </ul>
            <span className="justify-content-end">
            {
                    user ?
                    (
                       <User user={{user}}></User>
                    ):
                    (
                      <span></span>
                    )
            }
            </span>
          </div>
        </nav>
      </div>
    );
};


export default Navbars;