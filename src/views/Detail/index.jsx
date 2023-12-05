import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";


import styles from "./Detail.module.css";


const Detail = () => {
    const {eventId} = useParams();
    const [eventData, setEventData]= useState({});
    const [isLoading, setIsLoading]= useState(true);
    const [error, setError]= useState({});

    useEffect(() => {
        const fetchEventData = async ()=>{
            try{
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);
                const data = await response.json();

                setEventData(data);
                setIsLoading(false);
            }catch(error){
                setEventData({});
                setError(error);
                setIsLoading(false);
            }
        }; 

        fetchEventData();
    }, []);

    if(isLoading && Object.keys(eventData)===0){
        return <div>Cargando Evento...</div>;
    }

    if(Object.keys(error) > 0){
        return <div>Ha Ocurrido un Error...</div>;
    }

    return (
        <div className={styles.container}>
            <div>
            <img src={eventData.images?.[0].url} className={styles.eventImages} alt={eventData.name}/>
            </div>
            <div className={styles.mainInfoContainer}>
                <h4 className={styles.eventName}>{eventData.name}</h4>
                <p className={styles.infoParagraf}>{eventData.info}</p>
                {eventData.dates?.start.dateTime ? <p className={styles.dateParagraf}>{format(new Date(eventData.dates?.start.dateTime), 'd LLLL yyyy H:mm', {locale:es} )}hrs </p> : null}

            </div>
            <div className={styles.seatInfoContainer}>
                <h6 className={styles.seatMapTitle}>Mapa del Evento</h6>
                <img src={eventData.seatmap?.staticUrl} alt="Seatmap Event"/>
                <p>{eventData.pleaseNote}</p>
                <p>Rango de Precios {eventData.priceRanges?.[0].min}-{eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency} </p>
            </div>
            <Link to={eventData.url} target="_blank" rel="noopener noreferrer">
                Ir por tus Boletos
            </Link>
        </div>
    );

};


export default Detail;