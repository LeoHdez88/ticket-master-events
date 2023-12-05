import { useState } from "react";

const useEventsData = ()=> {
    const [data, setData] = useState([]);
    const [islonding, setIsLonding]= useState(true);
    const [error, setError]= useState();


    const fetchEvent = async (params)=>{
        try{
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : `` }`);
            const data = await response.json();


            setData(data);
            setIsLonding(false);
        }catch(error){
            setError(error);
        }
    }; 

    return {
        events: data?._embedded?.events || [],
        islonding,
        error,
        fetchEvent,
        page: data?.page || {},
    };

};


export default useEventsData;