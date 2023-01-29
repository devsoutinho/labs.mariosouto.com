import { getDB } from "@src/infra/db";

export interface Course {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const coursesRepositories = {
  async getAllCourses(): Promise<Course[]> {
    const db = getDB("god");
    const { data } = await db.from("courses").select("*");
    const output = data as Course[];
    return output;
  },
  async getCourseBySlug(slug: string): Promise<Course> {
    const db = getDB("god");
    const { data } = await db.from("courses").select("*").eq("slug", slug);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = (data as unknown as any)[0] as Course;
    return output;
  },
};
