import classes from './AboutMe.module.css'

import Background from '../UI/Background'
import Nav from '../Nav/Nav'
import AboutMeContent from './AboutMeContent'
import Floor from '../UI/Floor'

const AboutMe = () => {
    return (
        <Background>
            <Nav />
            <AboutMeContent />
            <Floor />
        </Background>
    )
}

export default AboutMe