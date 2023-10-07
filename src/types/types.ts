export type Experience = {
  name: string
  logo: Logo
  description: string
}

export type Project = {
  path: string
  name: string
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
  description: string
}

type Logo = {
  url: string
  alt: string
}
