import { useTranslation } from "react-i18next"

export function More() {
  const { t } = useTranslation()

  return (
    <div className="my-8 mx-auto flex h-4 w-64 items-center justify-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-stone-900/30">
      <a
        href="https://github.com/SidneyRoberto9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block h-10 rounded-md border-2 border-stone-900 px-2 py-1 font-semibold dark:border-white"
      >
        {t("next")}
      </a>
    </div>
  )
}
