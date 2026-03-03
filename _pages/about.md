---
permalink: /
title: "About Me"
excerpt: "MTS at DatologyAI | CS PhD Candidate at UCLA"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi, I'm Sid. I'm a Member of Technical Staff at [DatologyAI](https://www.datalogyai.com/) where I lead data curation for Vision-Language Models (VLMs), and a fourth year PhD candidate studying Computer Science at UCLA, advised by Professor [Baharan Mirzasoleiman](http://web.cs.ucla.edu/~baharan/).
My research focus is on **data curation for efficient and robust learning** i.e. selecting or generating the best subsets of data for training, to reduce costs without sacrificing accuracy. I aim to develop practically effective and theoretically rigorous approaches to solving these problems.

**Open Office Hours**: In an effort to pay forward all the help I've received in my journey so far in pursuing a career in ML research, I am dedicating 1-2 hours each week for open office hours. This is best suited for relatively junior students (undergraduate/masters) since I'm not very experienced myself :). If you'd like to chat about research, grad school or anything else, please fill out [this form](https://forms.gle/bKrKo3s7Td6Gnkgr7).

In my free time, I like to write ([https://medium.com/@sjoshi804](https://medium.com/@sjoshi804)), read about philosophy and run.

Highlights
======

* **[Foundations of Data-efficient Machine Learning Tutorial @ ICML '24](https://icml.cc/virtual/2024/tutorial/35234)**: ([Slides](https://baharanm.github.io/assets/pdf/ICML24_tutorial_DataEfficient.pdf), [Video](https://www.youtube.com/watch?v=30VkdWuwmdA&ab_channel=SiddharthJoshi)) Gave a 2 hour tutorial at ICML '24 on principled approaches to data curation / pruning for efficient learning!
* **[DatBench](https://arxiv.org/abs/2601.02316)**: DatBench is a cleaned evaluation suite for VLMs that satisfies three desiderata: faithfulness, discriminability, and efficiency. By converting multiple-choice to generative tasks and filtering blindly solvable/mislabeled samples, DatBench achieves 13x average speedup (up to 50x) while closely matching the discriminative power of original datasets across 33 datasets spanning nine VLM capabilities.
* **[MM-GEN](https://arxiv.org/abs/2501.04155)**: MM-GEN is the first VLM data curation method that enables fully-automated data curation to improve VLM models on downstream tasks, requiring as few as 50 reference examples from the task. Published in DMLR 2025. Code available on [GitHub](https://github.com/sjoshi804/MM-Gen)!
* **[CLIPCov](https://sjoshi804.github.io/data-efficient-clip/)**: CLIPCov selects subsets of pre-training data to enable data-efficient contrastive language-image pre-training (CLIP) (AISTATS '24). Speed up your CLIP model training by over 50% with theoretically-grounded data-efficiency!
* **[SAS](https://github.com/sjoshi804/sas-data-efficient-contrastive-learning/tree/master)**: SAS selects subsets of pre-training data to enable data-efficient contrastive SSL (ICML '23). Give it a spin to try out data-efficient SSL - speed up SSL training by over 40%!
* **[SpuCo](https://spuco.readthedocs.io/en/latest/)**: SpuCo is a Python package developed to make research on address spurious correlations effortless. Check it out!


News
======

* 2026: *[DatBench: Discriminative, Faithful, and Efficient VLM Evaluations](https://arxiv.org/abs/2601.02316)* preprint on arXiv!
* 2026: *[ÜberWeb: Insights from Multilingual Curation for a 20-Trillion-Token Dataset](https://arxiv.org/abs/2602.15210)* preprint on arXiv!
* 2025: *[Luxical: High-Speed Lexical-Dense Text Embeddings](https://arxiv.org/abs/2512.09015)* preprint on arXiv!
* 2025: *[BeyondWeb: Lessons from Scaling Synthetic Data for Trillion-scale Pretraining](https://arxiv.org/abs/2508.10975)* preprint on arXiv!
* September 2025: *[MM-GEN: Principled and Generalizable Data Curation for Enhancing Task Performance in VLMs](https://arxiv.org/abs/2501.04155)* published in **Journal of Data-centric Machine Learning Research (DMLR) 2025**!
* June 2025: Joined [DatologyAI](https://www.datalogyai.com/) as a Research Scientist Intern, now Member of Technical Staff leading data curation for VLMs!
* January 2025: *[Dataset Distillation via Knowledge Distillation: Towards Efficient Self-Supervised Pre-Training of Deep Networks](https://arxiv.org/abs/2410.02116)* accepted to ICLR '25!
* October 2024: *[Dataset Distillation via Knowledge Distillation: Towards Efficient Self-Supervised Pre-Training of Deep Networks](https://arxiv.org/abs/2410.02116)* preprint on arXiv!
* July 2024: Will be giving tutorial on *[Foundations of Data-Efficient Learning](https://sjoshi804.github.io/data-efficient-learning-talk/)* at *ICML '24*!
* June 2024: Will be interning this summer at *Microsoft Research (AI Frontiers Team)* under [Dr. Neel Joshi](https://neelj.com/)!
* February 2024: I have successfully *advanced to candidacy*!
* January 2024: *[Data-Efficient Contrastive Language-Image Pretraining: Prioritizing Data Quality over Quantity](https://arxiv.org/abs/2403.12267)* is accepted to AISTATS 2024!
* January 2024: *[Understanding the Robustness of Multi-modal Contrastive Learning to Distribution Shift](https://yihaoxue.github.io/mmcl-project-page/)* and *[Investigating the Benefits of Projection Head for Representation Learning](https://arxiv.org/abs/2403.11391)* are accepted to ICLR 2024!
* June 2023: *[Towards Mitigating Spurious Correlations in the Wild: A Benchmark & New Datasets](https://arxiv.org/abs/2306.11957)* preprint on arXiv!
* May 2023: *[Data-Efficient Contrastive Self-supervised Learning: Most Beneficial Examples for Supervised Learning Contribute the Least](https://sjoshi804.github.io/data-efficient-contrastive-learning/)* accepted to *ICML 2023*!
* May 2023: *[Which Features are Learnt by Contrastive Learning? On the Role of Simplicity Bias in Class Collapse and Feature Suppression](https://sjoshi804.github.io/icml-cc-fs/)* accepted to *ICML 2023* for an *oral (top 2%)*!
* July 2022: [Low Rank Pruning via Output Perturbation](https://drive.google.com/file/d/1FhuJxrbW554UsMt92WR5B1sCaw8P1odl/view) at *[Sparsity in Neural Networks Workshop](https://www.sparseneural.net)*

Publications
=============

[1] **Siddharth Joshi**, Besmira Nushi, Vidhisha Balachandran, Varun Chandrasekaran, Vibhav Vineet, Neel Joshi, et al., *[MM-GEN: Principled and Generalizable Data Curation for Enhancing Task Performance in VLMs](https://arxiv.org/abs/2501.04155)*, **Journal of Data-centric Machine Learning Research (DMLR) 2025**.

[2] **Siddharth Joshi**, Jiayi Ni and Baharan Mirzasoleiman, *[Dataset Distillation via Knowledge Distillation: Towards Efficient Self-Supervised Pre-Training of Deep Networks](https://arxiv.org/abs/2410.02116)*, **ICLR 2025**.

[3] **Siddharth Joshi**, Arnav Jain, Ali Payani and Baharan Mirzasoleiman, *[Data-Efficient Contrastive Language-Image Pretraining: Prioritizing Data Quality over Quantity](https://sjoshi804.github.io/data-efficient-clip/)*, **AISTATS 2024**.

[4] Yihao Xue, **Siddharth Joshi**, Dang Nguyen and Baharan Mirzasoleiman, *[Understanding the Robustness of Multi-modal Contrastive Learning to Distribution Shift](https://yihaoxue.github.io/mmcl-project-page/)*, **ICLR 2024**.

[5] Yihao Xue, Eric Gan, Jiayi Ni, **Siddharth Joshi** and Baharan Mirzasoleiman, *[Investigating the Benefits of Projection Head for Representation Learning](https://yihaoxue.github.io/projection-head-project-page/)*, **ICLR 2024**.

[6] **Siddharth Joshi** and Baharan Mirzasoleiman, *[Data-Efficient Contrastive Self-supervised Learning: Most Beneficial Examples for Supervised Learning Contribute the Least](https://sjoshi804.github.io/data-efficient-contrastive-learning/)*, **ICML 2023**.

[7] Yihao Xue, **Siddharth Joshi**, Eric Gan, Pin-Yu Chen and Baharan Mirzasoleiman, *[Which Features are Learnt by Contrastive Learning? On the Role of Simplicity Bias in Class Collapse and Feature Suppression](https://sjoshi804.github.io/icml-cc-fs/)*, **ICML 2023 (Oral)**.

[8] **Siddharth Joshi\***, Yuhan Liu\* and Baharan Mirzasoleiman, *[Low Rank Pruning via Output Perturbation](https://drive.google.com/file/d/1FhuJxrbW554UsMt92WR5B1sCaw8P1odl/view)*, **[Sparsity in Neural Networks Workshop](https://www.sparseneural.net) 2022**.


\* = equal contribution

Preprints
=============

[1] **Siddharth Joshi**, Hao Yin, Raghav Adiga, Riccardo Monti, Andres Carranza, Alyssa Fang, Aidan Deng, Amro Abbas, et al., *[DatBench: Discriminative, Faithful, and Efficient VLM Evaluations](https://arxiv.org/abs/2601.02316)*, arXiv 2026.

[2] Andres G. Carranza, Kyle Mentzer, Riccardo P. Monti, Alyssa Fang, ... **Siddharth Joshi**, et al., *[ÜberWeb: Insights from Multilingual Curation for a 20-Trillion-Token Dataset](https://arxiv.org/abs/2602.15210)*, arXiv 2026.

[3] Pratyush Maini, Vishaal Dorna, Parth Doshi, Andres Carranza, ... **Siddharth Joshi**, et al., *[BeyondWeb: Lessons from Scaling Synthetic Data for Trillion-scale Pretraining](https://arxiv.org/abs/2508.10975)*, arXiv 2025.

[4] Lee Merrick, Alyssa Fang, Andres Carranza, Aidan Deng, Amro Abbas, Ben Larsen, Chad Blakeney, ... **Siddharth Joshi**, et al., *[Luxical: High-Speed Lexical-Dense Text Embeddings](https://arxiv.org/abs/2512.09015)*, arXiv 2025.

[5] **Siddharth Joshi**, Yu Yang, Yihao Xue, Wenhan Yang and Baharan Mirzasoleiman, *[Towards Mitigating Spurious Correlations in the Wild: A Benchmark & New Datasets](https://arxiv.org/abs/2306.11957)*, arXiv.


