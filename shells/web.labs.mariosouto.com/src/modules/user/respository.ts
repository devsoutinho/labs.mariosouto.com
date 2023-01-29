/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDB } from "@src/infra/db";

export const userRepository = {
  async getUserIdByEmail_god(userEmail: string) {
    const db = getDB("god");
    const { data } = await db.from("users").select("id").eq("email", userEmail);

    return (data as unknown as any)[0]?.id as string;
  },
  async getUserIdFromSession() {
    const db = getDB();
    const { data } = await db.auth.getUser();

    return data.user?.id as string;
  },
  async getUserEmail() {
    const db = getDB();

    const { data } = await db.auth.getUser();

    // eslint-disable-next-line no-console
    console.log(data);

    return data.user?.email;
  },
};
