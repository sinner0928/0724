export type Language = 'zh' | 'en'
export type LocaleText = { zh: string; en: string }

export type SubNavItem = {
  key: string
  label: LocaleText
  path: string
  description: LocaleText
}

export type NavItem = {
  key: string
  label: LocaleText
  path: string
  children?: SubNavItem[]
}

export const images = {
  hero: '/assets/6.jpg',
  product: '/assets/4.jpg',
  productAlt: '/assets/3.jpg',
  application: '/assets/21.jpg',
  service: '/assets/22.jpg',
  office: '/assets/23.jpg',
  quality: '/assets/24.jpg',
  delivery: '/assets/25.jpg',
  lab: '/assets/2.jpg',
  factory: '/assets/5.jpg',
  keyboardMouse: '/assets/21.jpg',
  cameraControl: '/assets/22.jpg',
  remoteControl: '/assets/23.jpg',
  wearable: '/assets/25.jpg',
  generalWireless: '/assets/24.jpg'
}

export const navItems: NavItem[] = [
  { key: 'home', label: { zh: '首页', en: 'Home' }, path: '/' },
  {
    key: 'about',
    label: { zh: '关于我们', en: 'About Us' },
    path: '/about/company',
    children: [
      { key: 'company', label: { zh: '公司简介', en: 'Company' }, path: '/about/company', description: { zh: '企业概况、制造能力', en: 'Company overview and manufacturing capability' } },
      { key: 'business', label: { zh: '业务范围', en: 'Business' }, path: '/about/business', description: { zh: '产品线与制造能力', en: 'Product lines and manufacturing capability' } },
      { key: 'team', label: { zh: '团队介绍', en: 'Team' }, path: '/about/team', description: { zh: '研发、工程与量产协同', en: 'R&D, engineering and production collaboration' } }
    ]
  },
  {
    key: 'products',
    label: { zh: '产品中心', en: 'Products' },
    path: '/products/detail',
    children: [
      { key: 'detail', label: { zh: '产品详情', en: 'Product Detail' }, path: '/products/detail', description: { zh: '产品线、规格与交付形态', en: 'Product lines, specs and delivery forms' } },
      { key: 'scenarios', label: { zh: '应用场景', en: 'Scenarios' }, path: '/products/scenarios', description: { zh: '行业应用与解决方案', en: 'Industry applications and solutions' } },
      { key: 'inquiry', label: { zh: '产品咨询', en: 'Product Inquiry' }, path: '/products/inquiry', description: { zh: '样品、试产与定制需求', en: 'Samples, pilot run and custom needs' } }
    ]
  },
  {
    key: 'manufacturing',
    label: { zh: '制造与服务', en: 'Manufacturing' },
    path: '/manufacturing/production',
    children: [
      { key: 'production', label: { zh: '生产服务', en: 'Production' }, path: '/manufacturing/production', description: { zh: '打样、试产、量产、出货', en: 'Samples, pilot run, mass production and shipment' } },
      { key: 'process', label: { zh: '工艺流程', en: 'Process' }, path: '/manufacturing/process', description: { zh: '芯片模组制造流程', en: 'Chip and module manufacturing process' } },
      { key: 'testing', label: { zh: '测试与交付', en: 'Testing & Delivery' }, path: '/manufacturing/testing', description: { zh: '测试标准与质检流程', en: 'Testing standards and QC flow' } },
      { key: 'certification', label: { zh: '资质文件', en: 'Certification' }, path: '/manufacturing/certification', description: { zh: '合规与测试支持', en: 'Compliance and testing support' } }
    ]
  },
  {
    key: 'contact',
    label: { zh: '联系我们', en: 'Contact' },
    path: '/contact/info',
    children: [
      { key: 'info', label: { zh: '联系方式', en: 'Contact Info' }, path: '/contact/info', description: { zh: '办公城市与业务入口', en: 'Office cities and business entry' } },
      { key: 'inquiry', label: { zh: '业务咨询', en: 'Business Inquiry' }, path: '/contact/inquiry', description: { zh: '商务合作咨询表单', en: 'Business cooperation form' } },
      { key: 'visit', label: { zh: '来访预约', en: 'Visit Booking' }, path: '/contact/visit', description: { zh: '预约来访登记', en: 'On-site visit booking' } }
    ]
  }
]

export const defaultChildRoutes: Record<string, string> = {
  '/about': '/about/company',
  '/products': '/products/detail',
  '/manufacturing': '/manufacturing/production',
  '/contact': '/contact/info'
}

export const validRoutes = new Set([
  '/',
  ...Object.keys(defaultChildRoutes),
  ...navItems.flatMap((item) => [item.path, ...(item.children?.map((child) => child.path) ?? [])])
])

export const searchIndex = navItems.flatMap((item) => [
  {
    path: item.path,
    label: item.label,
    description: item.children?.[0]?.description ?? item.label
  },
  ...(item.children ?? []).map((child) => ({
    path: child.path,
    label: child.label,
    description: child.description
  }))
])

export const pages = {
  about: {
    company: {
      title: { zh: '公司简介', en: 'Company Introduction' },
      eyebrow: { zh: '关于壹原理科技', en: 'About YiYuanLi' },
      description: { zh: '无线连接芯片与模组制造商，围绕蓝牙、2.4G、NFC 等方向提供从设计到量产的支持。', en: 'A wireless connectivity chip and module manufacturer supporting Bluetooth, 2.4G, NFC and related product lines from design to production.' },
      image: images.office,
      sections: [
        {
          type: 'text',
          eyebrow: { zh: '企业概况', en: 'Overview' },
          title: { zh: '从芯片设计到模组量产的制造商。', en: 'A manufacturer from chip design to module production.' },
          paragraphs: [
            { zh: '壹原理科技是一家专注于无线连接芯片与模组的设计制造企业。公司总部位于杭州，深圳及上海设有研发与量产协同中心，依托长三角与珠三角电子信息产业配套，面向消费电子品牌提供蓝牙 SoC、2.4G 射频与 NFC 芯片模组的制造与交付支持。', en: 'YiYuanLi is focused on wireless connectivity chips and modules. Headquartered in Hangzhou, with R&D and production collaboration centers in Shenzhen and Shanghai, the company supports consumer electronics brands with Bluetooth SoC, 2.4G RF and NFC chip module delivery.' },
            { zh: '公司已形成无线键鼠、摄影无线控制、泛遥控器、智能穿戴与通用蓝牙模组等产品方向，覆盖芯片规格定义、参考设计开发、工程验证、试产确认到批量出货的关键环节。', en: 'The product directions cover wireless keyboard and mouse, camera wireless control, remote controls, smart wearables and general Bluetooth modules, spanning specification definition, reference design, engineering validation, pilot run and batch shipment.' }
          ]
        },
        {
          type: 'cards',
          eyebrow: { zh: '愿景使命', en: 'Vision & Mission' },
          title: { zh: '以稳定品质、可控成本和准时交付支撑客户产品持续量产。', en: 'Supporting sustained customer production with stable quality, controlled cost and dependable delivery.' },
          items: [
            { title: { zh: '愿景', en: 'Vision' }, text: { zh: '成为消费电子品牌在无线连接领域值得长期信赖的制造伙伴。', en: 'To become a long-term trusted manufacturing partner for consumer electronics brands in wireless connectivity.' } },
            { title: { zh: '使命', en: 'Mission' }, text: { zh: '用清晰的工程路径、稳定的生产协同和可追溯的质量流程，推动产品从规格走向量产。', en: 'To move products from specification to production through clear engineering paths, stable production coordination and traceable quality flows.' } },
            { title: { zh: '价值观', en: 'Values' }, text: { zh: '品质优先、交付可靠、响应及时、持续改进。', en: 'Quality first, reliable delivery, timely response and continuous improvement.' } }
          ]
        },
        {
          type: 'metrics',
          eyebrow: { zh: '制造能力', en: 'Manufacturing Capability' },
          title: { zh: '用可确认的能力项表达制造基础。', en: 'Manufacturing fundamentals described through confirmable capabilities.' },
          items: [
            { title: { zh: '批量出货', en: 'Batch Shipment' }, text: { zh: '支持芯片与模组批量交付，产能按项目计划确认', en: 'Batch delivery for chips and modules, capacity confirmed by project plan' } },
            { title: { zh: '研发与量产中心', en: 'R&D & Production Centers' }, text: { zh: '杭州总部，深圳、上海研发与量产协同', en: 'Hangzhou HQ with Shenzhen and Shanghai collaboration centers' } },
            { title: { zh: '协议覆盖', en: 'Protocol Coverage' }, text: { zh: 'BLE / 2.4G / NFC / Zigbee / IR 等方向', en: 'BLE / 2.4G / NFC / Zigbee / IR directions' } },
            { title: { zh: '产品线', en: 'Product Lines' }, text: { zh: '键鼠、摄影、遥控、穿戴、通用蓝牙模组', en: 'Keyboard, camera control, remote, wearable and general Bluetooth modules' } }
          ]
        }
      ]
    },
    business: {
      title: { zh: '业务范围', en: 'Business Scope' },
      eyebrow: { zh: '产品与制造', en: 'Products & Manufacturing' },
      description: { zh: '按产品线组织业务，面向消费电子无线连接核心品类提供芯片、模组与量产交付支持。', en: 'Business is organized by product line, covering chips, modules and production delivery for consumer electronics wireless connectivity.' },
      image: images.application,
      sections: [
        {
          type: 'cards',
          eyebrow: { zh: '主营业务板块', en: 'Main Business' },
          title: { zh: '围绕四大核心品类建立产品线。', en: 'Product lines built around four core categories.' },
          items: [
            { title: { zh: '无线键鼠模组', en: 'Wireless Keyboard & Mouse Modules' }, text: { zh: '超低功耗多模方案，覆盖蓝牙 5.3 与 2.4G 双模连接，面向办公、电竞与便携外设产品。', en: 'Ultra-low-power multi-mode solutions covering Bluetooth 5.3 and 2.4G dual-mode connections for office, gaming and portable peripherals.' } },
            { title: { zh: '摄影无线控制模组', en: 'Camera Wireless Control Modules' }, text: { zh: '远程快门、拍摄参数控制与跨设备协同，适配相机、运动相机、手机和提词器等设备。', en: 'Remote shutter, shooting parameter control and cross-device coordination for cameras, action cameras, phones and teleprompters.' } },
            { title: { zh: '泛遥控器模组', en: 'Remote Control Modules' }, text: { zh: '覆盖电视、机顶盒、家电、两轮电动车与智能中控，支持蓝牙、Zigbee、红外等多协议融合。', en: 'Remote control modules for TV, STB, home appliances, two-wheel EVs and smart control panels, supporting Bluetooth, Zigbee, IR and multi-protocol integration.' } },
            { title: { zh: '智能穿戴模组', en: 'Smart Wearable Modules' }, text: { zh: '低功耗连接架构，适配手表、手环和健康监测类设备，支持原型开发与量产制造。', en: 'Low-power connectivity architecture for watches, bands and health monitoring devices, supporting prototype development and production.' } }
          ]
        },
        {
          type: 'metrics',
          eyebrow: { zh: '制造能力', en: 'Capabilities' },
          title: { zh: '把设计、验证、生产和交付串联起来。', en: 'Connecting design, validation, production and delivery.' },
          items: [
            { title: { zh: '定制设计能力', en: 'Custom Design' }, text: { zh: '按客户场景定制协议栈、功能模块和产品形态', en: 'Customize protocol stacks, functions and product forms by scenario' } },
            { title: { zh: '全链路量产能力', en: 'Full Production Flow' }, text: { zh: '芯片定义、参考设计、工程验证、量产交付全流程贯通', en: 'Spec definition, reference design, engineering validation and production delivery' } },
            { title: { zh: '快速工程响应', en: 'Fast Engineering Response' }, text: { zh: '依托深圳产业配套，提供打样、测试、排查与迭代支持', en: 'Sample, testing, debugging and iteration support backed by Shenzhen supply chain' } },
            { title: { zh: '稳定供货保障', en: 'Stable Supply' }, text: { zh: '结合成熟供应链与生产物流体系，保障批量项目节奏', en: 'Stable batch project cadence through supply chain and logistics coordination' } }
          ]
        }
      ]
    },
    team: {
      title: { zh: '团队介绍', en: 'Team' },
      eyebrow: { zh: '制造团队分工', en: 'Team Roles' },
      description: { zh: '研发、工程测试、量产与品质团队围绕产品交付形成明确分工。', en: 'R&D, engineering, testing, production and quality roles work around product delivery.' },
      image: images.office,
      sections: [
        {
          type: 'people',
          eyebrow: { zh: '核心分工', en: 'Core Roles' },
          title: { zh: '不展示虚构个人，直接说明制造团队能力。', en: 'Manufacturing team capability without fictional personal profiles.' },
          items: [
            { title: { zh: '芯片设计团队', en: 'Chip Design Team' }, text: { zh: '负责 SoC 架构定义、射频设计、低功耗方案开发与验证。', en: 'Responsible for SoC architecture definition, RF design, low-power solution development and validation.' } },
            { title: { zh: '工程与测试团队', en: 'Engineering & Testing Team' }, text: { zh: '负责参考设计、评估板开发、功能测试、可靠性验证和工艺参数固化。', en: 'Responsible for reference design, evaluation boards, functional tests, reliability validation and process parameter confirmation.' } },
            { title: { zh: '量产与品质团队', en: 'Production & Quality Team' }, text: { zh: '负责供应链衔接、生产排期、出货前检验和交付资料管理。', en: 'Responsible for supply chain coordination, production scheduling, pre-shipment inspection and delivery documentation.' } }
          ]
        },
        {
          type: 'process',
          eyebrow: { zh: '协作链路', en: 'Collaboration Flow' },
          title: { zh: '从需求入口到交付出口，每个环节都有对应责任。', en: 'Each step from requirement intake to shipment has a clear owner.' },
          items: [
            { title: { zh: '需求接收', en: 'Intake' }, text: { zh: '收集产品方向、规格、数量计划与交付目标。', en: 'Collect product direction, specs, quantity plan and delivery goals.' } },
            { title: { zh: '工程评估', en: 'Engineering Review' }, text: { zh: '确认芯片选型、模组形态、测试要求和开发风险。', en: 'Confirm chip selection, module form, testing needs and development risks.' } },
            { title: { zh: '试产推进', en: 'Pilot Run' }, text: { zh: '组织样品、试产、小批量验证与问题闭环。', en: 'Organize samples, pilot run, small-batch validation and issue closure.' } },
            { title: { zh: '量产交付', en: 'Production Delivery' }, text: { zh: '衔接排产、检验、包装与出货资料。', en: 'Coordinate production planning, inspection, packing and shipment documents.' } }
          ]
        }
      ]
    }
  },
  products: {
    detail: {
      title: { zh: '产品详情', en: 'Product Detail' },
      eyebrow: { zh: '产品中心', en: 'Products' },
      description: { zh: '四大产品线覆盖消费电子无线连接核心品类，从芯片设计到模组制造全链路交付。', en: 'Four product lines cover core consumer electronics wireless connectivity categories, delivered from chip design to module manufacturing.' },
      image: images.hero,
      sections: [
        {
          type: 'products',
          filterable: true,
          eyebrow: { zh: '产品线', en: 'Product Lines' },
          title: { zh: '按可交付的模组与方案套件组织产品。', en: 'Products organized as deliverable modules and solution kits.' },
          items: [
            {
              category: { zh: '键鼠模组', en: 'Keyboard & Mouse' },
              title: { zh: 'YS-100 超低功耗多模键鼠方案', en: 'YS-100 Ultra-Low-Power Multi-Mode Keyboard & Mouse Solution' },
              text: { zh: '面向办公、电竞与便携外设，自研低延迟无线通信，支持蓝牙 5.3 与 2.4G 双模连接，适配 Win/Mac 双系统。', en: 'For office, gaming and portable peripherals, with low-latency wireless communication, Bluetooth 5.3 and 2.4G dual-mode connectivity, and Win/Mac compatibility.' },
              image: images.keyboardMouse,
              tags: [{ zh: '低功耗', en: 'Low power' }, { zh: 'BLE 5.3 / 2.4G', en: 'BLE 5.3 / 2.4G' }, { zh: '键鼠外设', en: 'Peripherals' }],
              specs: [
                { label: { zh: '协议', en: 'Protocol' }, value: { zh: 'BLE 5.3 / 2.4G', en: 'BLE 5.3 / 2.4G' } },
                { label: { zh: '兼容系统', en: 'Compatibility' }, value: { zh: 'Win / Mac', en: 'Win / Mac' } },
                { label: { zh: '交付形态', en: 'Delivery Form' }, value: { zh: '模组 + 参考设计 + SDK，规格按项目确认', en: 'Module + reference design + SDK, specs confirmed by project' } }
              ]
            },
            {
              category: { zh: '影像模组', en: 'Imaging Control' },
              title: { zh: 'YS-200 专业摄影无线控制方案', en: 'YS-200 Professional Camera Wireless Control Solution' },
              text: { zh: '面向远程快门、拍摄参数控制与跨设备协同，适配相机、运动相机、手机和提词器等设备。', en: 'For remote shutter, shooting parameter control and cross-device coordination across cameras, action cameras, phones and teleprompters.' },
              image: images.cameraControl,
              tags: [{ zh: '远程快门', en: 'Remote shutter' }, { zh: '跨设备控制', en: 'Cross-device control' }, { zh: '户外拍摄', en: 'Outdoor shooting' }],
              specs: [
                { label: { zh: '连接方向', en: 'Connectivity' }, value: { zh: 'BLE / 2.4G，按设备适配', en: 'BLE / 2.4G, adapted by device' } },
                { label: { zh: '适配设备', en: 'Devices' }, value: { zh: '相机 / 运动相机 / 手机 / 提词器', en: 'Camera / action camera / phone / teleprompter' } },
                { label: { zh: '交付形态', en: 'Delivery Form' }, value: { zh: '模组 + 控制固件 + 调试支持', en: 'Module + control firmware + debugging support' } }
              ]
            },
            {
              category: { zh: '遥控模组', en: 'Remote Control' },
              title: { zh: 'YS-300 泛遥控器全品类方案', en: 'YS-300 Full-Category Remote Control Solution' },
              text: { zh: '覆盖电视、机顶盒、家电、两轮电动车与智能中控，支持蓝牙、Zigbee、红外等多协议融合与自定义按键定义。', en: 'For TVs, set-top boxes, home appliances, two-wheel EVs and smart control panels, supporting Bluetooth, Zigbee, IR and custom key mapping.' },
              image: images.remoteControl,
              tags: [{ zh: '多协议融合', en: 'Multi-protocol' }, { zh: '按键定义', en: 'Key mapping' }, { zh: 'IP65 适配', en: 'IP65 adaptation' }],
              specs: [
                { label: { zh: '协议', en: 'Protocol' }, value: { zh: 'BLE / Zigbee / IR，按产品定义组合', en: 'BLE / Zigbee / IR, configured by product definition' } },
                { label: { zh: '可靠性', en: 'Reliability' }, value: { zh: '按键寿命 50 万次+，防护最高可按 IP65 方向设计', en: '500k+ key life, protection design up to IP65 direction' } },
                { label: { zh: '交付形态', en: 'Delivery Form' }, value: { zh: '模组 + 参考固件 + 按键定义工具', en: 'Module + reference firmware + key definition tool' } }
              ]
            },
            {
              category: { zh: '穿戴模组', en: 'Wearable' },
              title: { zh: 'YS-400 智能穿戴方案', en: 'YS-400 Smart Wearable Solution' },
              text: { zh: '面向手表、手环和健康监测类设备，提供低功耗连接、传感数据同步与可靠性验证支持。', en: 'For watches, bands and health monitoring devices, supporting low-power connectivity, sensor data sync and reliability validation.' },
              image: images.wearable,
              tags: [{ zh: '低功耗连接', en: 'Low-power connectivity' }, { zh: '传感同步', en: 'Sensor sync' }, { zh: '可靠性验证', en: 'Reliability validation' }],
              specs: [
                { label: { zh: '协议', en: 'Protocol' }, value: { zh: 'BLE 方向，版本按项目规格确认', en: 'BLE direction, version confirmed by project spec' } },
                { label: { zh: '应用', en: 'Applications' }, value: { zh: '心率 / 血氧 / 运动数据同步等方向', en: 'Heart rate / SpO2 / motion data sync directions' } },
                { label: { zh: '交付形态', en: 'Delivery Form' }, value: { zh: '模组 + SDK + 算法/固件适配支持', en: 'Module + SDK + algorithm/firmware adaptation support' } }
              ]
            },
            {
              category: { zh: '通用模组', en: 'General Module' },
              title: { zh: 'YS-500 蓝牙无线模组', en: 'YS-500 Bluetooth Wireless Module' },
              text: { zh: '预集成射频与硬件设计，适用于传感器、控制器、数据采集设备和既有产品无线功能扩展。', en: 'Pre-integrated RF and hardware design for sensors, controllers, data acquisition devices and wireless upgrades for existing products.' },
              image: images.generalWireless,
              tags: [{ zh: '快速集成', en: 'Fast integration' }, { zh: '透传通信', en: 'Transparent transfer' }, { zh: '量产友好', en: 'Production friendly' }],
              specs: [
                { label: { zh: '功能', en: 'Functions' }, value: { zh: '数据透传 / 状态上报 / 轻量控制', en: 'Data transfer / status reporting / lightweight control' } },
                { label: { zh: '适用设备', en: 'Devices' }, value: { zh: '传感器、控制器、采集设备及无线扩展产品', en: 'Sensors, controllers, acquisition devices and wireless expansion products' } },
                { label: { zh: '交付形态', en: 'Delivery Form' }, value: { zh: '标准模组或按项目定制版本', en: 'Standard module or project-based custom version' } }
              ]
            }
          ]
        },
        {
          type: 'faq',
          eyebrow: { zh: '参数与应用说明', en: 'Specs & Application Notes' },
          title: { zh: '页面用于选型判断，最终规格以实际资料和双方确认 为准。', en: 'This page supports product selection; final specifications follow actual documents and mutual confirmation.' },
          items: [
            { title: { zh: '规格口径', en: 'Specification Basis' }, text: { zh: '功耗、距离、防护、寿命等参数会因硬件版本、结构设计、使用环境和测试方法不同而变化。', en: 'Power, distance, protection and lifetime figures may vary by hardware version, structure, environment and test method.' } },
            { title: { zh: '定制范围', en: 'Customization Scope' }, text: { zh: '可围绕协议、接口、固件、按键定义、模组形态和测试标准进行项目化适配。', en: 'Customization can cover protocol, interface, firmware, key mapping, module form and testing standards.' } }
          ]
        }
      ]
    },
    scenarios: {
      title: { zh: '应用场景', en: 'Application Scenarios' },
      eyebrow: { zh: '行业解决方案', en: 'Industry Solutions' },
      description: { zh: '围绕消费电子常见品类，将无线连接产品线落到具体行业场景。', en: 'Applying wireless connectivity product lines to common consumer electronics scenarios.' },
      image: images.application,
      sections: [
        {
          type: 'case',
          eyebrow: { zh: '场景方案', en: 'Scenario Solutions' },
          title: { zh: '从应用需求反推芯片、模组与制造交付路径。', en: 'Define chip, module and production delivery paths from application needs.' },
          items: [
            { title: { zh: '办公 / 电竞键鼠', en: 'Office & Gaming Peripherals' }, text: { zh: '低延迟无线通信，解决卡顿、断连和多设备切换问题，适配蓝牙 5.3 与 2.4G 双模键鼠产品。', en: 'Low-latency wireless communication for lag, disconnection and multi-device switching issues in Bluetooth 5.3 and 2.4G keyboard and mouse products.' }, metric: '01', image: images.keyboardMouse, tags: [{ zh: '适配：键鼠模组', en: 'Fit: keyboard & mouse modules' }] },
            { title: { zh: '短视频 / 直播 / 户外摄影', en: 'Short Video / Live / Outdoor Shooting' }, text: { zh: '无线远程控制快门与拍摄参数，摆脱线缆限制，支持相机、运动相机、手机和提词器协同。', en: 'Wireless remote shutter and shooting parameter control without cables, supporting cameras, action cameras, phones and teleprompters.' }, metric: '02', image: images.cameraControl, tags: [{ zh: '适配：影像模组', en: 'Fit: imaging control modules' }] },
            { title: { zh: '家电 / 两轮车 / 智能中控', en: 'Home Appliances / Two-Wheel EV / Smart Control' }, text: { zh: '蓝牙、Zigbee、红外多协议融合，支持自定义按键、低功耗待机和较复杂终端形态。', en: 'Bluetooth, Zigbee and IR multi-protocol integration for custom keys, low standby power and complex terminal forms.' }, metric: '03', image: images.remoteControl, tags: [{ zh: '适配：遥控模组', en: 'Fit: remote control modules' }] },
            { title: { zh: '智能手表 / 健康手环', en: 'Smart Watch / Health Band' }, text: { zh: '低功耗连接与传感数据同步，支持心率、血氧、运动数据等方向的模组适配和可靠性验证。', en: 'Low-power connectivity and sensor data sync for heart rate, SpO2, motion data and reliability validation.' }, metric: '04', image: images.wearable, tags: [{ zh: '适配：穿戴模组', en: 'Fit: wearable modules' }] },
            { title: { zh: '传感器 / 数据采集 / IoT', en: 'Sensors / Data Acquisition / IoT' }, text: { zh: '面向需要稳定蓝牙数据传输的传感器、控制器和采集设备，提供低功耗透传与快速集成能力。', en: 'Low-power transparent transfer and fast integration for sensors, controllers and acquisition devices requiring stable Bluetooth data links.' }, metric: '05', image: images.quality, tags: [{ zh: '适配：通用模组', en: 'Fit: general modules' }] }
          ]
        },
        {
          type: 'cards',
          eyebrow: { zh: '方案交付', en: 'Solution Delivery' },
          title: { zh: '场景确认后进入样品、试产与量产节奏。', en: 'After scenario confirmation, projects move into samples, pilot run and production.' },
          items: [
            { title: { zh: '场景确认', en: 'Scenario Confirmation' }, text: { zh: '确认产品形态、连接方式、功耗目标、结构限制和应用环境。', en: 'Confirm product form, connectivity, power target, structure limits and application environment.' } },
            { title: { zh: '产品匹配', en: 'Product Matching' }, text: { zh: '根据场景匹配芯片、SoC、模组或参考方案方向。', en: 'Match chips, SoCs, modules or reference solution directions by scenario.' } },
            { title: { zh: '制造推进', en: 'Manufacturing Follow-through' }, text: { zh: '围绕样品、测试、试产、包装和出货节点保持沟通。', en: 'Maintain communication around samples, testing, pilot run, packing and shipment milestones.' } }
          ]
        }
      ]
    },
    inquiry: {
      title: { zh: '产品咨询', en: 'Product Inquiry' },
      eyebrow: { zh: '提交需求', en: 'Submit Requirement' },
      description: { zh: '请说明产品方向、应用场景、预计数量、样品或试产需求，我们会据此安排后续工程与商务沟通。', en: 'Share product direction, application, expected quantity, sample or pilot-run needs for engineering and business follow-up.' },
      image: images.productAlt,
      sections: [
        {
          type: 'form',
          formKind: 'product',
          eyebrow: { zh: '咨询表单', en: 'Inquiry Form' },
          title: { zh: '让产品问题从清晰信息开始。', en: 'Start product questions with clear information.' }
        },
        {
          type: 'faq',
          eyebrow: { zh: '常见问题', en: 'FAQ' },
          title: { zh: '提交前可先确认这些制造与交付问题。', en: 'Manufacturing and delivery questions to confirm before submitting.' },
          items: [
            { title: { zh: '是否提供工程样品和评估板？', en: 'Do you provide engineering samples and evaluation boards?' }, text: { zh: '可按项目提供工程样品、参考设计资料、评估板和 SDK，支持客户前期原型验证。', en: 'Engineering samples, reference design materials, evaluation boards and SDKs can be provided by project for early prototype validation.' } },
            { title: { zh: '最小起订量是多少？', en: 'What is the MOQ?' }, text: { zh: '根据方案类型、工艺路线和物料情况评估，支持从小批量试产到规模量产的分阶段推进。', en: 'MOQ is evaluated by solution type, process route and material status, supporting staged progress from pilot run to mass production.' } },
            { title: { zh: '从确认方案到批量出货需要多久？', en: 'How long from solution confirmation to batch shipment?' }, text: { zh: '取决于方案复杂度、定制程度和物料准备情况，详细排期会在需求确认后与客户共同确定。', en: 'Timeline depends on complexity, customization and material readiness; a detailed schedule is confirmed after requirement review.' } },
            { title: { zh: '出货前经过哪些检测？', en: 'What tests are done before shipment?' }, text: { zh: '每批次出货前执行功能测试、功耗测试和外观检查，并根据产品类型增加射频校准或环境可靠性抽检。', en: 'Before shipment, each batch goes through functional, power and appearance checks, with RF calibration or environmental reliability sampling added by product type.' } },
            { title: { zh: '是否支持定制开发？', en: 'Do you support custom development?' }, text: { zh: '支持协议栈定制、功能模块调整、接口适配和产品形态适配，由工程团队评估可行性后进入开发排期。', en: 'Custom protocol stack, functional module, interface and product form adaptation are supported after engineering feasibility review.' } }
          ]
        }
      ]
    }
  },
  manufacturing: {
    production: {
      title: { zh: '生产服务', en: 'Production Service' },
      eyebrow: { zh: '制造与服务', en: 'Manufacturing' },
      description: { zh: '从工程打样到批量出货，标准化制造流程确保每一批次交付一致性。', en: 'From engineering samples to batch shipment, a standardized manufacturing flow keeps delivery consistent.' },
      image: images.service,
      sections: [
        {
          type: 'process',
          eyebrow: { zh: '生产流程', en: 'Production Flow' },
          title: { zh: '工程打样、试产验证、批量制造、质检出货。', en: 'Engineering sample, pilot validation, batch manufacturing and QC shipment.' },
          items: [
            { title: { zh: '工程打样', en: 'Engineering Sample' }, text: { zh: '根据客户规格需求提供工程样品、评估板和 SDK，完成初步功能验证。', en: 'Provide engineering samples, evaluation boards and SDKs according to customer specs for initial functional validation.' } },
            { title: { zh: '试产验证', en: 'Pilot Validation' }, text: { zh: '小批量试产，执行功能测试、功耗测试和环境适应性验证，固化工艺参数。', en: 'Run small-batch pilot production, functional tests, power tests and environmental adaptation checks to lock process parameters.' } },
            { title: { zh: '批量制造', en: 'Batch Manufacturing' }, text: { zh: '衔接供应链按标准流程排产，执行 SMT 贴装、模组组装和成品测试。', en: 'Coordinate supply chain production under standard flow, including SMT mounting, module assembly and finished-product testing.' } },
            { title: { zh: '质检出货', en: 'QC Shipment' }, text: { zh: '全检与抽检结合，出具批次检测记录，按包装规范安排出货。', en: 'Combine full inspection and sampling, keep batch test records and ship by packing requirements.' } }
          ]
        },
        {
          type: 'metrics',
          eyebrow: { zh: '产线能力', en: 'Line Capability' },
          title: { zh: '以项目计划为基础组织产能、工艺与交付资源。', en: 'Organizing capacity, process and delivery resources by project plan.' },
          items: [
            { title: { zh: '月度批量出货', en: 'Monthly Batch Shipment' }, text: { zh: '芯片与模组出货能力按项目排产确认', en: 'Chip and module shipment capacity confirmed by project schedule' } },
            { title: { zh: '量产中心', en: 'Production Centers' }, text: { zh: '深圳、上海两地研发与量产协同', en: 'R&D and production collaboration in Shenzhen and Shanghai' } },
            { title: { zh: '制造模式', en: 'Manufacturing Model' }, text: { zh: '芯片设计、供应链管理、封装测试与出货全程管控', en: 'Chip design, supply chain management, packaging, testing and shipment control' } },
            { title: { zh: '交付周期', en: 'Delivery Schedule' }, text: { zh: '根据方案类型和批量规模确认交付计划', en: 'Delivery plan confirmed by solution type and batch size' } }
          ]
        }
      ]
    },
    process: {
      title: { zh: '工艺流程', en: 'Process Flow' },
      eyebrow: { zh: '技术路线', en: 'Technical Route' },
      description: { zh: '围绕芯片规格定义、参考设计验证、试产工艺固化和持续品控建立制造流程。', en: 'Manufacturing flow around chip specification, reference design validation, pilot process confirmation and continuous quality control.' },
      image: images.factory,
      sections: [
        {
          type: 'process',
          eyebrow: { zh: '制程说明', en: 'Process Steps' },
          title: { zh: '把芯片模组制造拆成可验证、可追踪的节点。', en: 'Breaking chip and module manufacturing into verifiable, traceable steps.' },
          items: [
            { title: { zh: '芯片规格定义', en: 'Chip Specification' }, text: { zh: '根据客户产品需求确定芯片选型、接口定义、功耗目标和射频参数。', en: 'Define chip selection, interfaces, power target and RF parameters based on customer product requirements.' } },
            { title: { zh: '参考设计与验证', en: 'Reference Design & Validation' }, text: { zh: '基于选定芯片方案开发参考设计、射频匹配和 PCB 布局，完成工程验证。', en: 'Develop reference design, RF matching and PCB layout based on selected chip solution, then complete engineering validation.' } },
            { title: { zh: '试产与工艺固化', en: 'Pilot Run & Process Lock' }, text: { zh: '小批量试产，执行设计验证测试，固化 SMT 工艺参数、测试规范和验收标准。', en: 'Run pilot production and design validation tests to lock SMT process parameters, test specs and acceptance criteria.' } },
            { title: { zh: '量产与持续品控', en: 'Production & Quality Control' }, text: { zh: '按固化工艺进行批量制造，持续监控良率、异常闭环和出货品质。', en: 'Manufacture by locked process while monitoring yield, issue closure and shipment quality.' } }
          ]
        },
        {
          type: 'metrics',
          eyebrow: { zh: '关键制造参数', en: 'Key Manufacturing Parameters' },
          title: { zh: '参数按项目资料确认，页面展示常见能力方向。', en: 'Parameters are confirmed by project documents; this page shows typical capability directions.' },
          items: [
            { title: { zh: 'SMT 工艺能力', en: 'SMT Capability' }, text: { zh: '支持常见芯片封装与高密度模组贴装方向', en: 'Supports common chip packages and high-density module mounting directions' } },
            { title: { zh: '测试覆盖', en: 'Test Coverage' }, text: { zh: '功能测试、射频校准、功耗测试按产品类型配置', en: 'Functional tests, RF calibration and power tests configured by product type' } },
            { title: { zh: '按键 / 接口寿命', en: 'Key / Interface Life' }, text: { zh: '遥控器等方案可按 50 万次+方向验证', en: 'Remote-control projects can validate toward 500k+ cycles' } },
            { title: { zh: '环境可靠性', en: 'Environmental Reliability' }, text: { zh: '高低温、防水、耐磨等测试按项目规格执行', en: 'Temperature, waterproof and wear tests executed by project specs' } }
          ]
        }
      ]
    },
    testing: {
      title: { zh: '测试与交付', en: 'Testing & Delivery' },
      eyebrow: { zh: '品质节点', en: 'Quality Nodes' },
      description: { zh: '从功能测试、射频校准到出货检验，围绕批次一致性建立质量闭环。', en: 'From functional tests and RF calibration to shipment inspection, quality closure is built around batch consistency.' },
      image: images.quality,
      sections: [
        {
          type: 'cards',
          eyebrow: { zh: '测试标准', en: 'Testing Standard' },
          title: { zh: '电子产品制造需要看到真实的测试项。', en: 'Electronics manufacturing should show concrete test items.' },
          items: [
            { title: { zh: '功能测试', en: 'Functional Test' }, text: { zh: '出货前执行射频发射功率、接收灵敏度、蓝牙配对、断连恢复、按键响应和功耗电流等关键项目验证。', en: 'Pre-shipment validation can cover RF transmit power, receive sensitivity, Bluetooth pairing, reconnection, key response and power current.' } },
            { title: { zh: '射频校准', en: 'RF Calibration' }, text: { zh: '对 2.4G / BLE 频段进行频偏校准和发射功率标定，确保批次一致性符合项目规格。', en: 'Frequency offset calibration and transmit power calibration for 2.4G / BLE bands to keep batch consistency within project specs.' } },
            { title: { zh: '环境可靠性', en: 'Environmental Reliability' }, text: { zh: '按产品类型执行高低温循环、高温老化、ESD、跌落、防水或耐磨等验证。', en: 'Run temperature cycling, high-temperature aging, ESD, drop, waterproof or wear tests according to product type.' } },
            { title: { zh: '出货检验', en: 'Shipment Inspection' }, text: { zh: '核对外观、数量、标签、包装规范与交付资料，形成批次出货记录。', en: 'Check appearance, quantity, labels, packing specs and delivery documents to form batch shipment records.' } }
          ]
        },
        {
          type: 'process',
          eyebrow: { zh: '质检流程', en: 'Inspection Flow' },
          title: { zh: '来料、过程、成品、出货四道质量节点。', en: 'Four quality checkpoints: incoming, process, finished product and shipment.' },
          items: [
            { title: { zh: '来料检验', en: 'Incoming Inspection' }, text: { zh: '对 PCB、元器件、连接器等关键物料进行来料抽检和可焊性验证。', en: 'Sample incoming PCB, components and connectors, and verify solderability where needed.' } },
            { title: { zh: '过程巡检', en: 'Process Patrol' }, text: { zh: 'SMT 贴装后进行 AOI 光学检查，关键工位记录工艺数据。', en: 'Run AOI optical inspection after SMT mounting and record process data at key stations.' } },
            { title: { zh: '成品测试', en: 'Finished Product Test' }, text: { zh: '每颗模组执行功能测试和射频校准，不良品标记隔离并闭环处理。', en: 'Run functional tests and RF calibration on each module, isolate failed units and close issues.' } },
            { title: { zh: '出货核验', en: 'Shipment Check' }, text: { zh: '核对数量、标签、包装规范与出货资料，确认后放行。', en: 'Check quantity, labels, packing specs and shipment documents before release.' } }
          ]
        }
      ]
    },
    certification: {
      title: { zh: '资质文件', en: 'Certification Documents' },
      eyebrow: { zh: '合规与测试支持', en: 'Compliance & Testing Support' },
      description: { zh: '不展示未确认的证书编号，按具体项目提供合规评估、测试配合与资料整理支持。', en: 'No unconfirmed certificate numbers are displayed; compliance review, testing coordination and documentation support are provided by project.' },
      image: images.delivery,
      sections: [
        {
          type: 'certs',
          eyebrow: { zh: '支持范围', en: 'Support Scope' },
          title: { zh: '以项目资料和客户出货地区为依据组织合规工作。', en: 'Compliance work is organized by project documents and target shipment region.' },
          items: [
            { title: { zh: '合规评估', en: 'Compliance Review' }, text: { zh: '按产品形态、无线协议和出货地区评估测试要求', en: 'Evaluate test needs by product form, wireless protocol and shipment region' } },
            { title: { zh: '测试配合', en: 'Testing Coordination' }, text: { zh: '配合客户或第三方实验室准备样品与基础资料', en: 'Coordinate samples and basic documents with customers or third-party labs' } },
            { title: { zh: '资料整理', en: 'Document Preparation' }, text: { zh: '整理规格书、测试记录、BOM 等项目资料', en: 'Prepare datasheets, test records, BOM and other project documents' } },
            { title: { zh: '版本追踪', en: 'Version Tracking' }, text: { zh: '对关键资料版本、测试口径和变更记录进行管理', en: 'Manage key document versions, test basis and change records' } }
          ]
        },
        {
          type: 'faq',
          eyebrow: { zh: '说明', en: 'Notes' },
          title: { zh: '证书与编号仅在取得并允许公开后展示。', en: 'Certificates and numbers are shown only after they are obtained and approved for public display.' },
          items: [
            { title: { zh: '是否公开证书编号？', en: 'Are certificate numbers public?' }, text: { zh: '当前页面不展示未确认的证书或编号；如项目需要，可在业务沟通中确认资料范围。', en: 'This page does not display unconfirmed certificates or numbers; document scope can be confirmed during project communication.' } },
            { title: { zh: '能否配合认证？', en: 'Can certification be supported?' }, text: { zh: '可根据客户出货地区和产品形态，配合完成样品、规格资料和测试项目沟通。', en: 'Samples, specifications and test-item communication can be supported according to target region and product form.' } }
          ]
        }
      ]
    }
  },
  contact: {
    info: {
      title: { zh: '联系方式', en: 'Contact Info' },
      eyebrow: { zh: '联系我们', en: 'Contact Us' },
      description: { zh: '围绕产品信息、样品、试产、量产、品质要求与交付安排开始一次清晰沟通。', en: 'Start a clear conversation about products, samples, pilot run, production, quality requirements and delivery.' },
      image: images.delivery,
      sections: [
        {
          type: 'contact',
          eyebrow: { zh: '企业信息', en: 'Company Info' },
          title: { zh: '通过业务咨询入口获取更完整的项目对接信息。', en: 'Use the business inquiry entry for detailed project contact information.' },
          items: [
            { title: { zh: '杭州总部', en: 'Hangzhou Headquarters' }, text: { zh: '杭州，负责公司运营、客户沟通与项目统筹', en: 'Hangzhou, responsible for operations, customer communication and project coordination' } },
            { title: { zh: '深圳研发与量产协同', en: 'Shenzhen R&D & Production Collaboration' }, text: { zh: '深圳市南山区，详细地址可通过业务咨询获取', en: 'Nanshan District, Shenzhen. Detailed address available through business inquiry' } },
            { title: { zh: '上海研发中心', en: 'Shanghai R&D Center' }, text: { zh: '上海，负责无线连接相关研发协同', en: 'Shanghai, supporting wireless connectivity R&D collaboration' } },
            { title: { zh: '工作时间', en: 'Business Hours' }, text: { zh: '工作日 09:00 - 18:00', en: 'Weekdays 09:00 - 18:00' } }
          ]
        }
      ]
    },
    inquiry: {
      title: { zh: '业务咨询', en: 'Business Inquiry' },
      eyebrow: { zh: '商务合作', en: 'Business Cooperation' },
      description: { zh: '提交合作背景、产品方向、预计数量和咨询内容，便于我们安排合适的对接。', en: 'Submit cooperation context, product direction, expected quantity and inquiry details for proper follow-up.' },
      image: images.office,
      sections: [
        {
          type: 'form',
          formKind: 'business',
          eyebrow: { zh: '咨询表单', en: 'Inquiry Form' },
          title: { zh: '把合作需求描述清楚。', en: 'Describe the cooperation need clearly.' }
        }
      ]
    },
    visit: {
      title: { zh: '来访预约', en: 'Visit Booking' },
      eyebrow: { zh: '预约登记', en: 'Appointment' },
      description: { zh: '请提前说明到访日期、联系方式、人数和到访事由，便于安排接待与沟通。', en: 'Share visit date, contact, visitor count and topics so we can arrange reception.' },
      image: images.office,
      sections: [
        {
          type: 'form',
          formKind: 'visit',
          eyebrow: { zh: '预约表单', en: 'Booking Form' },
          title: { zh: '提前预约，让现场沟通更高效。', en: 'Book ahead for more efficient on-site communication.' }
        },
        {
          type: 'faq',
          eyebrow: { zh: '来访须知', en: 'Visit Notes' },
          title: { zh: '到访前请确认沟通事项。', en: 'Please confirm discussion items before visiting.' },
          items: [
            { title: { zh: '预约时间', en: 'Appointment Time' }, text: { zh: '请至少提前一个工作日提交预约信息。', en: 'Please submit booking information at least one business day in advance.' } },
            { title: { zh: '沟通材料', en: 'Discussion Materials' }, text: { zh: '如涉及产品需求，可提前准备产品方向、数量计划、样品状态和交付要求。', en: 'For product needs, prepare direction, quantity plan, sample status and delivery requirements.' } }
          ]
        }
      ]
    }
  }
} as const

export type PageGroup = keyof typeof pages

export function localeText(value: LocaleText, locale: string) {
  return locale === 'en' ? value.en : value.zh
}

export function getNavByPath(path: string) {
  const normalized = path.replace(/^\/en(?=\/|$)/, '') || '/'
  const activeNav = navItems.find((item) => {
    if (item.path === normalized) return true
    return item.children?.some((child) => child.path === normalized)
  }) ?? navItems[0]
  const activeChild = activeNav.children?.find((child) => child.path === normalized) ?? null
  return { normalized, activeNav, activeChild, showSubNav: activeNav.key !== 'home' && !!activeNav.children?.length }
}

export function getPage(group: string, slug: string) {
  const groupPages = pages[group as PageGroup]
  if (!groupPages) return null
  return groupPages[slug as keyof typeof groupPages] ?? null
}

export function useLocalizedText() {
  const { locale } = useI18n()
  return (value: LocaleText) => computed(() => localeText(value, locale.value))
}

export function usePageSeo(title: LocaleText, description: LocaleText) {
  const { locale } = useI18n()
  useSeoMeta({
    title: () => `${localeText(title, locale.value)} | YiYuanLi`,
    description: () => localeText(description, locale.value),
    ogTitle: () => `${localeText(title, locale.value)} | YiYuanLi`,
    ogDescription: () => localeText(description, locale.value),
    ogImage: images.hero,
    ogType: 'website',
    twitterCard: 'summary_large_image'
  })
}
