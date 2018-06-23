import React from "react";
import "./SavedArt.css";

const SavedArt = () => (

    <div>


        <div className="col-md-12 marginAdjust">

            <div className="card">
                <div className="card-body">
                    <p class="card-title text-center">Saved Articles</p>

                    <br></br>

                    {/* <!-- Default input name --> */}
                    <p class="card-text text-center">Articles Saved</p>
                    <div class="text-center mt-4">
                        <button class="btn btn-unique">Removed</button>
                    </div>

                    <br></br>
                </div>

            </div>

        </div>

    </div>

)

export default SavedArt;