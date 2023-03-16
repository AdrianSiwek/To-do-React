import React, { Component } from 'react';

class AddTask extends Component {
    state = {  } 
    render() { 
        return (
            <div className='form'>
                <div>
                    <form>
                    <label htmlFor="">
                        <input type="text" placeholder='wpisz zadanie...' />
                        </label>
                        <label htmlFor=""><input type="checkbox" />Piorytet</label>
                </form>
                </div>
                <hr />
            </div>
        );
    }
}
 
export default AddTask;