import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 5000, timer: 0 };
  }

  componentDidMount() {
    // console.log(this.state.time);
    let timeLeft = this.secondToTime(this.state.seconds);
    this.setState({time: timeLeft});
  }

  startCount = () => {
    if (this.state.timer === 0 && this.state.seconds > 0) {
      this.state.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () => {
    let seconds = this.state.seconds - 1;
    this.setState({ 
      time: this.secondToTime(seconds), 
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.state.timer);
    }
  }

  secondToTime(sec) {
    let hours = Math.floor(sec / (60*60));
    let minutes = Math.floor((sec % (60*60)) / 60);
    let seconds = Math.ceil((sec % (60*60)) % 60);

    let obj = {
      'hour': hours,
      'minute': minutes,
      'second': seconds
    };
    return obj;
  }
  
  render() {
    return(
      <div>
        <button onClick = {this.startCount}>Start CountDown</button>
        <p>Hour: {this.state.time.hour}</p>
        <p>Minute: {this.state.time.minute}</p>
        <p>Second: {this.state.time.second}</p>
      </div>
    );
  }
}
export default App;
