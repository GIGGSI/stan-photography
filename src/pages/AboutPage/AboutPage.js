import React from 'react'
import styled from 'styled-components'
import SecTion from '../../components/Globals/Section'
import { media } from '../../styles'

const AboutPage = () => {
    return (
        <SecTion>
            <div style={{ marginBottom: '3rem' }}>
                <h4>ЗДРАВЕЙТЕ, АЗ СЪМ Станислав
                </h4>
                <p>Имам супер готина работа! Дори мисля, че имам най-готината работа в целия свят.   </p>
            </div>
            <ContentWrapper>
                <TextWrapper>
                    <h5>ФОТОГРАФЪТ
                    </h5>
                    <p style={{ width: '80%', margin: '0 auto' }}>
                        Уви, историята ми не е от най-интересните и не започва с “Когато бях на 5г…”.

                    </p>
                    <p style={{ lineHeight: '1.3rem' }}>
                        Закупих първия си фотоапарат малко на шега. Снимките с него не се получаваха както искам и го оставих да прашасва на рафта. Дадох си втори шанс и някак бавно и с много труд нещата започнаха да се случват.  Портрети през уикендите, сватби на приятели през лятото, до момента, в който се престраших да направя първата си еротична фотосесия.
                        Няколко години по-късно едно хоби се превърна във “full time job”.
                    </p>
                </TextWrapper>
                <ImageWrapper>
                    <img src='https://scontent-sof1-2.xx.fbcdn.net/v/t31.18172-8/13734934_10210046035092420_7653829465363336329_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=9Xw8bMtRHGAAX-hpbdk&_nc_ht=scontent-sof1-2.xx&oh=9f9b0e269a8b3ca3d47303dbb25249f6&oe=61746B5C' alt="stan pic" />
                </ImageWrapper>
            </ContentWrapper>
            <ContentWrapper style={{ marginTop: '3rem' }}>
                <ImageWrapper>
                    <img src='https://scontent-sof1-2.xx.fbcdn.net/v/t31.18172-8/13734934_10210046035092420_7653829465363336329_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=9Xw8bMtRHGAAX-hpbdk&_nc_ht=scontent-sof1-2.xx&oh=9f9b0e269a8b3ca3d47303dbb25249f6&oe=61746B5C' alt="stan pic" />
                </ImageWrapper>
                <TextWrapper>
                    <h5>ФОТОГРАФЪТ
                    </h5>
                    <p style={{ width: '80%', margin: '0 auto' }}>
                        Уви, историята ми не е от най-интересните и не започва с “Когато бях на 5г…”.

                    </p>
                    <p style={{ lineHeight: '1.3rem' }}>
                        Закупих първия си фотоапарат малко на шега. Снимките с него не се получаваха както искам и го оставих да прашасва на рафта. Дадох си втори шанс и някак бавно и с много труд нещата започнаха да се случват.  Портрети през уикендите, сватби на приятели през лятото, до момента, в който се престраших да направя първата си еротична фотосесия.
                        Няколко години по-късно едно хоби се превърна във “full time job”.
                    </p>
                </TextWrapper>
            </ContentWrapper>
            <ContentWrapper style={{ marginTop: '3rem' }}>

                <TextWrapper>
                    <h5>ДА НАПРАВИМ НЕЩО ЗАЕДНО

                    </h5>
                    <p style={{ width: '80%', margin: '0 auto' }}>
                        Живея в София, но това никога не ме е спирало да снимам в
                        цяла България и в различни точки на света.

                    </p>


                </TextWrapper>
            </ContentWrapper>
        </SecTion>
    )
}
const ContentWrapper = styled.div`
width: 100%;
${media.tablet`
display:flex;
flex-direction: revert;



`}
`
const TextWrapper = styled.div`
/* text-align: center; */

width: 100%;
p{
    margin:1.5rem ;
}
${media.tablet`
width: 50%;

`}
`
const ImageWrapper = styled.div`
width: 100%;

img {
    width: 100%;
    height: 100%;
}

${media.tablet`
width: 50%;
`}

`

export default AboutPage
