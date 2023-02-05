import type { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "@src/infra/db";

function getAccessToken(req: NextApiRequest, _: NextApiResponse) {
  return req.headers.authorization?.replace(/Bearer /i, "");
}

async function isUserLoggedIn(req: NextApiRequest, _: NextApiResponse) {
  const access_token = getAccessToken(req, _);
  const db = getDB();
  const {
    data: { user },
  } = await db.auth.getUser(access_token);
  return user?.email;
}

async function getCurrentPersonId(_: NextApiRequest, __: NextApiResponse) {
  const db = getDB("admin");
  const { data: person } = await db
    .from("person")
    .select("id,email")
    // TODO: Get email from auth
    .eq("email", "mariosoutoskn@gmail.com")
    .limit(1)
    .single();

  return person?.id;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO: Validate request method
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  // TODO: Validate authentication
  const isUserAuthenticated = await isUserLoggedIn(req, res);
  if (!isUserAuthenticated) {
    res.status(401).end();
  }

  // ==========================================
  // ==========================================
  // Logic itself
  // ==========================================
  // ==========================================
  const personId = await getCurrentPersonId(req, res);

  const db = getDB("admin");
  const { data: studentCourses } = await db
    .from("course_student")
    .select("*")
    .eq("person_id", personId);

  res.status(200).json({
    person: {
      id: personId,
    },
    courses: studentCourses,
  });
}
