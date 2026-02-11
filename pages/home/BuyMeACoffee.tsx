import { Button } from "antd";
import { CoffeeOutlined } from "@ant-design/icons";

export const BuyMeACoffee = () => {
    return (
        <>
            <Button onClick={() => {
                console.log("Buy me a coffee");
            }}>
                <CoffeeOutlined /> Buy me a coffee
            </Button>
        </>
    );
};