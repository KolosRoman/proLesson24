import React from "react";


export class Result extends React.Component {
    constructor() {
        super()
        this.resultName = document.getElementsByClassName('smile-number')
        this.resultItem = document.getElementsByClassName('result')
        this.num;
        this.win;
        this.array = [];

        this.state = {
            num: this.num,
            win: this.win
        }
    }

    onButtonResult() {
        this.num = +this.resultItem[0].innerHTML;
        this.win = 1;

        for (let i = 0; i < this.resultItem.length; i++) {
            this.array.push(+this.resultItem[i].innerHTML)
            if (+this.resultItem[i].innerHTML > this.num) {
                this.num = +this.resultItem[i].innerHTML;
                this.win = [i + 1];
            }
        }

        let newArray = this.array.sort((a, b) => b - a);
        let repeatNum = newArray[0]

        for (let i = 1; i < newArray.length; i++) {
            if (newArray[i] === repeatNum) {
                this.num = 'Переможця не виявлено'
                this.win = 'У декількох смайлів однаковий результат';
            }
        }

        return (
            this.setState({
                num: this.num,
                win: this.win
            })
        )

    }
    

    render() {
        return (
            <div className="result-block">
                <button onClick={() => {this.onButtonResult()}}>Result</button>
                <p className="result-block-item">Переміг Смайл під № {this.state.win} з результатом {this.state.num}</p>
            </div>
        )
    }
}