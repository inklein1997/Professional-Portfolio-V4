import classes from './HomepageContent.module.css'

import Card from '../UI/Card'
import mushroom from '../../assets/images/misc-decorations/mushroom-marker.png'
import mushroomBlue from '../../assets/images/misc-decorations/mushroom-marker-blue.png'

const HomepageContent = () => {
    return <section className={classes.section}>
        <Card className={classes.titleCard}>
            <h2>Full Stack <br />Web Developer</h2>
            <h1>Michael Klein</h1>
        </Card>
        <nav>
            <div>
                <img src={mushroom} />
                <button><a href="mailto:michaelklein1997@gmail.com">MichaelKlein1997@gmail.com</a></button>
            </div>
            <div>
                <img src={mushroomBlue} />
                <button>512-879-7927</button>
            </div>
            <div>
                <img src={mushroomBlue} />
                <button>Click <a href='https://docs.google.com/document/d/13wgjALPAew1QubTti2xNGs2z75RIJSjGPYnktDMlePk/edit?usp=sharing' target="_blank">HERE</a> for my Resume</button>
            </div>
        </nav>
    </section>
}

export default HomepageContent