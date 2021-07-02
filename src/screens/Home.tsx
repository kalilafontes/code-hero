import React, { useEffect, useState } from 'react';
import api from '../services/apiMarvel'
import DataCharacters from '../interfaces/DataCharacters'
import Filter from '../components/Filter';
import { Link } from "react-router-dom";
import Pagination from '../components/Pagination';


const Home: React.FC = () => {
    const [info] = useState('');
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);  
    const [postPerPage] = useState(10);  

    const [personagem, setPersonagem] = useState<DataCharacters[]>([]);
    
    /*  No useEffect é verificado se possui algum texto no campo de busca, 
    caso não tenha ele realiza um get de todos os elementos, e se tiver ele busca em relação ao texto buscado seguindo o critério de 'iniciado por' 
    que faz busca por um personagem que tenha nome iniciado com as palavras escritas na busca  */
    useEffect( () => {

        if(query === ''){
            console.log('aqui', query)
            api.get('/characters')
            .then(res => {
                setPersonagem(res.data.data.results)
                console.log('personagem', personagem)})
                
            .catch(err => console.log(err));
       } else {
        console.log('aqui2', query)
            api.get(`characters?nameStartsWith=${query}`)
            .then(res => {
                setPersonagem(res.data.data.results)
                console.log('personagem', personagem)})
            .catch(err => console.log(err));
       }
       
    }, [query]);

    /* As variáves criadas abaixo serão utilizadas para criar a paginação dos itens*/
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = personagem.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber:number)=> setCurrentPage(pageNumber);

    /* A Home é coposta pelo Filtro(que representa o campo de busca), a listagem do elemento e a paginação. */
    return (
        <> 
            <Filter  
            search={(q)=>setQuery(q)}/>
            {currentPosts.map(personagem => {
                return (                    
                    <div className="lista-personagens">
                        <Link to={`${info}${personagem.id}`} id={personagem.id} >
                            <div  className="personagem" key={personagem.id}>
                                <img src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`} alt={personagem.name} />
                                <div className="dados">
                                    <div className="name"><strong>{personagem.name}</strong></div>
                                    <div className="descricao">{personagem.description == "" ? "Sem descrição do personagem" : personagem.description}</div>
                                </div>                            
                            </div>
                        </Link>
                    </div>                        
                )
             })}
            <Pagination 
                postsPerPage={postPerPage} 
                totalPosts={personagem.length}
                paginate={paginate}
                currentPage={currentPage}
            />

        </>
    );
}

export default Home;