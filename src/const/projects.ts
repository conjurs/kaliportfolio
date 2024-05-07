interface Project {
  name: string;
  link: string;
  category: "frontend" | "backend" | "fullstack" | "other";
}

export const projects: Project[] = [
  {
    name: "Remake of Twitter",
    link: "https://github.com/conjurs",
    category: "fullstack",
  },
  {
    name: "PHP Book API",
    link: "https://github.com/conjurs/bookapi",
    category: "other",
  }
];
