type Project = {
  id: number;
  title: string;
  desc: string;
  img: string[];
  techStack?: { path: string; desc: string }[];
  github: string;
  site?: string;
};

export { type Project };
