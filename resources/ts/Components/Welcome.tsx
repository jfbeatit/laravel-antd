import React from "react";

export default function ({
    children = "Hello World",
}: {
    children?: React.ReactNode;
}) {
    return <div>{children}</div>;
}
