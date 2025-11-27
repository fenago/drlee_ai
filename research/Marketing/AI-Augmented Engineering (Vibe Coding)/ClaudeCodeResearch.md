# Claude Code Comprehensive Research

## Research compiled from official Claude Code documentation
**Course:** Professional Vibe Coding with Claude Code
**Date:** January 2025

---

## TABLE OF CONTENTS

1. [Overview & Core Capabilities](#overview)
2. [Quickstart & Installation](#quickstart)
3. [Common Workflows](#workflows)
4. [Desktop Integration](#desktop)
5. [VS Code Integration](#vscode)
6. [Sub-Agents](#subagents)
7. [Plugins](#plugins)
8. [Skills](#skills)
9. [Hooks](#hooks)
10. [Headless Mode & CI/CD](#headless)
11. [MCP Integration](#mcp)
12. [Memory & Context](#memory)
13. [Slash Commands](#slashcommands)
14. [Security](#security)
15. [Setup & Configuration](#setup)

---

<a name="overview"></a>
## 1. OVERVIEW & CORE CAPABILITIES

### What Is Claude Code?

Claude Code is Anthropic's agentic coding tool designed for developers to use directly in their terminal. It transforms ideas into functional code by leveraging Claude's AI capabilities.

### Key Capabilities

**Feature Development**: Users can describe desired functionality in natural language, and Claude Code will create a plan, generate code, and verify it works properly.

**Debugging Support**: The tool analyzes codebases when presented with errors or bug descriptions, identifies root causes, and implements solutions.

**Codebase Navigation**: Developers can ask questions about their project structure and receive informed answers. The system maintains awareness of entire projects and can access information from external sources through MCP integrations.

**Task Automation**: Claude Code handles repetitive work like fixing linting errors, resolving merge conflicts, and generating release notes.

### Why Developers Prefer It

**Terminal Integration**: Rather than opening additional windows or IDEs, Claude Code operates within the developer's existing workflow and preferred tools.

**Direct Action**: The tool can modify files, execute commands, and create commits independently. MCP extensions enable reading from Google Drive, updating Jira tickets, and connecting custom developer tools.

**Unix-Compatible**: The tool supports piping and scripting, allowing commands like streaming log analysis or automated translation workflows within CI/CD pipelines.

**Enterprise Features**: It offers secure deployment options including self-hosted solutions on AWS and GCP, with built-in security and compliance standards.

---

<a name="quickstart"></a>
## 2. QUICKSTART & INSTALLATION

### Installation Methods

Claude Code can be installed via:
- **Homebrew**: `brew install --cask claude-code`
- **Native installers**: macOS/Linux/Windows
- **NPM**: `npm install -g @anthropic-ai/claude-code` (Node.js 18+)
- **PowerShell** (Windows): `irm https://claude.ai/install.ps1 | iex`
- **Shell script** (Mac/Linux): `curl -fsSL https://claude.ai/install.sh | bash`

### System Requirements

- macOS 10.15+, Ubuntu 20.04+/Debian 10+, or Windows 10+ (with WSL 1, WSL 2, or Git for Windows)
- 4GB+ RAM
- Node.js 18+ for NPM installation
- Internet connectivity for authentication and AI processing

### Authentication

Users must log in using either:
- **Claude.ai**: Pro/Max subscription
- **Claude Console**: API credits with active billing
- **Enterprise**: Amazon Bedrock, Google Vertex AI, or Microsoft Foundry integration

The system automatically creates a "Claude Code" workspace for organizational cost tracking.

### Starting a Session

Navigate to your project directory and run `claude` to launch the interactive interface. The welcome screen displays session details and previous conversations.

### Initial Exploration Commands

New users can begin by asking foundational questions:
- "what does this project do?"
- "what technologies does this project use?"
- "where is the main entry point?"

Claude analyzes the codebase without requiring manual file imports.

### Making Code Changes

Users can request modifications using natural language like "add a hello world function to the main file." Claude displays proposed changes and requires approval before implementation—"Accept all" mode is available for convenience.

### Git Integration

Git operations become conversational:
- "what files have I changed?"
- "commit my changes with a descriptive message"
- "create a new branch called feature/quickstart"

### Essential Commands

| Command | Purpose |
|---------|---------|
| `claude` | Start interactive mode |
| `claude "task"` | Execute single task |
| `claude -c` | Continue recent conversation |
| `/help` | Display available commands |
| `claude doctor` | Verify installation |
| `claude update` | Manually update application |

---

<a name="workflows"></a>
## 3. COMMON WORKFLOWS

### Code Understanding & Navigation

- **Codebase exploration**: Get quick overviews of project structure, architecture patterns, and data models
- **Feature location**: Find relevant files and trace execution flows through components
- **Code interaction mapping**: Understand how different modules work together

### Development & Maintenance

- **Bug fixing**: Share errors and stack traces to receive targeted fix recommendations
- **Code refactoring**: Modernize legacy code while maintaining backward compatibility
- **Testing workflows**: Identify untested code, generate test scaffolding, and cover edge cases
- **Documentation**: Add JSDoc comments, API documentation, and project glossaries

### Quality Assurance

- **Security reviews**: Analyze authentication systems and identify vulnerabilities
- **Code analysis**: Detect deprecated API usage and TypeScript type issues
- **Performance optimization**: Suggest specific improvements to code efficiency

### Collaboration & Integration

- **Pull request generation**: Create well-documented PRs with summaries and testing details
- **Git worktree parallel work**: Run isolated Claude sessions on multiple branches simultaneously
- **CI/CD integration**: Use Claude as an automated linter in build scripts
- **Custom commands**: Create reusable team prompts in `.claude/commands/` directories

### Advanced Analysis

- **Extended thinking**: Deploy deep reasoning for architectural decisions and complex debugging
- **Image analysis**: Review UI mockups, diagrams, and error screenshots
- **Specialized subagents**: Delegate tasks to domain-specific AI agents for security, performance, or API design

### Safe Exploration

- **Plan Mode**: Analyze codebases read-only before making changes to complex systems
- **Session continuation**: Resume previous conversations with `--continue` or `--resume` flags

---

<a name="desktop"></a>
## 4. DESKTOP INTEGRATION

### Core Capabilities

Claude Code on desktop operates as a native interface enabling developers to execute multiple coding sessions locally or on cloud infrastructure. The application provides "parallel local sessions with `git` worktrees" allowing simultaneous work within the same repository with isolated environments.

### Key Features

**Local Development:**
- Multiple concurrent sessions using Git worktrees stored in `~/.claude-worktrees`
- Customizable worktree location through desktop app settings
- Support for `.worktreeinclude` files to copy gitignored files (like `.env`) to new worktrees

**Cloud Integration:**
The desktop app enables launching "secure cloud sessions directly from the desktop app" for computationally intensive tasks or when local resources are limited.

**Version Management:**
The application includes a bundled, stable Claude Code version that automatically updates. Notably, "the bundled Claude Code version in Desktop may differ from the latest CLI version," with desktop prioritizing stability.

### Installation & Constraints

Users download the application from claude.ai/download. However, "local sessions are not available on Windows arm64 architectures," limiting deployment options on certain hardware configurations.

### Enterprise Controls

Organizations can restrict local usage through the `isClaudeCodeForDesktopEnabled` enterprise policy option, while also disabling web-based sessions through admin settings.

---

<a name="vscode"></a>
## 5. VS CODE INTEGRATION

### Overview

Claude Code integrates with Visual Studio Code through two approaches: a native extension (currently in beta) and a legacy CLI integration that connects terminal-based Claude Code to your IDE.

### Native VS Code Extension

**Installation & Requirements:**
The extension requires "VS Code 1.98.0 or higher" and can be downloaded from the Visual Studio Code Extension Marketplace.

**Key Capabilities:**
The extension provides a "Dedicated Claude Code sidebar panel accessed via the Spark icon" with features including:
- Plan review before acceptance
- Auto-edit mode
- Extended thinking toggles
- File mentions and image attachments
- Conversation history management
- Multiple simultaneous sessions

**Third-Party Provider Support:**
The extension works with Amazon Bedrock, Microsoft Foundry, and Google Vertex AI through environment variable configuration in VS Code settings. Configuration requires specific variables like `CLAUDE_CODE_USE_BEDROCK`, `AWS_REGION`, and `ANTHROPIC_FOUNDRY_API_KEY`.

**Current Limitations:**
Notable features not yet available include:
- MCP server/plugin configuration UIs
- Subagent configuration
- Checkpoints
- Conversation rewinding
- Certain keyboard shortcuts

### Legacy CLI Integration

This earlier integration activates automatically when running `claude` from VS Code's integrated terminal. It enables:
- Selection context sharing
- Diff viewing in the IDE rather than terminal
- Automatic diagnostic sharing for lint/syntax errors

### Security Notes

The documentation warns that auto-edit mode in VS Code may allow modification of IDE configuration files, potentially bypassing permission prompts. Recommendations include:
- Enabling Restricted Mode for untrusted workspaces
- Using manual approval mode

### Platform Support

Both integrations work with Visual Studio Code, Cursor, Windsurf, and VSCodium.

---

<a name="subagents"></a>
## 6. SUB-AGENTS

### What Are Subagents?

Subagents are specialized AI assistants that Claude Code can delegate to for task-specific work. Each operates with "its own context window separate from the main conversation" and includes customized system prompts and tool configurations.

### Core Capabilities

**Context Management**: Subagents maintain independent context, preventing "pollution of the main conversation and keeping it focused on high-level objectives."

**Specialized Focus**: They can be fine-tuned with domain-specific instructions, enabling higher success rates on designated tasks.

**Tool Control**: Each subagent receives granular permission levels, allowing restricted access to powerful tools based on purpose.

**Reusability**: Once created, subagents work across projects and teams for consistent workflows.

### Storage and Configuration

Subagents are defined as Markdown files with YAML frontmatter in two locations:
- **Project-level** (`.claude/agents/`) - highest priority, project-specific
- **User-level** (`~/.claude/agents/`) - available across all projects

Required configuration fields include `name`, `description`, and optional `tools`, `model`, `permissionMode`, and `skills`.

### Built-In Subagents

**General-purpose**: Handles complex, multi-step tasks requiring both exploration and file modifications using Sonnet model.

**Explore**: A lightweight, read-only agent using Haiku for "fast, low-latency searches" across codebases with configurable thoroughness levels.

**Plan**: Researches codebases in plan mode, gathering context before presenting strategies.

### Invocation Methods

Users can invoke subagents:
- Automatically when Claude detects matching tasks
- Explicitly: "Use the code-reviewer subagent to check my recent changes."

### Advanced Features

**Chaining**: Multiple subagents can be sequenced for complex workflows.

**Resumability**: Agents can continue previous conversations using stored transcript files and agent IDs, useful for long-running analysis tasks.

**CLI Configuration**: The `--agents` flag allows dynamic, session-specific subagent definitions via JSON.

---

<a name="plugins"></a>
## 7. PLUGINS

### Core Concept

Plugins represent "custom functionality that can be shared across projects and teams." They enable users to install pre-built extensions or create personalized automation tools through a unified system.

### Plugin Components

The system supports multiple extension types:

- **Custom Commands**: Slash commands defined in markdown files
- **Agents**: Specialized sub-agents for specific tasks
- **Skills**: Model-invoked capabilities that Claude autonomously applies
- **Hooks**: Event handlers for workflow automation
- **MCP Servers**: External tool integrations

### Standard Plugin Structure

A typical plugin follows this layout:

```
plugin-name/
├── .claude-plugin/plugin.json (metadata)
├── commands/ (optional slash commands)
├── agents/ (optional agent definitions)
├── skills/ (optional agent capabilities)
└── hooks/ (optional event handlers)
```

### Installation & Management

Users can discover and install plugins through:

1. **Interactive menu**: `/plugin` command opens the browsing interface
2. **Direct commands**: `claude /plugin install name@marketplace`
3. **Marketplaces**: Catalogs configured via `/plugin marketplace add`

Management operations include enabling, disabling, and uninstalling plugins without losing configuration.

### Development Workflow

Developers create plugins by:

1. Establishing a local marketplace for testing
2. Structuring plugin directories at the root level
3. Testing iteratively through uninstall/reinstall cycles
4. Debugging via component validation tools

### Team Implementation

Organizations configure plugins repository-wide through `.claude/settings.json`, enabling automatic installation when team members trust the folder.

---

<a name="skills"></a>
## 8. AGENT SKILLS

### What Are Agent Skills?

Agent Skills are modular capabilities that extend Claude's functionality. Each Skill consists of a `SKILL.md` file containing instructions, plus optional supporting files like scripts and templates. Unlike slash commands (user-invoked), Skills are **model-invoked**—Claude autonomously decides when to use them based on your request and the Skill's description.

### Storage Locations

Skills are organized by scope:

- **Personal Skills** (`~/.claude/skills/`): Available across all projects for individual workflows and experimental features
- **Project Skills** (`.claude/skills/`): Shared with team members via git for team conventions and shared utilities
- **Plugin Skills**: Bundled automatically when plugins are installed

### SKILL.md Structure

Every Skill requires a `SKILL.md` file with YAML frontmatter:

```yaml
---
name: your-skill-name
description: Brief description of what this Skill does and when to use it
---
```

**Key requirements:**
- `name`: Lowercase letters, numbers, hyphens only (max 64 characters)
- `description`: Clear explanation of the Skill's purpose and triggers (max 1,024 characters)

The description is critical for discovery. As the documentation states: "Include both what the Skill does and when Claude should use it in the description."

### Supporting Files

Organize additional resources alongside `SKILL.md`:
- Reference documentation
- Example files
- Script utilities in a `scripts/` folder
- Templates in a `templates/` folder

Claude progressively loads these files as needed.

### Key Features

**Tool Restrictions:**
Use the `allowed-tools` frontmatter field to restrict Claude's tool access when a Skill is active:

```yaml
allowed-tools: Read, Grep, Glob
```

This enables read-only Skills or security-sensitive workflows without requiring explicit permission requests.

**Skill Discovery:**
Claude automatically discovers Skills from all three sources. View available Skills by asking Claude directly or checking the filesystem:

```bash
ls ~/.claude/skills/          # Personal
ls .claude/skills/            # Project
```

### Best Practices

- **Keep Skills focused**: One Skill should address one capability (e.g., "PDF form filling," not "document processing")
- **Write specific descriptions**: Include both functionality and trigger terms users would mention
- **Test with your team**: Validate that Skills activate appropriately and that instructions remain clear
- **Document versions**: Track changes in your `SKILL.md` to help team members understand evolution

### Troubleshooting

When Claude doesn't use your Skill, check:

1. **Description specificity**: Vague descriptions prevent discovery
2. **File paths**: Verify `SKILL.md` exists in the correct location
3. **YAML syntax**: Invalid frontmatter prevents loading
4. **Debug mode**: Run `claude --debug` to see loading errors

---

<a name="hooks"></a>
## 9. HOOKS

### What Are Hooks?

Hooks are "user-defined shell commands that execute at various points in Claude Code's lifecycle." They provide deterministic control over behavior rather than relying on the LLM to choose actions.

### Hook Events

Claude Code supports ten hook events:

- **PreToolUse**: Executes before tool calls and can block them
- **PermissionRequest**: Runs when permission dialogs appear; can allow or deny
- **PostToolUse**: Executes after tool calls complete
- **UserPromptSubmit**: Runs when users submit prompts, before processing
- **Notification**: Runs when Claude Code sends notifications
- **Stop**: Runs when Claude Code finishes responding
- **SubagentStop**: Runs when subagent tasks complete
- **PreCompact**: Runs before compact operations
- **SessionStart**: Runs at session initialization or resumption
- **SessionEnd**: Runs when sessions terminate

### Configuration Structure

Hooks are stored in `~/.claude/settings.json` with this format:

```json
{
  "hooks": {
    "EventName": [
      {
        "matcher": "ToolName",
        "hooks": [
          {
            "type": "command",
            "command": "shell command here"
          }
        ]
      }
    ]
  }
}
```

The matcher field filters which tools trigger the hook (use `*` for all tools).

### Common Use Cases

- **Notifications**: Customize input/permission alerts
- **Auto-formatting**: Run formatters like `prettier` or `gofmt` automatically
- **Logging**: Track executed commands for compliance
- **Feedback**: Validate code against conventions
- **Permissions**: Block modifications to sensitive directories or production files

### Security Considerations

The documentation emphasizes that "hooks run automatically during the agent loop with your current environment's credentials," making malicious hooks a data exfiltration risk. Users must review implementations before registration.

---

<a name="headless"></a>
## 10. HEADLESS MODE & CI/CD

### Headless Mode Overview

Claude Code's headless mode enables programmatic execution without interactive UI. The `--print` (or `-p`) flag activates non-interactive mode, allowing integration into automated systems and scripts.

### Key Configuration Options

The primary automation-focused flags include:

- **`--print`**: Runs in non-interactive mode and outputs final results
- **`--output-format`**: Supports `text`, `json`, or `stream-json` for structured data
- **`--resume`/`--continue`**: Manages multi-turn conversations by session ID
- **`--allowedTools`/`--disallowedTools`**: Controls which tools the agent can access
- **`--mcp-config`**: Loads MCP server configurations from JSON files
- **`--verbose`**: Enables detailed logging for debugging

### Multi-Turn Conversation Management

The documentation describes resuming sessions via: "Continue the most recent conversation" using `claude --continue`, or target specific sessions with `claude --resume [session-id]`.

### Output Formats for Integration

**JSON output** returns structured metadata including execution cost, duration, turn count, and session IDs—enabling programmatic parsing. **Streaming JSON** emits messages incrementally as processing occurs, facilitating real-time integrations.

### Automation Use Cases

The guide provides three integration examples:

1. **SRE Incident Response**: Automated diagnostics using Bash, monitoring tools, and web search
2. **Security Audits**: PR reviews leveraging grep and web search capabilities
3. **Legal Document Review**: Multi-step sessions maintaining context across turns

### Best Practices for Automation

Recommendations include:
- Parsing JSON responses with tools like `jq`
- Checking exit codes
- Implementing timeouts for long operations
- Respecting rate limits with inter-request delays
- Using session management for context preservation

---

<a name="mcp"></a>
## 11. MCP INTEGRATION

### Overview

Claude Code connects to external tools and data sources through the **Model Context Protocol (MCP)**, an open-source standard for AI-tool integrations. MCP servers provide access to databases, APIs, and various tools.

### Capabilities

Users can leverage MCP servers to:
- Implement features from issue trackers (e.g., "Add the feature described in JIRA issue ENG-4521")
- Analyze monitoring data from platforms like Sentry and Statsig
- Query databases with natural language
- Integrate design tools like Figma
- Automate workflows through Gmail and other services

### Installation Methods

**Option 1: Remote HTTP Servers** (Recommended)
```
claude mcp add --transport http <name> <url>
```
Supports authentication headers for secure API connections.

**Option 2: Remote SSE Servers** (Deprecated)
```
claude mcp add --transport sse <name> <url>
```

**Option 3: Local Stdio Servers**
```
claude mcp add --transport stdio <name> -- <command>
```
Ideal for tools requiring direct system access. Windows users need the `cmd /c` wrapper for `npx` commands.

### Configuration Scopes

- **Local**: Project-specific, private configurations (default)
- **Project**: Shared team settings via `.mcp.json` file in version control
- **User**: Cross-project personal utilities

### Management Commands

```
claude mcp list          # View all servers
claude mcp get <name>    # Server details
claude mcp remove <name> # Delete a server
/mcp                     # Check status within Claude Code
```

### Authentication

OAuth 2.0 authentication uses the `/mcp` command within Claude Code. Tokens are "stored securely and refreshed automatically."

### Advanced Features

- **Resources**: Reference MCP data using `@server:protocol://path` syntax
- **Prompts as Commands**: Execute MCP-exposed prompts as `/mcp__servername__promptname`
- **Environment Variables**: Expand variables in `.mcp.json` using `${VAR}` or `${VAR:-default}` syntax
- **Enterprise Management**: Administrators can deploy managed configurations via `managed-mcp.json`

### Output Management

Default maximum MCP output is 25,000 tokens, with warnings at 10,000 tokens. Adjust via `MAX_MCP_OUTPUT_TOKENS` environment variable.

---

<a name="memory"></a>
## 12. MEMORY & CONTEXT MANAGEMENT

### Memory Hierarchy

Claude Code uses four memory locations in order of precedence:

1. **Enterprise Policy** - Organization-wide rules at system level (lowest specificity)
2. **Project Memory** - Team instructions in `./CLAUDE.md` or `./.claude/CLAUDE.md`
3. **User Memory** - Personal preferences in `~/.claude/CLAUDE.md`
4. **Project Memory (Local)** - Deprecated; use imports instead

"All memory files are automatically loaded into Claude Code's context when launched."

### Key Features

**Import Capability**: Memory files support `@path/to/import` syntax for including additional files, with recursive support up to 5 levels deep.

**Memory Discovery**: Claude automatically traverses up from the current working directory to find relevant memory files, plus discovers files in nested subtrees within the project.

**Quick Addition**: Prefix input with `#` to rapidly add a memory with guided file selection.

**Command Access**: Use `/memory` to edit files directly or `/init` to bootstrap a new project memory file.

### Best Practices

- "Be specific: 'Use 2-space indentation' is better than 'Format code properly'"
- Organize memories with markdown headings and bullet points
- Review and update memories as projects evolve to maintain accuracy
- Include frequently used commands, style preferences, and architectural patterns

---

<a name="slashcommands"></a>
## 13. CUSTOM SLASH COMMANDS

### Overview

Custom slash commands allow you to define frequently-used prompts as Markdown files that Claude Code executes. They're organized by scope—project-specific or personal—and support directory-based namespacing.

### Command Locations

**Project commands** are stored in `.claude/commands/` and shared with your team. They appear as "(project)" in help listings.

**Personal commands** live in `~/.claude/commands/` and work across all your projects, marked as "(user)" in help.

### Basic Syntax
```
/<command-name> [arguments]
```

The command name derives from the Markdown filename (minus the `.md` extension).

### Key Features

**Namespacing:**
Organize commands in subdirectories for clarity. Subdirectories don't affect the command name itself but appear in descriptions. For example, `.claude/commands/frontend/component.md` creates `/component` showing "(project:frontend)".

**Arguments:**
Commands support two approaches:

- **`$ARGUMENTS`**: Captures all passed arguments as one string
- **`$1, $2, etc.`**: Access individual positional arguments like shell scripts

This enables dynamic values within your command prompts.

**Bash Execution:**
Prefix commands with `!` to execute bash code before running the command. You must include `allowed-tools: Bash(...)` in frontmatter to specify permitted bash operations.

**File References:**
Use the `@` prefix to include file contents in commands, enabling code analysis or comparison.

**Thinking Mode:**
Commands can trigger extended thinking by including relevant keywords in the prompt.

### Frontmatter Options

Commands support metadata fields:

- **`allowed-tools`**: Specifies which tools the command can use
- **`argument-hint`**: Shows expected arguments during auto-completion
- **`description`**: Brief explanation displayed in `/help`
- **`model`**: Specify a particular Claude model
- **`disable-model-invocation`**: Prevent the SlashCommand tool from executing this command

### SlashCommand Tool

Claude can invoke custom slash commands programmatically via the SlashCommand tool during conversations. Commands must be user-defined and include a `description` field to be available.

You can disable this tool entirely or specific commands using permission rules.

---

<a name="security"></a>
## 14. SECURITY

### Core Security Architecture

Claude Code implements a **permission-based system** with strict read-only defaults. As stated: "Claude Code uses strict read-only permissions by default. When additional actions are needed (editing files, running tests, executing commands), Claude Code requests explicit permission."

### Key Protections

**Built-in Safeguards:**
- Sandboxed bash execution with filesystem and network isolation
- Write access confined to the project folder and subfolders only
- Command blocklist preventing risky operations like `curl` and `wget`
- Automatic approval prompts for sensitive operations
- "Context-aware analysis" to detect potentially harmful instructions
- Encrypted credential storage for API keys and tokens

**Prompt Injection Defenses:**
The system counters manipulation attempts through:
- Permission requirements
- Input sanitization
- Command blocking
- Isolated context windows for web fetches

### Enterprise Security Capabilities

Organizations can enforce standards via:
- Enterprise-managed permission policies
- Version-controlled permission configurations
- OpenTelemetry-based usage monitoring
- Project-specific settings for sensitive repositories
- Development container isolation

### Compliance & Cloud Execution

Claude Code meets **SOC 2 Type 2** and **ISO 27001** standards (detailed at Anthropic Trust Center). Cloud sessions run in:
- Isolated, Anthropic-managed VMs
- Network controls
- Branch-restricted Git operations
- Automatic cleanup post-session

### Recommended Practices

Users should:
- Review all suggested changes before approval
- Audit permissions regularly using `/permissions`
- Consider development containers for additional isolation when handling sensitive code
- Enable Restricted Mode for untrusted workspaces (VS Code)
- Use manual approval mode instead of auto-edit when needed

---

<a name="setup"></a>
## 15. SETUP & CONFIGURATION SUMMARY

### Post-Installation Configuration

**Auto-Updates:**
Updates occur automatically; disable via the `DISABLE_AUTOUPDATER` environment variable if needed.

**Windows-Specific:**
Support includes WSL 1/2 or Git Bash. For portable Git, specify bash.exe path via environment variable.

### Configuration Files

**Settings Location:**
- User settings: `~/.claude/settings.json`
- Project settings: `.claude/settings.json`
- Enterprise policy: System-level configuration

**Common Settings:**
```json
{
  "model": "claude-3-5-sonnet-20241022",
  "permissions": {
    "allowedTools": ["Read", "Write", "Bash"],
    "autoApprove": false
  },
  "hooks": {},
  "plugins": {}
}
```

### Environment Variables

- `CLAUDE_CODE_API_KEY`: API key for authentication
- `MAX_MCP_OUTPUT_TOKENS`: Maximum MCP output size
- `DISABLE_AUTOUPDATER`: Disable automatic updates
- `CLAUDE_CODE_USE_BEDROCK`: Enable Amazon Bedrock
- `AWS_REGION`: AWS region for Bedrock
- Various provider-specific variables for enterprise integrations

---

## CURRICULUM DESIGN NOTES

Based on this research, the 9-module curriculum should cover:

1. **Foundations & Setup**: Installation, authentication, first commands, codebase exploration
2. **Core Workflows**: Development, debugging, refactoring, testing, documentation
3. **IDE Integration**: Desktop app, VS Code extension, git worktrees
4. **Customization I**: Memory, project configuration, settings
5. **Customization II**: Slash commands, custom workflows
6. **Advanced Automation**: Subagents, skills, specialized agents
7. **Team Collaboration**: Plugins, shared configurations, team workflows
8. **Enterprise & Integration**: MCP, hooks, headless mode, CI/CD
9. **Production Mastery**: Security, performance, advanced patterns, best practices

Each module follows Shu-Ha-Ri:
- **Shu (Learn)**: TedTalk-style presentation of concepts
- **Ha (Practice)**: Hands-on building and implementation
- **Ri (Master)**: Experimentation, customization, and innovation
