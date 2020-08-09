import { MissionData } from "../../models/model";

 
function gulpifyImages(data: MissionData) {
  // Todo - Reduce image sizes
}


export default async (req, res) => {
    const resp = await fetch(`https://api.spacexdata.com/v3/launches?limit=100`);  
    const data: MissionData = await resp.json();
    // gulpifyImages(data);
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(data)
  }
