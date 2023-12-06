import  { useState} from 'react'
import { useUserContext, useUserToggleContext } from "../../hooks/UserProvider";

const SignupForm = () =>{
   // const {register, handleSubmit, reset, formState:{errors}}= useForm();
    const [nameUser, setNameUser] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState (null);

    const cambiaLogin = useUserToggleContext();

    
    const handleClearClick = () => {
            setNameUser("")
            setAge("")
            setEmail("")
            const user ={
                Name: nameUser,
                Age:age,
                Email: email
            }
            cambiaLogin(user)
    };

    const handleSubmitForm = (e) => {
        e.preventDefault()
        setError(null)
        if (!nameUser.trim()){
            setError('Por favor ingrese un nombre válido')
            return
          }
          if (!age.trim()){
            setError('la edad esta vacia')
            return
          }
          if (!email.trim()){
            setError('por favor ingrese un email válida')
            return
          }
          const user ={
            Name: nameUser,
            Age:age,
            Email: email
          }
          cambiaLogin(user)
         // console.log(user);
          setNameUser("")
          setAge("")
          setEmail("")
          
    };


    return(
        <div >
            <section className="vh-100 bg-image" style={{backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`}}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: "15px"}}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Resgistrate</h2>

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
                                                onChange={(e)=>{setNameUser(e.target.value)}}
                                                value={nameUser}
                                                                                              
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
                                                onChange={(e)=>{setAge(e.target.value)}}
                                                value={age}                                              
                                               
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
                                                 value={email}
                                                 onChange={(e)=>{setEmail(e.target.value)}}                                            
                                            />
                                        </div>

                                        {/* <div className="form-outline mb-4">
                                        <label className="form-label" form="password">Contraseña</label>
                                        <input type="password" id="password" className="form-control form-control-lg" {...register('password',{required: true})}/>
                                        </div>

                                        <div className="form-outline mb-4">
                                        <label className="form-label" form="passwordRequed">Repita su Contraseña</label>
                                        <input type="password" id="passwordRequed" className="form-control form-control-lg" {...register('passwordRequed',{required: true})}/>
                                        </div> */}

                                    
                                        <div className="d-flex justify-content-center">
                                            <div 
                                                style={{margin: "auto"}}>
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-body" 
                                                        onClick={handleClearClick}>Limpiar
                                                    </button>
                                            </div>
                                            <div style={{marginRight: "auto"}}>
                                                <button 
                                                    onClick={handleSubmitForm}
                                                    type="submit" 
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Registrarse
                                                </button>
                                            </div>
                                        </div>

                                    </form> 
                                    {
                                        error ?
                                        ( <div>
                                        <p className="danger">
                                            {error}
                                        </p>
                                        </div>

                                        ):
                                        (
                                        <span></span>
                                        )
                                    }                           
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

export default SignupForm;