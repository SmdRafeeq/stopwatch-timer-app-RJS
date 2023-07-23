import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  updateTime = () => {
    this.setState(preState => ({
      timeElapsedInSeconds: preState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinute = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinute()}:${this.renderSeconds()}`

    return (
      <div className="stop-watch-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stop-watch-con">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-img"
            />
            <p>Timer</p>
          </div>
          <h1 className="timer-heading">{time} </h1>
          <div className="buttons-container">
            <button
              className="buttons start"
              type="button"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button
              className="buttons stop"
              type="button"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              className="buttons reset"
              type="button"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
