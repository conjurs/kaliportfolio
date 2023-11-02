interface Project {
  name: string;
  link: string;
  category: "frontend" | "backend" | "fullstack" | "other";
}

export const projects: Project[] = [
  {
    name: "Remake of Twitter",
    link: "https://github.com/parnojaaxel",
    category: "fullstack",
  },
  {
    name: "PHP Book API",
    link: "https://github.com/parnojaaxel/bookapi",
    category: "other",
  }
];
