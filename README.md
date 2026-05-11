# 辛庆宇个人简历与作品集网站

一个用于求职展示的静态个人网站，内容包括简历 PDF、GitHub 项目、AI Agent/RAG 项目经历、技能栈、实习经历和联系方式。

## 本地运行

```bash
npm install
npm run dev
```

默认访问地址：

```text
http://localhost:5173/
```

## 构建

```bash
npm run build
```

构建产物会生成到 `dist/`。

## GitHub Pages 部署

1. 把当前目录推送到 GitHub 仓库。
2. 在 GitHub 仓库进入 `Settings -> Pages`。
3. Source 选择 `GitHub Actions`。
4. 推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布。

如果仓库是项目页，例如 `AAA-413/resume`，Vite 会在 GitHub Actions 中自动使用 `/resume/` 作为部署路径。  
如果仓库是用户主页，例如 `AAA-413.github.io`，会自动使用 `/`。

## 常用内容修改

- 页面主要内容：`src/data.ts`
- 页面结构：`src/App.tsx`
- 视觉样式：`src/styles.css`
- 简历 PDF：`public/resume-xinqingyu-ai.pdf`
- 首屏视觉图：`public/hero-ai-agent.png`
