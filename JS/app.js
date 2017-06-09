var json = [
  {
    'name': 'Task1',
  },
  {
    'name': 'Task2'
  },
  {
    'name': 'Task3'
  },
  {
    'name': 'Task4'
  },
  {
    'name': 'Task5'
  }
];
var Task = React.createClass({
  getInitialState: function() {
    return {
      visible: true
    };
  },
  hideTask: function(e) {
    this.setState({visible: false});
    console.log(this.state.visible);
  },
  render: function() {
    var startButtonStyle = {
      'width': '80px',
      'height': '40px',
      'margin': '10px'
    }
    var taskListItemStyle = {
      'border': '1px solid gray',
      'width': '500px',
      'height': '60px',
      'margin': '10px'
    }
    var taskNameStyle = {
      'display': 'inline-block',
      'height': '40px',
      'width': '100px'
    }
    var taskTimeStyle = {
      'display': 'inline-block',
      'height': '40px',
      'width': '180px'
    }
    var crossImgStyle = {
      'width': '40px',
      'height': '40px',
      'margin': '10px',
      'float': 'right'
    }
    var checkImgStyle = {
      'width': '40px',
      'height': '40px',
      'margin': '10px',
      'float': 'left'
    }
    var item = this.props.data;
    return (
        <div className={(this.state.visible ? '' : 'none')} style={taskListItemStyle}>
          <img src="images/check.svg" alt="!" style={checkImgStyle}/>
          <p style={taskNameStyle}>{item.name}</p>
          <p style={taskTimeStyle}>Total time 00:00:00</p>
          <button style={startButtonStyle}>START</button>
          <img src="images/cross.svg" alt="!" style={crossImgStyle} onClick={this.hideTask}/>
        </div>
    )
  }
});

var App = React.createClass({
  render: function() {
    var inputStyle = {
      'height': '60px',
      'border': '0px',
      'fontSize': '18px',
      'margin': '0 0 0 10px'
    }
    var inputWrapStyle = {
      'border': '1px solid gray',
      'width': '500px',
      'height': '60px',
      'margin': '10px'
    }
    var addButtonStyle = {
      'width': '80px',
      'height': '40px',
      'margin': '10px',
      'float': 'right'
    }
    var _data = this.props.data;
    return (
      <div style={{'margin':'10% 20% 10% 20%'}}>
        <h1 style={{'textAlign':'center', 'width':'500px'}}>TO DO LIST</h1>
        <div style={inputWrapStyle}>
          <input placeholder="Add a task" style={inputStyle}/>
          <button style={addButtonStyle}>ADD</button>
        </div>
        <div>
          {_data.map(function(item, index) {
            return (<Task data={item} key={index}/>)
          })}
        </div>
      </div>
    )
  }
})
ReactDOM.render(<App data={json}/>,document.getElementById('root'))
