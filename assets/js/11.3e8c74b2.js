(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{415:function(t,s,a){t.exports=a.p+"assets/img/Database_Design.55dc902c.png"},416:function(t,s,a){t.exports=a.p+"assets/img/cooperation_diagram.91935cbc.jpg"},417:function(t,s,a){t.exports=a.p+"assets/img/cooperation_diagram_1_1.66a1a4a8.jpg"},418:function(t,s,a){t.exports=a.p+"assets/img/data_infos.98fdb755.png"},419:function(t,s,a){t.exports=a.p+"assets/img/cooperation_diagram_final.3f953d47.jpg"},481:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("title: 基于 Django Model 的静态文档生成工具 django-models-documentor")]),t._v(" "),n("p",[t._v("date: 2020-12-14")]),t._v(" "),n("p",[t._v("tags:")]),t._v(" "),n("ul",[n("li",[t._v("django")]),t._v(" "),n("li",[t._v("documentation")]),t._v(" "),n("li",[t._v("tools")])]),t._v(" "),n("p",[t._v("categories:")]),t._v(" "),n("ul",[n("li",[t._v("Django")]),t._v(" "),n("li",[t._v("Documentation")])]),t._v(" "),n("p",[t._v("author: zeqin.hong@shopee.com")]),t._v(" "),n("h1",{attrs:{id:"django-models-documentor-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#django-models-documentor-简介"}},[t._v("#")]),t._v(" django-models-documentor 简介")]),t._v(" "),n("p",[t._v("django-models-documentor 是我们在供应链内部为 Django 项目开发的用于 model 层生成静态文档的工具，方便了开发童鞋在编写代码中一并地完成了文档的编写以及将文档进行共享。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(415),alt:""}})]),t._v(" "),n("h1",{attrs:{id:"背景介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[t._v("#")]),t._v(" 背景介绍")]),t._v(" "),n("p",[t._v("Shopee PMS 系统是提供给运营团队使用的采供管理系统，作为一个审批与决策系统，需要与数据分析团队紧密配合，围绕在 PMS 系统周围大致的协作流程如下图所示：\n"),n("img",{attrs:{src:a(416),alt:""}})]),t._v(" "),n("p",[t._v("如图中红色沟通路径所示，PMS 研发人员与 BI 团队分处深圳和新加坡或者业务运营当地，跨国团队的沟通成本本身较大。而在日常的这个沟通上，还容易发现以下问题：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("信息滞后")]),t._v("：随着系统研发迭代，原来BI同事了解到的信息，可能变成了错误的信息；")]),t._v(" "),n("li",[n("strong",[t._v("沟通的重复")]),t._v("：由于没有统一的信息载体，对于同一个业务的设计，不同地区的 BI 团队成员可能重复过来咨询，对于 PMS 研发人员是一种重复的负担；")]),t._v(" "),n("li",[n("strong",[t._v("内部沟通协调成本")]),t._v("：PMS 研发人员内部对不同业务模块的系统设计了解不尽相同，如果遇上 BI 同事来了解某个模块的系统设计，还必须在研发团队内部找到了解该模块的同事。")])]),t._v(" "),n("p",[t._v("于是，为了解决上面的问题，提升整体协作效率，我们"),n("strong",[t._v("需要有一个统一的数据库设计的信息管理工具")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"早期的方案：基于-google-sheets-的数据字典"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#早期的方案：基于-google-sheets-的数据字典"}},[t._v("#")]),t._v(" 早期的方案：基于 Google Sheets 的数据字典")]),t._v(" "),n("p",[t._v("最开始，为了快速满足 BI 团队的需要，我们针对高频查询分析的数据库表的设计做了数据库设计的数据字典，并且由开发人员手动填写到 Google Sheets，并分享链接给 BI 团队，以此将一个点对点的沟通问题改为一个点对面的沟通问题，沟通效率确实能够明显提升。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(417),alt:"基于Google Sheets的方案"}}),t._v("\n(图示：基于 Google Sheets 共享的方案)")]),t._v(" "),n("p",[n("img",{attrs:{src:a(418),alt:"早期的方案示例"}}),t._v("\n(示例图：早期我们手工整理的数据字典示例)")]),t._v(" "),n("p",[t._v("可以看到，这个方案的话，在"),n("strong",[t._v("一定的前提")]),t._v("下，基本就解决 BI 团队查阅数据库信息的问题了，所以在上面新的协作流程里，BI 团队到 Google Sheets 文档的信息路径不再标红。尽管这套机制平稳运作了挺长一段时间，我们还是认为这个方案仍旧不够好，为什么呢？还是得回到这个方案刚才没有说的“前提”上，这些前提就是问题所在：")]),t._v(" "),n("ul",[n("li",[t._v("研发团队成员必须遵守比较强的规范才能确保 google sheets 上的数据字典的信息是足够有效的，这些规范主要包括：\n"),n("ul",[n("li",[t._v("必须及时整理更新最新的数据库设计信息，这个及时的边界可以视为新的功能发布上线的时间")]),t._v(" "),n("li",[t._v("必须保证代码逻辑与文档一致，如果不一致，文档就是错误的引导，比没有文档可能更糟糕")]),t._v(" "),n("li",[t._v("必须遵守统一的格式，如果格式或者表述方式不够统一，将会造成文档查阅者的困惑")])])]),t._v(" "),n("li",[t._v("研发团队除了编写代码，还需要编写文档，代码与文档分离，在开发团队看来，更像是重复工作")])]),t._v(" "),n("p",[t._v("于是，我们也在思考：**有没有一种方式或者工具，可以让我们在写代码的时候，顺便就把文档也写好？**这样，只要代码发布，文档自然就是最新的，且代码与文档同行，更重要的是，比起打开浏览器访问 Google Sheets 然后去对数据字典做填空这种枯燥的工作，我们更乐于在代码中去编写我们的文档，因为这都是顺手的事情，没有需要刻意记得去另一个地方更新文档的心智负担。")]),t._v(" "),n("h1",{attrs:{id:"文档工具的选型与设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文档工具的选型与设计"}},[t._v("#")]),t._v(" 文档工具的选型与设计")]),t._v(" "),n("h2",{attrs:{id:"设计目标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计目标"}},[t._v("#")]),t._v(" 设计目标")]),t._v(" "),n("p",[t._v("经过上面的思考，我们的目标很简单："),n("strong",[t._v("选择或者自行开发一款脚本工具，用于替代 Google Sheets 表格的方式，让开发者在开发阶段就可以顺手编写设计文档，并支持自动部署到内部办公人员可访问的空间")]),t._v("。")]),t._v(" "),n("p",[t._v("而结合已有的数组字典的格式，我们对待选型或者开发的工具的功能性需求为：")]),t._v(" "),n("ul",[n("li",[t._v("支持编写的信息结构\n"),n("ul",[n("li",[t._v("数据表的名称、表的使用场景以及表所属业务模块")]),t._v(" "),n("li",[t._v("数据表的列列表，包含：\n"),n("ul",[n("li",[t._v("列名")]),t._v(" "),n("li",[t._v("列的含义")]),t._v(" "),n("li",[t._v("列值的枚举")]),t._v(" "),n("li",[t._v("列的文档说明，可以用来描述业务逻辑等非标准格式的信息")])])])])]),t._v(" "),n("li",[t._v("支持一种轻量级展示设计内容的方式，比如静态网页，或者自动导出到公共的 Google Sheet")])]),t._v(" "),n("h2",{attrs:{id:"已有的工具选型-the-django-admin-documentation-generator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#已有的工具选型-the-django-admin-documentation-generator"}},[t._v("#")]),t._v(" 已有的工具选型 —— The Django admin documentation generator")]),t._v(" "),n("p",[t._v("官方链接："),n("a",{attrs:{href:"https://docs.djangoproject.com/en/1.8/ref/contrib/admin/admindocs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Django admin documentation generator"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("我们调研了 Django 官方的这个生成工具，但是由于以下原因，我们没有直接采用：")]),t._v(" "),n("ul",[n("li",[t._v("Django admin documentation generator 需要基于 Django Admin 运作，但是我们并不启用 Django Admin")]),t._v(" "),n("li",[t._v("Django admin documentation generator 是作为一个 Django app 运行的，意味着需要提供一个运行时资源，且文档服务本身会和系统服务耦合在一起")]),t._v(" "),n("li",[t._v("Django admin documentation generator 要求 Django 项目代码的结构符合标准的规范（installed app），特别是要求所有 model 都继承 "),n("code",[t._v("django.db.models.Model")]),t._v("，而我们实际项目里，由于分表的场景，我们有些 Model 并不直接继承自 Django 的 "),n("code",[t._v("django.db.models.Model")])]),t._v(" "),n("li",[t._v("我们的实际项目由于已经有一些自己实现的扩展，并不能完全契合 Django admin documentation generator 的工作场景")])]),t._v(" "),n("h2",{attrs:{id:"设计思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计思路"}},[t._v("#")]),t._v(" 设计思路")]),t._v(" "),n("p",[t._v("虽然我们没有直接采用 Django admin documentation generator，但是我们依然从它身上得到了一些灵感：尽可能复用 Django admin documentation generator 的文档编写方法。这样对我们来说，有几点好处：")]),t._v(" "),n("ul",[n("li",[t._v("因为对 Django 无侵入，不用担心后续和 Django 之间的维护问题")]),t._v(" "),n("li",[t._v("可以复用 Django 已有的实现，不用再去自己造一遍文档解析的轮子，这个稍后会看到具体的说明")]),t._v(" "),n("li",[t._v("不用去设计各种奇怪的文档语法，避免开发人员刻意学习，一切都还是 Django 本身，没有额外要学习的内容")])]),t._v(" "),n("h3",{attrs:{id:"数据表层面信息描述规范的设计和实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据表层面信息描述规范的设计和实现"}},[t._v("#")]),t._v(" 数据表层面信息描述规范的设计和实现")]),t._v(" "),n("p",[t._v("针对表层面的信息，我们复用了 Django Model 本身内置的 "),n("code",[t._v("Meta")]),t._v(" 类的几个类属性，所有这些属性可以通过 "),n("code",[t._v("Model._meta.{attribute}")]),t._v("的属性访问：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("db_table")]),t._v("：这个属性本身用于声明当前 model 对应数据表的名字，在我们生成的文档中会对应于"),n("code",[t._v("TABLE NAME")]),t._v("一栏的信息；")]),t._v(" "),n("li",[n("code",[t._v("app_label")]),t._v("：这个属性会被我们工具提取出来作为数据表本身所属的业务模块的标志；")]),t._v(" "),n("li",[n("code",[t._v("verbose_name")]),t._v("：这个属性本身也是 Django Model 设计用来填写人类可读的表名信息的属性，在我们的实际设计中，用于简单描述表的使用场景。")])]),t._v(" "),n("p",[t._v("以下是基于此设计的代码示例以及实现过程中用到的属性查询示例：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Model 定义")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SupplierSkuTab")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Meta")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        db_table "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'supplier_sku_tab'")]),t._v("\n        app_label "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'basic_data'")]),t._v("\n        verbose_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'供货关系表'")]),t._v("\n    \t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文档生成过程中对 Model 信息解析所读取的属性")]),t._v("\nIn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" SupplierSkuTab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_meta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("verbose_name\n供货关系表\n\nIn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" SupplierSkuTab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_meta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app_label\nbasic_data\n\nIn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" SupplierSkuTab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_meta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db_table\nsupplier_sku_tab\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])]),n("p",[t._v("至此，我们就确定了数据表层面的信息怎么记录以及怎么解析的问题。")]),t._v(" "),n("h3",{attrs:{id:"数据表字段层面信息描述规范的设计和实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据表字段层面信息描述规范的设计和实现"}},[t._v("#")]),t._v(" 数据表字段层面信息描述规范的设计和实现")]),t._v(" "),n("p",[t._v("在表字段实际的详细设计上，同样因为 Django admin documentation generator 的设计，Django 的 model Field 类都支持 "),n("code",[t._v("verbose_name")]),t._v(" 和 "),n("code",[t._v("help_text")]),t._v(" 选项，于是我们的设计里，我们设定 model field 上 "),n("code",[t._v("verbose_name")]),t._v(" 用于定于字段本身含义，而 "),n("code",[t._v("help_text")]),t._v(" 字段用于编写字段本身较长的帮助文档或者业务逻辑等。而在实现上，只要通过"),n("code",[t._v("Model._meta.fields")]),t._v("属性便可轻松解析字段信息：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("In "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SupplierSkuTab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_meta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fields"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fields"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PositiveIntegerField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" status"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nIn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" field "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SupplierSkuTab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_meta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fields"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nIn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\nOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'status'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码中model字段名")]),t._v("\n\nIn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column\nOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'status'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库里的列名")]),t._v("\n\nIn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("verbose_name\nOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'\\u7ed1\\u5b9a\\u72b6\\u6001'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编写的字段本身含义内容")]),t._v("\n\nIn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("help_text\nOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编写的字段的额外帮助文档，可以为业务逻辑简介等")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])]),n("p",[t._v("在信息结构上，表层级的信息、列名、列的含义、以及列的文档说明都可以轻松基于 Django 内置的特性实现，这样的话，我们的工具到目前都不需要对 Django 本身做侵入等。但是遗留了一个必要的功能："),n("strong",[t._v("针对特定字段的枚举值的说明，如何表达？")])]),t._v(" "),n("p",[t._v("基于我们的项目实际情况：我们的项目中的枚举值，都有独立的模块管理和定义，比如：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" common"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enum_type "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" EnumBase\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderStatus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EnumBase"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tPending "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\tCancelled "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\tDone "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\tRejected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("为了不用再将上面所示的枚举定义拷贝到设计文档中，最好是在文档中通过引用某个枚举类的方式来编写文档；另一方面，考虑到 Python 语言自身支持的 doc string 特性，可以支持通过类的 "),n("code",[t._v("__doc__")]),t._v(" 属性访问类的文档。综合起来，我们对字段的枚举说明文档定了个语法：在Model的 docstring 部分使用 "),n("code",[t._v("@enum {字段名}: {枚举定义的引用路径}")]),t._v(" 的格式，这也是整个工具唯一需要的一个定制。")]),t._v(" "),n("p",[t._v("在实现上，这个枚举的解析是通过简单的正则匹配来完成的，以下是核心代码：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse_enums")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__doc__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tenums "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" line "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__doc__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问了 model.__doc__ 获取 docstring，这个是前提")]),t._v("\n\t\tline "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tres "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"@enum\\s*(\\w+):\\s*([\\w\\.]+)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 简单的语法，整个工具仅此一个语法")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tfield_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" enum_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groups"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\tenums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("field_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" enum_name\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" enums\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("p",[t._v("以下是完整 model 类的示例：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SupplierSkuTab")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n\t@enum status: lib.const.BindingStatus\n\t@enum sync_flag: lib.const.SyncFlag\n\t"""')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AutoField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primary_key"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tsupplier_id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verbose_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'供应商ID'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" help_text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'有些业务模块可能叫 xxx_id'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tsku_id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tstatus "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PositiveIntegerField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("verbose_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'绑定状态'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" help_text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'在模块A中，需要注意xxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tsku_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verbose_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SKU 名称'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tsync_flag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PositiveIntegerField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("verbose_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'同步数据的状态'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Meta")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    \tdb_table "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'supplier_sku_tab'")]),t._v("\n    \tapp_label "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'basic_data'")]),t._v("\n    \tverbose_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'供货关系表'")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])]),n("p",[t._v("生成的文档如本文开头示例截图所示，再次不再赘述。")]),t._v(" "),n("h3",{attrs:{id:"model-的扫描"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#model-的扫描"}},[t._v("#")]),t._v(" Model 的扫描")]),t._v(" "),n("p",[t._v("前面的讨论只是讲了单个 Model 的设计资料如何组织的问题，但是为了实现这个工具的目标，还有一个重要的问题："),n("strong",[t._v("如何扫描整个项目所有的 Model 定义")]),t._v("？一种可能的方法是直接调用 Django 内置的 "),n("code",[t._v("django.apps.apps.get_models")]),t._v(" 方法，但是这个方法对于我们有些问题：")]),t._v(" "),n("ul",[n("li",[t._v("由于历史遗留问题，我们的代码中一些陈旧的模块组织不符合 Django 的规范，且未声明为 Django installed app，这导致上述方法无法扫描到这些模块下的 model")]),t._v(" "),n("li",[t._v("另外，因为同样前面提到的分表问题，我们对于分表的 Model，并未直接继承自 Django 的 "),n("code",[t._v("django.db.models.Model")]),t._v("，而是我们内部开发实现的一个 PartitionModel，这也同样导致上述方法会漏掉一些重要的 Model")])]),t._v(" "),n("p",[t._v("最后，我们使用了一个比较简单粗暴的方法，大致的思路是这样的：")]),t._v(" "),n("ul",[n("li",[t._v("直接遍历所有模块（在 Python 中，一个 Python文件就是一个独立的模块），基于 Python 的 "),n("code",[t._v("pkgutil.walk_packages")]),t._v(" 方法实现；")]),t._v(" "),n("li",[t._v("对每个模块，遍历其中引用到的所有类；")]),t._v(" "),n("li",[t._v("判断每个类是否为 model（是否为"),n("code",[t._v("django.db.models.Model")]),t._v("或者"),n("code",[t._v("PartitionModel")]),t._v("的子类），是则加入到全局的 model 列表中，否则跳过。")])]),t._v(" "),n("p",[t._v("由于这只是一个静态文档生成工具，上述方法虽然从算法分析角度会觉得效率低，但是整个扫描生成过程并不会有明显的等待时间，且能够很好地解决内置的 "),n("code",[t._v("get_models")]),t._v(" 无法覆盖到所有 Model 的问题，我们便没有吹毛求疵。")]),t._v(" "),n("h2",{attrs:{id:"命令行工具与上传部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令行工具与上传部署"}},[t._v("#")]),t._v(" 命令行工具与上传部署")]),t._v(" "),n("p",[t._v("完成整体工具的开发实现之后，我们便进一步开始思考："),n("strong",[t._v("如何方便使用，以及完成部署？")])]),t._v(" "),n("p",[t._v("答案是命令行！由于工具本身设计用于 Django 项目，所以在命令行的实现上，方案非常简单，直接基于 Django Management Command 机制实现即可，于是我们便有了 "),n("code",[t._v("generate_models_document")]),t._v(" 命令，以下为安装了本工具的项目执行 "),n("code",[t._v("python manage.py")]),t._v(" 后看到的本工具提供的命令行：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("models_documentor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    generate_models_document\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("同时，考虑到生成的只是一个单页的静态网页，也就是只有一个 html 网页，并且我们项目内部采用了 Ceph 分布式对象存储系统，所以我们将部署简化，将 Ceph 也用成了静态站点部署的平台：将生成的静态网页上传到 Ceph，并且在命令行工具里一并集成，所以上述的 "),n("code",[t._v("generate_models_document")]),t._v(" 命令除了生成静态网页，还会同时自动地将网页上传到存储系统，内部用户便可以通过对应的 URL 访问此网页。")]),t._v(" "),n("p",[t._v("这里上传到 Ceph 还有一点值得一提的是，如果想要网页本身在浏览器中直接渲染，需要在上传文件的过程中，设置该文件的正确的 ContentType 为 "),n("code",[t._v("text/html")]),t._v("，否则，当你在浏览器中打开链接时，浏览器只会帮你下载此网页文件，而不是在浏览器中渲染展示，无法模拟网站的效果。")]),t._v(" "),n("h2",{attrs:{id:"自动发布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动发布"}},[t._v("#")]),t._v(" 自动发布")]),t._v(" "),n("p",[t._v("提供命令行以及上传的好处，就是可以将文档生成上传的过程和代码合并的过程结合到一起，在 GitLab Pipeline 的基础上，我们配置了每次代码合并之后，自动触发上述命令的执行，于是，整个文档更新的流程，自然就和代码发布的流程保持同步了。")]),t._v(" "),n("p",[t._v("最终的整体的协作流程就可以如图所示：\n"),n("img",{attrs:{src:a(419),alt:""}})]),t._v(" "),n("p",[t._v("最终实现的这套流程，有几个点是我们认为比较有价值的：")]),t._v(" "),n("ul",[n("li",[t._v("文档和开发流程相结合：不担心文档与代码不符的问题")]),t._v(" "),n("li",[t._v("设计信息的组织整理有了更强的规范：对比 Google Sheets 的形式，我们的格式更有限，有限的格式避免无限的个人风格和发散")]),t._v(" "),n("li",[t._v("整个工具其实功能有限，但是都有效，开发成本很低，大概一天左右能开发完，但是换来的协作效率的提升，团队也不用再去应对各种临时的不必要的当面咨询")])]),t._v(" "),n("h1",{attrs:{id:"后续优化方向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后续优化方向"}},[t._v("#")]),t._v(" 后续优化方向")]),t._v(" "),n("ul",[n("li",[t._v("关系的表达：目前虽然仅仅通过记录数据表自身的信息就已经满足80%甚至90%的沟通场景了，但是实体之间的关系表达也是沟通的重点")]),t._v(" "),n("li",[t._v("提取成公开的开源项目：目前这个工具的实现偏内部定制化较高，如果可以将定制部分抽象成可配置的选项，则可以轻松实现将该工具开放给有类似场景需求的人")])])])}),[],!1,null,null,null);s.default=e.exports}}]);