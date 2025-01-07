import { IPortfolioItem as PortfolioItemProps } from "@/interfaces/typesPortfolio"

export const PortfolioItem = ({
  title,
  imgUrl,
  stack,
  link,
}: PortfolioItemProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden rounded-md border-2 border-stone-900 transition duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-stone-900/30 dark:border-white"
    >
      <div className="overflow-hidden border-b border-stone-900 px-1">
        <img
          key={title}
          src={imgUrl}
          alt="portfolio"
          className="h-36 max-h-36 w-full scale-125 cursor-pointer object-cover object-top md:h-48 md:max-h-48"
        />
      </div>
      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold dark:text-white md:mb-3 md:text-xl">
          {title}
        </h3>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs dark:text-white md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block rounded-md border-2 border-stone-900 px-2 py-1 font-semibold dark:border-white"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  )
}
