interface DatoCMSClientParams {
  query: string;
}
function datoCMSClient({ query }: DatoCMSClientParams) {
  return fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_KEY}`,
    },
    body: JSON.stringify({
      query,
    }),
  }).then(async (res) => {
    if (res.ok) {
      return res.json();
    }

    const resText = await res.text();
    throw new Error(resText);
  });
}

export interface Workshop {
  id: string;
  title: string;
  slug?: string;
  excerpt: string;
  externalUrl?: string;
  image: {
    url: string;
    alt: string;
  };
  premium: boolean;
}

export const workshopsRepository = {
  async getWorkshops() {
    const { data } = await datoCMSClient({
      query: `
      {
        allWorkshops {
          id
          title
          slug
          excerpt
          externalUrl
          image {
            url
            alt
          }
          premium
        }
      }
      `,
    });

    return data?.allWorkshops || [];
  },
};
