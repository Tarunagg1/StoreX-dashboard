import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import './keys.css';

import PageTitle from "../../components/common/PageTitle";
import { DefaultLayout } from '../../layouts';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


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
          <Col className="flex justify-content-end">
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} onChange={handleTogglerChange} checked={toggler} />}
              label="Live mode"
            />
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
        </Row>


      </Container>
    </DefaultLayout>
  )
};

export default Credentials;
