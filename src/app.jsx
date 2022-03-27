import React from 'react';
import {FlowControl, FLOW_OPTIONS} from './components/flow/flowControl';
import { SwitchControl } from './components/switchControl/switchControl';
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
              <SwitchControl enabled={enabled} onClick={this.handlePowerSwitch}/>
            </div>
            <span className={styles.iconFan}></span>
            <label>
              Скорость обдува
              <div className={styles.fanRow}>
                {FLOW_OPTIONS.map(elem => {
                  <FlowControl
                    key={`flow_elem${elem}`}
                    flow = {elem}
                    selectedFlow = {this.state.flow}
                    onClick={this.handleFlowSelect}
                  />
                })}
              </div>
            </label>
          </div>
        </div>
      </div>
    )
  }
}
