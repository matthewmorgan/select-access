import React, {Component} from 'react';
import './App.css';
import './selector/selector.css';

import SelectWidget from './selector/SelectWidget';

/*
 SelectWidget expects params: {id, containerClass, ariaLabel, defaultOption, onChange, options}
 */


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options : [
        {value: 'mutt', label: 'Mutt'},
        {value: 'lab', label: 'Labrador Retriever'},
        {value: 'scottie', label: 'Scottish Terrier'}
      ],
      value:  'mutt'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h1>Custom Select Widget</h1>
          </div>
          <p>This is a custom select widget that is screen-reader friendly.</p>
          <SelectWidget
              id={'my-select-widget'}
              containerClass={'styled-select'}
              ariaLabel={'select a dog breed'}
              onChange={this.handleChange}
              value={this.state.value}
              options={this.state.options}
          />
        </div>
    );
  }
}

export default App;
