import React from "react";
import { Component } from "react";
import Slide from "./components/customSlider";
import "./App.css";
import next from "./images/next.png";
import back from "./images/back.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: [
        {
          id: "1",
          image:
            "https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          text: "Slider Section 1",
        },
        {
          id: "2",
          image:
            "https://images.unsplash.com/photo-1640622308205-8ad9478c2386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          text: "Slider Section 2",
        },
        {
          id: "3",
          image:
            "https://images.unsplash.com/photo-1614287350843-7b7c228df8cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          text: "Slider Section 3",
        },
      ],
      currentIndex: 0,
    };
  }

  previousState = () => {
    const { slide, currentIndex } = this.state;
    if (currentIndex === 0) {
      return this.setState({ currentIndex: slide.length - 1 });
    }
    this.setState({ currentIndex: currentIndex - 1 });
  };

  nextState = () => {
    const { currentIndex, slide } = this.state;
    if (currentIndex === slide.length - 1) {
      return this.setState({ currentIndex: 0 });
    }
    this.setState({ currentIndex: currentIndex + 1 });
  };

  indexSlide = (info) => {
    const { id } = info;
    this.setState({ currentIndex: id - 1 });
  };

  render() {
    const { slide, currentIndex } = this.state;
    return (
      <div className="custom-Outer">
        <div className="btnOuter leftbtn">
          <button onClick={this.previousState}>
            <img src={back} />
          </button>
        </div>
        <div className="middleFlex">
          <Slide key={slide[currentIndex].id} info={slide[currentIndex]} />

          <div className="paginationSect">
            {slide.map((v) => {
              let backgroundColor = "#fff";
              if (currentIndex + 1 === +v.id) {
                backgroundColor = "#000";
              }
              return (
                <div
                  className="pageIndicators"
                  key={v.id}
                  onClick={() => this.indexSlide(v)}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="btnOuter rightbtn">
          <button onClick={this.nextState}>
            <img src={next} />
          </button>
        </div>
      </div>
    );
  }
}
export default App;
