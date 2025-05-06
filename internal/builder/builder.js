// @ts-check
import path from "node:path";
import fs from "node:fs";
import esbuid from "esbuild";
import tsup from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

/**
 * @param {string} relativePath
 */
export async function build(relativePath) {
  const packageJsonPath = path.resolve(relativePath, "package.json");
  if (!fs.existsSync(packageJsonPath)) {
    console.error(`No package.json found at ${packageJsonPath}`);
    return;
  }


  const packageJsonContent = await fs.promises
    .readFile(packageJsonPath, "utf-8")
    .catch(() => {
      console.error(`Error reading package.json at ${packageJsonPath}`);
      process.exit(1);
    });

  let packageJson;
  try {
    packageJson = JSON.parse(packageJsonContent);
  } catch {
    console.error(`Error parsing package.json at ${packageJsonPath}`);
    process.exit(1);
  }

  const tasks = [];
  const files = ["index.ts"];
  const entryPoints = files.map((file) => `${relativePath || "."}/src/${file}`);

  const esbuildConfig = {
    entryPoints: entryPoints,
    bundle: true,
    format: "cjs",
    plugins: [sassPlugin()],
    target: "es2022",
    outdir: "dist",
    // minify: true,
  };
  tasks.push(
    // @ts-ignore
    esbuid.build(esbuildConfig).then(() => console.log("ESBuild done!"))
  );
  tasks.push(
    esbuid
      .build({
        ...esbuildConfig,
        format: "esm",
        outExtension: { ".js": ".mjs" },
      })
      .then(() => console.log("ESBuild done!"))
  );
  tasks.push(
    tsup
      .build({
        entry: entryPoints,
        format: ["cjs", "esm"],
        dts: { only: true },
        outDir: "dist",
        silent: true,
      })
      .then(() => console.log("Tsup done!"))
  );

  await Promise.all(tasks);
}
