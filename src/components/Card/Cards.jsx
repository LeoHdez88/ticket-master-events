import { Image } from "react-bootstrap"


const Cards = (props) => {

    const {images, title,textP, textS} = props
    return (
            <div className="col">
                <div className='card shadow-lg p-3 mb-5 bg-white rounded' style={{height:"37rem", border: "none"}}>
                    <Image
                        alt="Logo"
                        src={images}
                        height="300px"
                        className='card-img-top'
                    />
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{textP}</p>
                    <p className="card-text"><small className="text-body-secondary">{textS}</small></p>
                    </div>
                </div>
            </div>
    )
}

export default Cards