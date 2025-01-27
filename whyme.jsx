/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

export default function CustomAccordion (){

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{border: 'none', backgroundColor: 'White'}}
        onClick={decoratedOnClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
              </svg>
      </button>
    );
  }

    const CustomAccordion = ({ children, eventKey }) => {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );

        return (
            <div className='d-flex justify-content-between align-items-end flex-row' style={{borderBottom: '1px solid black'}}>
                <span style={{fontSize: '70px', lineHeight:'.8', marginLeft: '64px', paddingTop: '32px'}}>WHY <span style={{fontWeight: 'bold'}}>ME</span></span>
                <div>
                <button
                    type="button"
                    style={{border: 'none', marginBottom: '15px', marginRight: '64px' }}
                    onClick={decoratedOnClick}
                >
                    {children}
                </button>
                </div>
            </div>
          );
    }


    return (
        <Accordion defaultActiveKey="0">
      <Card style={{backgroundColor: '#F5EFFB', border: 'none'}}>
        
        <CustomAccordion eventKey="0">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
        </svg>
        </CustomAccordion>
        
        <Accordion.Collapse eventKey="0">
          <Card.Body className='bg-white'>
            <div >
            <div className='d-flex' style={{gap: '100px', position: 'relative'}} >
              <span style={{fontSize: '70px', lineHeight:'.8', marginLeft: '50px'}}>WHY <span style={{fontWeight: 'bold'}}>ME</span></span>
              <div className='w-50'>
                <p style={{fontWeight: 'bold', fontSize: '20px'}}>
                  My journey into yoga And Fitness is
                  not just A professional endeÃvor but
                  Also A deeply personal story.
                  Instructor
                </p>
                <p style={{fontSize: '20px'}}>
                  My goal is to support you on your personal journey toward better
                  health, strength, and inner balance. Whether you’re new to yoga,
                  looking to achieve your tness goals, or simply searching for a way to feel
                  your best, I’m here to help with tailored courses, personalized training, and
                  a holistic approach
                </p>
              </div>
              <div style={{position: 'absolute', right: '45px', top: '0'}}>
                
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
              </svg> */}

              <CustomToggle eventKey="0">

              </CustomToggle>
              </div>
            </div>
            <div className='d-flex gap-5 justify-content-center' style={{marginTop: '50px'}}>

              <img src="./img-1.jpg" alt="" width={300} height={300}/>
              <img src="./img-2.jpg" alt="" width={300} height={300}/>
              <img src="./img-3.jpg" alt="" width={300} height={300}/>
              
            </div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    )
}
