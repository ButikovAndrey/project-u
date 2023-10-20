import classNames from "classnames";
import { useTranslation } from "react-i18next";
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;

}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation('errPages');

    return (
      <div className={classNames(styles.NotFoundPage, [className])}>
        {t('Page Not Found')}
      </div>
    );
};
