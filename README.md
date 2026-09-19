# 张楠楠的个人主页

这是一个面向 AI Agent / Python 开发实习方向的个人作品集网站，用于展示个人简介、技术能力和项目实践。

## 网站内容

- 首页：个人定位、当前关注方向与代表项目
- 简历：教育背景、企业实训、核心技能与项目经历
- 项目：RepoPilot、HarmonyOS 智能家居应用、门店数据分析
- 联系：邮箱与 GitHub 主页

## 代表项目

### RepoPilot

面向本地项目和 GitHub 仓库的只读代码分析 Agent，支持：

- 项目类型识别与文件结构浏览
- 按行读取、关键词搜索与报错诊断
- GitHub REST API 与 Token 鉴权
- 敏感文件过滤、路径校验和只读权限控制
- 会话历史、多仓库对比与 Markdown 报告导出
- 离线单元测试与异常路径覆盖

仓库地址：<https://github.com/zhangnannanyyds/repo-learning-agent>

## 技术栈

- Pug
- SCSS
- Bootstrap 5
- JavaScript
- GitHub Actions
- GitHub Pages

## 本地运行

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm start
```

构建静态网站：

```bash
npm run build
```

构建结果会输出到 `dist` 目录。

## 部署

推送到 `main` 分支后，GitHub Actions 会构建并发布 `dist` 目录中的静态网站。

## 模板来源

项目最初基于 [Start Bootstrap Personal](https://startbootstrap.com/template/personal/) 模板进行二次开发，保留 MIT License，并完成中文化、内容重构和个人作品集功能调整。
