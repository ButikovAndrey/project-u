import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const AboutPage = () => {
    const { t } = useTranslation('navBar');
    useEffect(() => {
        throw new Error();
    }, []);
    return (
        <h1>{t('About Page')}</h1>
    );
};

export default AboutPage;
