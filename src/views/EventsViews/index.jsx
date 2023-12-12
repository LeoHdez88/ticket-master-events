import { useState,useRef, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

import Events from '../../components/Events/Events';
import Searchs from "../../components/Searchs/Searchs";
import useEventsData from "../../hooks/useEventsData";
import style from "./EventsViews.module.css";
import Error from '../../components/Error/Error';

const EventsViews = () => {
    const { events, islonding, error, fetchEvent, page }=useEventsData();
    const [searchTerm, setsearchTerm]=useState('');
    const containerRef = useRef();

    useEffect(() => {
        fetchEvent();
    }, []);

    const handleNavbarSearch = (term)=> {
        setsearchTerm(term);
        fetchEvent(`&keyword=${term}`);
    };

    const handlePageClick = ({selected})=> {
        fetchEvent(`&keyword=${searchTerm}&page=${selected}`);
    };


    const renderEvents = ()=> {
        if(islonding){
            return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando Por Favor Espere...</span>
                </div>
            </div>
          );
        }

        if(error){
            return <Error title="Error" message="Se presento un error al consultar la informacion, por favor recargue la pagina" />
        }


        return (
            <div>
            <Searchs onSearch={handleNavbarSearch} ref= {containerRef}></Searchs>
            <Events  searchTerm={searchTerm} events={events}></Events> 
            <ReactPaginate
                className={style.pagination}
                nextClassName={style.next}
                previousClassName={style.previous}
                pageClassName={style.page}
                activeClassName={style.activePage}
                disabledClassName={style.disable}
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                pageCount={page.totalPages}
                previousLabel="<"
                renderOnZeroPageCount={null}
               />
            </div>
        );
    };


    return (
        <>
        {renderEvents()}
        </>
    )
}

export default EventsViews