import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import { menuData } from '../../data/menuData'
import { setColor } from '../../styles';

const DropdownContainer = styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background: rgb(202, 202, 202,1);
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity:${({ isOpen }) => isOpen ? '1' : '0'};

top:${({ isOpen }) => isOpen ? '0' : '-100%'};

`

const Icon = styled.div`
position:absolute;
top:2rem;
right:1.5rem;
background:transparent;
font-size:2.7rem;
cursor:pointer;
outline:none;
`

const CloseIcon = styled(FaTimes)`
color:#666;
`

const DropdownWrapper = styled.div`

`

const DropdownMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(4,40px);
text-align:center;


@media screen and (max-width:480px) {
    grid-template-rows:repeat(14,45px);
}
`

const DropdownLink = styled(Link)`
display:flex;
color:${setColor.mainBlack};
justify-content:center;
align-items:center;
gaP:2rem;
font-size:1.5rem;
text-decoration:none;
text-transform:uppercase;
cursor:pointer;
transition:0.2s ease-out;
/* padding-top:3rem; */

&:hover {
    color:${setColor.primaryColor}
}

@media screen and (max-width:780px) {
 font-size:2rem;

}

`

const Dropdown = ({ isOpen, toggle }) => {
    return <DropdownContainer
        isOpen={isOpen}
        onClick={toggle} >

        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {menuData.map((item) => {
                    return <DropdownLink to={item.link} key={item.id}>
                        {item.title}
                    </DropdownLink>
                })}
            </DropdownMenu>
        </DropdownWrapper>
    </DropdownContainer>
}

export default Dropdown