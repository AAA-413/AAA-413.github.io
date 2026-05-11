import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  Rocket,
  Server,
  Sparkles,
  Waypoints,
} from "lucide-react";

export const profile = {
  name: "辛庆宇",
  title: "AI 大模型研发 / AI 应用开发实习",
  location: "杭州 / 江苏淮安",
  email: "1339260251@qq.com",
  github: "https://github.com/AAA-413",
  resumeUrl: "/resume-xinqingyu-ai.pdf",
  summary:
    "聚焦 Agent、RAG、MCP 与后端工程落地，具备 Java/Spring 生态、FastAPI/React 全栈实践，以及向量检索、多智能体编排和异步任务流水线经验。",
  highlights: ["Agent 编排", "RAG 检索增强", "Spring AI", "FastAPI + React", "pgvector", "Redis Streams"],
};

export const navItems = [
  { label: "项目", href: "#projects" },
  { label: "技能", href: "#skills" },
  { label: "经历", href: "#experience" },
  { label: "联系", href: "#contact" },
];

export const stats = [
  { value: "4", label: "AI/后端核心项目" },
  { value: "80%", label: "配置查询耗时优化" },
  { value: "30%", label: "RAG 召回准确率提升" },
  { value: "15s", label: "模拟面试评估耗时" },
];

export const projects = [
  {
    name: "Interview Agent",
    role: "全栈开发",
    period: "2026.04 - 2026.05",
    description:
      "基于大模型的智能面试辅助平台，覆盖简历解析、模拟面试、知识库 RAG 问答与多智能体编排，为用户提供从简历评估到模拟面试的完整 AI 辅助闭环。",
    tech: ["FastAPI", "LangChain", "PGVector", "Redis Streams", "React", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/AAA-413/interview-agent" }],
    icon: BrainCircuit,
    points: [
      "实现技能方向题目生成与实时追问，通过并发批量调用 LLM 将单轮评估从约 60s 压缩至约 15s。",
      "设计向量相似度 + BM25 + Cross-Encoder 重排序的多通道检索链路，结合 Query Rewrite 提升召回质量。",
      "构建计划 + 执行两阶段智能下载流程，支持网页抓取、GitHub 仓库拉取、质量检查、自动重试和入库索引。",
    ],
  },
  {
    name: "Graph RAG Agent",
    role: "AI 应用开发",
    period: "2026.05",
    description:
      "面向企业知识问答场景的 GraphRAG / RAG Agent 项目，强调结构化知识组织、检索增强生成和可扩展智能体流程。",
    tech: ["Python", "GraphRAG", "RAG", "Agent", "Vector Search"],
    links: [{ label: "GitHub", href: "https://github.com/AAA-413/grap_rag_agent" }],
    icon: Waypoints,
    points: [
      "将图结构知识与向量检索结合，提升复杂业务问题下的上下文组织能力。",
      "围绕企业问答场景设计检索、推理和回答生成流程，适合沉淀为通用知识库能力。",
    ],
  },
  {
    name: "AI Agent 智能助手系统",
    role: "后端开发",
    period: "2025.11 - 2026.01",
    description:
      "面向业务应用系统提效的综合智能体解决方案，将 Advisor、RAG、MCP 等能力抽象入库，支持动态配置、组合和热更新。",
    tech: ["Spring AI", "Spring Boot", "MyBatis", "MySQL", "PGVector", "Redis", "React"],
    icon: Bot,
    points: [
      "通过责任链模式实现 Model、Prompt、MCP、Advisor 动态装配，并发读取多表将 p99 延迟从 48ms 优化至 11ms。",
      "采用策略模式 + 责任链编排任务分析、检索执行、质量监督和总结流程，支持动态多轮执行。",
      "基于 Stdio/SSE 接入 CSDN 自动发文、ELK 日志检索通知等 MCP 工具，扩展智能体业务能力。",
    ],
  },
  {
    name: "商城优选",
    role: "后端开发",
    period: "2025.09 - 2025.11",
    description:
      "基于 Spring Boot 的商城类 App 后端服务，覆盖短信登录、点评、优惠券秒杀、抽奖、附近商户与智能客服等功能。",
    tech: ["Spring Boot", "Spring AI", "MyBatis", "MySQL", "Redis", "RocketMQ"],
    icon: Server,
    points: [
      "使用 RocketMQ 异步处理订单落库，将秒杀响应时间从约 460ms 优化至约 140ms。",
      "使用 Redisson 分布式锁 + 数据库乐观锁控制超卖，并通过缓存空对象、布隆过滤器、互斥锁和预热治理缓存问题。",
      "对接 GLM 大模型，实现意图识别、工具调用与重试收敛的智能客服链路。",
    ],
  },
];

export const skillGroups = [
  {
    title: "AI 应用",
    icon: Sparkles,
    items: ["RAG", "Agent", "MCP", "LangChain", "Spring AI", "Embedding", "Cross-Encoder"],
  },
  {
    title: "后端工程",
    icon: Server,
    items: ["Java", "Spring Boot", "MyBatis", "FastAPI", "接口封装", "分层架构"],
  },
  {
    title: "数据与中间件",
    icon: Database,
    items: ["MySQL", "Redis", "PGVector", "RocketMQ", "索引优化", "缓存治理"],
  },
  {
    title: "工程化",
    icon: Layers3,
    items: ["React", "Docker", "GitHub", "异步任务", "SSE 流式输出", "故障排查"],
  },
];

export const timeline = [
  {
    type: "实习经历",
    title: "熙牛医疗 · Java 开发",
    period: "2026.01 - 2026.04",
    icon: BriefcaseBusiness,
    content:
      "参与浙一 HIS 系统故障治理，负责核心业务模块问题定位与修复；维护用户交付群，沉淀发药、号源池排班、退费处理等排障规范。",
  },
  {
    type: "研究生",
    title: "杭州电子科技大学 · 电子信息工程",
    period: "2024.09 - 2027.06",
    icon: GraduationCap,
    content: "围绕 AI 应用开发、大模型落地、后端系统与工程化能力持续实践。",
  },
  {
    type: "本科",
    title: "常州大学 · 自动化",
    period: "2020.09 - 2024.06",
    icon: GraduationCap,
    content: "具备自动化、算法与工程基础，并在研究生阶段延展到大模型应用与系统开发方向。",
  },
];

export const contactLinks = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "邮箱", href: `mailto:${profile.email}`, icon: Mail },
  { label: "简历 PDF", href: profile.resumeUrl, icon: Rocket },
];
