import { getDB } from "@src/infra/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getCurrentPerson } from "server/person/logic";

export async function getStudentCourses(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const person = await getCurrentPerson(req, res);

  const db = getDB("admin");
  const { data: studentCourses } = await db
    .from("course_student")
    .select("*")
    .eq("person_id", person.id);

  res.status(200).json({
    courses: studentCourses,
  });
}
