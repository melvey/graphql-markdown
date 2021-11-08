const { exec } = require("child_process");

module.exports = function cli(args = [], cwd = "/docusaurus2") {
  return new Promise((resolve) => {
    exec(
      `npx docusaurus graphql-to-doc ${args.join(" ")}`,
      { cwd },
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr,
        });
      },
    );
  });
};