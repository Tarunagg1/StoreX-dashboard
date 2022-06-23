import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import './keys.css';

import PageTitle from "../../components/common/PageTitle";
import { DefaultLayout } from '../../layouts';


const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


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
        </Row>

        <div className="row mt-4">
          <div className="col-md-1"></div>
          <div className="col-lg-9">
            <div className="card card-small mb-4">
              <div className="card-header border-bottom">
                <div className="row d-flex justify-content-between align-items-center px-2">
                    <h6 className="m-0">Keys Details</h6>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} onChange={handleTogglerChange} checked={toggler} />}
                      label="Live mode"
                    />
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-3">
                  <div className="row">
                    {/* <div className="col">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="feFirstName">First Name</label>
                            <input type="text" className="form-control" id="feFirstName" placeholder="First Name" value="Sierra" /> </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="feLastName">Last Name</label>
                            <input type="text" className="form-control" id="feLastName" placeholder="Last Name" value="Brooks" /> </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="feEmailAddress">Email</label>
                            <input type="email" className="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com" /> </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="fePassword">Password</label>
                            <input type="password" className="form-control" id="fePassword" placeholder="Password" /> </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="feInputAddress">Address</label>
                          <input type="text" className="form-control" id="feInputAddress" placeholder="1234 Main St" /> </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="feInputCity">City</label>
                            <input type="text" className="form-control" id="feInputCity" /> </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="feInputState">State</label>
                            <select id="feInputState" className="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" /> </div>
                        </div>

                        <button type="submit" className="btn btn-accent">Update Account</button>
                      </form>
                    </div> */}

                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
        {/* <Row>
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
                      <td>something</td>
                      <td>20-06-2022</td>
                      <td>ojfiajviee6fw964f9wf1wg819wg1w981</td>
                      <td>Active</td>
                      <td className="flex">
                        <Switch color="warning" />
                        <i className="material-icons iconCustom">edit</i>
                        <i className="material-icons iconCustom">delete</i>
                        <i className="material-icons iconCustom">download</i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row> */}


      </Container>
    </DefaultLayout>
  )
};

export default Credentials;
