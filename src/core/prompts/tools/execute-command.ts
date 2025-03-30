import { ToolArgs } from "./types"

export function getExecuteCommandDescription(args: ToolArgs): string | undefined {
	return `## execute_command
Run CLI commands on the system. Prefer direct commands over scripts.

TERMINAL COMMAND RULE: When writing commands, ALL special characters MUST be literal single characters. NEVER use HTML entities.
- For command chaining: Use && NOT &amp;&amp;
- For redirection: Use > NOT &gt;
- For input: Use < NOT &lt;
- For piping: Use | NOT &vert;
The correct patterns are:
- Chaining commands: command1 && command2
- Redirection: echo "text" > file.txt
- Piping: command1 | command2
If you see any of these sequences in your command: 'amp;', 'gt;', 'lt;', 'vert;', STOP and correct them immediately. These will cause terminal errors.


Parameters:
- command: CLI command (required, must be safe)
- cwd: Working directory (optional, default: ${args.cwd})

Usage:
<execute_command>
<command>your_command</command>
<cwd>optional_path</cwd>
</execute_command>

Examples:
1. Run dev server: <execute_command><command>npm run dev</command></execute_command>
2. List files: <execute_command><command>ls -la</command><cwd>/path</cwd></execute_command>

Use relative paths when possible for better portability.`
}
