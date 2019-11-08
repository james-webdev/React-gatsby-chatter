import React, { Component } from "react"
import Lottie from "react-lottie"
import animationData from "../lotties/middle-animation.json"

class MiddleAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    return (
      <div className="middle-animation-wrapper">
        <Lottie options={defaultOptions} />
      </div>
    )
  }
}

export default MiddleAnimation
