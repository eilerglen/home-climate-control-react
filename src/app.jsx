import React from 'react';
import {FlowControl} from './components/flow/flowControl'
import styles from './app.module.css';

export default class App extends React.Component {
  state = {
    enabled: false,
    temperature: 21,
    flow: 1,
  }

  handlePowerSwitch =() => {
    this.setState({
      enabled: !this.state.enabled
    })
  }
  handleFlowSelect = (flow) => {
    this.setState(prevState => ({
      ...prevState,
      flow: flow
    }))
  }

  handleTemperatureIncrease =() => {
    // if(this.state.temperature >=MAX_TEMPERATURE) return;
    this.setState({
      temperature: this.state.temperature + 1
    })
  }

  handleTemperatureDecrease = () => {
    // if (this.state.temperature <= MIN_TEMPERATURE) return;
    this.setState({
      temperature: this.state.temperature - 1
    })
  }

  render() {
    const { enabled } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>Hall</h1>
          <div className={styles.card}>
            <div className={styles.column}>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
