import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error", // Validates proper usage of hooks
    "react-hooks/exhaustive-deps": "warn" // Warns for missing dependencies in useEffect
  },
};


export default eslintConfig;
