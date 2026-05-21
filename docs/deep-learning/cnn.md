---
sidebar_position: 5
---

# CNN

## 1. 核心问题

Convolutional Neural Network 如何利用局部连接和权重共享处理 image / grid-like data？

## 2. 关键概念

- convolution
- kernel / filter
- channel
- stride
- padding
- pooling

## 3. 数学公式

- Convolution idea: `$y(i, j) = \sum_m \sum_n x(i+m, j+n) k(m, n)$`
- Output size: `$out = (in + 2p - k) / s + 1$`

## 4. 直观理解

TODO: 用“滑动窗口提取局部 pattern”的方式解释 convolution。

## 5. PyTorch / Python 示例

```python
import torch
import torch.nn as nn

conv = nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, padding=1)
x = torch.randn(2, 3, 224, 224)
y = conv(x)
```

## 6. 常见误区

- TODO: 区分 channel、feature map 和 batch dimension。
- TODO: 说明 padding / stride 对 feature map size 的影响。

## 7. 和其他概念的联系

- [Neural Network Basics](./neural-network-basics)
- [Optimization](./optimization)

## 8. 我的总结

TODO: 总结 CNN 为什么适合 image task，以及它和 fully connected layer 的差异。

## 9. 参考资料

TODO: 补充 CNN 课程章节、PyTorch `Conv2d` 文档和经典论文链接。
