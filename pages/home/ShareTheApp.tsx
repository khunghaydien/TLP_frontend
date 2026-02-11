import { Button } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
export const ShareTheApp = () => {
    return (
        <>
            <Button onClick={() => {
                console.log("Share the app");
            }}>
                <ShareAltOutlined /> Share the app
            </Button>
        </>
    );
};