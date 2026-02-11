import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

export const ContactUs = () => {
    return (
        <>
            <Button onClick={() => {
                console.log("Contact us");
            }}>
                <MailOutlined /> Contact us
            </Button>
        </>
    );
};