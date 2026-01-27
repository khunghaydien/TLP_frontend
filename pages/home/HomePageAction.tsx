"use client";

import { CoffeeOutlined, PlusOutlined, SendOutlined, FileOutlined, MailOutlined, FacebookOutlined } from "@ant-design/icons";
import { Button, type ButtonProps } from "antd";

const actions = [
    {
        key: "create-a-new-group",
        type: "primary",
        label: "Create a new group",
        icon: <PlusOutlined />,
        onClick: () => {
            console.log("Create a new group");
        },
    },
    {
        key: "buy-me-a-coffee",
        type: "default",
        label: "Buy me a coffee",
        icon: <CoffeeOutlined />,
        onClick: () => {
            console.log("Buy me a coffee");
        },
    },
    {
        key: "share-the-app",
        type: "default",
        label: "Share the app",
        icon: <SendOutlined />,
        onClick: () => {
            console.log("Share the app");
        },
    },
    {
        key: "privacy-policy",
        type: "default",
        label: "Privacy policy",
        icon: <FileOutlined />,
        onClick: () => {
            console.log("Privacy policy");
        },
    },
    {
        key: "contact-us",
        type: "default",
        label: "Contact us",
        icon: <MailOutlined />,
        onClick: () => {
            console.log("Contact us");
        },
    },
    {
        key: "facebook-group",
        type: "default",
        label: "Facebook group",
        icon: <FacebookOutlined />,
        onClick: () => {
            console.log("Facebook group");
        },
    },
];

export const HomePageAction = () => {
    return (
        <div className="flex justify-center items-center gap-2">
            {actions.map((action) => (
                <Button
                    key={action.key}
                    type={action.type as ButtonProps["type"]}
                    icon={action.icon}
                    onClick={action.onClick}
                >
                    {action.label}
                </Button>
            ))}
        </div>
    );
};

