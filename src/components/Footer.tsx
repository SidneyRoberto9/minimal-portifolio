import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className="py-5 text-center">
      <p className="mt-2 text-sm opacity-50">
        &copy; {new Date().getFullYear()} Sidney Roberto. {t("footer")}.
      </p>
    </div>
  )
}
