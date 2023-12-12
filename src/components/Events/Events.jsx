import { useNavigate } from "react-router-dom";
import EventItem from "./EventItem/EventItem";



const Events = ({ searchTerm, events }) =>{

    const navigate = useNavigate();

    const handleEventItemClick = (id) =>{
        navigate(`/detail/${id}`);
    }
    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm));
        }

        return eventsFiltered.map((eventItem)=> (
            <EventItem 
                key={`event-iten-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick}
                id={eventItem.id}
            />
        ));
    };
    
    return(
        <div className="row">
            
            {renderEvents()}
        </div>
    );

};

export default Events;