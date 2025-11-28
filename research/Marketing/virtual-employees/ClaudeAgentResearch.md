# Claude Agent SDK Research
## Build Your Own Synthetic Employees for Business Leaders

This document contains comprehensive research on the Claude Agent SDK, covering all aspects needed to build synthetic employees for business decision support.

---

## 1. Agent SDK Overview

### What is the Claude Agent SDK?

The Claude Agent SDK (formerly Claude Code SDK) is a framework for building production-ready AI agents that can:
- Execute commands in persistent environments
- Perform file operations
- Use tools autonomously
- Maintain conversation context across sessions
- Integrate with custom tools via Model Context Protocol (MCP)

### Key Features

**Context Management**: Automatic compaction and context management to prevent running out of context.

**Rich Tool Ecosystem**: File operations, code execution, web search, and MCP extensibility.

**Advanced Permissions**: Fine-grained control over agent capabilities.

**Production Essentials**: Built-in error handling, session management, and monitoring.

**Optimized Claude Integration**: Automatic prompt caching and performance optimizations.

### Installation

**TypeScript:**
```bash
npm install @anthropic-ai/claude-agent-sdk
```

**Python:**
```bash
pip install claude-agent-sdk
```

### Authentication

Three authentication methods are supported:

1. **Anthropic API** (Standard):
   - Set `ANTHROPIC_API_KEY` environment variable
   - Retrieve from Claude Console

2. **Amazon Bedrock**:
   - Set `CLAUDE_CODE_USE_BEDROCK=1`
   - Configure AWS credentials

3. **Google Vertex AI**:
   - Set `CLAUDE_CODE_USE_VERTEX=1`
   - Configure Google Cloud credentials

---

## 2. TypeScript SDK Reference

### Core Functions

#### `query()`

Primary function for interacting with Claude. Creates an async generator that streams messages.

```typescript
function query({
  prompt: string | AsyncIterable<SDKUserMessage>,
  options?: Options
}): Query
```

**Parameters:**
- `prompt`: Input as string or async iterable for streaming mode
- `options`: Configuration object (Optional)

**Returns:** `Query` object extending `AsyncGenerator<SDKMessage, void>` with additional methods

#### `tool()`

Creates type-safe MCP tool definitions:

```typescript
function tool<Schema extends ZodRawShape>(
  name: string,
  description: string,
  inputSchema: Schema,
  handler: (args, extra) => Promise<CallToolResult>
): SdkMcpToolDefinition<Schema>
```

#### `createSdkMcpServer()`

Creates an MCP server instance running in-process:

```typescript
function createSdkMcpServer(options: {
  name: string,
  version?: string,
  tools?: Array<SdkMcpToolDefinition<any>>
}): McpSdkServerConfigWithInstance
```

### Configuration Options

**Key Options:**
- `allowedTools`: List of allowed tool names
- `disallowedTools`: List of disallowed tool names
- `permissionMode`: Permission strategy ('default', 'acceptEdits', 'bypassPermissions', 'plan')
- `systemPrompt`: Custom or preset system prompt
- `mcpServers`: MCP server configurations
- `agents`: Programmatically define subagents
- `hooks`: Event callbacks for customization
- `settingSources`: Control filesystem settings loading
- `cwd`: Current working directory
- `model`: Claude model to use
- `maxTurns`: Maximum conversation turns
- `resume`: Session ID to resume
- `forkSession`: Fork session into new branch
- `outputFormat`: Define structured JSON output

---

## 3. Python SDK Reference

### Choosing Between `query()` and `ClaudeSDKClient`

**`query()` Function:**
- Creates new session each time
- Best for one-off tasks
- Simple automation scripts
- Independent tasks without context

**`ClaudeSDKClient` Class:**
- Maintains conversation session
- Best for continuous conversations
- Follow-up questions with context
- Interactive applications
- Response-driven logic
- Custom tools & hooks support

### `query()` Function

```python
async def query(
    *,
    prompt: str | AsyncIterable[dict[str, Any]],
    options: ClaudeAgentOptions | None = None
) -> AsyncIterator[Message]
```

### `ClaudeSDKClient` Class

```python
class ClaudeSDKClient:
    def __init__(self, options: ClaudeAgentOptions | None = None)
    async def connect(self, prompt: str | AsyncIterable[dict] | None = None) -> None
    async def query(self, prompt: str | AsyncIterable[dict], session_id: str = "default") -> None
    async def receive_messages(self) -> AsyncIterator[Message]
    async def receive_response(self) -> AsyncIterator[Message]
    async def interrupt(self) -> None
    async def disconnect(self) -> None
```

**Key Methods:**
- `connect()`: Connect to Claude with optional initial prompt
- `query()`: Send new request in streaming mode
- `receive_messages()`: Receive all messages as async iterator
- `receive_response()`: Receive messages until ResultMessage
- `interrupt()`: Send interrupt signal (streaming mode only)
- `disconnect()`: Close connection

### Context Manager Support

```python
async with ClaudeSDKClient() as client:
    await client.query("Hello Claude")
    async for message in client.receive_response():
        print(message)
```

---

## 4. Streaming Input Mode

### Overview

The SDK supports two input modes:

**Streaming Input Mode (Recommended):**
- Persistent, interactive session
- Image uploads
- Queued messages
- Full tool integration
- Hooks support
- Real-time feedback
- Context persistence

**Single Message Input:**
- One-shot queries
- Session state and resuming
- Simpler but limited
- No image attachments
- No dynamic queueing
- No real-time interruption

### Benefits of Streaming Mode

1. **Image Uploads**: Attach images for visual analysis
2. **Queued Messages**: Send multiple sequential messages with interruption capability
3. **Tool Integration**: Full access to tools and MCP servers
4. **Hooks Support**: Lifecycle customization
5. **Real-time Feedback**: See responses as generated
6. **Context Persistence**: Maintain conversation naturally

### Implementation Example

```typescript
async function* generateMessages() {
  yield {
    type: "user" as const,
    message: {
      role: "user" as const,
      content: "Analyze this data"
    }
  };

  await new Promise(resolve => setTimeout(resolve, 2000));

  yield {
    type: "user" as const,
    message: {
      role: "user" as const,
      content: [
        { type: "text", text: "Review this diagram" },
        {
          type: "image",
          source: {
            type: "base64",
            media_type: "image/png",
            data: imageBase64
          }
        }
      ]
    }
  };
}

for await (const message of query({
  prompt: generateMessages(),
  options: { maxTurns: 10 }
})) {
  console.log(message);
}
```

---

## 5. Permission System

### Permission Flow

The SDK evaluates permissions in this order:

1. **PreToolUse Hook** → Can allow, deny, ask, or continue
2. **Deny Rules** → Block tools regardless of mode
3. **Allow Rules** → Permit matched tools
4. **Ask Rules** → Prompt for permission
5. **Permission Mode** → Global behavior
6. **canUseTool Callback** → Handle remaining cases

### Permission Modes

**Four Modes Available:**

1. **`default`**: Standard permission checks
2. **`plan`**: Planning mode - read-only tools only (not currently supported in SDK)
3. **`acceptEdits`**: Auto-accept file edits
4. **`bypassPermissions`**: Bypass all checks (use with caution)

### canUseTool Callback

Custom permission handler for runtime approval:

```typescript
async function promptForToolApproval(toolName: string, input: any) {
  console.log(`Tool: ${toolName}`);
  console.log(`Parameters:`, input);

  const approved = await getUserApproval();

  if (approved) {
    return {
      behavior: "allow",
      updatedInput: input
    };
  } else {
    return {
      behavior: "deny",
      message: "User denied permission"
    };
  }
}

const result = await query({
  prompt: "Analyze this codebase",
  options: {
    canUseTool: promptForToolApproval
  }
});
```

### Permission Modes in Practice

**Accept Edits Mode:**
- Auto-approves file edits
- Auto-approves filesystem operations
- Other tools require normal permissions
- Speeds up development

**Bypass Permissions Mode:**
- ALL tools auto-approved
- Hooks still execute
- Use only in controlled environments
- Full system access granted

---

## 6. Session Management

### How Sessions Work

Sessions allow conversation continuity across multiple interactions:

1. SDK creates session automatically
2. Session ID returned in initial system message
3. Capture ID to resume later
4. Full context maintained

### Getting Session ID

```typescript
let sessionId: string | undefined;

const response = query({
  prompt: "Help me build a web application",
  options: { model: "claude-sonnet-4-5" }
});

for await (const message of response) {
  if (message.type === 'system' && message.subtype === 'init') {
    sessionId = message.session_id;
    console.log(`Session: ${sessionId}`);
  }
}
```

### Resuming Sessions

```typescript
const response = query({
  prompt: "Continue from where we left off",
  options: {
    resume: sessionId,
    model: "claude-sonnet-4-5"
  }
});
```

### Forking Sessions

Create new branch from existing session:

```typescript
const forkedResponse = query({
  prompt: "Try a different approach",
  options: {
    resume: sessionId,
    forkSession: true  // New session ID created
  }
});
```

**When to Fork:**
- Explore different approaches from same starting point
- Create multiple conversation branches
- Test changes without affecting original
- Maintain separate paths for experiments

**Forking vs Continuing:**
- `forkSession: false` (default): Same session ID, modifies original
- `forkSession: true`: New session ID, preserves original

---

## 7. Structured Outputs

### Overview

Get validated JSON from agent workflows using JSON Schemas.

**Use Cases:**
- Multi-turn workflows with tools
- Validated data structures
- Type-safe integration
- Simplified parsing

**Not for:**
- Single API calls without tools (use API Structured Outputs instead)

### Benefits

- **Validated structure**: Always valid JSON matching schema
- **Simplified integration**: No parsing/validation code needed
- **Type safety**: TypeScript/Python type hints
- **Clean separation**: Output requirements separate from tasks
- **Tool autonomy**: Agent chooses tools, guarantees format

### Quick Start

```typescript
const schema = {
  type: 'object',
  properties: {
    company_name: { type: 'string' },
    founded_year: { type: 'number' },
    headquarters: { type: 'string' }
  },
  required: ['company_name']
};

for await (const message of query({
  prompt: 'Research Anthropic',
  options: {
    outputFormat: {
      type: 'json_schema',
      schema: schema
    }
  }
})) {
  if (message.type === 'result' && message.structured_output) {
    console.log(message.structured_output);
  }
}
```

### Using Zod for Type Safety

```typescript
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

const AnalysisResult = z.object({
  summary: z.string(),
  issues: z.array(z.object({
    severity: z.enum(['low', 'medium', 'high']),
    description: z.string(),
    file: z.string()
  })),
  score: z.number().min(0).max(100)
});

type AnalysisResult = z.infer<typeof AnalysisResult>;

const schema = zodToJsonSchema(AnalysisResult, { $refStrategy: 'root' });

for await (const message of query({
  prompt: 'Analyze codebase for security',
  options: {
    outputFormat: { type: 'json_schema', schema }
  }
})) {
  if (message.type === 'result' && message.structured_output) {
    const parsed = AnalysisResult.safeParse(message.structured_output);
    if (parsed.success) {
      console.log(`Score: ${parsed.data.score}`);
    }
  }
}
```

### Supported Features

- All basic types: object, array, string, integer, number, boolean, null
- `enum`, `const`, `required`, `additionalProperties` (must be false)
- String formats: date-time, date, email, uri, uuid
- `$ref`, `$def`, and `definitions`

---

## 8. Hosting in Production

### Architecture Differences

The SDK differs from stateless APIs:
- **Maintains conversational state**
- **Executes in persistent environment**
- **Long-running process**
- **File operations with context**

### Container-Based Sandboxing

**Security Requirements:**
- Process isolation per session
- Resource limits (CPU, memory, storage)
- Network control
- Ephemeral filesystems

**System Requirements:**
- Python 3.10+ or Node.js 18+
- Node.js (required for Claude Code CLI)
- Claude Code CLI: `npm install -g @anthropic-ai/claude-code`
- Recommended: 1GiB RAM, 5GiB disk, 1 CPU
- Network: HTTPS to api.anthropic.com

### Sandbox Providers

- **Cloudflare Sandboxes**
- **Modal Sandboxes**
- **Daytona**
- **E2B**
- **Fly Machines**
- **Vercel Sandbox**

### Deployment Patterns

**Pattern 1: Ephemeral Sessions**
- New container per task
- Destroyed when complete
- Best for: Bug fixes, invoice processing, translations

**Pattern 2: Long-Running Sessions**
- Persistent containers
- Multiple agent processes
- Best for: Email agents, site builders, high-frequency chatbots

**Pattern 3: Hybrid Sessions**
- Ephemeral + state hydration
- Resume from database/session
- Best for: Project managers, research agents, support tickets

**Pattern 4: Single Containers**
- Multiple agents in one container
- Agent collaboration
- Best for: Simulations, multi-agent systems

---

## 9. System Prompt Modification

### Default Behavior

SDK uses **empty system prompt** by default for flexibility.

To use Claude Code's prompt:
```typescript
systemPrompt: { preset: "claude_code" }
```

### Four Modification Methods

**1. CLAUDE.md Files (Project-Level)**
- Location: `CLAUDE.md` or `.claude/CLAUDE.md` in working directory
- User-level: `~/.claude/CLAUDE.md` for global instructions
- **Requires**: `settingSources: ['project']` or `['user']`
- Best for: Team-shared context, project conventions

**2. Output Styles (Persistent Configurations)**
- Saved markdown files
- Reusable across sessions/projects
- Located: `~/.claude/output-styles/` or `.claude/output-styles/`
- Best for: Specialized assistants, team-shared configs

**3. systemPrompt with append**
- Extends Claude Code's prompt
- Preserves tools and safety
- Session-specific additions

```typescript
systemPrompt: {
  type: "preset",
  preset: "claude_code",
  append: "Additional instructions here"
}
```

**4. Custom systemPrompt**
- Complete control
- Replaces default entirely
- Must provide own tool instructions

### Comparison

| Feature | CLAUDE.md | Output Styles | append | Custom |
|---------|-----------|---------------|--------|--------|
| Persistence | Per-project | Saved files | Session | Session |
| Reusability | Per-project | Across projects | Code dup | Code dup |
| Default tools | Preserved | Preserved | Preserved | Lost |
| Version control | With project | Yes | With code | With code |
| Scope | Project-specific | User/project | Session | Session |

---

## 10. Model Context Protocol (MCP)

### Overview

MCP servers extend Claude with custom tools and capabilities:
- External processes (stdio)
- Remote HTTP/SSE servers
- In-process SDK servers

### Basic Configuration

`.mcp.json` at project root:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem"],
      "env": {
        "ALLOWED_PATHS": "/Users/me/projects"
      }
    }
  }
}
```

### SDK Usage

```typescript
for await (const message of query({
  prompt: "List files in my project",
  options: {
    mcpServers: {
      "filesystem": {
        command: "npx",
        args: ["@modelcontextprotocol/server-filesystem"],
        env: { ALLOWED_PATHS: "/Users/me/projects" }
      }
    },
    allowedTools: ["mcp__filesystem__list_files"]
  }
})) {
  console.log(message);
}
```

### Transport Types

**stdio Servers**: External processes via stdin/stdout
**HTTP/SSE Servers**: Remote with network communication
**SDK MCP Servers**: In-process within application

### Authentication

Environment variables in configuration:

```json
{
  "mcpServers": {
    "secure-api": {
      "type": "sse",
      "url": "https://api.example.com/mcp",
      "headers": {
        "Authorization": "Bearer ${API_TOKEN}",
        "X-API-Key": "${API_KEY:-default-key}"
      }
    }
  }
}
```

---

## 11. Custom Tools

### Overview

Custom tools allow you to extend Claude's capabilities with your own functionality through in-process MCP servers, enabling Claude to interact with external services, APIs, or perform specialized operations.

### Creating Custom Tools

Use the `createSdkMcpServer` and `tool` helper functions to define type-safe custom tools:

```typescript
import { query, tool, createSdkMcpServer } from "@anthropic-ai/claude-agent-sdk";
import { z } from "zod";

// Create an SDK MCP server with custom tools
const customServer = createSdkMcpServer({
  name: "my-custom-tools",
  version: "1.0.0",
  tools: [
    tool(
      "get_weather",
      "Get current temperature for a location using coordinates",
      {
        latitude: z.number().describe("Latitude coordinate"),
        longitude: z.number().describe("Longitude coordinate")
      },
      async (args) => {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${args.latitude}&longitude=${args.longitude}&current=temperature_2m&temperature_unit=fahrenheit`);
        const data = await response.json();

        return {
          content: [{
            type: "text",
            text: `Temperature: ${data.current.temperature_2m}°F`
          }]
        };
      }
    )
  ]
});
```

### Tool Name Format

When MCP tools are exposed to Claude, their names follow a specific format:
- Pattern: `mcp__{server_name}__{tool_name}`
- Example: A tool named `get_weather` in server `my-custom-tools` becomes `mcp__my-custom-tools__get_weather`

### Using Custom Tools

**Important:** Custom MCP tools require streaming input mode. You must use an async generator/iterable for the `prompt` parameter.

```typescript
async function* generateMessages() {
  yield {
    type: "user" as const,
    message: {
      role: "user" as const,
      content: "What's the weather in San Francisco?"
    }
  };
}

for await (const message of query({
  prompt: generateMessages(),  // Use async generator for streaming input
  options: {
    mcpServers: {
      "my-custom-tools": customServer  // Pass as object/dictionary, not array
    },
    allowedTools: [
      "mcp__my-custom-tools__get_weather",
    ],
    maxTurns: 3
  }
})) {
  if (message.type === "result" && message.subtype === "success") {
    console.log(message.result);
  }
}
```

### Type Safety with Zod

```typescript
import { z } from "zod";

tool(
  "process_data",
  "Process structured data with type safety",
  {
    data: z.object({
      name: z.string(),
      age: z.number().min(0).max(150),
      email: z.string().email(),
      preferences: z.array(z.string()).optional()
    }),
    format: z.enum(["json", "csv", "xml"]).default("json")
  },
  async (args) => {
    // args is fully typed based on the schema
    console.log(`Processing ${args.data.name}'s data as ${args.format}`);

    return {
      content: [{
        type: "text",
        text: `Processed data for ${args.data.name}`
      }]
    };
  }
)
```

### Error Handling

Handle errors gracefully to provide meaningful feedback:

```typescript
tool(
  "fetch_data",
  "Fetch data from an API",
  {
    endpoint: z.string().url().describe("API endpoint URL")
  },
  async (args) => {
    try {
      const response = await fetch(args.endpoint);

      if (!response.ok) {
        return {
          content: [{
            type: "text",
            text: `API error: ${response.status} ${response.statusText}`
          }]
        };
      }

      const data = await response.json();
      return {
        content: [{
          type: "text",
          text: JSON.stringify(data, null, 2)
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Failed to fetch data: ${error.message}`
        }]
      };
    }
  }
)
```

### Example Use Cases

**Database Query Tool**: Execute SQL queries with results formatting
**API Gateway Tool**: Make authenticated API requests to external services (Stripe, GitHub, OpenAI, Slack)
**Calculator Tool**: Perform mathematical calculations and financial computations

---

## 12. Subagents in the SDK

### Overview

Subagents are specialized AIs orchestrated by the main agent. Use subagents for context management and parallelization.

### Benefits of Using Subagents

**Context Management**: Subagents maintain separate context from the main agent, preventing information overload.

**Parallelization**: Multiple subagents can run concurrently, dramatically speeding up complex workflows.

**Specialized Instructions**: Each subagent can have tailored system prompts with specific expertise.

**Tool Restrictions**: Subagents can be limited to specific tools, reducing risk of unintended actions.

### Programmatic Definition (Recommended)

Define subagents directly in your code using the `agents` parameter:

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

const result = query({
  prompt: "Review the authentication module for security issues",
  options: {
    agents: {
      'code-reviewer': {
        description: 'Expert code review specialist. Use for quality, security, and maintainability reviews.',
        prompt: `You are a code review specialist with expertise in security, performance, and best practices.

When reviewing code:
- Identify security vulnerabilities
- Check for performance issues
- Verify adherence to coding standards
- Suggest specific improvements

Be thorough but concise in your feedback.`,
        tools: ['Read', 'Grep', 'Glob'],
        model: 'sonnet'
      },
      'test-runner': {
        description: 'Runs and analyzes test suites. Use for test execution and coverage analysis.',
        prompt: `You are a test execution specialist. Run tests and provide clear analysis of results.

Focus on:
- Running test commands
- Analyzing test output
- Identifying failing tests
- Suggesting fixes for failures`,
        tools: ['Bash', 'Read', 'Grep'],
      }
    }
  }
});
```

### AgentDefinition Configuration

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | `string` | Yes | Natural language description of when to use this agent |
| `prompt` | `string` | Yes | The agent's system prompt defining its role and behavior |
| `tools` | `string[]` | No | Array of allowed tool names. If omitted, inherits all tools |
| `model` | `'sonnet' | 'opus' | 'haiku' | 'inherit'` | No | Model override for this agent |

### Filesystem-Based Definition

You can also define subagents as markdown files in:
- **Project-level**: `.claude/agents/*.md` - Available only in current project
- **User-level**: `~/.claude/agents/*.md` - Available across all projects

Example `.claude/agents/code-reviewer.md`:

```markdown
---
name: code-reviewer
description: Expert code review specialist. Use for quality, security, and maintainability reviews.
tools: Read, Grep, Glob, Bash
---

Your subagent's system prompt goes here. This defines the subagent's
role, capabilities, and approach to solving problems.
```

**Note:** Programmatically defined agents take precedence over filesystem-based agents with the same name.

### How the SDK Uses Subagents

When using the Claude Agent SDK, Claude will:
1. Load programmatic agents from the `agents` parameter
2. Auto-detect filesystem agents from `.claude/agents/` directories
3. Invoke them automatically based on task matching and description
4. Use their specialized prompts and tool restrictions
5. Maintain separate context for each subagent invocation

### Tool Restriction Examples

**Read-only agents** (analysis, review):
```typescript
tools: ['Read', 'Grep', 'Glob']
```

**Test execution agents**:
```typescript
tools: ['Bash', 'Read', 'Grep']
```

**Code modification agents**:
```typescript
tools: ['Read', 'Edit', 'Write', 'Grep', 'Glob']
```

---

## 13. Slash Commands in the SDK

### Overview

Slash commands provide a way to control Claude Code sessions with special commands that start with `/`. These commands can be sent through the SDK to perform actions like clearing conversation history, compacting messages, or getting help.

### Discovering Available Slash Commands

```typescript
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({
  prompt: "Hello Claude",
  options: { maxTurns: 1 }
})) {
  if (message.type === "system" && message.subtype === "init") {
    console.log("Available slash commands:", message.slash_commands);
    // Example output: ["/compact", "/clear", "/help"]
  }
}
```

### Common Slash Commands

**`/compact` - Compact Conversation History**: Reduces the size of conversation history by summarizing older messages while preserving important context.

**`/clear` - Clear Conversation**: Starts a fresh conversation by clearing all previous history.

### Creating Custom Slash Commands

Custom slash commands are stored in designated directories:
- **Project commands**: `.claude/commands/` - Available only in current project
- **Personal commands**: `~/.claude/commands/` - Available across all projects

#### Basic Example

Create `.claude/commands/refactor.md`:

```markdown
Refactor the selected code to improve readability and maintainability.
Focus on clean code principles and best practices.
```

This creates the `/refactor` command available through the SDK.

#### With Frontmatter

Create `.claude/commands/security-check.md`:

```markdown
---
allowed-tools: Read, Grep, Glob
description: Run security vulnerability scan
model: claude-sonnet-4-5-20250929
---

Analyze the codebase for security vulnerabilities including:
- SQL injection risks
- XSS vulnerabilities
- Exposed credentials
- Insecure configurations
```

### Advanced Features

**Arguments and Placeholders**: Custom commands support dynamic arguments using placeholders like `$1`, `$2`.

**Bash Command Execution**: Custom commands can execute bash commands and include their output using `!`git command`` syntax.

**File References**: Include file contents using the `@` prefix (e.g., `@package.json`).

### Using Custom Commands

```typescript
import { query } from "@anthropic-ai/claude-agent-sdk";

// Use a custom command
for await (const message of query({
  prompt: "/refactor src/auth/login.ts",
  options: { maxTurns: 3 }
})) {
  if (message.type === "assistant") {
    console.log("Refactoring suggestions:", message.message);
  }
}
```

---

## 14. Agent Skills in the SDK

### Overview

Agent Skills extend Claude with specialized capabilities that Claude autonomously invokes when relevant. Skills are packaged as `SKILL.md` files containing instructions, descriptions, and optional supporting resources.

### How Skills Work with the SDK

When using the Claude Agent SDK, Skills are:
1. **Defined as filesystem artifacts**: Created as `SKILL.md` files in `.claude/skills/` directories
2. **Loaded from filesystem**: Must specify `settingSources` (TypeScript) or `setting_sources` (Python)
3. **Automatically discovered**: Skill metadata is discovered at startup
4. **Model-invoked**: Claude autonomously chooses when to use them
5. **Enabled via allowed_tools**: Add `"Skill"` to your `allowed_tools`

**Important**: Unlike subagents, Skills cannot be defined programmatically - they must be filesystem artifacts.

### Using Skills with the SDK

```python
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions

async def main():
    options = ClaudeAgentOptions(
        cwd="/path/to/project",  # Project with .claude/skills/
        setting_sources=["user", "project"],  # Load Skills from filesystem
        allowed_tools=["Skill", "Read", "Write", "Bash"]  # Enable Skill tool
    )

    async for message in query(
        prompt="Help me process this PDF document",
        options=options
    ):
        print(message)

asyncio.run(main())
```

### Skill Locations

- **Project Skills** (`.claude/skills/`): Shared with team via git - loaded when `setting_sources` includes `"project"`
- **User Skills** (`~/.claude/skills/`): Personal Skills across all projects - loaded when `setting_sources` includes `"user"`
- **Plugin Skills**: Bundled with installed Claude Code plugins

### Creating Skills

Skills are defined as directories containing a `SKILL.md` file with YAML frontmatter:

```
.claude/skills/processing-pdfs/
└── SKILL.md
```

Example `SKILL.md` structure:

```markdown
---
name: pdf-processor
description: Extract and analyze text from PDF documents
---

Your skill instructions go here. This defines what the skill does
and how it should be used.
```

### Tool Restrictions

**Important**: The `allowed-tools` frontmatter field in SKILL.md only works with Claude Code CLI. It does NOT apply when using Skills through the SDK.

To restrict tools for Skills in SDK applications, use the `allowedTools` option:

```python
options = ClaudeAgentOptions(
    setting_sources=["user", "project"],  # Load Skills from filesystem
    allowed_tools=["Skill", "Read", "Grep", "Glob"]  # Restricted toolset
)
```

### Troubleshooting

**Skills Not Found:**
- Check `settingSources` configuration - Skills are only loaded when explicitly configured
- Verify working directory - The SDK loads Skills relative to the `cwd` option
- Confirm filesystem location exists (`.claude/skills/*/SKILL.md`)

**Skill Not Being Used:**
- Check `"Skill"` is in your `allowedTools`
- Ensure description is specific with relevant keywords

---

## 15. Tracking Costs and Usage

### Overview

The Claude Agent SDK provides detailed token usage information for each interaction with Claude. This is essential for tracking costs and billing users appropriately.

### Key Concepts

1. **Steps**: A single request/response pair between your application and Claude
2. **Messages**: Individual messages within a step (text, tool uses, tool results)
3. **Usage**: Token consumption data attached to assistant messages

### Important Usage Rules

**Rule 1: Same ID = Same Usage**

All messages with the same `id` field report identical usage. When Claude sends multiple messages in the same turn (e.g., text + tool uses), they share the same message ID and usage data.

```typescript
// All these messages have the same ID and usage
const messages = [
  { type: 'assistant', id: 'msg_123', usage: { output_tokens: 100 } },
  { type: 'assistant', id: 'msg_123', usage: { output_tokens: 100 } },
  { type: 'assistant', id: 'msg_123', usage: { output_tokens: 100 } }
];

// Charge only once per unique message ID
const uniqueUsage = messages[0].usage; // Same for all messages with this ID
```

**Rule 2: Charge Once Per Step**

You should only charge users once per step, not for each individual message. When you see multiple assistant messages with the same ID, use the usage from any one of them.

**Rule 3: Result Message Contains Cumulative Usage**

The final `result` message contains the total cumulative usage from all steps:

```typescript
const result = await query({
  prompt: "Multi-step task",
  options: { /* ... */ }
});

console.log("Total usage:", result.usage);
console.log("Total cost:", result.usage.total_cost_usd);
```

### Implementation: Cost Tracking System

```typescript
import { query } from "@anthropic-ai/claude-agent-sdk";

class CostTracker {
  private processedMessageIds = new Set<string>();
  private stepUsages: Array<any> = [];

  async trackConversation(prompt: string) {
    const result = await query({
      prompt,
      options: {
        onMessage: (message) => {
          this.processMessage(message);
        }
      }
    });

    return {
      result,
      stepUsages: this.stepUsages,
      totalCost: result.usage?.total_cost_usd || 0
    };
  }

  private processMessage(message: any) {
    // Only process assistant messages with usage
    if (message.type !== 'assistant' || !message.usage) {
      return;
    }

    // Skip if we've already processed this message ID
    if (this.processedMessageIds.has(message.id)) {
      return;
    }

    // Mark as processed and record usage
    this.processedMessageIds.add(message.id);
    this.stepUsages.push({
      messageId: message.id,
      timestamp: new Date().toISOString(),
      usage: message.usage,
      costUSD: this.calculateCost(message.usage)
    });
  }

  private calculateCost(usage: any): number {
    const inputCost = usage.input_tokens * 0.00003;
    const outputCost = usage.output_tokens * 0.00015;
    const cacheReadCost = (usage.cache_read_input_tokens || 0) * 0.0000075;

    return inputCost + outputCost + cacheReadCost;
  }
}
```

### Usage Fields Reference

Each usage object contains:
- `input_tokens`: Base input tokens processed
- `output_tokens`: Tokens generated in the response
- `cache_creation_input_tokens`: Tokens used to create cache entries
- `cache_read_input_tokens`: Tokens read from cache
- `service_tier`: The service tier used (e.g., "standard")
- `total_cost_usd`: Total cost in USD (only in result message)

### Best Practices

1. **Use Message IDs for Deduplication**: Always track processed message IDs to avoid double-charging
2. **Monitor the Result Message**: The final result contains authoritative cumulative usage
3. **Implement Logging**: Log all usage data for auditing and debugging
4. **Handle Failures Gracefully**: Track partial usage even if a conversation fails
5. **Consider Streaming**: For streaming responses, accumulate usage as messages arrive

---

## 16. Todo Lists and Task Management

### Overview

Todo tracking provides a structured way to manage tasks and display progress to users. The Claude Agent SDK includes built-in todo functionality that helps organize complex workflows and keep users informed.

### Todo Lifecycle

Todos follow a predictable lifecycle:
1. **Created** as `pending` when tasks are identified
2. **Activated** to `in_progress` when work begins
3. **Completed** when the task finishes successfully
4. **Removed** when all tasks in a group are completed

### When Todos Are Used

The SDK automatically creates todos for:
- **Complex multi-step tasks** requiring 3 or more distinct actions
- **User-provided task lists** when multiple items are mentioned
- **Non-trivial operations** that benefit from progress tracking
- **Explicit requests** when users ask for todo organization

### Monitoring Todo Changes

```typescript
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({
  prompt: "Optimize my React app performance and track progress with todos",
  options: { maxTurns: 15 }
})) {
  if (message.type === "assistant") {
    for (const block of message.message.content) {
      if (block.type === "tool_use" && block.name === "TodoWrite") {
        const todos = block.input.todos;

        console.log("Todo Status Update:");
        todos.forEach((todo, index) => {
          const status = todo.status === "completed" ? "✅" :
                        todo.status === "in_progress" ? "🔧" : "⏳";
          console.log(`${index + 1}. ${status} ${todo.content}`);
        });
      }
    }
  }
}
```

### Real-time Progress Display

```typescript
class TodoTracker {
  private todos: any[] = [];

  displayProgress() {
    if (this.todos.length === 0) return;

    const completed = this.todos.filter(t => t.status === "completed").length;
    const inProgress = this.todos.filter(t => t.status === "in_progress").length;
    const total = this.todos.length;

    console.log(`\nProgress: ${completed}/${total} completed`);
    console.log(`Currently working on: ${inProgress} task(s)\n`);

    this.todos.forEach((todo, index) => {
      const icon = todo.status === "completed" ? "✅" :
                  todo.status === "in_progress" ? "🔧" : "⏳";
      const text = todo.status === "in_progress" ? todo.activeForm : todo.content;
      console.log(`${index + 1}. ${icon} ${text}`);
    });
  }

  async trackQuery(prompt: string) {
    for await (const message of query({
      prompt,
      options: { maxTurns: 20 }
    })) {
      if (message.type === "assistant") {
        for (const block of message.message.content) {
          if (block.type === "tool_use" && block.name === "TodoWrite") {
            this.todos = block.input.todos;
            this.displayProgress();
          }
        }
      }
    }
  }
}
```

**Key Benefits for Business Users**:
- **Visual Progress**: Users see exactly what the synthetic employee is working on
- **Task Transparency**: Clear breakdown of complex business processes
- **Status Updates**: Real-time feedback on multi-step operations
- **Completion Tracking**: Know when each phase of work is done

---

## 17. MCP Connector (API Integration)

### Overview

Claude's Model Context Protocol (MCP) connector enables connecting to remote MCP servers directly from the Messages API without a separate MCP client.

**Current version**: Requires beta header: `"anthropic-beta": "mcp-client-2025-11-20"`

### Key Features

- **Direct API integration**: Connect to MCP servers without implementing an MCP client
- **Tool calling support**: Access MCP tools through the Messages API
- **Flexible tool configuration**: Enable all tools, allowlist specific tools, or denylist unwanted tools
- **Per-tool configuration**: Configure individual tools with custom settings
- **OAuth authentication**: Support for OAuth Bearer tokens for authenticated servers
- **Multiple servers**: Connect to multiple MCP servers in a single request

### Basic Example

```bash
curl https://api.anthropic.com/v1/messages \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "anthropic-beta: mcp-client-2025-11-20" \
  -d '{
    "model": "claude-sonnet-4-5",
    "max_tokens": 1000,
    "messages": [{"role": "user", "content": "What tools do you have available?"}],
    "mcp_servers": [
      {
        "type": "url",
        "url": "https://example-server.modelcontextprotocol.io/sse",
        "name": "example-mcp",
        "authorization_token": "YOUR_TOKEN"
      }
    ],
    "tools": [
      {
        "type": "mcp_toolset",
        "mcp_server_name": "example-mcp"
      }
    ]
  }'
```

### MCP Server Configuration

Each MCP server in the `mcp_servers` array defines connection details:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | string | Yes | Currently only "url" is supported |
| `url` | string | Yes | The URL of the MCP server (must start with https://) |
| `name` | string | Yes | Unique identifier for this MCP server |
| `authorization_token` | string | No | OAuth authorization token if required |

### Tool Configuration Patterns

**Enable All Tools** (simplest):
```json
{
  "type": "mcp_toolset",
  "mcp_server_name": "google-calendar-mcp"
}
```

**Allowlist - Enable Only Specific Tools**:
```json
{
  "type": "mcp_toolset",
  "mcp_server_name": "google-calendar-mcp",
  "default_config": {
    "enabled": false
  },
  "configs": {
    "search_events": { "enabled": true },
    "create_event": { "enabled": true }
  }
}
```

**Denylist - Disable Specific Tools**:
```json
{
  "type": "mcp_toolset",
  "mcp_server_name": "google-calendar-mcp",
  "configs": {
    "delete_all_events": { "enabled": false },
    "share_calendar_publicly": { "enabled": false }
  }
}
```

### Multiple MCP Servers

Connect to multiple MCP servers in a single request:

```json
{
  "mcp_servers": [
    {
      "type": "url",
      "url": "https://mcp.example1.com/sse",
      "name": "mcp-server-1",
      "authorization_token": "TOKEN1"
    },
    {
      "type": "url",
      "url": "https://mcp.example2.com/sse",
      "name": "mcp-server-2",
      "authorization_token": "TOKEN2"
    }
  ],
  "tools": [
    {
      "type": "mcp_toolset",
      "mcp_server_name": "mcp-server-1"
    },
    {
      "type": "mcp_toolset",
      "mcp_server_name": "mcp-server-2"
    }
  ]
}
```

### Authentication

For MCP servers requiring OAuth:
1. Obtain an access token through OAuth flow
2. Pass token as `authorization_token` in server configuration
3. Handle token refresh as needed

**Testing with MCP Inspector**:
```bash
npx @modelcontextprotocol/inspector
```

Follow the OAuth flow in the inspector to obtain test tokens.

### Response Content Types

**MCP Tool Use Block**:
```json
{
  "type": "mcp_tool_use",
  "id": "mcptoolu_014Q35RayjACSWkSj4X2yov1",
  "name": "echo",
  "server_name": "example-mcp",
  "input": { "param1": "value1", "param2": "value2" }
}
```

**MCP Tool Result Block**:
```json
{
  "type": "mcp_tool_result",
  "tool_use_id": "mcptoolu_014Q35RayjACSWkSj4X2yov1",
  "is_error": false,
  "content": [
    {
      "type": "text",
      "text": "Hello"
    }
  ]
}
```

**Business Value**: MCP connector allows synthetic employees to integrate with any business system (CRM, ERP, accounting software, etc.) through standardized protocol without custom integration code.

---

## Summary

The Claude Agent SDK provides a comprehensive framework for building synthetic employees that can:

1. **Maintain Context**: Persistent sessions across interactions
2. **Execute Tools**: File operations, commands, web searches
3. **Custom Integration**: MCP servers for domain-specific tools
4. **Permission Control**: Fine-grained security
5. **Structured Output**: Validated JSON results
6. **Production Ready**: Hosting patterns for scale
7. **Custom Tools**: Extend capabilities with business-specific functions
8. **Subagents**: Specialized AI workers for parallel processing
9. **Slash Commands**: User-controlled operations
10. **Skills**: Autonomous capability extensions
11. **Cost Tracking**: Detailed usage and billing information

This foundation enables business leaders to create decision support systems that understand their domain, maintain conversation history, and provide reliable, structured insights.
