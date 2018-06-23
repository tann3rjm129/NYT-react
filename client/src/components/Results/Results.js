import React from "react";
import "./Results.css";

const Results = () => (

    <div>


        <div className="col-md-12">

            <div className="card marginAdjust">

                <div className="row justify-content-start blackBackground">
                    <p class="h4 text-center mb-4 fontStyle card-title">Results</p>
                </div>

                <div className="card-body cardAdjust">

                    {/* <!-- Default input name --> */}
                    <p class="card-text text-center fontStyle">Results</p>
                    <div class="row text-center justify-content-end">
                        <button class="btn btn-yellow fontStyle">Save</button>
                    </div>

                </div>

            </div>

        </div>

    </div>

)

export default Results;