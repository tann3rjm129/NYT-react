import React from "react";
import "./SearchWindow.css";

const SearchWindow = () => (

    <div>


        <div className="col-md-12">

            <div className="card marginAdjust">

                <div className="row justify-content-start blackBackground">
                    <p class="h4 text-center mb-4 fontStyle card-title">Search</p>
                </div>

                <div className="card-body">
                    <form className="cardAdjust">
                        {/* <!-- Default input name --> */}
                        <label for="defaultFormRegisterNameEx" class="grey-text fontStyle">Topic</label>
                        <input type="text" id="defaultFormRegisterNameEx" class="form-control"></input>

                        <br></br>

                        {/* <!-- Default input email --> */}
                        <label for="defaultFormRegisterEmailEx" class="grey-text fontStyle">Start Year</label>
                        <input type="email" id="defaultFormRegisterEmailEx" class="form-control"></input>

                        <br></br>

                        {/* <!-- Default input email --> */}
                        <label for="defaultFormRegisterConfirmEx" class="grey-text fontStyle">End Year</label>
                        <input type="email" id="defaultFormRegisterConfirmEx" class="form-control"></input>

                        <br></br>

                        <div class="row text-center justify-content-end">
                            <button class="btn btn-yellow fontStyle" type="submit">Search</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    </div>

)

export default SearchWindow;
