import classes from './AboutMeContent.module.css'
import profilePic from '../../assets/images/profile-picture/profile-cut-out.png'
import reactMarioBlock from '../../assets/images/technologies/react-mario-block.png'
import css3MarioBlock from '../../assets/images/technologies/css3-logo-block.png'
import googlePlatformMarioBlock from '../../assets/images/technologies/google-platform-logo-block.png'
import mongodbMarioBlock from '../../assets/images/technologies/mongodb-logo-block.png'
import mySQLMarioBlock from '../../assets/images/technologies/mySQL-logo-block.png'
import nodejsMarioBlock from '../../assets/images/technologies/nodejs-mario-block.png'
import javascriptMarioBlock from '../../assets/images/technologies/javascript-logo-block.png'


import Card from '../UI/Card'

const AboutMeContent = () => {
    return (
        <section className={classes.section}>
            <Card className={`${classes.profile} ${classes.card}`}>
                <img src={profilePic} alt="a portrait of Michael Klein" />
            </Card>
            <div className={classes.aboutMeContext}>
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
                <div className={classes.technologies}>
                    <img src={javascriptMarioBlock} alt="Mario block with React logo" />
                    <img src={reactMarioBlock} alt="Mario block with React logo" />
                    <img src={mongodbMarioBlock} alt="Mario block with React logo" />
                    <img src={nodejsMarioBlock} alt="Mario block with React logo" />
                    <img src={mySQLMarioBlock} alt="Mario block with React logo" />
                    <img src={css3MarioBlock} alt="Mario block with React logo" />
                    <img src={googlePlatformMarioBlock} alt="Mario block with React logo" />
                </div>
            </div>

        </section>
    )
}

export default AboutMeContent