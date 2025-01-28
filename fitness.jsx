/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

export default function Fitness (){

    const [title, setTitle] = useState(true)

    function CustomToggle({ eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            setTitle(true)
        );
    
        return (
        <button
            type="button"
            style={{border: 'none', backgroundColor: '#BEA1E1'}}
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
            setTitle(false)
            
        );

        return (
            <div>
                {
                    title && (
                        <div className='d-flex justify-content-between align-items-end flex-row mb-5'  style={{borderBottom: '1px solid black', backgroundColor: '#BEA1E1'}}>
                            <span style={{fontSize: '70px', lineHeight:'.8', marginLeft: '64px', paddingTop: '32px'}}>FITNESS</span>
                            <div>
                                <button
                                    type="button"
                                    style={{border: 'none', marginBottom: '15px', marginRight: '64px', backgroundColor: '#BEA1E1' }}
                                    onClick={decoratedOnClick}
                                >
                                    {children}
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
          );
    }


    return (
      <Accordion style={{maxWidth: '1280px', margin: '0 auto'}} >
        <Card style={{backgroundColor: '#F5EFFB', border: 'none'}}>
            
            <CustomAccordion eventKey="0">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
            </svg>
            </CustomAccordion>
        
            <Accordion.Collapse eventKey="0">
            <Card.Body style={{backgroundColor: '#BEA1E1'}}>
                <div >
                    <div className='d-flex gap-5 justify-content-center' style={{marginTop: '50px'}}>
                    <div  style={{gap: '100px', position: 'relative', marginLeft: '50px'}} >
                        <span style={{fontSize: '70px', lineHeight:'.8'}}>FITNESS</span>
                        <div style={{width: '90%'}}>

                            <h4 className='mt-5 mb-4'>My Fitness Journey</h4>
                            <p style={{fontSize: '20px'}}>
                                My personal Ftness journey didn’t begin with a perfect
                                workout plan. It began with a moment of decision:
                                I wanted to feel tter, stronger, and healthier. It wasn’t
                                always easy, but I learned that true change
                                doesn’t happen overnight.
                            </p>
                            <p style={{fontSize: '20px'}}>
                                What I truly discovered along the way is that discipline
                                doesn’t mean being perfect or doing everything right all the
                                time. Instead, it’s about staying committed, even when
                                things don’t go as planned. It’s about creating lasting
                                transformation through small, consistent changes.
                                For me, discipline is a gentle reminder to care for myself,
                                even on the tough days.
                            </p>
                        </div>
                        
                    </div>
                    <div style={{position: 'absolute', right: '70px', top: '20px'}}>
                            <CustomToggle eventKey="0"></CustomToggle>
                    </div>

                    <div className='d-flex flex-column gap-5 justify-content-center' style={{marginTop: '50px', marginRight: '50px'}}>

                        <div className='d-flex gap-5 align-items-center ' style={{paddingLeft: '30px'}}>
                            <img src="./f-img-1.jpg" alt="" width={100} height={100}/>
                            <img src="./f-img-2.jpg" alt="" width={150} height={150}/>
                        </div>
                        <img src="./f-img-3.jpg" alt="" width={400} height={300}/>
                    
                    </div>
                    </div>

                    <div>
                        <p className='mt-5' style={{fontSize: '20px', marginLeft: '50px', marginRight: '50px'}}>
                            I firmly believe that anyone can achieve their goals with the right approach. But without discipline and motivation,
                            even the best plans remain just that—plans. That’s why I work closely with my clients to establish routines that t
                            their lives—routines that are not only manageable but also sustainable in the long term.
                        </p>

                        <div className='d-flex justify-content-between align-items-center' style={{marginLeft: '50px', marginRight: '50px'}}>
                            <div className='d-flex gap-4 py-5'>
                            <span style={{backgroundColor: 'white', 
                                width: '100px', 
                                height: '100px', 
                                borderRadius: '50%', 
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'black',
                                transform: 'rotate(-45deg)'}}>
                                    INVUDUAL
                            </span>
                            <span style={{backgroundColor: '#ff77c0', width: '100px', height: '100px', borderRadius: '50%', display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transform: 'rotate(-45deg)'}}>
                                GROUP
                            </span>
                            <span style={{backgroundColor: 'black', width: '100px', height: '100px', borderRadius: '50%', display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center', color: 'white',
                                transform: 'rotate(-45deg)'}}>
                                ONLINE
                            </span>
                            </div>

                            <button style={{backgroundColor: 'black', color: 'white', borderRadius: '25px', padding: '5px 10px 5px 10px'}}>BOOK A CLASS</button>
                        </div>
                    </div>


                </div>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
      </Accordion>
    )
}
