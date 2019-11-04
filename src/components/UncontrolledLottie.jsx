// UncontrolledLottie.jsx
import React, { Component } from "react"
import Lottie from "react-lottie"
import animationData from "../lotties/green_and_red_loop.json"

class UncontrolledLottie extends Component {
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
      <div>
        <Lottie options={defaultOptions}  />
      </div>
    )
  }
}

export default UncontrolledLottie
