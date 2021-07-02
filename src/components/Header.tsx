import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {   
    return (
        <>            
            <div className="header">
                <Link to="/">
                <div className="logo">
                    <img src="https://objectivegroup.com/wp-content/uploads/2020/10/Logo_objective-01-1.png" alt="" width="96px"/>
                </div>
                </Link>
                <div className="candidato">
                    <span><strong>Kalila Fontes</strong></span>
                    <span>Teste de Front-end</span>
                </div>
            </div>
        </>
    );
}

export default Header;