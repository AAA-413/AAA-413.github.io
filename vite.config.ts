import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0];
const isUserPage = repository && owner && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS && repository && !isUserPage ? `/${repository}/` : "/",
});
