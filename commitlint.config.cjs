// @see: https://cz-git.qbb.sh/zh/guide/
/** @type {import('cz-git').UserConfig} */

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat", // 一个新的特性
        "fix", // 修复一个Bug
        "docs", // 变更的只有文档
        "refactor", // 代码重构，注意和特性、修复区分开
        "test", // 添加一个测试
        "build", // 修改项目构建系统配置
        "ci", // 修改项目继续集成流程
        "chore", // 改变构建流程、或者增加依赖库、工具等
        "improvement", // 用于对当前实现进行改进而没有添加新功能或修复错误的提交
        "merge", // 仅进行分支合并
        "revert" // 回滚到上一个版本
      ]
    ]
  },
  prompt: {
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      // footerPrefixsSelect: "选择关联issue前缀（可选）:",
      // customFooterPrefixs: "输入自定义issue前缀 :",
      // footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      { value: "wip", name: "开发:🧠开发中的代码", emoji: "🧠" },
      { value: "fix", name: "修复:🧩修复缺陷", emoji: "🧩" },
      { value: "feat", name: "功能:🚀新增功能", emoji: "🚀" },
      { value: "perf", name: "优化:⚡优化代码（提升性能、体验、算法等）", emoji: "⚡" },
      { value: "test", name: "测试:✅添加疏漏测试或已有测试改动", emoji: "✅" },
      { value: "style", name: "格式:🎨代码格式（不影响功能，例如空格、分号等格式修正）", emoji: "🎨" },
      { value: "types", name: "类型:🎭类型定义文件更改，", emoji: "🎭" },
      { value: "docs", name: "文档:📚文档变更（README, CHANGELOG等）", emoji: "📚" },
      { value: "refactor", name: "重构:♻代码重构（不包括 bug 修复、功能新增）", emoji: "♻" },
      { value: "revert", name: "回退:⏪回滚 commit", emoji: "⏪" },
      { value: "workflow", name: "流程:📦️部署流程创建", emoji: "📦️" },
      { value: "chore", name: "构建:🔨改变构建流程、增加依赖库、工具、依赖更新、脚手架配置修改等", emoji: "🔨" }
    ],
    useEmoji: true,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
