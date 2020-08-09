import { useState } from "react"
import React from "react";
import styles from './filter.module.css'
import { CONSTANTS } from "../../constants/constant";

const Filter = ({getFilteredData}) => {

    const yearList = CONSTANTS.YEARLIST;
    const [year, handleYearChange] = useState(null);
    const [launchSuccess, setLaunch] = useState(false);
    const [landingSuccess, setLanding]= useState(false);
    
    const handleFilterChanges = (year=null, launchSuccess=false, landingSuccess=false) => {
        handleYearChange(year);
        setLaunch(launchSuccess);
        setLanding(landingSuccess);
        getFilteredData({year, launchSuccess, landingSuccess});
    } 
    
    return (
    <>
        <p>Filters</p>
        <p>Launch Year</p>
        <div>
        {yearList.map((year: any, index) => (
            <React.Fragment key={index}>
            <button onClick={() => handleFilterChanges(year, launchSuccess, landingSuccess)} className={styles.buttonEl}>{year}</button>
            {index%2 !==0 && <div>&nbsp;</div>}
            </React.Fragment>
        ))}
        </div>
        <div>Successful Launch</div>
        <div>
            <button onClick={() => handleFilterChanges(year, true, landingSuccess)} className={styles.buttonEl}>True</button>
            <button onClick={() => handleFilterChanges(year, false, landingSuccess)} className={styles.buttonEl}>False</button>
        </div>
        <div>Successful Landing</div>
        <div>
            <button onClick={() => handleFilterChanges(year, launchSuccess, true)} className={styles.buttonEl}>True</button>
            <button onClick={() => handleFilterChanges(year, launchSuccess, false)} className={styles.buttonEl}>False</button>
        </div>
            </>
    )
}

export default Filter