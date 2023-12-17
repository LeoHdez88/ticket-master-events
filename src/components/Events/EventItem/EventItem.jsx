import './styles.css';

const EventItem = ({info, id ,name, image, onEventClick}) =>{
    
    const  handleSeeMoreClick = (e)=>{
        e.stopPropagation();
        onEventClick(id);
    }
    
    return(
            <div className="card mb-3 col-5 shadow-lg p-3 mb-5 bg-white rounded border-0 mx-auto">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} alt={name} width={250} height={250}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text event-info">{info}</p>
                        </div>
                        <div className="card-text">
                            <small className="text-body-secondary">
                                <button onClick={handleSeeMoreClick} className='btn btn-primary see-more-btn'>Ver Mas</button>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
    );

};

export default EventItem;