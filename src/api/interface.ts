export interface Word {
    name: string,
    translation: string,
    logo: string,
    clicks: number,
    category: string,
    correct: number,
    wrong: number,
    percent: number,
    sound?: string
}

export interface Category {
    logo: string,
    name: string,
    length: number,
    words?: Word[]
}

export interface Auth {
  name: string,
  password: string
}
