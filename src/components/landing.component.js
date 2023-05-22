import React, {Component} from "react";





export default class Landing extends Component{
    render(){
        return(
            
            <div className="container">
                <br></br>
                <div className="container-fluid card shadow rounded">
                    <div className="card-body">
                        <div className="card-title">
                            <h1 className="card-title display-5">Welcome to BumbleBee Insurance Agency</h1>
                        </div>
                        <div className="container">
                            <h4 className="card-text">We have a host of services that suit a wide array of situations. we hope you'll like some and consider us as your exclusive insurance provider</h4>
                        </div>
                        <div className="container card-footer ">
                            <button type="button" className="btn btn-primary align-middle">Connect</button>
                        </div>
                    </div>
                </div>
                <div className="jumbotron justify-content-middle">
                    <br></br>
                    <p className="display-5">Check Out Our Policies</p>
                </div>
                <div className="container-fluid row">

                    <div className="container-fluid card shadow-rounded col-4">
                        <div className="card-body">
                            <div className="card-title">
                                <h1 className="card-title">Policy One</h1>
                            </div>
                            <div className="container jumbotron">
                                <h3 className="card- subtitle"> Description</h3>
                            </div>
                            <div className="container card-footer ">
                                <button type="button" className="btn btn-primary align-middle">More Info</button>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid card shadow-rounded col-4">
                        <div className="card-body">
                            <div className="card-title">
                                <h1 className="card-title">Policy Two</h1>
                            </div>
                            <div className="container jumbotron">
                                <h3 className="card- subtitle">Description</h3>
                            </div>
                            <div className="container card-footer ">
                                <button type="button" className="btn btn-primary align-middle">More Info</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="container-fluid card shadow-rounded col-4">
                        <div className="card-body">
                            <div className="card-title">
                                <h1 className="card-title">Policy Three</h1>
                            </div>
                            <div className="container jumbotron">
                                <h3 className="card- subtitle">Description</h3>
                            </div>
                            <div className="container card-footer ">
                                <button type="button" className="btn btn-primary align-middle">More Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

