import { getDB } from "@src/infra/db";

export const userRepository = {
  async getUserEmail() {
    const db = getDB();

    const { data } = await db.auth.getUser();

    // eslint-disable-next-line no-console
    console.log(data);

    return data.user?.email;
  },
};
