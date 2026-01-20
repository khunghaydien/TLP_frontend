"use client";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, Dropdown, Space } from "antd";
import { LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

export const ProfileDropdown = () => {
    const { isAuthenticated, user } = useAuth();
    if (!isAuthenticated) {
        return null;
    }
    const logout = () => {
        console.log("logout");
    }
    const settings = () => {
        console.log("settings");
    }
    const profile = () => {
        console.log("profile");
    }
    return (
        <Dropdown
            trigger={["click"]}
            placement="bottomRight"
            styles={{
                root: {
                    width: 200,
                },
            }}
            menu={{
                items: [
                    {
                        key: "profile",
                        label: "Profile",
                        icon: <UserOutlined />,
                        onClick: () => {
                            profile();
                        }
                    },
                    {
                        key: "settings",
                        label: "Settings",
                        icon: <SettingOutlined />,
                        onClick: () => {
                            settings();
                        }
                    },
                    {
                        key: "divider",
                        type: "divider",
                    },
                    {
                        key: "logout",
                        label: "Logout",
                        danger: true,
                        icon: <LogoutOutlined />,
                        onClick: () => {
                            logout();
                        }
                    },

                ]
            }}>
            <Space align="center" size={16}>
                <Avatar src={user.avatar} />
                <span>{user.name}</span>
            </Space>
        </Dropdown>
    )
}