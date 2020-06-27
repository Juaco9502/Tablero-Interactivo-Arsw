class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {circles: []};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.manageCircles(),
      50
    );
  }

  componentWillUnmount() {
        this.timerID = setInterval(
        () => this.manageCircles(),
        50
        );
   }

  manageCircles() {
  console.log("fallo");
  fetch("/circles")
      .then(response => response.json())
      .then((data) => this.setState({ circles:data }));
      setObtainCircles(this.state.circles);
        console.log("fallo");
        const data = new FormData();
        data.append("posx",posX());
        data.append("posy",posY());
        fetch("/addcircles", {
            method: 'POST',
            body: data
        });
  }
  
  restart() {
    fetch("/restart", {
        method: 'POST'
    });
  clear();
  }

  render() {
    return (
      <div>
        <h1>TABLERO-INTERACTIVO</h1>
        <p></p>
        <p></p>
        <button onClick={this.restart}> Restart </button>
        <p></p>
        <p></p>
      </div>
    );
  }
}

ReactDOM.render(
  <Controller />,
  document.getElementById('root')
);