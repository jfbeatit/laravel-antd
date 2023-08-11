import React, { useEffect, useState } from "react";
import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Watermark,
    message,
} from "antd";
import { Link, router, usePage } from "@inertiajs/react";
import { StyleProvider } from "@ant-design/cssinjs";
import { LockOutlined, SafetyOutlined, UserOutlined } from "@ant-design/icons";
import Copyright from "../../../Components/Copyright";

export default function ({ captcha }: { captcha: string }): React.ReactElement {
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const { appName, errors } = usePage<{
        appName: string;
        errors: { email?: string; captcha?: string };
    }>().props;

    const login = (data: Record<string, string | boolean>) => {
        router.post("/admin/auth/login", data, {
            onStart: () => setLoading(true),
            onFinish: () => setTimeout(() => setLoading(false), 2000),
        });
    };

    useEffect(() => {
        errors.captcha && messageApi.error('验证码错误');
        errors.email && messageApi.error(errors.email);
    }, [errors]);

    return (
        <Watermark content={appName}>
            {contextHolder}
            <main className="w-screen h-screen flex justify-center items-center">
                <div className="w-4/12 h-3/5 bg-gray-100 shadow-2xl rounded-lg opacity-70 hover:opacity-90 flex flex-col items-center justify-center">
                    <h1 className="text-3xl">{appName}</h1>
                    <Form className="mt-8 w-10/12" onFinish={login}>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    name={"email"}
                                    rules={[
                                        {
                                            required: true,
                                            message: "请输入用户名",
                                        },
                                        {
                                            type: "email",
                                            message: "请输入正确的邮箱地址",
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
                                        loading={loading}
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
