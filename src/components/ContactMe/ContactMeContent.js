import classes from './ContactMeContent.module.css'

import Card from '../UI/Card'
import linkedInBlock from '../../assets/images/contact-blocks/linkedin-block.png'
import emailBlock from '../../assets/images/contact-blocks/email-block.png'
import githubBlock from '../../assets/images/contact-blocks/github-block.png'



const ContactMeContent = () => {
    return (
        <section className={classes.section}>
            <div className={classes.contactMeText}>
                <h2>Connect with me!</h2>
                <h3>Where you are an employer or a fellow developer, I would love to hear from you!<br /><br />
                    Click <a href='https://docs.google.com/document/d/13wgjALPAew1QubTti2xNGs2z75RIJSjGPYnktDMlePk/edit?usp=sharing' target="_blank">HERE</a> for my resume. <br /><br />
                    Phone: 512-879-7927</h3>
                <div>
                    <a href="https://www.linkedin.com/in/michaeljosephklein/" target="_blank" rel="noopener noreferrer"><img src={linkedInBlock} alt="linkedIn Logo" /></a>
                    <a href="mailto:michaelklein1997@gmail.com" rel="noopener noreferrer"><img src={emailBlock} alt="email Logo" /></a>
                    <a href="https://github.com/inklein1997" target="_blank" rel="noopener noreferrer"><img src={githubBlock} alt="github Logo" /></a>
                </div>
            </div>
            {/* <Card className={classes.card}>
                <form className={classes.form}>
                    <div>
                        <label htmlFor='nameInput'>Your Name</label>
                        <input type="text" placeholder='Enter your Name' id='nameInput' />
                    </div>
                    <div>
                        <label htmlFor='emailInput'>Your Name</label>
                        <input type="text" placeholder='Enter your Email' id='emailInput' />
                    </div>
                    <div>
                        <label htmlFor='messageInput'>Your Message</label>
                        <textarea type="text" rows='5' placeholder='Hello Michael.  We are looking for a full stack developer to hire for company X.  I would love to connect with you.' id='nameInput' />
                    </div>
                    <button type='submit'>Send Message</button>
                </form>
            </Card> */}
            <h2 className={classes.alternateText}>Connect with me!</h2>

        </section>
    )
}

export default ContactMeContent