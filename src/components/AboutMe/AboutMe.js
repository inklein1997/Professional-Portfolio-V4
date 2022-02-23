import classes from './AboutMe.module.css'
import profilePic from '../../assets/images/profile-picture/profile-cut-out.png'

import Card from '../UI/Card'

const AboutMe = () => {
    return (
        <section className={classes.section}>
            <Card className={classes.profile}>
                <img src={profilePic} alt="a professional picture of Michael Klein"/>
            </Card>
            <div className={classes.aboutMeText} >
                <h2>Hello!</h2>
                <br />
                <h3>My name is <span>Michael Klein</span>.  I am a <span>Full Stack Web Developer</span> and I am currently located in <span>Austin, Texas</span>.</h3>
                <br />
                <h3>I just recently earned a certificate form the <span>University of Texas at Austin Coding Bootcamp</span>.</h3>
                <br />
                <h3>I have a passion for building challenging applications and learning new technologies.</h3>
                <br />
                <h3>These are a few technologies I use...</h3>
            </div>

        </section>
    )
}

export default AboutMe