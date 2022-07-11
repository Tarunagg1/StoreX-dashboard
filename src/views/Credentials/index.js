import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import './keys.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PageTitle from "../../components/common/PageTitle";
import { DefaultLayout } from '../../layouts';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useAlert } from "react-alert";
import CircularProgress from '@mui/material/CircularProgress';




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


const IsolatedMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  return (
    <Fragment>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={event => setAnchorEl(event.currentTarget)}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>Regenrate</MenuItem>
        <MenuItem>View logs</MenuItem>
      </Menu>
    </Fragment>
  )
}

const Credentials = () => {
  const alert = useAlert();
  const [isTestMode, setIsTestMode] = useState(true);
  const [isKeyChnageLoading, setIsKeyChnageLoading] = useState(false);


  const handleTogglerChange = () => {
    setIsTestMode((prev) => !prev);
    setIsKeyChnageLoading(true);
    setTimeout(() => {
      setIsKeyChnageLoading(false)
    }, 1000);
  }

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      alert.success("Copied successfully!!")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DefaultLayout>
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}

        <PageTitle sm="5" title="API Keys" className="page-heading mt-5" />

        <Row noGutters className="page-header mt-3">
          <p>{isTestMode ? "Viewing test API keys. Toggle to view Live keys." : "Viewing Live API keys. Toggle to view test keys."} </p>
          <FormControlLabel
            label="Test mode"
            control={<IOSSwitch sx={{ m: 1 }} onChange={handleTogglerChange} checked={isTestMode} />}
          />
        </Row>

        <Row className="mt-4">
          <Col>
            <Card small className="mb-4">
              <CardBody className="p-0 pb-3">
                <div className="mb-0">
                  <div className="bg-light">
                    <div className="keysHeaderBoxText">
                      <span className="headingKey">Standard keys</span>
                      <span>These keys will allow you to authenticate API requests. <Link to="/get-started">Learn more</Link></span>
                    </div>
                  </div>
                  <div className="ContentBlock">
                    <table className="table">
                      <thead>
                        <tr>
                          <td>
                            <span className="ContentTopic">NAME</span>
                          </td>
                          <td>
                            <span className="ContentTopic">TOKEN</span>
                          </td>
                          <td>
                            <span className="ContentTopic">LAST USED</span>
                          </td>
                          <td>
                            <span className="ContentTopic">CREATED</span>
                          </td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          isKeyChnageLoading ? (
                            <td colspan="12" style={{ textAlign: 'center' }}>
                              <CircularProgress disableShrink size={40} value={100} />
                            </td>
                          ) : (
                            <tr>
                              <td>
                                <span className="bold">Secret key</span>
                              </td>
                              <Tooltip sx={{ fontSize: "200px" }} title="Click to copy" placement="right">
                                <td className="keyBoxSmall">
                                  {
                                    isTestMode ? (
                                      <span onClick={() => copyToClipBoard("hello world")} className="keysTextID">StorX_test_pxobXf0UrQbnny6AySbmOAHUoirjojrjirjgigrjrijifokfokolpfdmmgemgoikermjowrjfowijfoiwjiojgiwrjoliwjJooavYy73zNcqKSkuFJsaAIvPTbZ6you8FYcd0009qCmGHw</span>
                                    ) : (
                                      <span onClick={() => copyToClipBoard("hello world")} className="keysTextID">StorX_loive_pxobXf0UrQbnny6AySbmOAHUoirjojrjirjgigrjrijifokfokolpfdmmgemgoikermjowrjfowijfoiwjiojgiwrjoliwjJooavYy73zNcqKSkuFJsaAIvPTbZ6you8FYcd0009qCmGHw</span>
                                    )
                                  }
                                </td>
                              </Tooltip>
                              <td>
                                <span>Mar 22, 2021</span>
                              </td>
                              <td>
                                <span>Mar 23, 2021</span>
                              </td>
                              <td>
                                <IsolatedMenu />
                              </td>
                            </tr>
                          )

                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>


      </Container>
    </DefaultLayout>
  )
};

export default Credentials;
