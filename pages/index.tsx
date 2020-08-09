import { Container, Row, Col } from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import Filter from '../components/Filter/Filter';
import LaunchDetail from './LaunchDetail';
import { useEffect, useState } from 'react';
import { MissionData } from '../models/model';
import { environment } from '../environments/environment';

export default function Home({ data }: { data: MissionData[] }) {
  const [dataList, setdataList] = useState(null)

  useEffect(() => {
    setdataList(data);
  }, [data])

  const getFilteredData = async ({ year, launchSuccess, landingSuccess }) => {
    const data = await getLaunchService({ year, launchSuccess, landingSuccess })
    setdataList(data)
  }

  return (
    <div className="wrapper">
      <Head>
        <title>SpaceX Mission Details</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <div className="appTitle">SpaceX Launch Programs</div>
        <Row>
          <Col className="filterContainer" lg={4} xs={12} md={4}>
            <Filter getFilteredData={getFilteredData} />
          </Col>
          {dataList && dataList.map((mission, index) => (
            <Col key={index} xs={12}
              lg={{ span: 2, offset: index > 1 && (index + 1) % 4 === 1 ? 4 : 0 }}
              md={{ span: 4, offset: index > 1 && (index + 1) % 2 === 1 ? 4 : 0 }}
            >
              <LaunchDetail data={mission} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

async function getLaunchService({ year, launchSuccess, landingSuccess }) {
  const data = await fetch(environment.apiUrl + `&launch_success=${launchSuccess}&land_success=${landingSuccess}&launch_year=${year}`);
  const res = await data.json();
  return res;
}
export async function getServerSideProps(context) {
  const res = await fetch(environment.apiUrl);
  const data = await res.json();
  // const res = await fetch(environment.baseApiUrl + "api/launches");
  // const data = await res.json();
  return { props: { data } }

}


