import React from "react";

const RADIUS = 120;
const  STROKE = 6;
const DEFAULT_CIRCLE_FILL = 0.75;

export class ProgressRing extends React.Component {
  constructor(props) {
    super(props)
    this.normalizedRadius = RADIUS - STROKE * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;

  }
  render() {
    const { progress } = this.props;
    const strokeDashoffset = this.circumference - (progress /100) * this.circumference 
    * DEFAULT_CIRCLE_FILL;
    const defaultStrokeDashoffset = this.circumference - this.circumference * DEFAULT_CIRCLE_FILL;
  }
  return (
    

  )

}