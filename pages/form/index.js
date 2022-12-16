import { Button, Checkbox, Form, Input, Select, Col, Divider, Row } from 'antd';
import React from 'react';
const { Option } = Select;

const MyFrom = () => {
  
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (

    <Form
      name="basic"
      form={form} 
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

    <Row gutter={0}>

      <Col span={0} xs={24} lg={3}>

        <Form.Item
            name="select1"
        >
            <Select
            placeholder="Select a option and change input text above"
            allowClear
            >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
            </Select>

        </Form.Item>

      </Col>

      <Col span={0} xs={24} lg={3}>

        <Form.Item
            name="select2"
        >
            <Select
            placeholder="Select a option and change input text above"
            allowClear
            >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
            </Select>

        </Form.Item>

      </Col>

      <Col span={0} xs={24} lg={3}>

        <Form.Item>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>

      </Col> 

    </Row>  

    </Form>
  );
};

export default MyFrom;