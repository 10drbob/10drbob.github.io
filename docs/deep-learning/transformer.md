---
sidebar_position: 7
---

# Transformer

## 1. 核心问题

Transformer 如何用 self-attention 建模 token 之间的关系，并替代传统 recurrent sequence modeling？

## 2. 关键概念

- self-attention
- multi-head attention
- positional encoding
- feed-forward network
- residual connection
- layer normalization

## 3. 数学公式

- Scaled dot-product attention: `$Attention(Q,K,V) = softmax(QK^T / \sqrt{d_k})V$`
- Position-wise FFN: `$FFN(x) = W_2 ReLU(W_1x + b_1) + b_2$`

## 4. 直观理解

TODO: 用“每个 token 主动查看其他 token”的方式解释 self-attention。

## 5. PyTorch / Python 示例

```python
import torch
import torch.nn as nn

layer = nn.TransformerEncoderLayer(d_model=64, nhead=4, batch_first=True)
x = torch.randn(2, 12, 64)
y = layer(x)
```

## 6. 常见误区

- TODO: 区分 attention score、attention weight 和 value aggregation。
- TODO: 说明 positional encoding 为什么仍然需要。

## 7. 和其他概念的联系

- [Attention](../nlp/attention)
- [BERT](../nlp/bert)
- [GPT](../nlp/gpt)

## 8. 我的总结

TODO: 总结 Transformer block 的输入输出、关键模块和适用任务。

## 9. 参考资料

- TODO: Vaswani et al., Attention Is All You Need.
- [Attention Is All You Need](../paper-reading/attention-is-all-you-need)
