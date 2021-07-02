import React, { useState } from 'react';
interface Props {
    search:  (arg0: string) =>  void;
}

const Filter: React.FC<Props>  = ({search}) => {  

    const [text, setText] = useState('');

    const onSearch= (q:any) => {
        setText(q)
        search(q)
    }

    return (
        <>            
            <div className="filter">
                <h1>Busca de Personagens</h1>
                <span><strong>Nome do personagem</strong></span>
                <div className="search-input">
                    <input 
                        type="search"
                        placeholder="Search"
                        autoFocus
                        onChange={(e) => onSearch(e.target.value)}
                        value={text}
                    />
                    <i className="fa fa-search"></i>
                   
                </div>               
            </div>
        </>

    );
}

export default Filter;