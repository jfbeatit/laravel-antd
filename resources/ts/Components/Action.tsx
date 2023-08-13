import { Modal } from "antd";
import { useState } from "react";

const Action: React.FC<{
    mode?: ["modal", "drawer"][number];
    command: React.ReactNode;
    children?: React.ReactNode;
    title?: string;
    modal?: { onConfirm?: () => void };
}> = ({ mode, command, children, title, modal }) => {
    const [visible, setVisible] = useState(false);

    const onClick = () => {
        if (modal?.onConfirm) {
            Modal.confirm({
                title: "确定要执行该操作吗?",
                onOk() {
                    modal.onConfirm();
                },
                okType: "danger",
                okText: "确定",
                cancelText: "取消",
            });
        } else {
            setVisible(true);
        }
    };

    const isShowModal = () => {
        return (!mode || mode === "modal") && !modal?.onConfirm;
    };

    return (
        <>
            <div onClick={onClick}>{command}</div>
            {isShowModal() && (
                <Modal
                    open={visible}
                    title={title}
                    onCancel={() => setVisible(false)}
                    footer={null}
                >
                    {children ?? null}
                </Modal>
            )}
        </>
    );
};

export default Action;
