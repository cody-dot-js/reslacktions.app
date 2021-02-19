import type { NextApiRequest, NextApiResponse } from "next";

// import { execSync } from "child_process";
// import simpleGit from "simple-git";

// const git = simpleGit();
import Git from "nodegit";

// function gitInfo() {
//   return execSync("git rev-parse HEAD").toString().trim();
// }

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Git.Clone("https://github.com/dev-cprice/", "./tmp")
  const repo = await Git.Clone.clone("https://github.com/dev-cprice/reslacktions.app", "./tmp");
  const hash = await Git.Revparse.single(repo, "HEAD");
  return res.status(200).json({ hash });
}

export default handler;
