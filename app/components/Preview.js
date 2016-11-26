var React = require("react");
 
//Sets innerHTML to the content prop passed in
var Preview = React.createClass({
  getDefaultProps: function() {
    return {
      content: "";
    }
  },
  markup: function() {
    return { __html: this.props.content };
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