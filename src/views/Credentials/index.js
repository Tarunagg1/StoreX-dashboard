import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import "./keys.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PageTitle from "../../components/common/PageTitle";
import { DefaultLayout } from "../../layouts";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { genrateAndRegenrateKeysAction } from "../../redux/actions/auth.Actions";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const IsolatedMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  return (
    <Fragment>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={() => props.genrateAndRegenrateKeys(props.isTestMode)}
        >
          Regenerate
        </MenuItem>
        {/* <MenuItem>View logs</MenuItem> */}
      </Menu>
    </Fragment>
  );
};

const Credentials = () => {
  const [isTestMode, setIsTestMode] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);

  const [isKeyChnageLoading, setIsKeyChnageLoading] = useState(false);
  const { user, loading } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  const handleTogglerChange = () => {
    setShowCredentials(false);
    setIsTestMode((prev) => !prev);
    setIsKeyChnageLoading(true);

    setTimeout(() => {
      setIsKeyChnageLoading(false);
    }, 1000);
  };

  const toggleCredentials = () => {
    setShowCredentials((prev) => !prev);
    setIsKeyChnageLoading(true);

    setTimeout(() => {
      setIsKeyChnageLoading(false);
    }, 1000);
  };

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      toast.success("Copied successfully!!");
    } catch (err) {
      console.log(err);
    }
  };

  const generateAndRegenerateKeys = () => {
    setIsKeyChnageLoading(true);
    setTimeout(() => {
      dispatch(genrateAndRegenrateKeysAction(isTestMode));
      setIsKeyChnageLoading(false);
    }, 1000);
    setShowCredentials(false);
  };

  return (
    <DefaultLayout>
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}

        <PageTitle sm="5" title="API Keys" className="page-heading mt-5" />

        <Row noGutters className="page-header mt-3">
          <p style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            {isTestMode
              ? "Viewing API key. Toggle to view."
              : "Viewing API key. Toggle to view."}{" "}
          </p>
          {/* <FormControlLabel
            label="Test mode"
            control={<IOSSwitch sx={{ m: 1 }} onChange={null} checked={isTestMode} />}
          /> */}
        </Row>

        <Row className="mt-4">
          <Col>
            <Card small className="mb-4">
              <CardBody className="p-0 pb-3">
                <div className="mb-0">
                  <div className="bg-light">
                    <div className="keysHeaderBoxText">
                      <span className="headingKey">Standard keys</span>
                      <span>
                        This key will allow you to authenticate API requests.{" "}
                        <Link to="/get-started">Learn more</Link>
                      </span>
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
                          <td></td>
                        </tr>
                      </thead>
                      <tbody key={`keysTbody`}>
                        {isKeyChnageLoading || loading ? (
                          <td colSpan="3" style={{ textAlign: "center" }}>
                            <CircularProgress
                              disableShrink
                              size={40}
                              value={100}
                            />
                          </td>
                        ) : (
                          <tr>
                            <td>
                              <span className="bold">Secret key</span>
                            </td>
                            <td className="keyBoxSmall">
                              {isTestMode ? (
                                user.testApplicationKey === undefined ||
                                user.testApplicationKey === null ? (
                                  <button
                                    className="genrageKayButton"
                                    onClick={generateAndRegenerateKeys}
                                  >
                                    Generate API key
                                  </button>
                                ) : showCredentials ? (
                                  <>
                                    <Tooltip
                                      sx={{ fontSize: "200px" }}
                                      title="Click to copy"
                                      placement="right"
                                    >
                                      <span
                                        onClick={() =>
                                          copyToClipBoard(
                                            user.testApplicationKey
                                          )
                                        }
                                        className="keysTextID"
                                      >
                                        {user.testApplicationKey}
                                      </span>
                                    </Tooltip>

                                    <span
                                      className="genrageKayButton showHidekey hideKey"
                                      onClick={toggleCredentials}
                                    >
                                      Hide API key
                                    </span>
                                  </>
                                ) : (
                                  <div className="keySecretBlur">
                                    <span
                                      className="genrageKayButton showHidekey"
                                      onClick={toggleCredentials}
                                    >
                                      Reveal API key
                                    </span>
                                  </div>
                                )
                              ) : user.liveApplicationKey === undefined ||
                                user.liveApplicationKey === null ? (
                                <button
                                  className="genrageKayButton"
                                  onClick={generateAndRegenerateKeys}
                                >
                                  Generate API key
                                </button>
                              ) : showCredentials ? (
                                <>
                                  <Tooltip
                                    sx={{ fontSize: "200px" }}
                                    title="Click to copy"
                                    placement="right"
                                  >
                                    <span
                                      onClick={() =>
                                        copyToClipBoard(user.liveApplicationKey)
                                      }
                                      className="keysTextID"
                                    >
                                      {user.liveApplicationKey}
                                    </span>
                                  </Tooltip>
                                  <span
                                    className="genrageKayButton showHidekey hideKey"
                                    onClick={toggleCredentials}
                                  >
                                    Hide API key
                                  </span>
                                </>
                              ) : (
                                <div className="keySecretBlur">
                                  <span
                                    className="genrageKayButton showHidekey"
                                    onClick={toggleCredentials}
                                  >
                                    Reveal API key
                                  </span>
                                </div>
                              )}
                            </td>
                            <td className="isolatedMenu">
                              <IsolatedMenu
                                isTestMode={isTestMode}
                                genrateAndRegenrateKeys={
                                  generateAndRegenerateKeys
                                }
                              />
                            </td>
                          </tr>
                        )}
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
  );
};

export default Credentials;
