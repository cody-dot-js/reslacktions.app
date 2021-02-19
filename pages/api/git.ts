import type { NextApiRequest, NextApiResponse } from "next";

// import { execSync } from "child_process";
import simpleGit from "simple-git";

const git = simpleGit();

// function gitInfo() {
//   return execSync("git rev-parse HEAD").toString().trim();
// }

function handler(req: NextApiRequest, res: NextApiResponse) {
  const hash = git.revparse("HEAD");

  return res.status(200).json({ hash });
}

export default handler;
