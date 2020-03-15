import React, { Component, Fragment } from "react";
import Quagga from "quagga";

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nocamera: false
    };
    this.onDetect = this.onDetect.bind(this);
  }

  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          constraints: {
            width: "790",
            height: "490"
          },
          numberOfWorkers: navigator.hardwareConcurrency,
          target: document.querySelector("#barcodeScan")
        },
        locate: true,
        decoder: {
          readers: [
            {
              format: "ean_reader",
              config: {
                supplements: ["ean_5_reader", "ean_2_reader"]
              }
            }
          ]
        }
      },
      function(err) {
        if (err) {
          return;
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(this.onDetect);
  }

  onDetect(res) {
    // console.log(res.codeResult.code)
    Quagga.stop();
    Quagga.offProcessed();
    console.log(res);
    const p = document.querySelector("#test");
    p.innerHTML = res;
    // this.props.onBarcodeDetect(res.codeResult.code);
  }

  render() {
    return (
      <Fragment>
        <div id="barcodeScan"></div>
        <p id="test"></p>
      </Fragment>
    );
  }
}

export default Scanner;
