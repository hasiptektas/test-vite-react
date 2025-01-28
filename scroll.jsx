import React, { useRef } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const ScrollableAccordion = () => {
  const refOne = useRef(null);
  const refTwo = useRef(null);

  const handleToggle = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200); // Animasyon süresine göre ayarlayabilirsin
  };

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => handleToggle(refOne)}>
            Accordion Item #1
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body ref={refOne}>İçerik #1</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={() => handleToggle(refTwo)}>
            Accordion Item #2
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body ref={refTwo}>İçerik #2</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default ScrollableAccordion;
