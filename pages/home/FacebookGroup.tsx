import { Button } from "antd";
import { FacebookOutlined } from "@ant-design/icons";

export const FacebookGroup = () => {
    return (
        <>
            <Button onClick={() => {
                console.log("Facebook Group");
            }}>
                <FacebookOutlined /> Facebook Group
            </Button>
        </>
    );
};