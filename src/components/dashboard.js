import React, {Component} from 'react';
import Switch from "@material-ui/core/Switch";

const axios = require('axios');

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device1: false,
            device2: false,
            device3: false,
            device4: false
        };

        this.handleDevice1 = this.handleDevice1.bind(this);
        this.handleDevice2 = this.handleDevice2.bind(this);
        this.handleDevice3 = this.handleDevice3.bind(this);
        this.handleDevice4 = this.handleDevice4.bind(this);
    }

    handleDevice1(){
        if (this.state.device1){
            this.setState({device1: false},()=> this.handleAPI());
        }else{
            this.setState({device1: true},()=> this.handleAPI());
        }
    }

    handleDevice2(){
        if (this.state.device2){
            this.setState({device2: false},()=> this.handleAPI());
        }else{
            this.setState({device2: true},()=> this.handleAPI());
        }
    }

    handleDevice3(){
        if (this.state.device3){
            this.setState({device3: false},()=> this.handleAPI());
        }else{
            this.setState({device3: true},()=> this.handleAPI());
        }
    }

    handleDevice4(){
        if (this.state.device4){
            this.setState({device4: false},()=> this.handleAPI());
        }else{
            this.setState({device4: true},()=> this.handleAPI());
        }
    }

    handleAPI(){
        // Connect with backend
        let url = 'http://localhost:5000/';
        axios.post(url, {
            device1: this.state.device1,
            device2: this.state.device2,
            device3: this.state.device3,
            device4: this.state.device4
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    render() {
        return (
            <div className="container">
                <br/>
                <h1>IoT Dashboard</h1>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Device #1</h3>
                        <Switch
                            onChange={this.handleDevice1}
                            name="device1"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            label="Normal"
                        />
                    </div>
                    <div className="col-md-6">
                        <h3>Device #2</h3>
                        <Switch
                            onChange={this.handleDevice2}
                            name="device2"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            label="Normal"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Device #3</h3>
                        <Switch
                            onChange={this.handleDevice3}
                            name="device3"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            label="Normal"
                        />
                    </div>
                    <div className="col-md-6">
                        <h3>Device #4</h3>
                        <Switch
                            onChange={this.handleDevice4}
                            name="device4"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            label="Normal"
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;