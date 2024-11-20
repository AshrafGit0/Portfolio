import { Html, useProgress } from "@react-three/drei";
import { Spinner } from "react-bootstrap";

const CanvasLaoder = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "f1f1f1",
          marginTop: "40px",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </p>
    </Html>
  );
};

export default CanvasLaoder;
