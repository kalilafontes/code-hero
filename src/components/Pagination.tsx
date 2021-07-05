import React from 'react';

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate:(arg0: number) =>  void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps>= ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];
    const lastPage = totalPosts/postsPerPage;

    for(let i = 1; i <= Math.ceil(lastPage); i++) {
        pageNumbers.push(i);
    }
    
   console.log('postsPerPage', postsPerPage, 'totalPosts',totalPosts, 'currentPage', currentPage)
    return (
        <div>
            <ul className="pagination">  
                <li className={currentPage == 1 ? 'disable-button': 'page-link'} >
                    <button  onClick={() => paginate(1)}><i className="fa fa-chevron-left"></i><i className="fa fa-chevron-left"></i></button>
                </li>    
                <li className={currentPage == 1 ? 'disable-button': 'page-link'}>
                    <button  onClick={() => paginate(currentPage-1)}><i className="fa fa-chevron-left"></i></button></li>          
                {pageNumbers.map(number => (    
                                
                    <li key={number} className={currentPage === number ? 'pagination__item--active': 'page-link'}>
                        <a onClick={() => paginate(number)} href='#' >
                            {number}
                        </a>
                    </li>                    
                ))}
                <li className={currentPage == lastPage ? 'disable-button': 'page-link'}>
                    <button  onClick={() => paginate(currentPage+1)}><i className="fa fa-chevron-right"></i></button>
                </li>
                <li className={currentPage == lastPage ? 'disable-button': 'page-link'}>
                    <button  onClick={() => paginate(lastPage)}><i className="fa fa-chevron-right"></i><i className="fa fa-chevron-right"></i></button>
                </li>                
            </ul>
        </div>
    );
}

export default Pagination;