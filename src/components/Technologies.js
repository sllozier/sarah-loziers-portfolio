import React from 'react';

const Technologies = () => {

    return(
        <section className='section skills has-text-centered'>
            <div className='container is-narrow'>
                <div className='box'>
                    <div className='content'>
                        <div className='columns is-centered'>
                            <div className='column'>
                                <span className='fa-stack fa-2x'>
                                    <i className='fa-solid fa-circle fa-stack-2x has-text-success'>
                                    </i>
                                <i className="fa-layer-plus fa-stack has-text-black fa-1x fa-solid fa-hand-holding-hand">
                                        </i>
                                </span>
                                <h1 className='title has-text-black is-size-4 is-spaced'>Collaborator</h1>
                                <p>I genuinely enjoy working with a team of developers to produce creative design solutions.</p>
                                <p className='title has-text-primary is-size-5'>Team Tools:</p>
                                <ul className='has-text-black is-size-5 is-unstyled'>
                                    <li>Git</li>
                                    <li>Zoom</li>
                                    <li>Google Meet</li>
                                    <li>Slack</li>
                                    <li>Google Docs</li>
                                    <li>Google Spaces</li>
                                </ul>
                            </div>
                            <div className='column'>
                            <span className='fa-stack fa-2x'>
                        <i className='fa-solid fa-circle fa-stack-2x has-text-success'>
                        </i>
                    <i className="fa-layer-plus fa-stack has-text-black fa-1x fa-solid fa-laptop-code">
                            </i>
                    </span>
                    <h1 className='title has-text-black is-size-4 is-spaced'>Full Stack Developer</h1>
                                <p>I love bringing ideas to reality, and geek out on back-end structure and design.</p>
                                <p className='title has-text-primary is-size-5'>My Languages:</p>
                                <ul className='has-text-black is-size-5 is-unstyled'>
                                    <li>JS</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Sass</li>
                                    <li>React</li>
                                    <li>PSQL</li>
                                </ul> 
                                
                            </div>
                            <div className='column'>
                                <span className='fa-stack fa-2x'>
                                <i className='fa-solid fa-circle fa-stack-2x has-text-success'>
                                    </i>
                                <i className="fa-layer-plus fa-stack has-text-black fa-1x fa-regular fa-building-ngo">
                                        </i>
                                </span>
                                <h1 className='title has-text-black is-size-4 is-spaced'>Non-Profit Interests</h1>
                                <p>I am passionate about engineering for the greater-good.</p>
                                <p className='title has-text-primary is-size-5'>Future Projects:</p>
                                <ul className='has-text-black is-size-5 is-unstyled'>
                                    <li>Updated Amber Alert</li>
                                    <li>Agriculture Technologies</li>
                                    <li>Neuro-Diversity Education</li>
                                    <li>Medical Outreach</li>
                                    <li>Online Homeschool Organization</li>
                                    <li>Veteran's Social Network</li>
                                </ul>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies;