---
sidebar_position: 3
---

# Word Embedding

## 1. 核心问题

Word embedding 如何把离散 token 映射到连续向量空间？

## 2. 关键概念

- embedding matrix
- dense vector
- semantic similarity
- pretrained embedding
- contextual embedding

## 3. 数学公式

- Embedding lookup: `$e_i = E[id_i]$`
- Similarity: `$cos(e_a, e_b) = e_a \cdot e_b / (||e_a|| ||e_b||)$`

## 4. 直观理解

TODO: 用“把词放到向量空间中”的方式解释 semantic similarity。

## 5. PyTorch / Python 示例

```python
import torch
import torch.nn as nn

embedding = nn.Embedding(num_embeddings=1000, embedding_dim=128)
ids = torch.tensor([1, 5, 9])
vectors = embedding(ids)
```

## 6. 常见误区

- TODO: 区分 static embedding 和 contextual embedding。
- TODO: 说明 embedding vector 本身不等于可直接解释的人工特征。

## 7. 和其他概念的联系

- [Tokenization](./tokenization)
- [BERT](./bert)

## 8. 我的总结

TODO: 总结 embedding 在 NLP pipeline 中承接 token 和 model input 的作用。

## 9. 参考资料

TODO: 补充 Word2Vec、GloVe、BERT embedding 相关资料。
