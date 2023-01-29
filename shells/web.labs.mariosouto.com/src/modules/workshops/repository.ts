import { getDB } from "@src/infra/db";

export interface Workshop {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const workshopsRepository = {
  async getAll(): Promise<Workshop[]> {
    const db = getDB("god");
    const { data } = await db.from("courses").select("*");
    const output = data as Workshop[];
    return output;
  },
  async getBySlug(slug: string): Promise<Workshop> {
    const db = getDB("god");
    const { data } = await db.from("courses").select("*").eq("slug", slug);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = (data as unknown as any)[0] as Workshop;
    return output;
  },
};
