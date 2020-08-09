import { Container, Row, Col } from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';

import Filter from '../components/Filter/Filter';
import LaunchDetail from './LaunchDetail';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { MissionData } from '../models/model';
import { environment } from '../environments/environment';

export default function Home({data}: {data: MissionData[]}) {
  const [dataList, setdataList] = useState(null)

  const router = useRouter()

  useEffect(() => {
    setdataList(data);
  }, [data])

  const getFilteredData = async ({year, launchSuccess, landingSuccess})=> {
    const data = await getLaunchService({year, launchSuccess, landingSuccess})
    setdataList(data)
  }

  return (
    <>
      <Container>
  <Row>
    <Col className="filterContainer" lg={4} xs={12} md={4}>
      <Filter getFilteredData={getFilteredData}/>
    </Col>
    {dataList && dataList.map((mission, index) => (
      <Col key={index} xs={12}
      lg={{span: 2, offset: index > 1 && (index+1) % 4 === 1 ? 4 : 0 }}
      md={{span: 4, offset: index > 1 && (index+1) % 2 === 1 ? 4 : 0}}
      >
        <LaunchDetail data={mission}/>
      </Col>
    ))}
  </Row>
</Container>
    </>
  )
}

async function getLaunchService({year, launchSuccess, landingSuccess}) {
  const data = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchSuccess}&land_success=${landingSuccess}&launch_year=${year}`);
  const res = await data.json();
  return res;
}
export async function getServerSideProps(context) {
  const res = await fetch(`https://api.spacexdata.com/v3/launches?limit=100`);  
  const data = await res.json();
  // const res = await fetch(environment.baseApiUrl + "api/launches");
  // const data = await res.json();
  return { props: { data } }

}


