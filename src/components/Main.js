import classes from './Main.module.css';
import plate from '../components/content/img/Photo-plate.png'
import ruccola from '../components/content/img/rucola-png.png'
import time from '../components/content/img/time-eat.png';
import paris from '../components/content/img/paris.png';
import delivery from '../components/content/img/delivery.png'
function Main () {
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.grid}>
            <div>
              <div className={classes.phrase}>
                <p>Your Food court at home</p>
              </div>
              <div className={classes.buttons}>
                <button>Delivery</button>
                <button>Takeout</button>
              </div>
            </div>
            <div className={classes.plateImg}>
              <img
                src={ruccola}
                className={classes.rucola}
              />
              <img
                src={plate}
                className={classes.plate}
              />
            </div>
          </div>
        </div>
        <div className={classes.cont}>
          <div className={classes.icons}>
            <div>
              <img src={time} />
              <p>delivery in all paris in less than 30 minutes</p>
            </div>
            <div >
              <img src={delivery} />
              <p>Free delivery from 29 euros</p>
            </div>
            <div>
              <img src={paris} />
              <p>Only fresh and French products</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Main;