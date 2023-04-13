import { useRef, useState } from "react";
import "./App.css";

import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import "@tensorflow/tfjs-core";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";

function App() {
  const [points, setPoints] = useState([]);
  const webcamFeed = useRef();
  const someImg = useRef();
  const initializeWebcam = () => {
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        for (const device of devices) {
          console.log(
            `${device.kind}: ${device.label} id = ${device.deviceId}`
          );

          if (device.kind === "videoinput") {
            return device.deviceId;
          }
        }
      })
      .then((id) =>
        navigator.mediaDevices.getUserMedia({
          video: {
            deviceId: {
              exact: id,
            },
          },
        })
      )
      .then((stream) => {
        console.log(stream);
        webcamFeed.current && (webcamFeed.current.srcObject = stream);
        /* use the stream */
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  };

  const initializeModel = async () => {
    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    const detectorConfig = {
      runtime: "tfjs",
    };
    const detector = await faceLandmarksDetection.createDetector(
      model,
      detectorConfig
    );

    console.log(detector, "detector loaded");
    console.log(webcamFeed.current, someImg.current);

    const estimationConfig = { flipHorizontal: false };
    const faces = await detector.estimateFaces(
      someImg.current,
      estimationConfig
    );

    console.log(faces);

    faces[0] && setPoints(faces[0].keypoints);
  };

  return (
    <div className="App">
      <section>
        <video controls ref={webcamFeed}></video>
        <img
          style={{ width: 600, height: "auto" }}
          ref={someImg}
          crossOrigin="anonymous"
          alt=""
          src="https://images.unsplash.com/photo-1541784631340-07506b63cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        {/* <img
          style={{ width: 600, height: "auto" }}
          ref={someImg}
          crossOrigin="anonymous"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        /> */}
        <button onClick={initializeWebcam}>Start webcam</button>
        <button onClick={initializeModel}>Start model</button>
      </section>
      {/* <section className="face">
        <div className="left-eye"></div>
        <div className="right-eye"></div>
        <div className="nose"></div>
        <div className="mouth"></div>
      </section> */}
      <div style={{ position: "relative", width: 1200, height: 800 }}>
        {points.map((point) => (
          <div
            style={{
              position: "absolute",
              width: 5,
              height: 5,
              left: point.x * 2,
              top: point.y * 2,
              background: "black",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
