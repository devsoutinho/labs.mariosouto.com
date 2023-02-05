import { getDB } from "@src/infra/db";

export async function getStudentCourses() {
  const db = getDB();
  const { data, error } = await db
    .from("student_courses")
    .select("*")
    .eq("student_id",
}
