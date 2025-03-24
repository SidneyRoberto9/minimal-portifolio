import '@/styles/tailwind.css';

import ReactDOM from 'react-dom/client';
import React from 'react';

import { App } from '@/App';
import i18next from '@/i18n';
import { ThemeProvider } from '@/components/ThemeProvider';

i18next.t("my.key")

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="sid/port-theming">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
