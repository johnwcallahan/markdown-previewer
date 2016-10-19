var React = require('react');
 
// sets innerHTML to the content prop passed in
var Preview = React.createClass({
  getDefaultProps: function() {
    return {
      content: ''
    }
  },
  // refer to https://facebook.github.io/react/tips/dangerously-set-inner-html.html
  markup: function() {
    return {__html: this.props.content};
  },
  render: function() {
    return (
      <p id="preview">
        <span dangerouslySetInnerHTML={this.markup()} />
      </p>
    )
  }
});

module.exports = Preview;