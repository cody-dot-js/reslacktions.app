import type { NextApiRequest, NextApiResponse } from "next";

import { execSync } from "child_process";

function gitInfo() {
  return execSync("git rev-parse HEAD").toString().trim();
}

function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ hash: gitInfo() });
}

export default handler;
