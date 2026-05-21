---
sidebar_position: 6
---

# RNN / LSTM / GRU

## 1. 核心问题

RNN 系列模型如何处理 sequence，并在时间步之间传递 hidden state？

## 2. 关键概念

- sequence modeling
- hidden state
- vanishing gradient
- LSTM gate
- GRU gate

## 3. 数学公式

- RNN recurrence: `$h_t = f(x_t, h_{t-1})$`
- Output: `$y_t = g(h_t)$`

## 4. 直观理解

TODO: 用“逐步阅读序列并更新记忆”的方式解释 hidden state。

## 5. PyTorch / Python 示例

```python
import torch
import torch.nn as nn

gru = nn.GRU(input_size=16, hidden_size=32, batch_first=True)
x = torch.randn(4, 10, 16)
output, hidden = gru(x)
```

## 6. 常见误区

- TODO: 区分 sequence length、batch size 和 hidden size。
- TODO: 说明 LSTM / GRU 为什么缓解 vanilla RNN 的 gradient 问题。

## 7. 和其他概念的联系

- [Attention](../nlp/attention)
- [Transformer](./transformer)

## 8. 我的总结

TODO: 总结 RNN、LSTM、GRU 在 sequence task 中的优缺点。

## 9. 参考资料

TODO: 补充课程笔记、PyTorch RNN 文档和经典论文链接。
