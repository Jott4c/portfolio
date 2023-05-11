export interface IProject {
  id: string;
  description: string;
  name: string;
  html_url: string;
  homepage: string;
  language: string;
}

export interface IProps {
  projects: IProject[];
}
