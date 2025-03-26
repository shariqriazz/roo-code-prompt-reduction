# Prompt Condensation Todo List

## Core Sections (src/core/prompts/sections/)
1. ✅ tool-use-guidelines.ts - High priority (core functionality) - 66% reduction
2. ✅ tool-use.ts - High priority (core functionality) - 60% reduction
3. ✅ rules.ts - High priority (system constraints) - 66% reduction
4. ✅ objective.ts - High priority (agent behavior) - 66% reduction
5. ✅ capabilities.ts - Medium priority - 70% reduction
6. ✅ custom-instructions.ts - Medium priority - 60% reduction
7. ✅ custom-system-prompt.ts - Medium priority - No changes needed (code only)
8. ✅ mcp-servers.ts - Low priority - 66% reduction
9. ✅ system-info.ts - Low priority - 66% reduction
10. modes.ts - Low priority (reference only)

## Tools (src/core/prompts/tools/)
1. ✅ read-file.ts - High priority (frequently used) - 62% reduction
2. ✅ write-to-file.ts - High priority (frequently used) - 60% reduction
3. ✅ execute-command.ts - High priority - 60% reduction
4. ✅ search-files.ts - High priority - 60% reduction
5. ✅ list-files.ts - High priority - 58% reduction
6. attempt-completion.ts - High priority
7. ✅ ask-followup-question.ts - High priority - 60% reduction
8. ✅ insert-content.ts - High priority - 60% reduction
9. ✅ search-and-replace.ts - High priority - 50% reduction
10. ✅ list-code-definition-names.ts - Medium priority - 60% reduction
11. ✅ fetch-instructions.ts - Medium priority - 50% reduction
12. ✅ switch-mode.ts - Medium priority - 50% reduction
13. ✅ new-task.ts - Medium priority - 50% reduction
14. ✅ access-mcp-resource.ts - Low priority - 50% reduction
15. ✅ browser-action.ts - Low priority - 50% reduction
16. ✅ use-mcp-tool.ts - Low priority - 50% reduction
17. types.ts - Reference only

## Diff Strategies (src/core/diff/)
1. DiffStrategy.ts - High priority
2. strategies/search-replace.ts - High priority
3. strategies/multi-search-replace.ts - High priority
4. strategies/unified.ts - High priority
5. strategies/new-unified/index.ts - High priority
6. strategies/new-unified/search-strategies.ts - High priority
7. strategies/new-unified/edit-strategies.ts - High priority
8. insert-groups.ts - Medium priority
9. types.ts - Reference only

## Process:
1. Review each file's instructional text
2. Rewrite to be more concise while preserving:
   - All functionality
   - Examples
   - Code blocks
   - Technical details
3. Calculate token reduction
4. Verify no functionality is lost
5. Mark complete in todo