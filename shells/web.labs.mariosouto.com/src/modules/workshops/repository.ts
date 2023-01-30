interface DatoCMSClientParams {
  query: string;
}

const isPreview = process.env.NODE_ENV !== "production";

function datoCMSClient({ query }: DatoCMSClientParams, preview = isPreview) {
  const URL = preview
    ? "https://graphql.datocms.com/preview"
    : "https://graphql.datocms.com/";

  const Authorization = `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_KEY}`;

  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization,
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
  active: boolean;
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
          active
          premium
        }
      }
      `,
    });

    return data?.allWorkshops || [];
  },
};
