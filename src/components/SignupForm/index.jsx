import { useForm } from 'react-hook-form'


const SignupForm = () =>{
    const {register, handleSubmit, reset, formState:{errors}}= useForm();


    const handleClearClick = () => {
        reset();
    };

    const handleSubmitForm = (data) => {

    };


    return(
        <form onSubmit={handleSubmit(handleSubmitForm)}>
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
                                <label className="form-label" form="name">Nombre</label>
                                <input type="text" id="name" className="form-control form-control-lg" {...register('name',{required: true})}/>
                                </div>

                                <div className="form-outline mb-4">
                                <label className="form-label" form="age">Edad</label>
                                <input type="email" id="age" className="form-control form-control-lg" {...register('age',{required: true})}/>
                                </div>

                                <div className="form-outline mb-4">
                                <label className="form-label" form="email">Correo Electronico</label>
                                <input type="email" id="email" className="form-control form-control-lg" {...register('email',{required: true})}/>
                                </div>

                                <div className="form-outline mb-4">
                                <label className="form-label" form="password">Contraseña</label>
                                <input type="password" id="password" className="form-control form-control-lg" {...register('password',{required: true})}/>
                                </div>

                                <div className="form-outline mb-4">
                                <label className="form-label" form="passwordRequed">Repita su Contraseña</label>
                                <input type="password" id="passwordRequed" className="form-control form-control-lg" {...register('passwordRequed',{required: true})}/>
                                </div>

                               
                                <div className="d-flex justify-content-center">
                                    <div style={{margin: "auto"}}>
                                        <button type="button" className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-body" onClick={handleClearClick}>Limpiar</button>
                                    </div>
                                    <div style={{marginRight: "auto"}}>
                                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Registrarse</button>
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
        </form>
    );

};

export default SignupForm;