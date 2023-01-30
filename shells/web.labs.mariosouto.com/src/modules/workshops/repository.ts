export interface Workshop {
  id: string;
  title: string;
  href: string;
  coverUrl: string;
}

export const workshopsRepository = {
  async getWorkshops() {
    const item: Workshop = {
      id: "0",
      title: "Git e GitHub para Sobrevivência",
      href: "/workshops/git-e-github-para-sobrevivencia",
      coverUrl: "https://i.ytimg.com/vi/BAmvmaKQklQ/maxresdefault.jpg",
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
