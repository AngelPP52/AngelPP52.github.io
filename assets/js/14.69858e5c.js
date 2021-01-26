(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{449:function(t,e,a){t.exports=a.p+"assets/img/lcs-git-flow.2253b54f.png"},450:function(t,e,a){t.exports=a.p+"assets/img/example1.95945985.png"},451:function(t,e,a){t.exports=a.p+"assets/img/example2.a00e9327.png"},452:function(t,e,a){t.exports=a.p+"assets/img/conflict.2f6d4a08.jpg"},487:function(t,e,a){"use strict";a.r(e);var r=a(44),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"a-代码开发流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-代码开发流程"}},[t._v("#")]),t._v(" a). 代码开发流程")]),t._v(" "),r("p",[t._v("尽管 git 命令很多，但平时用得最多的只有以下几个命令：")]),t._v(" "),r("ul",[r("li",[t._v("git clone")]),t._v(" "),r("li",[t._v("git checkout {branch_name}")]),t._v(" "),r("li",[t._v("git pull origin {branch_name}")]),t._v(" "),r("li",[t._v("git checkout -b {branch_name}")]),t._v(" "),r("li",[t._v("git add .")]),t._v(" "),r("li",[t._v('git commit -m "xxx"')]),t._v(" "),r("li",[t._v("git push origin {branch_name}")]),t._v(" "),r("li",[t._v("git merge {branch_name}")])]),t._v(" "),r("p",[t._v("而掌握 git 命令并不代表能把 git 团队协作玩好")]),t._v(" "),r("p",[t._v("当前 LCS 的代码开发流程如下：")]),t._v(" "),r("ol",[r("li",[t._v("从"),r("strong",[t._v("最新的 master 分支")]),t._v("拉取 feautre 分支，每个 feature 分支至少需要关联一个 jira，本地进行开发，自测完成后可合入 test 分支进行提测环节")]),t._v(" "),r("li",[t._v("当需求测试完成后，将 feature 分支合入到 uat 分支")]),t._v(" "),r("li",[t._v("UAT 完成后，提交 feature 分支的 merge request 至版本分支（版本分支从最新的 master 分支拉取），code review 完成后才进行合并，"),r("strong",[t._v("如果有冲突，务必在自己的 feature 分支解决")])]),t._v(" "),r("li",[t._v("版本分支合并到 master ，QA 基于 master 分支进行发版前的回归测试，如果回归测试过程中发现仍有代码需要修改，要么在原先的 feature 分支进行修复，要么从最新的 master 分支拉出新的 feature 分支进行修复，并提交从 feature 分支到 master 分支的 merge request")]),t._v(" "),r("li",[t._v("回归测试完成后，从 master 分支合并到 release 分支，并打上标记版本 tag")]),t._v(" "),r("li",[t._v("版本发布顺利完成后，进入新的版本开发周期")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(449),alt:""}})]),t._v(" "),r("p",[t._v("优点：操作简单易行，并且能够相对灵活地应对各种需求的延期问题，版本发布时可自由选择 feature 分支集合进行合并，比较契合目前研发团队的项目管理节奏")]),t._v(" "),r("p",[t._v("缺点：")]),t._v(" "),r("ol",[r("li",[t._v("feature 分支存在时间过长，会与最新的 master 分支出现较大的差异，解决代码冲突的难度以及因修改代码而引入的风险会上升。最典型的是类似渠道接入等上线时间不太确定的需求，这问题几乎是不可避免的")]),t._v(" "),r("li",[t._v("test/uat 等测试分支几乎不可能与 master 分支保持同步，由于对于 test/uat 分支的管控相对没有像 master 分支这么严格，可能一个开发解决冲突的误操作会导致整个 test/uat 分支被污染，最后只能重建 test/uat 分支")])]),t._v(" "),r("h2",{attrs:{id:"b-开发常识及建议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b-开发常识及建议"}},[t._v("#")]),t._v(" b). 开发常识及建议")]),t._v(" "),r("ol",[r("li",[t._v("不同需求之间尽量不出现修改相同文件代码的情况")]),t._v(" "),r("li",[t._v("feature 分支名与具体的 jira 号关联，commit 也最好与具体的 jira 号关联，尽量保证每一次 commit 都是有意义的，方便项目管理")]),t._v(" "),r("li",[t._v("提测前对自己 feature 分支产生的代码变动进行静态代码检查")]),t._v(" "),r("li",[t._v("feature 分支的寿命应尽可能短，UAT 完成后就立马上线")]),t._v(" "),r("li",[t._v("一定要在正确的 feature 分支上修改你的代码，不要在基于 feature 分支的派生分支上修改与 feature 分支相关的代码")]),t._v(" "),r("li",[r("strong",[t._v("保持 feature 分支干净、纯粹")]),t._v("，尽可能不要用一个 feature 分支覆盖多个不同甚至不相干的需求")]),t._v(" "),r("li",[t._v("尽可能不往公共分支(master/version/release/test/uat 等)引进代码冲突")]),t._v(" "),r("li",[t._v("禁止 test/uat 分支合并到 feature 分支")]),t._v(" "),r("li",[t._v("本地 feature 分支同步远程 master 分支，如果出现解决冲突可使用 rebase 以让 feature 分支的历史 commit 相对更线条化，"),r("strong",[t._v("但禁止在公共分支使用 rebase")])]),t._v(" "),r("li",[t._v("解决冲突时不要纯粹选择某分支的内容(切勿过度依赖第三方工具解决代码冲突)，所有冲突务必一个接着一个地解决，必要时需要找到相应开发协同解决代码冲突")]),t._v(" "),r("li",[r("strong",[t._v("解决冲突后一定要再 check 一遍代码的相对变动，防止两种情况的发生：误删了其他开发人员的代码，或者恢复了其他开发人员已经删除的代码。如果这种情况确实发生了，要确认误操作的所有文件修改，如果变动较小可重新把代码补上解决，如果变动较大可能需要将本地分支所有 commit squash 成一个新的 commit 再进行合并")])]),t._v(" "),r("li",[t._v("条件允许，每次发版后及时将 release 分支同步至 master/test/uat 等公共分支")]),t._v(" "),r("li",[t._v("万不得已，不要使用 git push -f / git reset 之类的带有修改 git 历史性质的命令")])]),t._v(" "),r("h2",{attrs:{id:"c-事故案例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-事故案例"}},[t._v("#")]),t._v(" c). 事故案例")]),t._v(" "),r("h3",{attrs:{id:"案例-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#案例-1"}},[t._v("#")]),t._v(" 案例 1")]),t._v(" "),r("p",[r("img",{attrs:{src:a(450),alt:""}})]),t._v(" "),r("ul",[r("li",[t._v("开发 A 从最新 master 拉出新分支 feature1 ，进行代码开发")]),t._v(" "),r("li",[t._v("开发 B 的需求是基于 feature1 拉出新分支 feature2 ，进行代码开发")]),t._v(" "),r("li",[t._v("开发 B 在自测过程中发现 feature1 的代码有一个问题，于是在 feature2 改了（fix bug）并及时合并到 test 分支，没及时知会开发 A，qa 在测试过程中也不可能发现(因为 qa 测试的是 test 分支，不是 feature 分支)")]),t._v(" "),r("li",[t._v("产品经理催 feature1 上线而 feature2 仍在 UAT，于是开发 A 的没有 fix bug 的 feature1 可能就上线了")])]),t._v(" "),r("blockquote",[r("p",[t._v("一定要注意 feature 分支之间的依赖，如果自测出 bug 要及时与相应 feature 开发者沟通")])]),t._v(" "),r("h3",{attrs:{id:"案例-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#案例-2"}},[t._v("#")]),t._v(" 案例 2")]),t._v(" "),r("p",[r("img",{attrs:{src:a(451),alt:""}})]),t._v(" "),r("ul",[r("li",[t._v("开发 A 从最新 master 拉出新分支 feature1 ，进行代码开发")]),t._v(" "),r("li",[t._v("开发 B 的需求是基于 feature1 拉出新分支 feature2 ，进行代码开发")]),t._v(" "),r("li",[t._v("开发 B 完成了需求并进行了提测，产品经理在 feature1 的基础上新加了小需求，开发 A 完成了新加的小需求时没有建立新 jira，也没有知会到 B（所以 feature2 分支上线前没有及时合并 feature1），qa 也不知道新 jira 的内容")]),t._v(" "),r("li",[t._v("产品经理催 feature1 和 feature2 都上线，结果发现漏合了这个小需求的代码")])]),t._v(" "),r("blockquote",[r("p",[t._v("所有需求，无论大小，凡是提测后新增的，都必须新建 jira 号以记录需求的变动")])]),t._v(" "),r("h3",{attrs:{id:"案例-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#案例-3"}},[t._v("#")]),t._v(" 案例 3")]),t._v(" "),r("p",[t._v("代码合并冲突不够细心，可能在解决冲突的过程中误删了些代码")]),t._v(" "),r("p",[r("img",{attrs:{src:a(452),alt:""}})]),t._v(" "),r("blockquote",[r("p",[t._v("解决冲突需要耐心和细心")])])])}),[],!1,null,null,null);e.default=_.exports}}]);