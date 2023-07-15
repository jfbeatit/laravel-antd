import React from "react";
import Welcome from "../Components/Welcome";

export default function ({ msg }: { msg: string }) {
    return <Welcome children={<h1>{msg}</h1>} />;
}
