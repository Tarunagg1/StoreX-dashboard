import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import Switch from '@mui/material/Switch';
import './keys.css';

import PageTitle from "../../components/common/PageTitle";
import { DefaultLayout } from '../../layouts';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Credentials = () => {
  const [toggler, settoggler] = useState(true);

  const handleTogglerChange = () => {
    settoggler((prev) => !prev);
  }
  return (
    <DefaultLayout>
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="API Keys" className="text-sm-left" />
          <Col className="togglemenumaincontainer">
            <Switch onChange={handleTogglerChange} checked={toggler}  {...label} defaultChecked color="warning" /> <span>Test mode</span>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card small className="mb-4">
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        Name
                      </th>
                      <th scope="col" className="border-0">
                        Creation date
                      </th>
                      <th scope="col" className="border-0">
                        Client ID
                      </th>
                      <th scope="col" className="border-0">
                        Status
                      </th>
                      <th scope="col" className="border-0">
                        Actions
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ali</td>
                      <td>Kerry</td>
                      <td>Russian Federation</td>
                      <td>Gdańsk</td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>


      </Container>
    </DefaultLayout>
  )
};

export default Credentials;
