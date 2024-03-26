import { Moon, PencilRuler, SunMedium } from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  logo: PencilRuler,
  sun: SunMedium,
  moon: Moon,
}

export const Icons: IconsType = icons
