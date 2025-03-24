import { Fragment } from 'react';

import { Timeline } from '@/components/Timeline';
import { Portfolio } from '@/components/Portfolio';
import { Intro } from '@/components/Intro';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';

export function App() {
  return (
    <Fragment>
      <Header />
      <div className="min-h-screen bg-white font-inter text-stone-900 dark:bg-stone-900 dark:text-stone-300">
        <div className="mx-auto w-11/12 max-w-6xl">
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </Fragment>
  )
}
