/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { datoCMSClient } from "../workshops/repository";
import { parseDatoContentToMjml } from "./logic";

const emailCategoryId = 108186454;

export interface Email {
  id: string;
  content: string;
}
export const emailsRepository = {
  async getEmailBySlug(slug: string): Promise<Email> {
    const { data } = await datoCMSClient({
      query: `
      query($slug: String, $emailCategoryId: ItemId){
        post(filter: {slug: {eq: $slug}, category: {eq: $emailCategoryId}}) {
          id
          slug
          content {
            value
          }
        }
      }
      `,
      variables: {
        slug,
        emailCategoryId,
      },
    });

    const contentValue = data?.post?.content?.value;

    const content = reduceArrayToStringRecursively(
      parseDatoContentToMjml(contentValue)
    );

    const hasPost = !!data?.post;

    return hasPost
      ? {
          ...data.post,
          content,
        }
      : null;
  },
};

function reduceArrayToStringRecursively(array: any[]): string {
  return array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return acc + reduceArrayToStringRecursively(value);
    }
    return acc + value;
  }, "");
}
