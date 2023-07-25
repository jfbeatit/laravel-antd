import React from "react";

export default function ({ msg }: { msg: string }) {
    return (
        <main className="w-screen h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 flex justify-center items-center">
            <h1 className="text-8xl text-red-400 font-serif font-extrabold">
                {msg}
            </h1>
        </main>
    );
}
