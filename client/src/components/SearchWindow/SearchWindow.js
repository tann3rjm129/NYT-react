import React from "react";
import "./SearchWindow.css";

const SearchWindow = () => (

    <div>


        <div className="col-md-12 marginAdjust">

            <div className="jumbotron">
                <form>
                    <p class="h4 text-center mb-4">Search</p>

                    {/* <!-- Default input name --> */}
                    <label for="defaultFormRegisterNameEx" class="grey-text">Topic</label>
                    <input type="text" id="defaultFormRegisterNameEx" class="form-control"></input>

                    <br></br>

                    {/* <!-- Default input email --> */}
                    <label for="defaultFormRegisterEmailEx" class="grey-text">Start Year</label>
                    <input type="email" id="defaultFormRegisterEmailEx" class="form-control"></input>

                    <br></br>

                    {/* <!-- Default input email --> */}
                    <label for="defaultFormRegisterConfirmEx" class="grey-text">End Year</label>
                    <input type="email" id="defaultFormRegisterConfirmEx" class="form-control"></input>

                    <br></br>

                    <div class="text-center mt-4">
                        <button class="btn btn-unique" type="submit">Search</button>
                    </div>
                </form>
            </div>

        </div>

    </div>

)

export default SearchWindow;
