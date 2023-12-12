import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext, useUserToggleContext } from "../../hooks/UserProvider";


const Profile = () => {
    const navigate = useNavigate();

    const cambiaLogin = useUserToggleContext();

    const users = useUserContext();
    
    const handleClearClick = () => {
        cambiaLogin(null);
        navigate("/");
    };


    return (
        <div >
            <section className="vh-100 bg-image" style={{backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`}}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: "15px"}}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Datos de Usuario</h2>

                                    <form>

                                        <div className="form-outline mb-4">
                                            <label 
                                                className="form-label" 
                                                >Nombre
                                            </label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                className="form-control form-control-lg"
                                                value={users?.Name}
                                                readOnly
                                                                                              
                                            />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label 
                                                className="form-label" 
                                                >Edad
                                            </label>
                                            <input 
                                                type="email" 
                                                id="age" 
                                                className="form-control form-control-lg" 
                                                value={users?.Age}                                              
                                               readOnly
                                            />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label 
                                                className="form-label" 
                                                >Correo Electronico
                                            </label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                className="form-control form-control-lg"     
                                                 value={users?.Email}
                                                readOnly                                          
                                            />
                                        </div>
                                    
                                        <div className="d-flex justify-content-center">
                                            <div 
                                                style={{margin: "auto"}}>
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-body" 
                                                        onClick={handleClearClick}>Salir
                                                    </button>
                                            </div>
                                        </div>

                                    </form>                      
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    );

};




export default Profile;