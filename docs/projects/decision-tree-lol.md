---
sidebar_position: 8
---

# Decision Tree Game Outcome Prediction

## 1. 项目简介

Local archive。这个页面用于整理本地 decision tree classification learning project 的公开说明。

## 2. 问题定义

根据 League of Legends early-game tabular features 预测 match outcome。当前页面不发布未经复核的正式指标。

## 3. 数据集 / 输入输出

- 数据集：本地练习使用公开 Kaggle dataset；公开页面不上传原始 CSV。
- 输入：early-game tabular features。
- 输出：predicted winning side / class label。

## 4. 方法概览

本地材料包含 feature inspection、feature engineering、discretization、decision tree training 和 evaluation 思路。

## 5. 模型或算法结构

TODO: 公开前复核 impurity criterion、split rule、max depth、min samples split 和 pruning / stopping strategy。

## 6. 训练 / 实验流程

TODO: 清理 notebook checkpoints 后记录 data preparation、train/test split、training command 和 evaluation command。

## 7. 实验结果

本地有实验记录，但尚未做公开发布前 clean run 复核；当前不写具体 accuracy 或 cross-validation 数字。

## 8. 错误分析

TODO: 基于复核后的样本分析 feature redundancy、class boundary 和 overfitting。

## 9. 改进方向

- TODO: 对比 sklearn baseline。
- TODO: 增加 feature importance analysis。
- TODO: 清理 notebook 和脚本结构。

## 10. GitHub Repo

TODO: 公开前清理代码、路径、数据下载说明和 attribution。当前不填写具体 repo URL。

## 11. 在线 Demo

暂无在线 Demo。TODO: 只有 demoUrl 真实存在后才添加。

## 12. 我学到了什么

TODO: 复核项目后总结 decision tree、feature engineering 和 tabular evaluation 的经验。

## 13. 公开边界说明

未上传原始数据、模型权重、课程材料、虚拟环境或大文件。公开页面只保留项目说明和待复核计划。
