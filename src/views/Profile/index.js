import React from "react";
import { Container } from "shards-react";
import { DefaultLayout } from '../../layouts';

const Profile = () => (
    <DefaultLayout>
        {/* <div class="alert alert-success alert-dismissible fade show mb-0" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <i class="fa fa-check mx-2"></i>
            <strong>Success!</strong> Your profile has been updated! </div> */}

        <Container fluid className="main-content-container px-4">
            <div class="page-header row no-gutters py-4">
                <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                    <h3 class="page-title">User Profile</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <div class="card card-small mb-4 pt-3">
                        <div class="card-header border-bottom text-center">
                            <div class="mb-3 mx-auto">
                                <img class="rounded-circle" src="https://designrevision.com/demo/shards-dashboard-lite/images/avatars/0.jpg" alt="User Avatar" width="110" /> </div>
                            <h4 class="mb-0">Sierra Brooks</h4>
                        </div>

                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card card-small mb-4">
                        <div class="card-header border-bottom">
                            <h6 class="m-0">Account Details</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item p-3">
                                <div class="row">
                                    <div class="col">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label htmlFor="feFirstName">First Name</label>
                                                    <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra" /> </div>
                                                <div class="form-group col-md-6">
                                                    <label htmlFor="feLastName">Last Name</label>
                                                    <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks" /> </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label htmlFor="feEmailAddress">Email</label>
                                                    <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com" /> </div>
                                                <div class="form-group col-md-6">
                                                    <label htmlFor="fePassword">Password</label>
                                                    <input type="password" class="form-control" id="fePassword" placeholder="Password" /> </div>
                                            </div>
                                            <div class="form-group">
                                                <label htmlFor="feInputAddress">Address</label>
                                                <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St" /> </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label htmlFor="feInputCity">City</label>
                                                    <input type="text" class="form-control" id="feInputCity" /> </div>
                                                <div class="form-group col-md-4">
                                                    <label htmlFor="feInputState">State</label>
                                                    <select id="feInputState" class="form-control">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-2">
                                                    <label htmlFor="inputZip">Zip</label>
                                                    <input type="text" class="form-control" id="inputZip" /> </div>
                                            </div>

                                            <button type="submit" class="btn btn-accent">Update Account</button>
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
