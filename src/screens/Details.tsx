import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Header from '../components/Header';
import DataCharacters from '../interfaces/DataCharacters';
import api from '../services/apiMarvel'

interface InputProps extends RouteComponentProps {
    id: string;
}

const Details: React.FC <InputProps> = (props) => {
  const [personagem, setPersonagem] = useState<DataCharacters[]>([]);
  useEffect( () => {
    const id = props.match.url;
    if(id){
        api.get(`/characters${id}`)
        .then(res => {
            setPersonagem(res.data.data.results)
            console.log(personagem)})
        .catch(err => console.log(err));
    }    
  }, []); 

    return (
     
      <>
        <Header/>
        <div> {personagem.map(personagem => (            
            <div key={personagem.id} className="single">   
                <img src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`} alt={personagem.name}/>  
                <div className="card">
                    <h1>{personagem.name}</h1> 
                    <div>{personagem.description}</div>         
                    <div  className="card-comic">  
                        <span><strong>Comics</strong></span>     
                        <div  className="comic">                   
                        {personagem.comics.items.map(comic => (
                            <div>
                                {comic.name}
                            </div>))}  
                        </div>                        
                    </div> 
                </div>                                    
            </div>
            ))}
        </div>
      </>
    );
}

export default Details;