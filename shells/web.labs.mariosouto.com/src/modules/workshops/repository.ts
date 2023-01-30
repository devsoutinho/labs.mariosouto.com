export interface Workshop {
  id: string;
  title: string;
  href: string;
  coverUrl: string;
  excerpt: string;
  slug?: string;
}

export const workshopsRepository = {
  async getWorkshops() {
    const item: Workshop = {
      id: "0",
      slug: "git-e-github-para-sobrevivencia",
      title: "Git e GitHub para Sobrevivência",
      href: "/workshops/git-e-github-para-sobrevivencia",
      coverUrl: "https://i.ytimg.com/vi/BAmvmaKQklQ/maxresdefault.jpg",
      // lorem 200 chars
      excerpt:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod, lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    };
    // https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
    return [
      {
        ...item,
        id: "1",
      },
      {
        ...item,
        id: "2",
      },
      {
        ...item,
        id: "3",
      },
    ];
  },
};
