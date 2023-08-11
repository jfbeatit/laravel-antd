import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, Watermark } from "antd";
import { Link, router, usePage } from "@inertiajs/react";
import { StyleProvider } from "@ant-design/cssinjs";
import { LockOutlined, SafetyOutlined, UserOutlined } from "@ant-design/icons";
import Copyright from "../../../Components/Copyright";

export default function ({ captcha }: { captcha: string }): React.ReactElement {
    const { appName } = usePage<{ appName: string }>().props;

    return (
        <Watermark content={appName}>
            <main className="w-screen h-screen flex justify-center items-center">
                <div className="w-4/12 h-3/5 bg-gray-200 shadow-2xl rounded-lg flex flex-col items-center justify-center">
                    <h1 className="text-3xl">{appName}</h1>
                    <Form className="mt-8 w-10/12">
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    name={"username"}
                                    rules={[
                                        {
                                            required: true,
                                            message: "请输入用户名",
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={
                                            <UserOutlined className="text-gray-400" />
                                        }
                                        placeholder="请输入用户名"
                                        size="large"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    name={"password"}
                                    rules={[
                                        {
                                            required: true,
                                            message: "请输入密码",
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        prefix={
                                            <LockOutlined className="text-gray-400" />
                                        }
                                        placeholder="请输入密码"
                                        size="large"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row justify={"space-between"}>
                            <Col span={16}>
                                <Form.Item
                                    name={"captcha"}
                                    rules={[
                                        {
                                            required: true,
                                            message: "请输入验证码",
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={
                                            <SafetyOutlined className="text-gray-400" />
                                        }
                                        placeholder="请输入验证码"
                                        size="large"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={7} offset={1}>
                                <a
                                    type="button"
                                    title="看不清,换一张"
                                    onClick={() =>
                                        router.reload({ only: ["captcha"] })
                                    }
                                >
                                    <img src={captcha} />
                                </a>
                            </Col>
                        </Row>
                        <Row justify={"space-between"} align={"middle"}>
                            <Col span={12}>
                                <Form.Item
                                    name={"remember"}
                                    valuePropName="checked"
                                >
                                    <Checkbox>记住密码</Checkbox>
                                </Form.Item>
                            </Col>
                            <Col span={12} className="text-right">
                                <Form.Item
                                    name={"remember"}
                                    valuePropName="checked"
                                >
                                    <Link
                                        href="/forgot-password"
                                        className="text-blue-500"
                                    >
                                        忘记密码
                                    </Link>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <StyleProvider hashPriority="high">
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        block
                                    >
                                        登录
                                    </Button>
                                </StyleProvider>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </main>
            <Copyright />
        </Watermark>
    );
}
