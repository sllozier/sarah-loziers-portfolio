
import React, { useState } from 'react';
import { send } from 'emailjs-com';

const ContactForm = () => {

    

    const [ form, setForm ] = useState({
        name: '',
        email: '',
        projectType: '',
        payRange: '',
        details: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        send(
            'service_l0cgp5o',
            'template_y4yirec',
            form,
            'pGfeSYBA1M9SEbdKl'
        )
        .then((response) => {
            console.log('SUCCESS!', response.staus, response.text);
        })
        .catch((error) => {
            console.log('EMAIL FAILED...', error);
        });
    };

    const handleChange = prop => event => {
        setForm({
            ...form,
            [prop]: event.target.value
        })
    };



    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setStatus('Sending...');
    //     const { name, email, projectType, payRange, details } = event.target.elements;

    //     let formInfo = {
    //         name: name.value,
    //         email: email.value,
    //         projectType: projectType.value,
    //         payRange: payRange.value,
    //         details: details.value,
    //     };

    //     let res = await fetch("https://localhost:3000/contactForm", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8',
    //         },
    //         body: JSON.stringify(formInfo),
    //     });
    //         setStatus('submit');
    //         let result = await res.json();
    //         alert(result.status);
    // };
    
    
    


    return(
        <div className='is-form-page animate-fadeUp'>
            <section className='is-white has-text-centered'>
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column is-8'>
                            <img className='avatar' src="/piccies/sarahAvatar.png" alt=""/>
                            <h1 className='title has-text-white is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile'>
                                I am excited to hear about your project! Ready to chat?
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='is-white'>
                <div className='container'>
                    <form id='form' onSubmit={handleSubmit}>
                        <div className='columns is-centered'>
                            <div className='column is-half'>
                                <div className='field'>
                                    <label className='label is-medium has-text-white' htmlFor='name'>Name</label>
                                    <div className='control is-expanded'>
                                        <input className='input is-large' name='name' type='text' onChange={handleChange} required/>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-half'>
                                <div className='field'>
                                    <label className='label is-medium has-text-white' htmlFor='email'>Email</label>
                                    <div className='control is-expanded'>
                                        <input className='input is-large' name='email' type='email' onChange={handleChange}required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='columns is-centered'>
                            <div className='column is-half'>
                                <div className='field'>
                                    <label className='label is-medium has-text-white' htmlFor='projectType'>Type of project</label>
                                    <div className='control is-expanded'>
                                        <div className='select is-fullwidth'>
                                            <select className='is-large' name='projectType' onChange={handleChange} required>
                                                {/* <option value='0' disabled selected hidden></option> */}
                                                <option>Select One:</option>
                                                <option>Personal Blog/Website</option>
                                                <option>NGO Project</option>
                                                <option>Full-time Position</option>
                                            </select>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                            <div className='column is-half'>
                                <div className='field'>
                                    <label className='label is-medium has-text-white' htmlFor='payRange'>Pay Range</label>
                                    <div className='control is-expanded'>
                                        <div className='select is-fullwidth'>
                                            <select className='is-large' name='payRange' onChange={handleChange} required>
                                                {/* <option value='0' disabled selected hidden></option> */}
                                                <option>Select One:</option>
                                                <option>Undecided</option>
                                                <option>$5,000 - $10,000</option>
                                                <option>$10,000 - $25,000</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='columns is-centered'>
                            <div className='column'>
                                <div className='field'>
                                    <label className='label is-medium has-text-white' htmlFor='details'>Additional details</label>
                                    <div className='control is-expanded'>
                                       <textarea className='textarea is-large' name="details" rows='5' onChange={handleChange}required></textarea>
                                    </div>
                                </div>
                                <div className='field is-hidden'>
                                    <label className='is-hidden'></label>
                                    <div className='control is-expanded is-hidden'>
                                        <input className='is-hidden' name='_gotcha' type='hidden'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='columns is-centered'>
                            <div className='column is-one-third'>
                                <div className='field'>
                                    <div className='control'>
                                        <button className='button is-primary is-outlined is-medium is-fullwidth is-rounded'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactForm;

// https://sarah-loziers-portfolio.herokuapp.com/contactForm