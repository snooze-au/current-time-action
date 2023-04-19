const core = require("@actions/core");

try {
  const time = new Date().toISOString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
