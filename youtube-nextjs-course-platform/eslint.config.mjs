import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

   {
    // files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    rules: {
      "semi": ["error", "always"],
      "no-extra-semi": "error",
      // Garante que o TypeScript também valide o ponto e vírgula
      // "@typescript-eslint/semi": ["error",  "always"]
    },
   },
   
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
