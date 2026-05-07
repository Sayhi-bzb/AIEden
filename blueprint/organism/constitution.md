1. **连续性优先**
   Organism 是连续生命轨迹，不是一次性响应。身份、生命周期、上下文边界必须可追认。

2. **kernel 最小不可见**
   `.kernel/` 只保存生命维持所必需、且不可暴露给 organism 的机制。

3. **self 可见可损坏**
   `self/` 是 organism 的身体表面。可见、可用、可演化，也可损坏。

4. **感知受限**
   Organism 只能接收经过 gate、projection 或 action_result 折叠后的感知帧。

5. **输出不是行动**
   BrainOutput 只产生文本。行动必须经 ActionIntent、organ、gate、universe 后才可能生效。

6. **能力必须具身化**
   能力必须通过 organ 暴露。Prompt、后台工具、宿主命令都不直接构成身体。

7. **死亡是生命边界**
   Organism 无法维持连续性时进入死亡。死亡不是普通异常，也不得无痕撤销。

