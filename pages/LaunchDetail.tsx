import utilStyles from '../styles/utils.module.css';
import { MissionData } from '../models/model';

const LaunchDetail = ({ data }: { data: MissionData }) => {

    return (
        <div className={utilStyles.launchDetailContainer}>
            {data &&
                <div>
                    <div className={utilStyles.imageContainer}>
                        <img
                            alt="mission representative image"
                            width="120"
                            height="160"
                            src={data.links.mission_patch}></img>
                    </div>

                    <div className={utilStyles.missionName}>{data.mission_name}</div>

                    <ul className={utilStyles.missionText} style={{ padding: 0, margin: 0 }}>Mission Ids:
                    {data.mission_id.length && data.mission_id.map((missionId, index) => (
                        <li key={index}>{missionId}</li>
                    ))}
                    </ul>

                    <div className={utilStyles.missionText}>Launch Year: {data.launch_year}</div>
                    <div className={utilStyles.missionText}>Successful Launch: {data.launch_success ? 'Yes' : 'No'}</div>
                    <div className={utilStyles.missionText}>Successful Landing: {data.rocket && data.rocket.first_stage
                        && data.rocket.first_stage.cores
                        && data.rocket.first_stage.cores.length
                        && data.rocket.first_stage.cores[0].land_success ? 'Yes' : 'No'}</div>
                </div>
            }
        </div>
    )
}


export default LaunchDetail;
