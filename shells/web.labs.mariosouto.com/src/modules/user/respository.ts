import { getDB } from "@src/infra/db";

export const userRepository = {
  async getUserIdByEmail_god(userEmail: string) {
    console.error("TODO", userEmail);
    return "";
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
