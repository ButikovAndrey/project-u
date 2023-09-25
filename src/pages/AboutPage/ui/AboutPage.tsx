import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation('navBar');

    return (
        <h1>{t('About Page')}</h1>
    );
};

export default AboutPage;