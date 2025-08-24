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
