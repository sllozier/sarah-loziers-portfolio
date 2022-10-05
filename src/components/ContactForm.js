
import React, { useState } from 'react';

const ContactForm = () => {

    const [ status, setStatus ] = useState('submit');

    // const [ form, setForm ] = useState({
    //     name: '',
    //     email: '',
    //     projectType: '',
    //     payRange: '',
    //     details: '',
    // });

    // const [ message, setMessage ] = useState('');


    // const handleChange = prop => event => {
    //     setForm({
    //         ...form,
    //         [prop]: event.target.value
    //     })
    // };



    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Sending...');
        const { name, email, projectType, payRange, details } = event.target.elements;

        let formInfo = {
            name: name.value,
            email: email.value,
            projectType: projectType.value,
            payRange: payRange.value,
            details: details.value,
        };

        let res = await fetch("https://sarah-loziers-portfolio.herokuapp.com/contactForm", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(formInfo),
        });
            setStatus('submit');
            let result = await res.json();
            alert(result.status);
    };
    

    return(
        <div className='is-form-page animate-fadeUp'>
            <section className='is-white has-text-centered'>
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column is-8'>
                            <img className='avatar' src="/piccies/sarahAvatar.png" alt=""/>
                            <h1 className='title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile'>
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
                                    <label className='label' htmlFor='name'>Name</label>
                                    <div className='control is-expanded'>
                                        <input className='input is-large' name='name' type='text' required/>
                                    </div>
                                </div>
                            </div>
                            <div className='column is-half'>
                                <div className='field'>
                                    <label className='label' htmlFor='email'>Email</label>
                                    <div className='control is-expanded'>
                                        <input className='input is-large' name='email' type='email' required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='columns is-centered'>
                            <div className='column is-half'>
                                <div className='field'>
                                    <label className='label' htmlFor='projectType'>Type of project</label>
                                    <div className='control is-expanded'>
                                        <div className='select is-fullwidth'>
                                            <select className='is-large' name='projectType' required>
                                                <option value='0' disabled seleced hidden></option>
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
                                    <label className='label' htmlFor='payRange'>Pay Range</label>
                                    <div className='control is-expanded'>
                                        <div className='select is-fullwidth'>
                                            <select className='is-large' name='payRange' required>
                                                <option value="0" disabled selected hidden></option>
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
                                    <label className='label' htmlFor='details'>Additional details</label>
                                    <div className='control is-expanded'>
                                       <textarea className='textarea is-large' name="details" rows='5' required></textarea>
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