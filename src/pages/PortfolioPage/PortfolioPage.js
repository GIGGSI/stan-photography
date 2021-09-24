import React from 'react'
import Section from '../../components/Globals/Section'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { portfolioDAta } from '../../data/Portfolio'
import { media } from '../../styles'

const PortfolioPage = () => {
    const { portfolioData } = useSelector(state => state.data)
    console.log(portfolioData)
    return (
        <Section>
            <FirstRow>
                {portfolioDAta.firstRow.map((item) => {
                    return <div key={item.imgUrl} style={{ overflow: 'hidden' }}>
                        <img src={item.imgUrl} alt={item.imgUrl} />
                    </div>
                })}
            </FirstRow>
            <SecondRow>
                {portfolioDAta.secondRow.map((item) => {
                    return <div key={item.imgUrl} style={{ overflow: 'hidden' }}>
                        <img src={item.imgUrl} alt={item.imgUrl} />
                    </div>
                })}
            </SecondRow>
            <ThirdRow>
                {portfolioDAta.thirdRow.map((item) => {
                    return <div key={item.imgUrl} style={{ overflow: 'hidden' }}>
                        <img src={item.imgUrl} alt={item.imgUrl} />
                    </div>
                })}
            </ThirdRow>
            <FourthRow>
                {portfolioDAta.fourthRow.map((item) => {
                    return <div key={item.imgUrl} style={{ overflow: 'hidden' }}>
                        <img src={item.imgUrl} alt={item.imgUrl} />
                    </div>
                })}
            </FourthRow>

        </Section>
    )
}
const FirstRow = styled.div`
width: 90%;
margin:0 auto;
gap:0.5rem;
 div{
     width: 100%;
 }
img{
    width: 100%;
    height: 100%;
    transition: 0.2s ease-in;
    &:hover{
        opacity: 0.9;
        transform: scale(1.1);
    }
}
${media.tablet`
display:flex;
`}
`
const SecondRow = styled.div`
width: 90%;
margin:0 auto;
gap:.5rem;
margin-top: 0.5rem;
div{
     width: 100%;
 }
img{
    width: 100%;
    height: 100%;
   transition: 0.1s ease-in;
    &:hover{
        opacity: 0.9;
        transform: scale(1.1);
    }
}
${media.tablet`
display: grid;
grid-template-columns:2.02fr 1fr;
`}
`

const ThirdRow = styled.div`
width: 90%;
margin:0 auto;
gap:0.5rem;
margin-top: 0.5rem;
 div{
     width: 100%;
 }
img{
    width: 100%;
    height: 100%;
    transition: 0.1s ease-in;
    &:hover{
        opacity: 0.9;
        transform: scale(1.1);
    }
}
${media.tablet`
display:flex;
`}
`
const FourthRow = styled.div`
width: 90%;
margin:0 auto;
gap:.5rem;
margin-top: 0.5rem;
div{
     width: 100%;
 }
img{
    width: 100%;
    height: 100%;
    position: cover;
    transition: 0.1s ease-in;
    &:hover{
        opacity: 0.9;
        transform: scale(1.1);
    }
}
${media.tablet`
display: grid;
grid-template-columns:1fr 2.02fr;
`}

`

export default PortfolioPage
