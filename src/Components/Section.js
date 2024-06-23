import React from 'react'
import styled from 'styled-components'


function Section({title,formPrice,afterEstSavings,backgroundImg,sub,Button1,Button2}) {
  return (
    <Wrap bgImage= {backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <h5>  {formPrice}<sup>{sub}</sup></h5>
        <h6> {afterEstSavings}</h6>
      </ItemText>
      
      
      <ButtonGroup>
        <LeftButton>
             {Button1}
        </LeftButton>
        {Button2 && 
        <RightButton>
            {Button2}
        </RightButton>}
        
      </ButtonGroup>
      
      

      
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-y.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content : space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    color: white;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 100px;
    @media (max-width: 768px){
        flex-direction: column;    
    }
`
const LeftButton = styled.div`
    background-color : white;
    font-size: 14px;
    font-weight: 400;
    height: 40px;
    width: 270px;
    color: black;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 30px;



`
const RightButton = styled(LeftButton)`
    background-color : black;   
    color: white;
    @media (max-width: 768px){
        margin-top: 20px    
    }
`

