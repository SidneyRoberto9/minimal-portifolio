import { useTranslation } from 'react-i18next';
import { Fragment, useState } from 'react';
import { Sun, Moon, Globe, Github } from 'lucide-react';

import { Theme, useTheme } from '@/components/ThemeProvider';

export const Header = () => {
  const [language, setLanguage] = useState<string>("pt")
  const { setTheme, theme } = useTheme()
  const { i18n } = useTranslation()

  const handleSwitchTheme = () => {
    let selectedTheme: Theme = theme

    if (theme == "light") {
      selectedTheme = "dark"
    } else if (theme == "dark") {
      selectedTheme = "light"
    }

    setTheme(selectedTheme)
  }

  const handleSwitchLanguage = () => {
    i18n.changeLanguage(language == "pt" ? "en" : "pt")
    setLanguage(language == "pt" ? "en" : "pt")
  }

  const handleGithubNavigate = () =>
    window.open("https://github.com/SidneyRoberto9", "_blank")

  return (
    <Fragment>
      <button
        type="button"
        onClick={handleGithubNavigate}
        className="fixed right-32 top-4 z-10 rounded-md bg-violet-300 p-1 text-lg dark:bg-orange-300"
      >
        <Github size={25} color={theme === "dark" ? "#000" : "#fff"} />
      </button>

      <button
        type="button"
        onClick={handleSwitchLanguage}
        className="fixed right-20 top-4 z-10 h-8 w-8 rounded-md bg-violet-300 p-1 text-lg dark:bg-orange-300"
      >
        <Globe size={25} color={theme === "dark" ? "#000" : "#fff"} />
      </button>

      <button
        type="button"
        onClick={handleSwitchTheme}
        className="fixed right-8 top-4 z-10 rounded-md bg-violet-300 p-1 text-lg dark:bg-orange-300"
      >
        {theme === "dark" ? (
          <Sun size={25} color="#000" />
        ) : (
          <Moon size={25} color="#fff" />
        )}
      </button>
    </Fragment>
  )
}
