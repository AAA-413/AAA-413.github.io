import { ArrowUpRight, Bot, Download, Github, Mail, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { profile } from "./data";

type ChatAction = {
  label: string;
  type: "link" | "scroll" | "email";
  target: string;
};

type ChatMessage = {
  id: number;
  role: "bot" | "user";
  text: string;
  actions?: ChatAction[];
};

const quickPrompts = ["介绍面试 Agent", "你的 RAG 能力", "打开 GitHub", "下载简历", "联系方式"];

const initialMessage: ChatMessage = {
  id: 1,
  role: "bot",
  text:
    "你好呀，我是辛庆宇的专属简历机器人。先悄悄说明一下：我没有接入外部大模型 API，是一个纯前端意图识别小助手，所以回答会围绕页面里的项目和简历信息展开。我可以帮你介绍项目、梳理技术栈、查看实习经历，也可以一键打开 GitHub、项目区和简历 PDF。",
  actions: [
    { label: "查看项目", type: "scroll", target: "#projects" },
    { label: "打开简历", type: "link", target: profile.resumeUrl },
  ],
};

function normalize(input: string) {
  return input.trim().toLowerCase();
}

function includesAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

function getReply(input: string): Omit<ChatMessage, "id" | "role"> {
  const text = normalize(input);

  if (!text) {
    return { text: "可以直接输入问题，或者点下面的快捷问题。我比较擅长回答辛庆宇的项目、技能栈、实习经历和联系方式。" };
  }

  if (includesAny(text, ["github", "仓库", "代码", "开源", "主页"])) {
    return {
      text: "辛庆宇的 GitHub 主页是 AAA-413。当前站点重点展示了 interview-agent 和 grap_rag_agent 两个公开项目。",
      actions: [
        { label: "打开 GitHub", type: "link", target: profile.github },
        { label: "看项目区", type: "scroll", target: "#projects" },
      ],
    };
  }

  if (includesAny(text, ["简历", "pdf", "下载", "resume"])) {
    return {
      text: "可以打开或下载 PDF 简历。网页上为了隐私只展示邮箱，手机号保留在简历 PDF 中。",
      actions: [{ label: "打开简历 PDF", type: "link", target: profile.resumeUrl }],
    };
  }

  if (includesAny(text, ["邮箱", "联系", "电话", "投递", "沟通"])) {
    return {
      text: `公开联系方式建议优先使用邮箱：${profile.email}。也可以通过 GitHub 查看项目代码和近期提交。`,
      actions: [
        { label: "发送邮件", type: "email", target: `mailto:${profile.email}` },
        { label: "打开 GitHub", type: "link", target: profile.github },
      ],
    };
  }

  if (includesAny(text, ["面试", "interview", "模拟", "追问", "评估"])) {
    return {
      text:
        "Interview Agent 是一个智能面试辅助平台，覆盖简历解析、模拟面试、RAG 知识库问答和多智能体编排。亮点包括并发 LLM 调用、结构化评估报告、多路召回重排序，以及计划 + 执行两阶段智能下载流程。",
      actions: [
        { label: "项目代码", type: "link", target: "https://github.com/AAA-413/interview-agent" },
        { label: "页面项目区", type: "scroll", target: "#projects" },
      ],
    };
  }

  if (includesAny(text, ["rag", "向量", "检索", "pgvector", "知识库", "grap", "graph"])) {
    return {
      text:
        "他的 RAG 实践包含向量检索、BM25、多路召回、Cross-Encoder 重排序、Query Rewrite、pgvector 入库和 SSE 流式输出。Graph RAG Agent 更偏企业知识问答，强调图结构知识组织和复杂问题上下文构建。",
      actions: [
        { label: "Graph RAG 仓库", type: "link", target: "https://github.com/AAA-413/grap_rag_agent" },
        { label: "查看技能", type: "scroll", target: "#skills" },
      ],
    };
  }

  if (includesAny(text, ["agent", "mcp", "spring ai", "智能体", "advisor", "工具"])) {
    return {
      text:
        "他的 Agent 方向主要集中在动态组件装配、MCP 工具接入、任务分析到质量监督的执行链路，以及 RAG 与业务系统的结合。技术上用过 Spring AI、LangChain、FastAPI、PGVector、Redis 等。",
      actions: [{ label: "查看技能栈", type: "scroll", target: "#skills" }],
    };
  }

  if (includesAny(text, ["技能", "技术栈", "会什么", "java", "spring", "fastapi", "redis", "mysql"])) {
    return {
      text:
        "核心技术栈可以概括为四块：AI 应用层的 RAG、Agent、MCP、LangChain、Spring AI；后端层的 Java、Spring Boot、MyBatis、FastAPI；数据层的 MySQL、Redis、PGVector、RocketMQ；工程化层的 React、Docker、异步任务和故障排查。",
      actions: [{ label: "跳到技能区", type: "scroll", target: "#skills" }],
    };
  }

  if (includesAny(text, ["实习", "熙牛", "his", "医疗", "经历", "工作"])) {
    return {
      text:
        "他在熙牛医疗做过 Java 开发实习，参与浙一 HIS 系统故障治理，负责核心业务模块问题定位与修复，也沉淀了发药、号源池排班、退费处理等排障规范。",
      actions: [{ label: "查看经历", type: "scroll", target: "#experience" }],
    };
  }

  if (includesAny(text, ["商城", "秒杀", "rocketmq", "优惠券", "缓存", "超卖"])) {
    return {
      text:
        "商城优选项目展示了后端高并发能力：RocketMQ 异步处理订单落库、Redisson 分布式锁 + 乐观锁控制超卖、Redis 多级缓存治理，以及 GLM 大模型智能客服。",
      actions: [{ label: "看项目详情", type: "scroll", target: "#projects" }],
    };
  }

  return {
    text:
      "这个问题我现在只能基于页面内置知识回答。你可以换一种问法，比如问“介绍面试 Agent”“你的 RAG 能力”“实习经历”“打开 GitHub”。如果后续接入大模型后，我就能理解更自由的问题。",
    actions: [
      { label: "查看项目", type: "scroll", target: "#projects" },
      { label: "打开简历", type: "link", target: profile.resumeUrl },
    ],
  };
}

function runAction(action: ChatAction) {
  if (action.type === "scroll") {
    document.querySelector(action.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  window.open(action.target, "_blank", "noopener,noreferrer");
}

function RobotMascot() {
  return (
    <div className="robot-mascot" aria-hidden="true">
      <span className="robot-antenna left" />
      <span className="robot-antenna right" />
      <div className="robot-head">
        <span className="robot-eye left" />
        <span className="robot-eye right" />
        <span className="robot-mouth" />
      </div>
      <div className="robot-body">
        <Bot size={22} />
      </div>
      <span className="robot-arm left" />
      <span className="robot-arm right" />
    </div>
  );
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  const nextId = useMemo(() => messages.length + 1, [messages.length]);

  function ask(question: string) {
    const clean = question.trim();
    if (!clean) return;

    const reply = getReply(clean);
    setMessages((current) => [
      ...current,
      { id: nextId, role: "user", text: clean },
      { id: nextId + 1, role: "bot", ...reply },
    ]);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(input);
  }

  return (
    <div className="chat-assistant">
      {open && (
        <section className="chat-panel" aria-label="简历智能问答助手">
          <header className="chat-header">
            <div>
              <span>AI Resume Assistant</span>
              <strong>项目问答助手</strong>
            </div>
            <button className="chat-icon-button" type="button" onClick={() => setOpen(false)} aria-label="关闭聊天">
              <X size={18} />
            </button>
          </header>

          <div className="chat-messages">
            {messages.map((message) => (
              <article className={`chat-message ${message.role}`} key={message.id}>
                <p>{message.text}</p>
                {message.actions && (
                  <div className="chat-actions">
                    {message.actions.map((action) => (
                      <button key={`${message.id}-${action.label}`} type="button" onClick={() => runAction(action)}>
                        {action.label}
                        <ArrowUpRight size={14} />
                      </button>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="quick-prompts" aria-label="快捷问题">
            {quickPrompts.map((prompt) => (
              <button key={prompt} type="button" onClick={() => ask(prompt)}>
                {prompt}
              </button>
            ))}
          </div>

          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="问项目、技能、实习经历..."
              aria-label="输入问题"
            />
            <button type="submit" aria-label="发送">
              <Send size={17} />
            </button>
          </form>
        </section>
      )}

      <button className="chat-launcher" type="button" onClick={() => setOpen((value) => !value)} aria-label="打开简历助手">
        <RobotMascot />
        <span>
          <MessageCircle size={16} />
          问项目
        </span>
      </button>

      {!open && (
        <div className="chat-hint" aria-hidden="true">
          可以问我项目和简历
        </div>
      )}
    </div>
  );
}
