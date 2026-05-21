---
sidebar_position: 6
---

# GPT

## 1. 核心问题

GPT-style model 如何用 autoregressive language modeling 预测 next token，并生成文本？

## 2. 关键概念

- decoder-only Transformer
- causal mask
- next-token prediction
- prompt
- sampling / decoding

## 3. 数学公式

- Autoregressive factorization: `$p(x) = \prod_t p(x_t | x_{<t})$`
- Training loss: `$L = -\sum_t \log p(x_t | x_{<t})$`

## 4. 直观理解

TODO: 用“根据前文不断预测下一个 token”的方式解释 GPT generation。

## 5. PyTorch / Python 示例

```python
tokens = [101, 2045, 2003, 1037]
inputs = tokens[:-1]
targets = tokens[1:]
print(inputs, targets)
```

## 6. 常见误区

- TODO: 区分 training objective、inference decoding 和 prompt engineering。
- TODO: 说明生成流畅不等于事实正确。

## 7. 和其他概念的联系

- [Transformer](../deep-learning/transformer)
- [Attention](./attention)
- [RAG](./rag)

## 8. 我的总结

TODO: 总结 GPT 的 causal mask、next-token prediction 和 application workflow。

## 9. 参考资料

TODO: 补充 GPT 系列论文、OpenAI / Hugging Face 文档和课程笔记。
