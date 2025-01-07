import "@/styles/tailwind.css"

import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "@/App"
import i18next from "@/i18n"

i18next.t("my.key")

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
