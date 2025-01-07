import { useTranslation } from "react-i18next"

import { Container } from "@/components/Container"
import { TimelineItem } from "@/components/TimelineItem"
import { Title } from "@/components/Title"
import { timelineDataEn, timelineDataPT } from "@/data/timeline.data"

export const Timeline = () => {
  const { t } = useTranslation()

  return (
    <Container className="my-20 flex flex-col justify-center md:flex-row">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {t("language") == "pt" &&
          timelineDataPT.map((item) => (
            <TimelineItem
              year={item.year}
              title={item.title}
              details={item.details}
              duration={item.duration}
              key={item.title}
            />
          ))}

        {t("language") == "en" &&
          timelineDataEn.map((item) => (
            <TimelineItem
              year={item.year}
              title={item.title}
              details={item.details}
              duration={item.duration}
              key={item.title}
            />
          ))}

        {}
      </div>
    </Container>
  )
}
