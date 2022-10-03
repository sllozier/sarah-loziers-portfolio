import React from "react";

const Footer = () => {


    return(
        <footer className="section is-primary is-small has-text-centered">
            <div className="container is-narrow">
                <a className="logo has-text-white" href="/">
                <img className='logo' src="/piccies/lozier.png" alt="Logo"/>
                </a>
                <div className="columns is-centered">
                    <div className="column is-one-third">
                        <h1 className="subtitle has-text-white is-size-4-touch has-text-weight-normal">Coding for a better world.</h1>
                    </div>
                </div>
                <div className="columns is-centered">
                <div className="social-icons">
                    <p className="field">
                        <a className="button-is-medium" href="https://www.linkedin.com/in/sarah-lozier-563271195/" target="_blank">
                            <span className="icon is-medium ">
                            <i className="has-text-danger fa-brands fa-linkedin">
                                        </i>
                            </span>
                        </a>
                        <a className="button-is-medium" href="mailto:sarah.lozier@gmail.com" target="_blank">
                            <span className="icon is-medium ">
                            <i className="has-text-danger fa-solid fa-envelope">
                                        </i>
                            </span>
                        </a>
                        <a className="button-is-medium" href="https://github.com/sllozier" target="_blank">
                            <span className="icon is-medium">
                            <i className="has-text-danger fa-brands fa-github">
                                        </i>
                            </span>
                        </a>
                    </p>
                </div>
                </div>
                
                <div className="copyright">
                <span className="icon is-small">
                            <i className="fa-regular fa-heart">
                                        </i>
                            </span>
                    Made by yours-truly
                    <span className="icon has-white-text">
                    <i className="fa-solid fa-copyright">
                                        </i>
                            </span>
                            2022
                </div>
                <div className="made-by-bulma">
                    <a href="https://bulma.io">
                        <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;