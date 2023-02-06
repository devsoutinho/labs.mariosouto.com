import { getDB } from "@src/infra/db";
import { NextApiRequest, NextApiResponse } from "next";

export async function getUserFromAccessToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = getDB();
  const accessToken = getAccessToken(req, res);

  const {
    data: { user },
    error,
  } = await db.auth.getUser(accessToken);

  if (error || !user) {
    throw new Error("Not able to get user from access token");
  }

  return user;
}

export function withUserAuthentication(
  method: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const isUserAuthenticated = await isUserLoggedIn(req, res);
    if (!isUserAuthenticated) {
      res.status(401).end();
    }
    method(req, res);
  };
}

async function isUserLoggedIn(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<boolean> {
  const access_token = getAccessToken(req, res);
  if (!access_token) {
    return false;
  }
  try {
    await getUserFromAccessToken(req, res);
    return true;
  } catch (error) {
    return false;
  }
}

function getAccessToken(req: NextApiRequest, _: NextApiResponse) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    throw new Error("Not able to get access token");
  }
  return req.headers.authorization?.replace(/Bearer /i, "");
}
