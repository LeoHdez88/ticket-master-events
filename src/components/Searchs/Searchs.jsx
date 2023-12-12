import { useState, useEffect, forwardRef , useImperativeHandle} from "react";

const Searchs = forwardRef(({onSearch}, ref) =>{

    const [search, setSearch]= useState('');

    useEffect(()=>{},[onSearch]);

    useEffect(()=>{},[search]);

    useImperativeHandle(ref, ()=>({
        search,
        setSearch,
    }));


    const handleInputChange =(evt)=>{
        setSearch(evt.target.value);
    };

    const handleInputKeyDown =(evt)=>{
        if(evt.key === "Enter"){
            onSearch(search);
        }
    };

  return (
        <div className="Row">

            <h2> Eventos</h2>

            <div style={{ flex:1, display:'flex', alignItems:'center',justifyContent:'flex-end', marginBottom:"30px" }}> 
                <input 
                    className="form-control me-2" 
                    placeholder="Busca tu Evento Favorito" 
                    onChange={handleInputChange} 
                    onKeyDown={handleInputKeyDown}
                    value={search}
                    style={{
                        fontSize:16,
                        padding:'6px 12px',
                        borderRadius: 4,
                        width:300
                    }}
                />
            </div> 
        </div>
    );
});

Searchs.displayName= 'Searchs';

export default Searchs;
