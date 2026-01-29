export interface Technologies {
  name: string;
  icon: string;
}

export interface Projects {
  name: string;
  description: string[] | string
  technologies: Technologies[];
  githubUrl: string;
  deployedUrl: string;
  image: string;
  post: string;
}
