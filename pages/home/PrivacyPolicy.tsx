import { Button } from "antd";
import { FileOutlined } from "@ant-design/icons";
export const PrivacyPolicy = () => {
    return (
        <>
            <Button onClick={() => {
                console.log("Privacy Policy");
            }}>
                <FileOutlined /> Privacy Policy
            </Button>
        </>
    );
};