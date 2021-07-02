import React from 'react';

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate:(arg0: number) =>  void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps>= ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
   
    return (
        <div>
            <ul className="pagination">            
                {pageNumbers.map(number => (    
                                   
                    <li key={number} className={currentPage === number ? 'pagination__item--active': 'page-link'}>
                        <a onClick={() => paginate(number)} href='#' >
                            {number}
                        </a>
                        {console.log(postsPerPage, number) }
                    </li>                    
                ))}
                    

            </ul>
        </div>
    );
}

export default Pagination;