import{_ as l,i,h as a,O as e}from"./chunks/framework.1a1d6641.js";const r="/notes/assets/进程五种状态转换图.e3e1f6ae.png",g=JSON.parse('{"title":"操作系统","description":"","frontmatter":{"author":"HearLing"},"headers":[],"relativePath":"basic/os_net_browser/01_os.md","lastUpdated":1696236510000}'),o={name:"basic/os_net_browser/01_os.md"},t=e('<h1 id="操作系统" tabindex="-1">操作系统 <a class="header-anchor" href="#操作系统" aria-label="Permalink to &quot;操作系统&quot;">​</a></h1><h2 id="什么是操作系统" tabindex="-1">什么是操作系统？ <a class="header-anchor" href="#什么是操作系统" aria-label="Permalink to &quot;什么是操作系统？&quot;">​</a></h2><p>提到操作系统，其实我们并不陌生，比如 Windows、Linux、Mac 等等的这些都是操作系统，但我们不能这样浅显的回答。</p><p>操作系统他是计算机硬件和应用之间的一层软件。为了我们能更方便高效的使用硬件。</p><h2 id="操作系统的主要功能-做什么" tabindex="-1">操作系统的主要功能（做什么）？ <a class="header-anchor" href="#操作系统的主要功能-做什么" aria-label="Permalink to &quot;操作系统的主要功能（做什么）？&quot;">​</a></h2><ul><li><strong>处理器（CPU）管理</strong>：CPU 的管理和分配，主要指的是进程管理。</li><li><strong>内存管理</strong>：内存的分配和管理，主要利用了虚拟内存的方式。</li><li><strong>外存管理</strong>：外存（磁盘等）的分配和管理，将外存以文件的形式提供出去。</li><li><strong>I/O 管理</strong>：对输入/输出设备的统一管理。</li></ul><h2 id="进程和线程" tabindex="-1">进程和线程 <a class="header-anchor" href="#进程和线程" aria-label="Permalink to &quot;进程和线程&quot;">​</a></h2><h2 id="进程和线程的区别与联系" tabindex="-1">进程和线程的区别与联系 <a class="header-anchor" href="#进程和线程的区别与联系" aria-label="Permalink to &quot;进程和线程的区别与联系&quot;">​</a></h2><p>一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程。线程依赖于进程而存在，<strong>线程是进程当中的⼀条执⾏流程</strong>。进程间不会相互影响，线程一个线程挂掉将导致整个进程挂掉。</p><p><strong>区别</strong></p><ul><li><p>关系：各自概念，如上文。</p></li><li><p>调度：进程是资源分配的最小单位，线程是 CPU 调度的最小单位。</p></li><li><p>资源：进程在执行过程中拥有独立的内存单元，而多个线程共享进程的内存。</p></li><li><p>通信：进程间通信 IPC，线程间可以直接读写进程数据段（如全局变量）来进行通信——需要进程同步和互斥手段的辅助，以保证数据的一致性。在有的系统中，线程的切换、同步和通信都无须操作系统内核的干预。</p></li><li><p>系统开销：进程的开销大于线程的开销。由于在创建或撤消进程时，系统都要为之分配或回收资源。因此，操作系统所付出的开销将显著地大于在创建或撤消线程时的开销。在进行进程切换时，涉及到整个当前进程 CPU 环境的保存以及新被调度运行的进程的 CPU 环境的设置。而线程切换只须保存和设置少量寄存器的内容，并不涉及存储器管理方面的操作。</p></li></ul><h2 id="并行与并发" tabindex="-1">并行与并发 <a class="header-anchor" href="#并行与并发" aria-label="Permalink to &quot;并行与并发&quot;">​</a></h2><p>并发就是在一段时间内，多个任务都会被处理；但在某一时刻，只有一个任务在执行。单核处理器做到的并发，其实是利用时间片的轮转，例如有两个进程 A 和 B，A 运行一个时间片之后，切换到 B，B 运行一个时间片之后又切换到 A。因为切换速度足够快，所以宏观上表现为在一段时间内能同时运行多个程序。</p><p>并行就是在同一时刻，有多个任务在执行。这个需要多核处理器才能完成，在微观上就能同时执行多条指令，不同的程序被放到不同的处理器上运行，这个是物理上的多个进程同时进行。</p><h2 id="进程的状态有哪些" tabindex="-1">进程的状态有哪些？ <a class="header-anchor" href="#进程的状态有哪些" aria-label="Permalink to &quot;进程的状态有哪些？&quot;">​</a></h2><p><img src="'+r+'" alt=""></p><p>进程可以分为五个状态：创建状态、就绪状态、运行状态、阻塞状态、终止状态。</p><p><strong>创建状态</strong></p><p>一个应用程序从系统上启动，首先就是进入创建状态，需要获取系统资源创建进程管理块（PCB：Process Control Block）完成资源分配。</p><p><strong>就绪状态</strong></p><p>在创建状态完成之后，进程已经准备好，但是还未获得处理器资源，无法运行。</p><p><strong>运行状态</strong></p><p>获取处理器资源，被系统调度，开始进入运行状态。如果进程的时间片用完了就进入就绪状态。</p><p><strong>阻塞状态</strong></p><p>进程正在等待某⼀事件发⽣（如等待 I/O 操作的完成）⽽暂时停⽌运⾏，此时进程暂时无法操作就进入到了阻塞状态，在这些操作完成后就进入就绪状态。</p><p><strong>终止状态</strong></p><p>进程正在从系统中消失时的状态。</p><h2 id="进程的调度算法" tabindex="-1">进程的调度算法 <a class="header-anchor" href="#进程的调度算法" aria-label="Permalink to &quot;进程的调度算法&quot;">​</a></h2><p>1.先到先服务（FIFS）：先请求的进程优先得到服务，根据 ready 队列的顺序，排在前面的进程先得到服务</p><p>2.最短作业优先（SJF）：按估计运行时间最短的顺序进行调度。长作业有可能会饿死，处于一直等待短作业执行完毕的状态。</p><p>3.优先级调度:给每个进程分配优先级，高优先级的进程首先获得 cpu 时间。优先级低的进程可能会饿死，永远也无法得到执行。</p><p>4.轮旋调度（RR 调度）：轮流按就绪队列的顺序为每一个进程分配时间片，当一个正在执行的进程的时间片用完了，那么将该进程放回就绪队列中，并从就绪队列中换上另一个进程，为其分配时间片。</p><p>5.多级队列调度：将进程分成不同的队列，每一个队列内有各自的算法，每个队列间有不同的优先级。</p><h2 id="进程之间的通信方式" tabindex="-1">进程之间的通信方式？ <a class="header-anchor" href="#进程之间的通信方式" aria-label="Permalink to &quot;进程之间的通信方式？&quot;">​</a></h2><p>进程间通信主要包括管道、系统 IPC（包括消息队列、信号量、信号、共享内存等）、以及套接字 socket。</p><ul><li><strong>管道</strong>，管道可用于具有亲缘关系的父子进程间的通信，命名管道除了具有管道所具有的功能外，它还允许无亲缘关系进程间的通信。</li></ul><details><summary>详情</summary><ul><li>匿名管道 PIPE： <ul><li>它是半双工的（即数据只能在一个方向上流动），具有固定的读端和写端</li><li>它只能用于具有亲缘关系的进程之间的通信（也是父子进程或者兄弟进程之间）</li><li>它可以看成是一种特殊的文件，对于它的读写也可以使用普通的 read、write 等函数。但是它不是普通的文件，并不属于其他任何文件系统，并且只存在于内存中。</li></ul></li><li>命名管道 FIFO <ul><li>FIFO 可以在无关的进程之间交换数据</li><li>FIFO 有路径名与之相关联，它以一种特殊设备文件形式存在于文件系统中。</li></ul></li></ul></details><ul><li><strong>系统 IPC</strong>，系统 IPC 包括消息队列、信号量、信号、共享内存等</li></ul><p>消息队列：是消息的链接表，存放在内核中。</p><p>信号量 semaphore：它是一个计数器，可以用来控制多个进程对共享资源的访问。</p><p>信号 signal：信号是一种比较复杂的通信方式，用于通知接收进程某个事件已经发生。</p><p>共享内存（Shared Memory）：它使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据得更新。</p><details><summary>详情</summary><p>消息队列特点：</p><ul><li>消息队列是面向记录的，其中的消息具有特定的格式以及特定的优先级。</li><li>消息队列独立于发送与接收进程。进程终止时，消息队列及其内容并不会被删除。</li><li>消息队列可以实现消息的随机查询,消息不一定要以先进先出的次序读取,也可以按消息的类型读取。</li></ul><p>信号量特点：</p><ul><li>信号量用于进程间同步，若要在进程间传递数据需要结合共享内存。</li><li>信号量基于操作系统的 PV 操作，程序对信号量的操作都是原子操作。</li><li>每次对信号量的 PV 操作不仅限于对信号量值加 1 或减 1，而且可以加减任意正整数。</li><li>支持信号量组。</li></ul><p>共享内存特点：</p><ul><li>共享内存是最快的一种 IPC，因为进程是直接对内存进行存取</li><li>因为多个进程可以同时操作，所以需要进行同步</li><li>信号量+共享内存通常结合在一起使用，信号量用来同步对共享内存的访问</li></ul></details><ul><li><strong>套接字 SOCKET</strong>，socket 也是一种进程间通信机制，与其他通信机制不同的是，它可用于不同主机之间的进程通信。</li></ul><details><summary>详情</summary><ul><li>临界区：通过多线程的串行化来访问公共资源或一段代码，速度快，适合控制数据访问</li><li>互斥量 Synchronized/Lock：采用互斥对象机制，只有拥有互斥对象的线程才有访问公共资源的权限。因为互斥对象只有一个，所以可以保证公共资源不会被多个线程同时访问</li><li>信号量 Semphare：为控制具有有限数量的用户资源而设计的，它允许多个线程在同一时刻去访问同一个资源，但一般需要限制同一时刻访问此资源的最大线程数目</li><li>事件(信号)，Wait/Notify：通过通知操作的方式来保持多线程同步，还可以方便的实现多线程优先级的比较操作进程间通信的方式</li><li>进程间通信主要包括管道、系统 IPC（包括消息队列、信号量、信号、共享内存等）、以及套接字 socket</li></ul></details><h2 id="线程间如何同步" tabindex="-1">线程间如何同步？ <a class="header-anchor" href="#线程间如何同步" aria-label="Permalink to &quot;线程间如何同步？&quot;">​</a></h2><p>线程间同步主要有互斥量、读写锁、条件变量、自旋锁、屏障等 5 种方式。</p><ol><li><p>互斥量（mutex）：主要用于保护共享数据，确保同一时间只有一个线程访问数据。互斥量从本质上来说是一把锁，在访问共享资源前对互斥量进行加锁，访问完成后释放互斥量（解锁）。对互斥量进行加锁之后，任何其他试图再次对互斥量加锁的线程都会被阻塞直到当前线程释放该互斥锁。这样就可以保证每次只有一个线程可以向前执行。</p></li><li><p>读写锁（reader-writer lock）：读写锁也叫做共享互斥锁（shared-exclusive lock），它有三种状态：读模式下加锁状态、写模式下加锁状态、不加锁状态。一次只能有一个线程可以占有写模式的读写锁，但是多个线程可以同时战友读模式的读写锁。因此与互斥量相比，读写锁允许更高的并行性。读写锁非常适合对数据结构读的次数远大于写的情况。</p></li><li><p>条件变量：是线程可用的另一种同步机制。条件变量给多个线程提供了一个会合的场所。条件变量与互斥量一起使用时，允许线程以无竞争的方式等待特定的条件发生。条件本身是由互斥量保护的。线程在改变条件状态之前必须首先锁住互斥量。其他线程在获得互斥量之前不会察觉到这种改变，因此互斥量必须在锁住以后才能计算条件。</p></li><li><p>自旋锁：自旋锁与互斥量类似，但它不是通过休眠使进程阻塞，而是在获取所之前一直处于忙等（自旋）阻塞状态。自旋锁可用于以下情况：锁被持有的时间短，而且线程并不希望在重新调度上花费太多的成本。自旋锁用在非抢占式内核中时是非常有用的，除了提供互斥机制以外，还可以阻塞中断，这样中断处理程序就不会陷入死锁状态。</p></li><li><p>屏障（barrier）：是用户协调多个线程并行工作的同步机制。屏障允许每个线程等待，直到所有的合作线程都到达某一点，然后从该点继续执行。</p></li></ol><h2 id="什么是死锁-怎么产生和避免" tabindex="-1">什么是死锁？怎么产生和避免？ <a class="header-anchor" href="#什么是死锁-怎么产生和避免" aria-label="Permalink to &quot;什么是死锁？怎么产生和避免？&quot;">​</a></h2><p>当两个线程为了保护两个不同的共享资源而使用了两个互斥锁，那么这两个互斥锁应用不当的时候，可能会造成两个线程都在等待对方释放锁，在没有外力的作用下，这些线程会一直相互等待，无法继续运行发生死锁。</p><p>产生条件：</p><ol><li><p>互斥条件：多个线程不能同时使用同一个资源。例如线程 A 已经持有的资源，不能再同时被线程 B 持有，如果线程 B 请求获取线程 A 已经占用的资源，那线程 B 只能等待，直到线程 A 释放了资源。</p></li><li><p>持有并等待条件：持有资源还在等待其它资源。例如：在上例子中，线程 A 持有资源 1 还需申请资源 2，线程 A 在等待资源 2 的同时并不会释放自己已经持有的资源 1。</p></li><li><p>不可剥夺条件：当线程已经持有了资源 ，在自己使用完之前不能被其他线程获取。例如：当线程已经持有了资源 ，在自己使用完之前不能被其他线程获取。</p></li><li><p>环路等待条件：两个线程获取资源的顺序构成了环形链。例如：线程 A 已经持有资源 2，而想请求资源 1， 而线程 B 持有资源 1，而想请求资源 2，这就形成资源请求等待的环形图。</p></li></ol><p>避免：最常见且可行的就是使用<strong>资源有序分配法</strong>，来破环环路等待条件。</p><p>上述例子的改造即：线程 B 函数，同线程 A 一样，先获取互斥锁 A，然后获取互斥锁 B，使资源有序分配。</p><h2 id="硬链接与软连接区别" tabindex="-1">硬链接与软连接区别 <a class="header-anchor" href="#硬链接与软连接区别" aria-label="Permalink to &quot;硬链接与软连接区别&quot;">​</a></h2><p>硬链接：新建的文件是已经存在的文件的一个别名，当原文件删除时，新建的文件仍然可以使用.</p><p>软链接：也称为符号链接，新建的文件以“路径”的形式来表示另一个文件，和 Windows 的快捷方式十分相似，新建的软链接可以指向不存在的文件.</p><ul><li><p>硬链接和原来的文件没有什么区别，而且共享一个 inode 号（文件在文件系统上的唯一标识）；而软链接不共享 inode，也可以说是个特殊的 inode，所以和原来的 inode 有区别。</p></li><li><p>若原文件删除了，则该软连接则不可以访问，而硬连接则是可以的。</p></li><li><p>由于符号链接的特性，导致其可以跨越磁盘分区，但硬链接不具备这个特性.</p></li></ul>',58),p=[t];function s(n,h,d,u,c,m){return a(),i("div",null,p)}const P=l(o,[["render",s]]);export{g as __pageData,P as default};