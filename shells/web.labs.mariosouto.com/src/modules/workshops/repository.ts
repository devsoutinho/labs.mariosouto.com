import { getDB } from "@src/infra/db";

export interface Workshop {
  id: string;
  name: string;
  description: string;
  slug: string;
  stripe_price_id: string;
}

const TABLE_NAME = "course";
export const workshopsRepository = {
  async isUserOwnerOfWorkshop(
    workshopId: string,
    userEmail: string
  ): Promise<boolean> {
    const db = getDB();
    const { data, error } = await db
      .from("course_student")
      .select("*")
      .eq("course_id", workshopId)
      .eq("student_email", userEmail);

    // eslint-disable-next-line no-console
    console.log({ data, error });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = (data as unknown as any)[0] as Workshop;
    return !!output;
  },
  async getWorkshopByStripePriceId(
    stripePriceId: string
  ): Promise<Workshop | null> {
    const db = getDB("god");
    const { data } = await db
      .from(TABLE_NAME)
      .select("*")
      .eq("stripe_price_id", stripePriceId);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = (data as unknown as any)[0] as Workshop;
    return output;
  },
  async registerStudent(
    workshopId: string,
    studentEmail: string
  ): Promise<void> {
    // eslint-disable-next-line no-console
    console.log({
      workshopId,
      studentEmail,
    });
    const db = getDB("god");
    await db.from("course_student").insert({
      course_id: workshopId,
      student_email: studentEmail,
    });
  },
  async getAll(): Promise<Workshop[]> {
    const db = getDB("god");
    const { data } = await db.from(TABLE_NAME).select("*");
    const output = data as Workshop[];
    return output;
  },
  async getBySlug(slug: string): Promise<Workshop> {
    const db = getDB("god");
    const { data } = await db.from(TABLE_NAME).select("*").eq("slug", slug);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = (data as unknown as any)[0] as Workshop;
    return output;
  },
};
