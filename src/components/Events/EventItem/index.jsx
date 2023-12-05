import './styles.css';

const EventItem = ({info, id ,name, image, onEventClick}) =>{
    
    const  handleSeeMoreClick = (e)=>{
        e.stopPropagation();
        onEventClick(id);
    }
    
    return(
/*         <div onClick={()=> console.log('padre clickeado')} className='event-item-container'>
            <img src={image} alt={name} width={200} height={200}/>
            <div className='event-info-container'>
                <h4 className='event-name'>{name}</h4>
                <p className='event-info'>{info}</p>
                <button onClick={handleSeeMoreClick} className='see-more-btn'>Ver Mas</button>
            </div>
           <br/>
        </div> */
        <div onClick={()=> console.log('padre clickeado')}>
            <div className="card mb-3">
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
        </div>
    );

};

export default EventItem;