class Machine extends React.Component {
  constructor() {
      super();
      this.state = {color: "red"};
  }
  render() {
    return <p>Hi, I am a {this.state.color} Car!</p>;
  }
}

ReactDOM.render(<Machine />, document.getElementById('root'));
