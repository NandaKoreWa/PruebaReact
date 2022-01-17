import { FC, useMemo, useRef, useState } from "react";
import { Badge, Button, Col, Layout, Row } from "antd";

interface CounterBaseComponentProps {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
}

export const CounterBaseComponent: FC<CounterBaseComponentProps> = (props) => {
  const [incremento, setIncremento] = useState(1);
  const { initialValue = 0, minValue, maxValue } = props;

  const [counter, setCounter] = useState(initialValue);

  const handleReset = () => {
    setCounter(initialValue);
  };

  const handleIncrement = () => {
    setCounter(counter + incremento);
  };

  const handleDecrement = () => {
    setCounter(counter - incremento);

  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Content style={{ height: "100%" }}>
        <Row style={{ height: "50%" }} align={"middle"} justify={"center"}>
          <Col span={1}>
            <Badge count={counter} showZero />
          </Col>
          <Col span={2}>
            <Button type={"primary"} onClick={handleDecrement}>
              Decrementar
            </Button>
          </Col>
          <Col span={2}>
            <Button type={"primary"} onClick={handleIncrement}>
              Incrementar
            </Button>
          </Col>
          <Col span={5}>
            <Button type={"primary"} danger block onClick={handleReset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};
