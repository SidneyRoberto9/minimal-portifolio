import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ContainerProps {
  className?: string
  delay?: number
  reverse?: boolean
  children: ReactNode
}

export const Container = ({
  children,
  className,
  delay = 0.2,
  reverse,
}: ContainerProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
