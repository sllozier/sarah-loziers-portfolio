import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {


    return(
        <section className='section call-to-action is-primary has-text-centered'>
            <div className='container is-narrow'>
                <div className='box is-danger has-background-danger'>
                    <div className='columns level has-text-white'>
                        <div className='column level-item'>
                            <h1 className='title has-text-white'>Start a project</h1>
                        </div>
                        <div className='column level-item'>
                            <p>Interested in working together? Let make time for coffee and a chat!</p>
                        </div>
                        <div className='column level-item'>
                            <Link className='button is-white is-outlined is-rounded is-medium has-text-weight-normal' to='/chatForm'>
                                <span className='icon'>
                                <i className="fa-regular fa-hand-spock">
                                        </i>
                                </span>
                                <span>Let's do this!</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;