import React from 'react'
import SingleCard from './SingleCard'
import { Container, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const AboutMenu = () => {
  const [market] = useContext(ProductContext);

  return (
    <div className='aboutmenu'>
      <Container>
        <Row>
          {market.slice(4, 10).map((item) => {
            return (
              <SingleCard
                title={item.title}
                key={item.id}
                id={item.id}
                photo={item.photo}
                price={item.price}
                product={item}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default AboutMenu