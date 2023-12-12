

const Error = (props) => {
    const {title, message}=props
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert"> 
            <strong>{title}</strong> {message}.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
    )
}

export default Error