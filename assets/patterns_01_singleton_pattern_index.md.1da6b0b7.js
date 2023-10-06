import{_}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.04993f90.js";import{f as d,h as u,i as b,k as p,t as F,u as l,F as h,z as a,r as E,G as t,B,O as m}from"./chunks/framework.1a1d6641.js";const f=a("br",null,null,-1),C=d({__name:"demo1",setup(r){let n=0;class o{getInstance(){return this}getCount(){return n}increment(){return++n}decrement(){return--n}}const s=new o,e=new o;return(A,S)=>(u(),b(h,null,[p(" 我们来比对一下结果："),f,p(" counter1.getInstance() === counter2.getInstance() 的结果是："+F(l(s).getInstance()===l(e).getInstance()),1)],64))}});let D,c=0;class g{constructor(){if(D)throw new Error("You can only create one instance!");D=this}getInstance(){return this}getCount(){return c}increment(){return++c}decrement(){return--c}}const i=Object.freeze(new g),y=Object.freeze(D),v=a("br",null,null,-1),k=a("br",null,null,-1),q=a("br",null,null,-1),x=a("br",null,null,-1),w=d({__name:"demo2",setup(r){const n=E(0);return(o,s)=>(u(),b(h,null,[p(" 点击如下按钮："),v,p(" 按钮 1 和按钮 2 点击事件使用的实例"+F(l(i).getInstance()===l(y).getInstance()?"相同":"不同")+" ",1),k,a("button",{onClick:s[0]||(s[0]=e=>n.value=l(i).increment())}," 按钮 1 点击增加 "),a("button",{onClick:s[1]||(s[1]=e=>n.value=l(i).decrement())}," 按钮 1 点击减少 "),a("button",{onClick:s[2]||(s[2]=e=>n.value=l(y).increment())}," 按钮 2 点击增加 "),a("button",{onClick:s[3]||(s[3]=e=>n.value=l(y).decrement())}," 按钮 2 点击减少 "),q,x,p(" count 结果："+F(n.value),1)],64))}}),T=m(`<h1 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>还记得当年校招的时候，我鼓起勇气吹了自己懂一点设计模式，本来以为会是面试利器，可以和面试官交流一波。</p><p>没想到第一个问的就是单例模式，而我当时就大概学了一手 vue 源码中的代理模式和装饰者模式。</p><p>我当时的回答是，单例模式就是只能实例化一次，单个实例...</p><p>现如今当我真正了解了单例模式之后，越发觉得当时知识点是多么的浅陋。</p><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>单例模式中的单例就是指实例化一次，就可以在全局访问了，也就是在整个应用程序中均可以共享。</p><p>直接看下面这个例子：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Counter</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">getInstance</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">getCount</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">counter</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">counter</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">decrement</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">counter</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>上述代码，还会有问题，单例模式只能实例化一次，如下所示，我们可以多次实例化，实例化出来的对象也是可以修改的。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line diff add"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> counter1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#BABED8;">() </span></span>
<span class="line diff add"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> counter2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#BABED8;">() </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2>`,13),j=m(`<h2 id="解决多次实例化以及可修改问题" tabindex="-1">解决多次实例化以及可修改问题 <a class="header-anchor" href="#解决多次实例化以及可修改问题" aria-label="Permalink to &quot;解决多次实例化以及可修改问题&quot;">​</a></h2><p>对于多实例化问题，我们可以通过变量来保存一下实例，如果实例化过了，那么就会有报错提示，如下创建了一个 instance 变量。</p><p>对于可修改问题，我们可以将实例化出来的对象用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" target="_blank" rel="noreferrer">Object.freeze()</a> 方法<code>冻结</code>一下。</p><blockquote><p>一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> instance</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Counter</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">instance</span><span style="color:#F07178;">)</span></span>
<span class="line highlighted"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">You can only create one instance!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#BABED8;">instance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">getInstance</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">getCount</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">counter</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">counter</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">decrement</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">counter</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> singletonCounter </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">freeze</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#BABED8;">()) </span></span>
<span class="line highlighted"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> singletonCounter </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>基于以上代码，我们在不同文件引入，当我们调用增加或者减少的时候，会发现 count 值都会变化。</p><h2 id="demo-1" tabindex="-1">Demo <a class="header-anchor" href="#demo-1" aria-label="Permalink to &quot;Demo&quot;">​</a></h2>`,7),P=m(`<h2 id="优缺点" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点" aria-label="Permalink to &quot;优缺点&quot;">​</a></h2><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><p>通过限制仅仅实例化一次，即只有单个实例，可以节省大量内存空间，我们不必每次都 new 一下，开新的空间了。</p><p>不过由于 JavaScript 特殊性，我们其实可以直接创建对象，根本不需要 new，其它面向对象的编程语言（比如 Java、C++），需要创建类 class，然后再 new 一个对象，也就是我们常常说的，没对象咋办，自己 new 一个呗~</p><p>如下，我们不需要像上文那样利用 class 然后再 new 一个对象，而可以直接创建一个对象：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">count</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">decrement</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">--</span><span style="color:#BABED8;">count</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">freeze</span><span style="color:#BABED8;">(counter)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="不足" tabindex="-1">不足 <a class="header-anchor" href="#不足" aria-label="Permalink to &quot;不足&quot;">​</a></h3><ul><li>测试</li></ul><p>对于自动化测试来说的话，因为不能新创建实例，这就会导致之后的测试用例会依赖于之前的测试，那么在测试的过程中顺序很重要。</p><ul><li>全局问题</li></ul><p>单例模式共享很好，但是把一个变量放在全局多多少少会出现一些意外的问题。还有一种是组件之前相互依赖，那么对于数据流的理解也会变得复杂，在不同的组件调用来调用去，代码逻辑也会显得很混乱。</p><h2 id="react-当中的状态管理" tabindex="-1">React 当中的状态管理 <a class="header-anchor" href="#react-当中的状态管理" aria-label="Permalink to &quot;React 当中的状态管理&quot;">​</a></h2><p>在 React 中，想必大家也比较熟悉了，常用的 Redux 以及相关的拓展工具，还有 React 的一个 Hook，React Context，以及我平常也会用的 <a href="https://recoiljs.org/zh-hans/" target="_blank" rel="noreferrer">Recoil</a>。</p><p>这些只能说是与单例模式相似，但从概念和定义来看，其实是对于单例模式进行了修改与优化。</p><p>这些工具提供了仅读取状态，而上文所表述的单例模式状态其实是可变的。</p><p>在使用 Redux 时，我们不会直接去操作数据，而是在组件中通过 action 来 dispatch 一下，通知 reducer 帮我们更新数据。</p><p>可能一开始会觉得这样做是不是多此一举了，但其实这样可以避免我们直接操作数据，对于全局共享的值我们又可以进行改变，数据更新就交给 reducer 去做就好了，在组件使用角度，我们依旧还是在读取数据。</p><blockquote><p>文章内容并不代表权威，如若有任何表述问题，欢迎大家提出以及共建文档。</p></blockquote>`,18),O=JSON.parse('{"title":"单例模式","description":"","frontmatter":{"author":"Liaoyi","date":"2023-03-10T00:00:00.000Z"},"headers":[],"relativePath":"patterns/01_singleton_pattern/index.md","lastUpdated":1696236510000}'),I={name:"patterns/01_singleton_pattern/index.md"},V=Object.assign(I,{setup(r){return(n,o)=>{const s=_;return u(),b("div",null,[T,t(s,{pkg:"patterns/singleton-pattern",path:"demo1.vue"},{default:B(()=>[t(C)]),_:1}),j,t(s,{pkg:"patterns/singleton-pattern",path:"demo2.vue"},{default:B(()=>[t(w)]),_:1}),P])}}});export{O as __pageData,V as default};
