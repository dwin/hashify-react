import React, { Component } from "react";

class Home extends Component {
    render () {
        return (
            <div className="col-md">
                <h2>Home</h2>
                <p>Random text</p>
                <p>More text</p>
                <div className="row">
                    <div className="col-md">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;