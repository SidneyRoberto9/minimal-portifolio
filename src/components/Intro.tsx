import { useTranslation } from "react-i18next"

import { Container } from "@/components/Container"

export const Intro = () => {
  const { t } = useTranslation()

  return (
    <Container
      reverse
      className="flex flex-col items-center justify-center pt-20 pb-6 text-center"
    >
      <h1 className="mb-1 text-4xl font-bold dark:text-white md:mb-3 md:text-7xl">
        Sidney Roberto
      </h1>
      <p className="mb-3 text-base font-medium md:text-xl">{t("subtitle")}</p>
      <p className="mb-6 max-w-xl text-sm font-bold">{t("about")}</p>
    </Container>
  )
}
