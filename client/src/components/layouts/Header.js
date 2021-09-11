import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import styled from 'styled-components'

const Header = () => {
    return (
        <div>
            <MainContainer><h1>Let's Blog<br/>
            
            </h1></MainContainer>
        </div>
    )
}

export default Header

//Main Container

const MainContainer = styled.header`
background: url(../../images/dibg.jpg) no-repeat center/cover;
opacity: 0.95;
height: 25rem;

h1{
    transform: translate(-50%, -50%);
    color: #210124;
    font-weight: 950;
    position: absolute;
    top: 25%;
    left:50%;
} 
`;
