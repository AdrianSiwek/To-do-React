import React, { Component } from 'react';
import './AddTask.css';



class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);
    state = {
    text: '',
    checked: false,
    date: this.minDate
  }

    handleCheck = (event) => {
        this.setState({
            checked: event.target.checked
        });
    }

    handleText = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    handleDate = (event) => { 
        this.setState({ date: event.target.value }); 
    }

    handleClick = () => {
        const { text, checked, date } = this.state;
        if (text.length > 2) {
        const add = this.props.add(text, date, checked);
        if (add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })
        }
        } else {
        console.log("za krótko");
        }
    }

    render() { 
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        // console.log(maxDate);
        maxDate = maxDate + "-12-31";

        return (
            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText} />
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheck} />
                <label htmlFor="important">Priorytet</label><br />
                <label htmlFor="date">Do kiedy zrobić</label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                <br />
                <button onClick={this.handleClick}>Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;