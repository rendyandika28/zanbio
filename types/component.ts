export interface Benefit {
  title: string;
  short_description: string;
  illustration: string;
  customClassName?: string;
  illustrationClassName?: string;
}

export interface MetaBenefits {
  title: string
  subtitle: string
  contents: Benefit[]
}
