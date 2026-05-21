---
sidebar_position: 4
---

# Attention

## 1. 核心问题

Attention 如何让模型在处理当前 token 时动态关注其他 token 或 memory？

## 2. 关键概念

- query
- key
- value
- attention score
- attention weight
- context vector

## 3. 数学公式

- Score: `$score = QK^T / \sqrt{d_k}$`
- Attention: `$softmax(score)V$`

## 4. 直观理解

TODO: 用“根据问题 query 去查找相关 key，再汇总 value”的方式解释 attention。

## 5. PyTorch / Python 示例

```python
import torch

q = torch.randn(2, 4, 8)
k = torch.randn(2, 4, 8)
v = torch.randn(2, 4, 8)
weights = torch.softmax(q @ k.transpose(-2, -1) / (8 ** 0.5), dim=-1)
context = weights @ v
```

## 6. 常见误区

- TODO: 区分 attention weight 和因果解释。
- TODO: 说明 attention 不自动保证模型“理解”文本。

## 7. 和其他概念的联系

- [Transformer](../deep-learning/transformer)
- [BERT](./bert)
- [GPT](./gpt)

## 8. 我的总结

TODO: 总结 attention 在 Seq2Seq、Transformer 和 LLM 中的不同用法。

## 9. 参考资料

- TODO: Bahdanau attention 相关资料。
- [Attention Is All You Need](../paper-reading/attention-is-all-you-need)
