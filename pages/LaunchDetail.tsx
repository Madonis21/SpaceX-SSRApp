import utilStyles from '../styles/utils.module.css';
import { MissionData } from '../models/model';

const LaunchDetail = ({data}: {data: MissionData}) => {
     
    return(
        <div className={utilStyles.launchDetailContainer}>  
                    <div className={utilStyles.imageContainer}>
                    <img width="80" height="160" src={data.links.mission_patch}></img>
                    </div>
                    <div>{data.mission_name}</div>
                    <ul>Mission Ids:</ul>
                    {data.mission_id.length && data.mission_id.map((missionId, index)=> (
                        <li key={index}>{missionId}</li>
                    ))}
                    <div>Launch Year: {data.launch_year}</div>
                    <div>Successful Launch: {data.launch_success}</div>
                    <div>Successful Landing: {data.rocket && data.rocket.first_stage 
                                && data.rocket.first_stage.cores
                                && data.rocket.first_stage.cores.length 
                                && data.rocket.first_stage.cores[0].land_success}</div>

        </div>
    )
}


  export default LaunchDetail;
