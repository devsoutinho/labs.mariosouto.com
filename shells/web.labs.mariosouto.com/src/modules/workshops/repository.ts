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
