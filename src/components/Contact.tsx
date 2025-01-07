import { useTranslation } from "react-i18next"

import { Container } from "@/components/Container"
import { Title } from "@/components/Title"

export const Contact = () => {
  const { t } = useTranslation()

  return (
    <Container className="mx-auto mb-10 flex flex-col">
      <div className="flex items-center justify-center">
        <form
          action={import.meta.env.VITE_SLUG_FORM_KEY}
          method="POST"
          className="flex w-full flex-col md:w-7/12"
        >
          <Title>{t("contato")}</Title>
          <input
            type="text"
            name="name"
            placeholder={t("inputName") as string}
            className="rounded-md border-2 bg-transparent p-2 focus:outline-none"
            required
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            className="mt-2 rounded-md border-2 bg-transparent p-2 focus:outline-none"
            required
          />

          <textarea
            name="message"
            placeholder={t("inputMessage") as string}
            rows={10}
            className="mt-2 mb-4 rounded-md border-2 bg-transparent p-2 focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="inline-block w-max rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 px-8 py-3 text-center text-base font-medium text-white drop-shadow-md hover:stroke-white"
          >
            {t("submitAbout")}
          </button>
        </form>
      </div>
    </Container>
  )
}
