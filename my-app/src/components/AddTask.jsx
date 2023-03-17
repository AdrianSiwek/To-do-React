import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    state = {
        text: '',
        checked: false,
        date: new Date().toISOString().slice(0,10),
    }; 

    handleCheck = (event) => {
        this.setState({ checked: event.target.checked });
    }

    handleText = (event) => {
        this.setState({ text: event.target.value });
    }

    handleDate = (event) => { 
        this.setState({ date: event.target.value }); 
    }
    render() { 
        const minDate = new Date().toISOString().slice(0, 10);
        let maxDate = minDate.slice(0, 4) * 1 + 12;
        maxDate = maxDate + "-12-31";

        return (
            <div className='form'>
                    <form>
                    <label htmlFor="">
                        <input type="text" placeholder='wpisz zadanie...' value={this.state.text} onChange={this.handleText} />
                        </label>
                        <label htmlFor="important">
                            <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheck}/>Piorytet
                    </label>
                    <br />
                        <label htmlFor="date">Do kiedy zrobić
                        <input type="date" value={this.state.date} min={minDate} max={maxDate} onChange={this.handleDate} />
                    </label>
                    <br />
                        <button>Dodaj</button>
                </form>
                <hr />
            </div>
        );
    }
}
 
export default AddTask;