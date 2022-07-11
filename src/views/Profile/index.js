import React from "react";
import { Container } from "shards-react";
import { DefaultLayout } from '../../layouts';

const Profile = () => (
    <DefaultLayout>
        {/* <div className="alert alert-success alert-dismissible fade show mb-0" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <i className="fa fa-check mx-2"></i>
            <strong>Success!</strong> Your profile has been updated! </div> */}

        <Container fluid classNameName="main-content-container px-4">
            <div className="page-header row no-gutters py-4">
                <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                    <h3 className="page-title">User Profile</h3>
                </div>
            </div>

            <div className="row">
         
                <div className="col-lg-8 mx-auto mt-5">
                    <div className="card card-small mb-4">
                        <div className="card-header border-bottom">
                            <h6 className="m-0">Account Details</h6>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item p-3">
                                <div className="row">
                                    <div className="col">
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

                                            <button type="submit" className="btn btn-accent">Edit details</button>
                                        </form>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </Container>
    </DefaultLayout>
);

export default Profile;
