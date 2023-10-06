import{_ as l}from"./chunks/Badge.f1f0797b.js";import{_ as p,i as o,z as n,k as s,G as e,O as t,h as r}from"./chunks/framework.1a1d6641.js";const h=JSON.parse('{"title":"LeetCode 面试题 16.11. 跳水板","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/recursion-backtracking/16.11.md","lastUpdated":1696236510000}'),c={name:"algorithm/recursion-backtracking/16.11.md"},y={id:"leetcode-面试题-16-11-跳水板",tabindex:"-1"},D=n("a",{class:"header-anchor",href:"#leetcode-面试题-16-11-跳水板","aria-label":'Permalink to "LeetCode 面试题 16.11. 跳水板 <Badge type="tip" text="简单" />"'},"​",-1),F=t(`<h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为 shorter，长度较长的木板长度为 longer。你必须正好使用 k 块木板。编写一个方法，生成跳水板所有可能的长度。</p><p>返回的长度需要从小到大排列。</p><p>示例 1</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">输入：</span></span>
<span class="line"><span style="color:#BABED8;">shorter </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#BABED8;">longer </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">k </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#BABED8;">输出： [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">解释：</span></span>
<span class="line"><span style="color:#BABED8;">可以使用 </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;"> 次 shorter，得到结果 </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">；使用 </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;"> 次 shorter 和 </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;"> 次 longer，得到结果 </span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;"> 。以此类推，得到最终结果。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>提示：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> shorter </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#BABED8;"> longer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#BABED8;"> k </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">100000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>来源：力扣（LeetCode）链接：<a href="https://leetcode-cn.com/problems/diving-board-lcci" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/diving-board-lcci</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>排列组合也算比较简单，需要 <code>k</code> 个板子，当我们短板有 <code>i</code> 个的时候，长板子就是 <code>k-i</code> 个，由于题目要求是将结果从小到大进行排序，那么我们起初就尽可能多的取短板子，最后结果就是通过 <code>[0,k]</code> 范围内遍历一遍即可。</p><p>对于特殊情况，即短板和长板长度相同时，我们只需要返回 <code>k*len</code> 即可，不然会重复计算。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-14ya1" id="tab-WQyVAp6" checked="checked"><label for="tab-WQyVAp6">javascript</label><input type="radio" name="group-14ya1" id="tab-f8yjTDF"><label for="tab-f8yjTDF">cpp</label><input type="radio" name="group-14ya1" id="tab-wQy8w4G"><label for="tab-wQy8w4G">java</label><input type="radio" name="group-14ya1" id="tab-GKST4qd"><label for="tab-GKST4qd">python</label></div><div class="blocks"><div class="language-javascript active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> divingBoard </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">shorter</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">longer</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">k</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">shorter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">longer</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#BABED8;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">shorter</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">k</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">--</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">shortCnt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">longCnt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">cnt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">shortCnt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">shorter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">longCnt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">longer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">cnt</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">divingBoard</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">shorter</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">longer</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">k</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">k </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">shorter </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> longer</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">k </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> shorter</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">        vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> k</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">--)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> shortCnt </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> longCnt </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> k </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> cnt </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> shortCnt </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> shorter </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> longCnt </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> longer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">cnt</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">public</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">divingBoard</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">shorter</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">longer</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">k</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">k </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">shorter </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> longer</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]{</span><span style="color:#BABED8;">k </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> shorter</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#BABED8;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">k </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#BABED8;"> k</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> shortCnt </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> longCnt </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> k </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> cnt </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> shortCnt </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> shorter </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> longCnt </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> longer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            res</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> cnt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">divingBoard</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">shorter</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">longer</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">k</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#BABED8;"> List</span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> k </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> shorter </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> longer</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">k </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> shorter</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#BABED8;">        res </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">k </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">            shortCnt </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> i</span></span>
<span class="line"><span style="color:#BABED8;">            longCnt </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> k </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> i</span></span>
<span class="line"><span style="color:#BABED8;">            cnt </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> shortCnt </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> shorter </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> longCnt </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> longer</span></span>
<span class="line"><span style="color:#BABED8;">            res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cnt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> res</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></div></div><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">学如逆水行舟，不进则退</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,13);function i(B,A,E,b,d,u){const a=l;return r(),o("div",null,[n("h1",y,[s("LeetCode 面试题 16.11. 跳水板 "),e(a,{type:"tip",text:"简单"}),s(),D]),F])}const g=p(c,[["render",i]]);export{h as __pageData,g as default};
