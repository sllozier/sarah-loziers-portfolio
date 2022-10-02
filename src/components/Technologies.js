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
                                <i className="fa-layer-plus fa-stack has-text-dark fa-1x fa-solid fa-hand-holding-hand">
                                        </i>
                                </span>
                        
                           {/* write it like this ^^^ */}
                            </div>
                            <div className='column'>
                            <span className='fa-stack fa-2x'>
                        
                        <i className='fa-solid fa-circle fa-stack-2x has-text-success'>
                        </i>
                    <i className="fa-layer-plus fa-stack has-text-dark fa-1x fa-solid fa-laptop-code">
                            </i>
                    </span>
                                
                                
                            </div>
                            <div className='column'>
                                <span className='fa-stack fa-2x'>
                                <i className='fa-solid fa-circle fa-stack-2x has-text-success'>
                                    </i>
                                <i className="fa-layer-plus fa-stack has-text-dark fa-1x fa-regular fa-building-ngo">
                                        </i>
                                </span>
                                
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies;