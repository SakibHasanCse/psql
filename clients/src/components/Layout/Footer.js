import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
    width:100%;
    height:70px;
    border-top:1px solid #ccc;
    background-color:#fff;
    position:absolute;
    bottom:0
`

export const Footer = () => {
    return (
        <Wrapper>
            <p className="text-center mt-3">&copy ; {new Date().getFullYear()} Sakib Hasan</p>


        </Wrapper>
    )
}
