import { NextApiRequest, NextApiResponse } from "next";

interface ApiRouteHandler {
  GET: (req: NextApiRequest, res: NextApiResponse) => void;
  POST: (req: NextApiRequest, res: NextApiResponse) => void;
  PUT: (req: NextApiRequest, res: NextApiResponse) => void;
  DELETE: (req: NextApiRequest, res: NextApiResponse) => void;
  PATCH: (req: NextApiRequest, res: NextApiResponse) => void;
}
export function apiRouteHandler(methods: Partial<ApiRouteHandler>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const reqMethod = req.method as keyof ApiRouteHandler;
    const method = methods[reqMethod];
    if (!method) {
      res.status(405).end();
      return;
    }
    await method(req, res);
  };
}
