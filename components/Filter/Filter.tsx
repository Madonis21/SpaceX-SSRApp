import { useState } from "react"
import React from "react";
import styles from './filter.module.css'
import { CONSTANTS } from "../../constants/constant";

const Filter = ({getFilteredData}) => {

    const yearList = CONSTANTS.YEARLIST;
    const [year, handleYearChange] = useState(null);
    const [launchSuccess, setLaunch] = useState(null);
    const [landingSuccess, setLanding]= useState(null);
    
    const handleFilterChanges = (year=null, launchSuccess=false, landingSuccess=false) => {
        handleYearChange(year);
        setLaunch(launchSuccess);
        setLanding(landingSuccess);
        getFilteredData({year, launchSuccess, landingSuccess});
    } 
    
    return (
    <>
        <div className={styles.filterText}>Filters</div>
        <div className={styles.launchText}>Launch Year</div>
        <div>
        {yearList.map((yearNumber: any, index) => (
            <React.Fragment key={index}>
            <button onClick={() => handleFilterChanges(yearNumber, launchSuccess, landingSuccess)} 
            className={yearNumber !== year ? styles.buttonEl : styles.activeButtonEl}>{yearNumber}</button>
            {index%2 !==0 && <br/>}
            </React.Fragment>
        ))}
        </div>
        <div className={styles.launchText}>Successful Launch</div>
        <div>
            <button onClick={() => handleFilterChanges(year, true, landingSuccess)} className={typeof launchSuccess === "boolean" && launchSuccess  ? styles.activeButtonEl: styles.buttonEl}>True</button>
            <button onClick={() => handleFilterChanges(year, false, landingSuccess)} className={typeof launchSuccess === "boolean" && !launchSuccess ? styles.activeButtonEl: styles.buttonEl}>False</button>
        </div>
        <div className={styles.launchText}>Successful Landing</div>
        <div>
            <button onClick={() => handleFilterChanges(year, launchSuccess, true)} className={typeof landingSuccess === "boolean" && landingSuccess ? styles.activeButtonEl: styles.buttonEl}>True</button>
            <button onClick={() => handleFilterChanges(year, launchSuccess, false)} className={typeof landingSuccess === "boolean" &&!landingSuccess ? styles.activeButtonEl: styles.buttonEl}>False</button>
        </div>
            </>
    )
}

export default Filter