1. **Layer Contract**
说明这一层负责什么、不负责什么、输入输出是什么、谁可以调用它、谁不能绕过它

2. **Boundary Rules**
   说明层与层之间的禁止事项，重点不是流程图，而是禁止跨层直连

3. **Invariant List**
   用接近伪代码或规则文本写不可破坏条件

4. **Type Surface**
   固定术语和最小类型名

5. **Allowed Flows**


6. **Forbidden Flows**
   专门写“不允许的捷径”

7. **Failure Semantics**
   定义失败如何被世界化

现在我们需要设计一些施工规范roadmap，我现在完全不着急写代码
重要的是我需要在蓝图层面制定战略
在施工前需要什么材料，比如由顶层到底层细节：
1.Layer Contract
2.Boundary Rules
3.Invariant List
4.Type Surface
...