---
sidebar_position: 2
---

# Tokenization

## 1. 核心问题

Tokenization 如何把 raw text 转换成模型可以处理的 token sequence？

## 2. 关键概念

- word-level tokenization
- character-level tokenization
- subword tokenization
- vocabulary
- padding / truncation

## 3. 数学公式

- Text mapping: `$text \rightarrow [token_1, token_2, ..., token_n]$`
- ID mapping: `$token_i \rightarrow id_i$`

## 4. 直观理解

TODO: 用“把文本切成稳定的小单位”的方式解释 tokenization。

## 5. PyTorch / Python 示例

```python
text = "Deep learning is useful"
tokens = text.lower().split()
token_ids = {token: i for i, token in enumerate(tokens)}
```

## 6. 常见误区

- TODO: 区分 token、word 和 character。
- TODO: 说明 unknown token、padding 和 truncation 的影响。

## 7. 和其他概念的联系

- [Word Embedding](./word-embedding)
- [BERT](./bert)
- [GPT](./gpt)

## 8. 我的总结

TODO: 总结不同 tokenization 方法对 vocabulary size 和 sequence length 的影响。

## 9. 参考资料

TODO: 补充 BPE、WordPiece、SentencePiece 的官方或论文资料。
