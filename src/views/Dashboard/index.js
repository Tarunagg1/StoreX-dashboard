import React from "react";
import { Container, Row } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import { DefaultLayout } from '../../layouts';
// import SmallStats from '../../components/common/SmallStats';

const Dashboard = () => (
  <DefaultLayout>
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Activities" className="text-sm-left" />

      </Row>


      <div className="row">
        <div className="col-lg col-md-6 col-sm-6 mb-4">
          <div className="stats-small stats-small--1 card card-small">
            <div className="card-body p-0 d-flex">
              <div className="d-flex flex-column m-auto">
                <div className="stats-small__data text-center">
                  <span className="stats-small__label text-uppercase">Posts</span>
                  <h6 className="stats-small__value count my-3">2,390</h6>
                </div>
                <div className="stats-small__data">
                  <span className="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                </div>
              </div>
              <canvas height="120" className="blog-overview-stats-small-1"></canvas>
            </div>
          </div>
        </div>
        <div className="col-lg col-md-6 col-sm-6 mb-4">
          <div className="stats-small stats-small--1 card card-small">
            <div className="card-body p-0 d-flex">
              <div className="d-flex flex-column m-auto">
                <div className="stats-small__data text-center">
                  <span className="stats-small__label text-uppercase">Posts</span>
                  <h6 className="stats-small__value count my-3">2,390</h6>
                </div>
                <div className="stats-small__data">
                  <span className="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                </div>
              </div>
              <canvas height="120" className="blog-overview-stats-small-1"></canvas>
            </div>
          </div>
        </div>
        <div className="col-lg col-md-6 col-sm-6 mb-4">
          <div className="stats-small stats-small--1 card card-small">
            <div className="card-body p-0 d-flex">
              <div className="d-flex flex-column m-auto">
                <div className="stats-small__data text-center">
                  <span className="stats-small__label text-uppercase">Posts</span>
                  <h6 className="stats-small__value count my-3">2,390</h6>
                </div>
                <div className="stats-small__data">
                  <span className="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                </div>
              </div>
              <canvas height="120" className="blog-overview-stats-small-1"></canvas>
            </div>
          </div>
        </div>
        <div className="col-lg col-md-6 col-sm-6 mb-4">
          <div className="stats-small stats-small--1 card card-small">
            <div className="card-body p-0 d-flex">
              <div className="d-flex flex-column m-auto">
                <div className="stats-small__data text-center">
                  <span className="stats-small__label text-uppercase">Posts</span>
                  <h6 className="stats-small__value count my-3">2,390</h6>
                </div>
                <div className="stats-small__data">
                  <span className="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                </div>
              </div>
              <canvas height="120" className="blog-overview-stats-small-1"></canvas>
            </div>
          </div>
        </div>

      </div>

      {/* <Row>
      <Col>
        <Card small classNameName="mb-4">
          <CardHeader classNameName="border-bottom">
            <h6 classNameName="m-0">Active Users</h6>
          </CardHeader>
          <CardBody classNameName="p-0 pb-3">
            <table classNameName="table mb-0">
              <thead classNameName="bg-light">
                <tr>
                  <th scope="col" classNameName="border-0">
                    #
                  </th>
                  <th scope="col" classNameName="border-0">
                    First Name
                  </th>
                  <th scope="col" classNameName="border-0">
                    Last Name
                  </th>
                  <th scope="col" classNameName="border-0">
                    Country
                  </th>
                  <th scope="col" classNameName="border-0">
                    City
                  </th>
                  <th scope="col" classNameName="border-0">
                    Phone
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
                  <td>107-0339</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row> */}


    </Container>
  </DefaultLayout>
);

export default Dashboard;
