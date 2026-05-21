---
sidebar_position: 2
---

# Neural Network Basics

## 1. 核心问题

神经网络如何把 input 经过多层可学习参数映射成 prediction，并通过 loss 反馈更新参数？

## 2. 关键概念

- neuron / layer
- activation function
- loss function
- forward pass
- parameter

## 3. 数学公式

- Linear layer: `$z = Wx + b$`
- Activation: `$h = \sigma(z)$`
- Prediction: `$\hat{y} = f_\theta(x)$`

## 4. 直观理解

TODO: 用“特征逐层变换”的方式解释 linear layer 和 nonlinear activation 的作用。

## 5. PyTorch / Python 示例

```python
import torch
import torch.nn as nn

model = nn.Sequential(nn.Linear(4, 8), nn.ReLU(), nn.Linear(8, 2))
x = torch.randn(3, 4)
logits = model(x)
```

## 6. 常见误区

- TODO: 区分 parameter、feature 和 prediction。
- TODO: 说明为什么没有 nonlinear activation 时多层线性网络仍等价于线性变换。

## 7. 和其他概念的联系

- [Backpropagation](./backpropagation)
- [Optimization](./optimization)

## 8. 我的总结

TODO: 学完后总结 input、label、prediction、loss 和 parameter update 的关系。

## 9. 参考资料

TODO: 补充课程材料、教材章节或官方 PyTorch 文档链接。
