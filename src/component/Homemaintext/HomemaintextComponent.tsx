import React from 'react';
import styles from '../Homemaintext/HomemaintextComponent.module.css';
import CheckIcon from '@material-ui/icons/Check';

const HomemaintextComponent: React.FC<{}> = () => {
  return (
          <div>
             <h1 className="display-4">Build
                <strong>social profiles</strong> and gain revenue
                <strong>profits</strong>
            </h1>
            <div className="d-flex">
              <div className="p-4 align-self-start">
                <CheckIcon className={styles.checkicon}/>
              </div>
              <div className="p-4 align-self-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!
              </div>
            </div>
            <div className="d-flex">
              <div className="p-4 align-self-start">
              <CheckIcon className={styles.checkicon}/>
              </div>
              <div className="p-4 align-self-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!
              </div>
            </div>
            <div className="d-flex">
              <div className="p-4 align-self-start">
               <CheckIcon className={styles.checkicon}/>
              </div>
              <div className="p-4 align-self-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!
              </div>
            </div>
          </div>
        );
      }

      export default HomemaintextComponent;
