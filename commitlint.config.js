// commitlint.config.js
// This configuration file sets up commitlint to enforce conventional commit messages.
// It extends the conventional config and customizes the allowed commit types.

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2, // Level: error
      "always", // Condition: always enforce
      [
        "ci", // Continuous integration changes
        "chore", // Routine tasks
        "docs", // Documentation only changes
        "feat", // New features
        "fix", // Bug fixes
        "perf", // Performance improvements
        "refactor", // Code refactoring
        "revert", // Reverts a previous commit
        "style", // Code style changes (formatting, missing semi colons, etc)
        "assets", // Asset changes (images, fonts, etc)
        "test", // Adding or updating tests
      ],
    ],
  },
};
