import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model x"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImage="solar-panel.jpg"
          leftBtnText="Custom now"
          rightBtnText="Learn More"
        />
        <Section 
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImage="solar-roof.jpg"
          leftBtnText="Custom now"
          rightBtnText="Learn More"
        />
        <Section 
          title="Accessories"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImage="accessories.jpg"
          leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`