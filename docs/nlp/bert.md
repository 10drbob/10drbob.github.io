---
sidebar_position: 5
---

# BERT

## 1. 核心问题

BERT 如何用 encoder-only Transformer 学习 bidirectional contextual representation，并迁移到下游任务？

## 2. 关键概念

- encoder-only Transformer
- masked language modeling
- contextual embedding
- fine-tuning
- classification head

## 3. 数学公式

- MLM objective: `$L = -\sum_i \log p(x_i | x_{masked})$`
- Classification: `$\hat{y} = softmax(W h_{CLS} + b)$`

## 4. 直观理解

TODO: 用“遮住部分 token，让模型根据上下文补全”的方式解释 masked language modeling。

## 5. PyTorch / Python 示例

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
batch = tokenizer(["good movie"], padding=True, truncation=True, return_tensors="pt")
```

## 6. 常见误区

- TODO: 区分 pre-training 和 fine-tuning。
- TODO: 说明 BERT 更适合 understanding tasks，不是标准 autoregressive generator。

## 7. 和其他概念的联系

- [Transformer](../deep-learning/transformer)
- [Attention](./attention)
- [BERT Sentiment Analysis](../projects/sentiment-analysis)

## 8. 我的总结

TODO: 总结 BERT 的输入格式、预训练目标和下游任务适配方式。

## 9. 参考资料

- TODO: Devlin et al., BERT.
- [BERT Paper Reading](../paper-reading/bert)
