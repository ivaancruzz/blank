export type Experience = {
  name: string
  logo: Logo
  description: string
}

export type Project = {
  name: string
  subtitle?: string
  logo: Logo
  images: string[]
  state: string
  technologies: string[]
  description: string
}

export type Opinion = {
  picture: string
  name: string
  linkedin: string
  description: Lang
}

type Logo = {
  url: string
  alt: string
}

type Lang = {
  es: string
  en: string
}
