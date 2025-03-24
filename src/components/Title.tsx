import { ITitle as TitleProps } from "@/domain/title"

export const Title = ({ children, id }: TitleProps) => {
  return (
    <h1
      id={id && id}
      className="mb-5 text-2xl font-bold text-stone-900 underline decoration-4 underline-offset-8 dark:text-white"
    >
      {children}
    </h1>
  )
}
