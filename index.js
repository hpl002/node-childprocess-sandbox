const { fork } = require("child_process");
const logger = require("./logger");
const forked = fork("../sub", { cwd: "./otherDir" });

const log = () => {
  const content = logger();
  const parsed = JSON.parse(content);
  console.log(parsed.message);
};

log();

forked.on("message", (m) => {
  console.log(m);
});

forked.send({ hello: "world" });

log();
