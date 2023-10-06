import{_ as i,h as l,i as p,z as o,t as y,a1 as g,a2 as A,Y as F,G as r,B as b,F as f,L as v,a3 as B,D as h,O as m}from"./chunks/framework.1a1d6641.js";const E={data(){return{normalDatas:[],freezeDatas:[]}},methods:{loadNormalDatas(){this.normalDatas=this.getDatas(),console.log("normalDatas",this.normalDatas)},loadFrozenDatas(){this.freezeDatas=Object.freeze(this.getDatas()),console.log("freezeDatas",this.freezeDatas)},getDatas(){const e=[];for(let s=0;s<1e6;s++)e.push({id:s,name:`name${s}`,address:{city:`city${s}`,province:`province${s}`}});return e}}},k={class:"demo",style:{"text-align":"center"}};function C(e,s,d,u,t,a){return l(),p("div",k,[o("button",{onClick:s[0]||(s[0]=(...n)=>a.loadNormalDatas&&a.loadNormalDatas(...n))},"load normal datas"),o("button",{onClick:s[1]||(s[1]=(...n)=>a.loadFrozenDatas&&a.loadFrozenDatas(...n))},"load frozen datas"),o("h1",null,"normal datas count: "+y(t.normalDatas.length),1),o("h1",null,"freeze datas count: "+y(t.freezeDatas.length),1)])}const T=i(E,[["render",C]]);function D(){return Math.random().toString(16).substr(2,5)}const x={data(){return{todos:[{id:D(),content:"完成「vue过渡和动画的」的学习"},{id:D(),content:"看一部电影"},{id:D(),content:"学一首新歌"}],newTodoContent:""}},methods:{addTodo(){this.newTodoContent&&(this.todos.unshift({id:D(),content:this.newTodoContent}),this.newTodoContent="")},finishTodo(e){this.todos=this.todos.filter(s=>s!==e)},shuffle(){this.todos.sort(()=>Math.random()-.5)}}},q={class:"_container demo"},w=["onClick"];function V(e,s,d,u,t,a){return l(),p("div",q,[g(o("input",{type:"text",onKeypress:s[0]||(s[0]=F((...n)=>a.addTodo&&a.addTodo(...n),["enter"])),"onUpdate:modelValue":s[1]||(s[1]=n=>t.newTodoContent=n),placeholder:"input todo"},null,544),[[A,t.newTodoContent]]),o("button",{class:"small",onClick:s[2]||(s[2]=(...n)=>a.shuffle&&a.shuffle(...n))},"随机排序"),r(B,{tag:"ul",name:"todo",class:"todo-container"},{default:b(()=>[(l(!0),p(f,null,v(t.todos,n=>(l(),p("li",{key:n.id,class:"todo"},[o("span",null,y(n.content),1),o("button",{onClick:c=>a.finishTodo(n)},"完成",8,w)]))),128))]),_:1})])}const M=i(x,[["render",V],["__scopeId","data-v-c350029c"]]);function _(){return Math.random().toString(16).substr(2,5)}const S={data(){return{todos:[{id:_(),content:"完成「vue过渡和动画的」的学习"},{id:_(),content:"看一部电影"},{id:_(),content:"学一首新歌"}]}},methods:{addTodo(e){const s=e.target.value;s&&(this.todos.unshift({id:_(),content:s}),e.target.value="")},finishTodo(e){this.todos=this.todos.filter(s=>s!==e)},shuffle(){this.todos.sort(()=>Math.random()-.5)}}},$={class:"_container demo"},z=["onClick"];function P(e,s,d,u,t,a){return l(),p("div",$,[o("input",{type:"text",onKeypress:s[0]||(s[0]=F((...n)=>a.addTodo&&a.addTodo(...n),["enter"])),placeholder:"input todo"},null,32),o("button",{class:"small",onClick:s[1]||(s[1]=(...n)=>a.shuffle&&a.shuffle(...n))},"随机排序"),r(B,{tag:"ul",name:"todo",class:"todo-container"},{default:b(()=>[(l(!0),p(f,null,v(t.todos,n=>(l(),p("li",{key:n.id,class:"todo"},[o("span",null,y(n.content),1),o("button",{onClick:c=>a.finishTodo(n)},"完成",8,z)]))),128))]),_:1})])}const N=i(S,[["render",P],["__scopeId","data-v-a1cba0c4"]]);const I={components:{MyUseModel:M,NoVModel:N}},j={class:"app-container"};function J(e,s,d,u,t,a){const n=h("MyUseModel"),c=h("NoVModel");return l(),p("div",j,[r(n),r(c)])}const U=i(I,[["render",J],["__scopeId","data-v-92b01e16"]]),O="/notes/assets/fun-com.ca86984f.png",K={components:{FreezeDatas:T,VueModel:U}},Q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"basic/vue2/常见优化技巧.md","lastUpdated":1696594150000}'),R=m(`<h2 id="使用key" tabindex="-1">使用key <a class="header-anchor" href="#使用key" aria-label="Permalink to &quot;使用key&quot;">​</a></h2><p>使用 <code>v-for</code> 循环生成列表时，应该给每个列表项一个稳定唯一的<code>key</code>，这有利于在列表数据变动时，尽量少的删除、新增、改动元素。</p><h2 id="使用冻结的对象" tabindex="-1">使用冻结的对象 <a class="header-anchor" href="#使用冻结的对象" aria-label="Permalink to &quot;使用冻结的对象&quot;">​</a></h2><p>将只做展示而不需要改动的数据冻结，冻结对象不会被响应化。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 冻结响应式对象</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> list </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">freeze</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getDatas</span><span style="color:#BABED8;">())</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断对象是否冻结</span></span>
<span class="line"><span style="color:#BABED8;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isFrozen</span><span style="color:#BABED8;">(list)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,5),G=m(`<h2 id="使用函数式组件" tabindex="-1">使用函数式组件 <a class="header-anchor" href="#使用函数式组件" aria-label="Permalink to &quot;使用函数式组件&quot;">​</a></h2><p>参见<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank" rel="noreferrer">函数式组件</a></p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 开启函数式组件，函数式组件不会生成vue组件实例 (new VueComponent)</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">functional</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">functional</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">NormalComp: {{ props.count }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><details class="details custom-block"><summary>注意</summary><p>在vue3中, 函数式组件和普通组之间性能没有区别！</p><p><img src="`+O+'" alt=""></p></details><h2 id="使用计算属性" tabindex="-1">使用计算属性 <a class="header-anchor" href="#使用计算属性" aria-label="Permalink to &quot;使用计算属性&quot;">​</a></h2><p>如果模板中某个数据会使用多次，并且该数据是通过计算得到的，使用计算属性以缓存它们</p><h2 id="非实时绑定的表单项" tabindex="-1">非实时绑定的表单项 <a class="header-anchor" href="#非实时绑定的表单项" aria-label="Permalink to &quot;非实时绑定的表单项&quot;">​</a></h2><p>当使用<code>v-model</code>绑定一个表单项时，当用户改变表单项的状态时，也会随之改变数据，从而导致<code>vue</code>发生重渲染（<code>rerender</code>），这会带来一些性能的开销。</p><p>特别是当用户改变表单项时，页面有一些动画正在进行中，由于JS执行线程和浏览器渲染线程是互斥的，最终会导致动画出现卡顿。</p><p>我们可以通过使用<code>lazy</code>或不使用<code>v-model</code>的方式解决该问题，但要注意，这样可能会导致在某一个时间段内数据和表单项的值是不一致的。</p>',10),L=m(`<h2 id="保持对象引用稳定" tabindex="-1">保持对象引用稳定 <a class="header-anchor" href="#保持对象引用稳定" aria-label="Permalink to &quot;保持对象引用稳定&quot;">​</a></h2><p>在绝大部分情况下，<code>vue</code>触发<code>rerender</code>的时机是其依赖的数据发生<strong>变化</strong></p><p>若数据没有发生变化，哪怕给数据重新赋值了，<code>vue</code>也是不会做出任何处理的</p><p>下面是<code>vue</code>判断数据<strong>没有变化</strong>的源码</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// value 为旧值， newVal 为新值</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> (newVal </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> value </span><span style="color:#89DDFF;">||</span><span style="color:#BABED8;"> (newVal </span><span style="color:#89DDFF;">!==</span><span style="color:#BABED8;"> newVal </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#BABED8;"> value </span><span style="color:#89DDFF;">!==</span><span style="color:#BABED8;"> value)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>因此，如果需要，只要能保证组件的依赖数据不发生变化，组件就不会重新渲染。</p><p>对于原始数据类型，保持其值不变即可</p><p>对于对象类型，保持其引用不变即可</p><p>从另一方面来说，由于可以通过保持属性引用稳定来避免子组件的重渲染，那么我们应该细分组件来尽量避免多余的渲染</p><h2 id="使用v-show替代v-if" tabindex="-1">使用v-show替代v-if <a class="header-anchor" href="#使用v-show替代v-if" aria-label="Permalink to &quot;使用v-show替代v-if&quot;">​</a></h2><p>对于频繁切换显示状态的元素，使用v-show可以保证虚拟dom树的稳定，避免频繁的新增和删除元素，特别是对于那些内部包含大量dom元素的节点，这一点极其重要</p><p>关键字：频繁切换显示状态、内部包含大量dom元素</p><h2 id="使用延迟装载-defer" tabindex="-1">使用延迟装载（defer） <a class="header-anchor" href="#使用延迟装载-defer" aria-label="Permalink to &quot;使用延迟装载（defer）&quot;">​</a></h2><p>首页白屏时间主要受到两个因素的影响：</p><ul><li><p>打包体积过大</p><p>巨型包需要消耗大量的传输时间，导致JS传输完成前页面只有一个<code>&lt;div&gt;</code>，没有可显示的内容</p></li><li><p>需要立即渲染的内容太多</p><p>JS传输完成后，浏览器开始执行JS构造页面。</p><p>但可能一开始要渲染的组件太多，不仅JS执行的时间很长，而且执行完后浏览器要渲染的元素过多，从而导致页面白屏</p></li></ul><p>打包体积过大需要自行优化打包体积，本节不予讨论</p><p>本节仅讨论渲染内容太多的问题。</p><p>一个可行的办法就是<strong>延迟装载组件</strong>，让组件按照指定的先后顺序依次一个一个渲染出来</p><blockquote><p>延迟装载是一个思路，本质上就是利用<code>requestAnimationFrame</code>事件分批渲染内容，它的具体实现多种多样</p></blockquote><h2 id="使用keep-alive" tabindex="-1">使用keep-alive <a class="header-anchor" href="#使用keep-alive" aria-label="Permalink to &quot;使用keep-alive&quot;">​</a></h2><h2 id="长列表优化" tabindex="-1">长列表优化 <a class="header-anchor" href="#长列表优化" aria-label="Permalink to &quot;长列表优化&quot;">​</a></h2>`,21);function Y(e,s,d,u,t,a){const n=h("FreezeDatas"),c=h("VueModel");return l(),p("div",null,[R,r(n),G,r(c),L])}const W=i(K,[["render",Y]]);export{Q as __pageData,W as default};
