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
        <PageTitle sm="4" title="Add New Post" className="text-sm-left" />
      </Row>


      <div class="row">
        <div class="col-lg col-md-6 col-sm-6 mb-4">
          <div class="stats-small stats-small--1 card card-small">
            <div class="card-body p-0 d-flex">
              <div class="d-flex flex-column m-auto">
                <div class="stats-small__data text-center">
                  <span class="stats-small__label text-uppercase">Posts</span>
                  <h6 class="stats-small__value count my-3">2,390</h6>
                </div>
                <div class="stats-small__data">
                  <span class="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                </div>
              </div>
              <canvas height="120" class="blog-overview-stats-small-1"></canvas>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-6 col-sm-6 mb-4">
          <div class="stats-small stats-small--1 card card-small">
            <div class="card-body p-0 d-flex">
              <div class="d-flex flex-column m-auto">
                <div class="stats-small__data text-center">
                  <span class="stats-small__label text-uppercase">Posts</span>
                  <h6 class="stats-small__value count my-3">2,390</h6>
                </div>
                <div class="stats-small__data">
                  <span class="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                </div>
              </div>
              <canvas height="120" class="blog-overview-stats-small-1"></canvas>
            </div>
          </div>
        </div>
          <div class="col-lg col-md-6 col-sm-6 mb-4">
          <div class="stats-small stats-small--1 card card-small">
            <div class="card-body p-0 d-flex">
              <div class="d-flex flex-column m-auto">
                <div class="stats-small__data text-center">
                  <span class="stats-small__label text-uppercase">Posts</span>
                  <h6 class="stats-small__value count my-3">2,390</h6>
                </div>
                <div class="stats-small__data">
                  <span class="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                </div>
              </div>
              <canvas height="120" class="blog-overview-stats-small-1"></canvas>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-6 col-sm-6 mb-4">
          <div class="stats-small stats-small--1 card card-small">
            <div class="card-body p-0 d-flex">
              <div class="d-flex flex-column m-auto">
                <div class="stats-small__data text-center">
                  <span class="stats-small__label text-uppercase">Posts</span>
                  <h6 class="stats-small__value count my-3">2,390</h6>
                </div>
                <div class="stats-small__data">
                  <span class="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                </div>
              </div>
              <canvas height="120" class="blog-overview-stats-small-1"></canvas>
            </div>
          </div>
        </div>
        
      </div>

      {/* <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>
                  <th scope="col" className="border-0">
                    Last Name
                  </th>
                  <th scope="col" className="border-0">
                    Country
                  </th>
                  <th scope="col" className="border-0">
                    City
                  </th>
                  <th scope="col" className="border-0">
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
