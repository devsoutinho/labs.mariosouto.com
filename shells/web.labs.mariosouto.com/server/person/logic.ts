import { getDB } from "@src/infra/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getUserFromAccessToken } from "server/auth/logic";

export async function getCurrentPerson(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = getDB("admin");
  const user = await getUserFromAccessToken(req, res);
  const authenticatedEmail = user.email;

  const { data: person, error } = await db
    .from("person")
    .select("id,email")
    .eq("email", authenticatedEmail)
    .limit(1)
    .single();

  if (error) {
    throw new Error("Not able to found person");
  }

  return person;
}
