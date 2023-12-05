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
        <div style={{ flex:1, display:'flex', alignItems:'center',justifyContent:'flex-end' }}> 
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
    );
});

Searchs.displayName= 'Searchs';

export default Searchs;
