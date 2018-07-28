import React, { Component } from "react";
import styles from "./button.scss";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.container && !this.container.contains(event.target)) {
      this.setState({ showTooltip: false });
    }
  }

  handleButtonClick = e => {
    this.setState({ showTooltip: !this.state.showTooltip });
  };

  render() {
    const { text, actions, width, id, arrowPosition } = this.props;

    return (
      <div
        ref={el => (this.container = el)}
        className={styles["button-container"]}
        style={{ width: width }}
      >
        <button
          id={`btnMain-${id}`}
          className={`${styles.button} `}
          onClick={this.handleButtonClick}
        >
          {text}
        </button>
        {this.state.showTooltip &&
          actions && (
            <div
              className={`${styles["tooltip-container"]} ${
                arrowPosition === "left"
                  ? styles["tooltip-container-left"]
                  : styles["tooltip-container-right"]
              }`}
            >
              {actions.map((a, i) => (
                <button key={`${a.icon}-${i}`} className={styles["tt-button"]}>
                  <img src={`icons/${a.icon}/White/64px.svg`} alt={a.icon} />
                  {a.text}
                </button>
              ))}
            </div>
          )}
      </div>
    );
  }
}

export default Button;
