import{_ as s,i as n,h as a,O as l}from"./chunks/framework.1a1d6641.js";const D=JSON.parse('{"title":"动态规划","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/dp/index.md","lastUpdated":1696594150000}'),p={name:"algorithm/dp/index.md"},o=l(`<h1 id="动态规划" tabindex="-1">动态规划 <a class="header-anchor" href="#动态规划" aria-label="Permalink to &quot;动态规划&quot;">​</a></h1><p><strong>解决动态规划题的思路分为两步：<code>先想好了思路，再动手实现</code></strong></p><ol><li>思路 -&gt; <code>确定状态转移方程(相同问题在不同规模下的关系)</code></li><li>实现</li></ol><h3 id="什么是确定状态转移方程" tabindex="-1">什么是确定状态转移方程？ <a class="header-anchor" href="#什么是确定状态转移方程" aria-label="Permalink to &quot;什么是确定状态转移方程？&quot;">​</a></h3><p><code>确定状态转移方程</code>其实就是一个<code>关系</code>，<code>相同问题在不同规模下的关系</code>，看起来很抽象对吧，简单来讲，就是通过总结的规律，推导出数学公式。</p><p>比如动态规划的入门题目，求斐波那契数列第<code>n</code>位的值，我们知道，斐波那契前七位如下:</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">1</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">8</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">13</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我们使者来找一下规律:</p><ul><li>第一位为<code>1</code>, 第二位为<code>1</code>, 第三位为 <code>2</code>, 第四位为 <code>3</code></li><li><code>每一位</code> = <code>前两位数之和</code></li></ul><p>假设我们有个函数名叫 <code>dp(n)</code></p><ul><li><code>dp(n)</code> 中的 <code>n</code> 就表示<code>相同问题在不同规模下的关系</code> 这就话中的 <code>不同规模</code></li><li><code>n</code> 越大, 问题的规模就越大</li><li><code>dp(4)</code>表示求斐波那契数第4位的值, <code>dp(5)</code>表示第5位, <code>dp(6)</code>表示第6位...</li></ul><p>所以我们推导出下面规律:</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">6</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">5</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(n) </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(n </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(n </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><code>dp(6)</code> <code>dp(5)</code> <code>dp(4)</code> 是三个不同规模的问题,他们解决的是相同的问题,都是求斐波那契数列某一位的值, 但规模不一样。</li><li>所以 <code>dp(6)</code> <code>dp(5)</code> <code>dp(4)</code> 之间的关系我们称之为<code>状态转移方程</code>,也就是 <code>dp(n) = dp(n - 1) + dp(n - 2)</code></li></ul><p>然后，我们在确定状态转移方程的时候，往往需要考虑一些<code>特殊解</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">6</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">5</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(n) </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(n </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(n </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 考虑特殊解</span></span>
<span class="line"><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><details class="details custom-block"><summary>斐波那契数列的动态转移方程</summary><p>当 n &gt; 2</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(n) </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(n </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(n </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当 n &lt;= 2</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">dp</span><span style="color:#BABED8;">(n) </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>所以我们很容易能实现代码:</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">n</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// if (n === 1 || n === 2) return 1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details><h3 id="寻找状态转移方程的一般性步骤" tabindex="-1">寻找状态转移方程的一般性步骤 <a class="header-anchor" href="#寻找状态转移方程的一般性步骤" aria-label="Permalink to &quot;寻找状态转移方程的一般性步骤&quot;">​</a></h3><ol><li>找到相同问题(重叠子问题), 「相同问题」必须能适配不同的规模</li><li>找到重叠子问题 之间的关系</li><li>找到重叠子问题之间的 <code>特殊解</code></li></ol>`,19),e=[o];function c(t,r,d,i,y,F){return a(),n("div",null,e)}const A=s(p,[["render",c]]);export{D as __pageData,A as default};