"use client";

import { CreateNewGroup } from "./CreateNewGroup";
import { BuyMeACoffee } from "./BuyMeACoffee";
import { ShareTheApp } from "./ShareTheApp";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { ContactUs } from "./ContactUs";
import { FacebookGroup } from "./FacebookGroup";

const actions = [
    {
        key: "create-a-new-group",
        component: CreateNewGroup,
    },
    {
        key: "buy-me-a-coffee",
        component: BuyMeACoffee,
    },
    {
        key: "share-the-app",
        component: ShareTheApp,
    },
    {
        key: "privacy-policy",
        component: PrivacyPolicy,
    },
    {
        key: "contact-us",
        component: ContactUs,
    },
    {
        key: "facebook-group",
        component: FacebookGroup,
    },
];

export const HomePageAction = () => {
    return (
        <div className="flex justify-center items-center gap-2">
            {actions.map((action) => (
                <action.component key={action.key} />
            ))}
        </div>
    );
};

