import { Globe, Moon, Sun } from "phosphor-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Intro } from "@/components/Intro"
import { Portfolio } from "@/components/Portfolio"
import { Provider } from "@/components/Provider"
import { Timeline } from "@/components/Timeline"

export function App() {
  const [theme, setTheme] = useState<string>("")
  const [language, setLanguage] = useState<string>("pt")
  const { i18n } = useTranslation()

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleSwitchLanguage = () => {
    i18n.changeLanguage(language == "pt" ? "en" : "pt")
    setLanguage(language == "pt" ? "en" : "pt")
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <Provider>
      <button
        type="button"
        onClick={handleSwitchTheme}
        className="fixed right-20 top-4 z-10 rounded-md bg-violet-300 p-1 text-lg dark:bg-orange-300"
      >
        {theme === "dark" ? (
          <Sun size={25} color="#000" />
        ) : (
          <Moon size={25} color="#fff" />
        )}
      </button>

      <button
        type="button"
        onClick={handleSwitchLanguage}
        className="fixed right-32 top-4 z-10 h-8 w-8 rounded-md bg-violet-300 p-1 text-lg dark:bg-orange-300"
      >
        <Globe size={25} color={theme === "dark" ? "#000" : "#fff"} />
      </button>

      <div className="min-h-screen bg-white font-inter text-stone-900 dark:bg-stone-900 dark:text-stone-300">
        <div className="mx-auto w-11/12 max-w-5xl">
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </Provider>
  )
}
