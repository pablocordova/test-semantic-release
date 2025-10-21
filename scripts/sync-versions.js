import fs from "fs";

const paths = [
  "backend/package.json",
  "backend/package-lock.json",
  "frontend/package.json",
  "frontend/package-lock.json",
];

const rootPkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const version = rootPkg.version;

for (const file of paths) {
  if (fs.existsSync(file)) {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    data.version = version;
    fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
    console.log(`✔ Updated ${file} to version ${version}`);
  }
}
