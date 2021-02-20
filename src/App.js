import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {response: []};
  }

  render() {
    var _this = this;
    window.$.ajax({
      url: "https://restcountries.eu/rest/v2/all",
      type: "GET",
      success: function(data){
        console.log(data)
        _this.setState({response: data})
      },
      dataType: "json"
    });

    let cellstyles = {
      fontFamily: 'Arial',
      border: '1px solid #DDD',
      padding: '5 5 5 5',
      textAlign: 'left',
    }

    var tmp = [];
    for (var i = 0; i < this.state.response.length; i++) {
      tmp.push(<tr>
        <td style={cellstyles}>{this.state.response[i].name}</td>
        <td style={cellstyles}>{this.state.response[i].population}</td>
        <td style={cellstyles}>{this.state.response[i].region}</td>
        <td style={cellstyles}>{this.state.response[i].timezones}</td>
      </tr>);
    }

    console.log(tmp);

    let titlestyles = {
      fontFamily: 'Arial',
      textAlign: 'center',
      fontSize: 36,
    }

    let tablestyles = {
      fontFamily: 'Arial',
      fontSize: 20,
      border: '1px solid #DDD',
      textAlign: 'left',
    }

    let tableheaderstyles = {
      fontFamily: 'Arial',
      fontSize: 20,
      fontWeight: 'bold',
      border: '1px solid #DDD',
      textAlign: 'left'
    }

    return (
      <div>
        <h1 style={titlestyles}>Countries</h1>

        <table style={tablestyles}>
          <th style={tableheaderstyles}>Name</th>
          <th style={tableheaderstyles}>Population</th>
          <th style={tableheaderstyles}>Region</th>
          <th style={tableheaderstyles}>Timezones</th>
          {tmp}
        </table>
      </div>
    );
  }
}

export default App;
