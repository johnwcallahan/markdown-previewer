var defaultContent = require('./defaultContent.js');
var marked = require('marked');
var Preview = require('./Preview.js');
var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return {
      content: defaultContent // content in text area on page load 
    }
  },
  // update state.content when user types, which will re-render Preview component with new text
  handleChange: function(event) {  
    this.setState({ content: event.target.value })
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-5 col-xs-offset-1"> 
          <textarea  defaultValue={this.state.content} 
          					 className="form-control" 
          					 rows="28" // height of the text area
          					 onChange={this.handleChange}>
          </textarea>
        </div>
        <div className="col-xs-5">
          <Preview content={marked(this.state.content)} />
        </div>
      </div>
    )
  }
});

module.exports = App;