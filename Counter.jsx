import React from "react";

export class Counter extends React.Component {
    constructor() {
        super()

        this.state = {
            counter1: 0
        }

        this.onButtonClick = this.onButtonClick.bind(this)
    }


    onButtonClick() {
        this.setState({
            counter1: ++this.state.counter1

        })
    }

    render() {
        return ( 
            <div className="smile-container">
                <div className="smile-container-top">
                    <p>Смайл №</p>
                    <p className="smile-number">{this.props.smileName}</p>
                </div>
                <p className="result">{this.state.counter1}</p>

                <div onClick={this.onButtonClick} className='divCont'>
                    <div className="smile-top">
                        <div className="smile-eyes"></div>
                        <div className="smile-eyes"></div>
                    </div>
                    <div className="smile-bottom"></div>
                </div>
            </div>
        )
    }
}