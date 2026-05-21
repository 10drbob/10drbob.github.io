---
sidebar_position: 4
---

# Optimization

## 1. 核心问题

训练神经网络时，optimizer 如何根据 gradient 调整参数，让 loss 逐步下降？

## 2. 关键概念

- learning rate
- gradient descent
- SGD
- momentum
- Adam
- overfitting / underfitting

## 3. 数学公式

- Basic update: `$\theta \leftarrow \theta - \eta \nabla_\theta L$`
- Mini-batch loss: `$L = 1/N \sum_i L_i$`

## 4. 直观理解

TODO: 用“沿着 loss surface 往低处走”的方式解释 learning rate 和 gradient。

## 5. PyTorch / Python 示例

```python
import torch

model = torch.nn.Linear(4, 2)
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)
optimizer.zero_grad()
```

## 6. 常见误区

- TODO: 说明 learning rate 太大或太小的表现。
- TODO: 区分 training loss 下降和 generalization 变好。

## 7. 和其他概念的联系

- [Backpropagation](./backpropagation)
- [Neural Network Basics](./neural-network-basics)

## 8. 我的总结

TODO: 总结 optimizer、learning rate、batch size 和 validation performance 的关系。

## 9. 参考资料

TODO: 补充 PyTorch optimizer 文档和课程资料链接。
