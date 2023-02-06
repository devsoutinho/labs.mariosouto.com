import { withUserAuthentication } from "server/auth/logic";
import { apiRouteHandler } from "server/infra/apiRouteHandler/apiRouteHandler";
import { getStudentCourses } from "server/students/controller";

export default apiRouteHandler({
  GET: withUserAuthentication(getStudentCourses),
});
