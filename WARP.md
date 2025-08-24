# Warp AI 优化配置

## 项目简介
这是一个AI知识相关的资源仓库，主要包含人工智能学习资料、技术文档和经验分享。

## 常用命令
```bash
# 查看最近更新的文档
ls -lt *.md | head -5

# 搜索特定内容
grep -r "关键词" *.md

# 统计文档数量
ls *.md | wc -l

# 查看文档结构
find . -name "*.md" -exec basename {} \; | sort
```

## Git 工作流
```bash
# 添加新文档
git add 202508.md
git commit -m "Add 202508 AI knowledge resources"
git push origin main

# 更新现有文档
git add .
git commit -m "Update AI knowledge documentation"
git push
```

## 文档约定
- 文档命名格式：YYYYMM.md
- 内容包含AI技术、工具推荐、学习资料
- 每月更新相关内容

### GitHub Action Component
The repository contains a minimal GitHub Action called "AIknowledge Notify" that:
- Takes a message input parameter (optional, defaults to "Hello from AIknowledge Action!")
- Uses Node.js 16 runtime  
- Simply prints the provided message to console
- Handles errors gracefully using @actions/core.setFailed()

### Monthly Resource Files
Resource files follow a YYYYMM.md naming pattern and contain:
- AI and machine learning tutorials
- Deep learning frameworks and tools
- Natural language processing resources
- Computer vision libraries and datasets
- AI research papers and articles

## Common Commands

### Development
```bash
# Install dependencies
npm install

# Test the action locally
node index.js
```

### GitHub Action Usage
```yaml
- uses: mswnlz/AIknowledge@main
  with:
    message: "Custom AI knowledge notification message"
```

### Resource Management
```bash
# Create new monthly resource file
touch $(date +%Y%m).md

# View recent resource files
ls -la 2025*.md | head -5

# Search for AI topics
grep -r "人工智能" *.md
grep -r "machine learning" *.md

# Count total resources
wc -l 2025*.md
```
