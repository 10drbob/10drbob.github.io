---
sidebar_position: 7
---

# RAG

## 1. 核心问题

Retrieval-Augmented Generation 如何把 external documents 引入 LLM answer generation，降低纯参数记忆的局限？

## 2. 关键概念

- document chunking
- embedding
- vector search
- top-k retrieval
- reranking
- grounded generation

## 3. 数学公式

- Retrieval: `$topk(q, D) = argmax_k sim(embed(q), embed(d_i))$`
- Generation: `$answer = LLM(question, retrieved_context)$`

## 4. 直观理解

TODO: 用“先查资料，再带着资料回答”的方式解释 RAG pipeline。

## 5. PyTorch / Python 示例

```python
question = "What is RAG?"
chunks = ["RAG retrieves documents.", "CNN is for images."]
retrieved = [chunk for chunk in chunks if "RAG" in chunk]
prompt = f"Question: {question}\nContext: {retrieved}"
```

## 6. 常见误区

- TODO: 说明 RAG 不自动保证答案正确，retrieval quality 和 prompt design 仍然关键。
- TODO: 区分 embedding similarity 和 factual relevance。

## 7. 和其他概念的联系

- [GPT](./gpt)
- [Attention](./attention)
- [RAG Question Answering System](../projects/rag-qa-system)

## 8. 我的总结

TODO: 总结 chunking、retrieval、reranking 和 citation display 的作用。

## 9. 参考资料

TODO: 补充 RAG 原始论文、vector search 文档和项目实践记录。
