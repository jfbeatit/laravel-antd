import { usePage } from "@inertiajs/react";
import { Typography } from "antd";

const Copyright: React.FC = () => {
    const { appName } = usePage<{ appName: string }>().props;

    return (
        <footer className="w-full h-10 absolute bottom-3 text-center">
            <Typography.Text type="secondary">
                Copyright © 2023 {appName} all rights reserved
            </Typography.Text>
        </footer>
    );
};

export default Copyright;
