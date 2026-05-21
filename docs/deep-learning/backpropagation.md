---
sidebar_position: 3
---

# Backpropagation

## 1. 核心问题

Backpropagation 如何高效计算 loss 对每一层参数的 gradient？

## 2. 关键概念

- computational graph
- chain rule
- gradient
- automatic differentiation
- backward pass

## 3. 数学公式

- Chain rule: `$\partial L / \partial w = \partial L / \partial z \cdot \partial z / \partial w$`
- Gradient descent update: `$w \leftarrow w - \eta \nabla_w L$`

## 4. 直观理解

TODO: 用“误差从输出层往输入层传播”的方式解释 backward pass。

## 5. PyTorch / Python 示例

```python
import torch

w = torch.tensor([1.0], requires_grad=True)
loss = (w * 2 - 3) ** 2
loss.backward()
print(w.grad)
```

## 6. 常见误区

- TODO: 区分 gradient accumulation 和每一步清零 `zero_grad()`。
- TODO: 说明 backward 计算 gradient，不直接等于 optimizer update。

## 7. 和其他概念的联系

- [Neural Network Basics](./neural-network-basics)
- [Optimization](./optimization)

## 8. 我的总结

TODO: 总结 chain rule、autograd 和 parameter update 的关系。

## 9. 参考资料

TODO: 补充 autograd 官方文档和课程笔记链接。
