import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { ProfileDropdown } from "@/components/layout/ProfileDropdown";
import { Divider } from "antd";
import { useTranslations } from "next-intl";

export const HomePageHeader = () => {
    const t = useTranslations();
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto py-4 w-full">
            <div>
                <h1>{t('app_title')}</h1>
            </div>
            <div className="flex justify-end items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
                <Divider orientation="vertical" />
                <ProfileDropdown />
            </div>
        </div>
    );
}
