import React from 'react'
import Section from "./Section"
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Section title = "Model Y" backgroundImg = "model-y.jpg" formPrice = "From $31,490" afterEstSavings = "After $13,500 Est. Savings" sub = "1" Button1 = "Order Now" Button2 ="Demo Drive"/>
      <Section title = "Model 3" backgroundImg = "model-3.jpg" formPrice = "From $216/mo" afterEstSavings = "After $83/mo Est. Savings" sub = "2" Button1 = "Order Now" Button2 ="Demo Drive"/>
      <Section title = "Model X" backgroundImg = "model-x.jpg" formPrice = "From $63,990" afterEstSavings = "After $14,00 Est. Savings" sub = "3" Button1 = "Order Now" Button2 ="Demo Drive"/>
      <Section title = "Model S" backgroundImg = "model-s.jpg" formPrice = "From $66,490" afterEstSavings = "After $6,500 Est. Savings" sub = "4" Button1 = "Order Now" Button2 ="Demo Drive"/>
      <Section title = "CyberTruck" backgroundImg = "Cybertruck.jpg" Button1 = "Order Now" Button2 ="Learn More"/>
      <Section title = "Solar Panels"  backgroundImg = "solar-panel.jpg" description = "Schedule a Virtual Consultation" Button1 = "Order Now" Button2 ="Learn More"/>
      <Section title = "Solar Roof" backgroundImg = "solar-roof.jpg" description ="Produce Clear Energy From Ypur Roof" Button1 = "Order Now" Button2 ="Learn More"/>
      <Section title = "Powerwall" backgroundImg = "power-wall.jpg" Button1 = "Order Now" Button2 ="Learn More"/>
      <Section title = "Accessories" backgroundImg = "accessories.jpg" Button1 = "Shop Now" />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`