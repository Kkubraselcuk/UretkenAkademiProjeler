import React, { Component } from 'react'
import Degrees from './Degrees';
import Celcius from './Celcius';
import Fahrenheit from './Fahrenheit';
import Kelvin from './Kelvin';
import 'bootstrap';
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            celcius: 0,
            fahrenheit: 0,
            kelvin: 0,
        }
    }
    increaseDegree = () =>{
        this.setState({
            celcius: this.state.celcius+1,
            fahrenheit: (this.state.celcius*1.18)+32,
            kelvin: this.state.celcius+273.15,
        })
    }
    render() {
        return (
            <>

                <div className="container">

                    <h1>Hava Nasıl</h1>
                    Şuan Sıcaklık: {this.state.celcius} derece<br/><br/>
                        <button type="button" className="btn btn-success btn-sm" onClick={()=>this.increaseDegree()}>Sıcaklık Arttır</button><br/><br/>

                        <div className='row'>
                            <div className='col'>
                                <Degrees/>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <Celcius celciusValue={this.state.celcius}/>
                            </div>
                            <div className='col'>
                                <Fahrenheit fahrenheitValue={this.state.fahrenheit}/>
                            </div>
                            <div className='col'>
                                <Kelvin kelvinValue={this.state.kelvin}/>
                            </div>
                        </div>
                        
                </div>
            </>
        )
    }
}
