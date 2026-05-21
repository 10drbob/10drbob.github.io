---
sidebar_position: 6
---

# Image Captioning with Attention

## 1. 项目简介

Local archive。这个页面用于整理本地 image captioning learning project 的公开说明。

## 2. 问题定义

给定一张图片，生成一段自然语言 caption。当前公开页面只描述项目结构和学习目标，不发布正式 benchmark claim。

## 3. 数据集 / 输入输出

- 数据集：本地材料使用公开 image captioning 数据集练习；公开页面不上传原始图片或标注文件。
- 输入：image。
- 输出：generated caption。

## 4. 方法概览

本地材料围绕 CNN encoder、RNN decoder、attention 和 beam search evaluation workflow 展开。

## 5. 模型或算法结构

TODO: 复核后补充 encoder、decoder、attention layer 和 decoding strategy 的干净结构图或说明。

## 6. 训练 / 实验流程

TODO: 清理 machine-specific paths 后记录 dataset processing、training command 和 evaluation command。

## 7. 实验结果

本地曾有 evaluation files，但尚未做公开发布前 clean run 复核；当前不写具体 BLEU 数字。

## 8. 错误分析

TODO: 基于复核后的样本分析 object missing、wrong relation、generic caption 和 repetition。

## 9. 改进方向

- TODO: 对比 greedy decoding 和 beam search。
- TODO: 检查 attention visualization 是否适合公开展示。
- TODO: 整理可复现 README。

## 10. GitHub Repo

TODO: 公开前清理代码、路径、数据下载说明和 attribution。当前不填写具体 repo URL。

## 11. 在线 Demo

暂无在线 Demo。TODO: 只有 demoUrl 真实存在后才添加。

## 12. 我学到了什么

TODO: 复核项目后总结 encoder-decoder、attention 和 image-text evaluation 的经验。

## 13. 公开边界说明

未上传原始数据、模型权重、课程材料、虚拟环境或大文件。公开页面只保留项目说明和待复核计划。
