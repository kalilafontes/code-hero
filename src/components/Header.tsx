import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {   
    return (
        <>            
            <div className="header">
                <Link to="/">
                <div className="logo">
                    <img src="https://www.objective.com.br/wp-content/uploads/2020/11/logo.svg" alt="" width="100px"/>
                </div>
                </Link>
                <div className="user">
                    <span><strong>Kalila Fontes</strong></span>
                    <span>Teste de Front-end</span>
                    <div className="thumb-user">KF</div>
                </div>
            </div>
        </>
    );
}

export default Header;