export class MissionData {
    crew: any
    details: string
    flight_number: number
    is_tentative: boolean
    launch_date_local: string
    launch_date_unix: 1143239400
    launch_date_utc: string
    launch_failure_details: {time: number, altitude: any, reason: string}
    launch_site: {site_id: string, site_name: string}
    launch_success: boolean
    launch_window: number
    launch_year: string
    links: {mission_patch: string, mission_patch_small: string}
    mission_id: any[]
    mission_name: string
    rocket: {rocket_id: string, rocket_name: string, rocket_type: string,
      first_stage: {
          cores: [
            {
              land_success: boolean,
            }
          ]
        },
  }
    ships: any[]
    static_fire_date_unix: number
    static_fire_date_utc: string
    tbd: boolean
    telemetry: {flight_club: any}
    tentative_max_precision: string
    timeline: {webcast_liftoff: number}
    upcoming: boolean
    
  }