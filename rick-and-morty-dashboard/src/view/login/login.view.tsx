import { Col, Layout, Row, Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginView = () => {
  const username = "rick";
  const password = "rules";
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("logged")) {
      message.info("Inicio de sesion desde el cache");

      navigate("/dashboard/personajes");
    }
  });

  const onFinish = (values: any) => {

    if (
      values.username.toLowerCase().trim() === username &&
      values.password.toLowerCase().trim() === password
    ) {
      localStorage.setItem("logged", "1");
      navigate("/dashboard/personajes");
    } else {
      message.error("Parece que no conoces quien manda");
    }
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Content style={{ height: "100%" }}>
        <Row style={{ height: "100%" }} align={"middle"} justify={"center"}>
          <Col>
            <Form
              name="formRick"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Who rules?" }]}
              >
                <Input placeholder="el mejor personaje" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Who rules" }]}
              >
                <Input.Password placeholder="rules" />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};
