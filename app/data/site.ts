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
  productAlt: '/assets/3.jpg',
  application: '/assets/21.jpg',
  service: '/assets/22.jpg',
  office: '/assets/23.jpg',
  quality: '/assets/24.jpg',
  delivery: '/assets/25.jpg',
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
    path: '/about',
    children: [
      { key: 'company', label: { zh: '公司简介', en: 'Company' }, path: '/about#company', description: { zh: '企业概况、制造能力', en: 'Company overview and manufacturing capability' } },
      { key: 'business', label: { zh: '业务范围', en: 'Business' }, path: '/about#business', description: { zh: '产品线与制造能力', en: 'Product lines and manufacturing capability' } },
      { key: 'culture', label: { zh: '企业文化', en: 'Our Culture' }, path: '/about#culture', description: { zh: '工匠精神、务实高效、协同担当、持续精进', en: 'Craftsmanship, pragmatic efficiency, shared accountability and continuous improvement' } }
    ]
  },
  {
    key: 'products',
    label: { zh: '产品中心', en: 'Products' },
    path: '/products',
    children: [
      { key: 'detail', label: { zh: '产品详情', en: 'Product Detail' }, path: '/products#detail', description: { zh: '产品线、规格与交付形态', en: 'Product lines, specs and delivery forms' } },
      { key: 'scenarios', label: { zh: '应用场景', en: 'Scenarios' }, path: '/products#scenarios', description: { zh: '行业应用与解决方案', en: 'Industry applications and solutions' } },
      { key: 'inquiry', label: { zh: '产品咨询', en: 'Product Inquiry' }, path: '/products#inquiry', description: { zh: '样品、试产与定制需求', en: 'Samples, pilot run and custom needs' } }
    ]
  },
  {
    key: 'manufacturing',
    label: { zh: '制造与服务', en: 'Manufacturing' },
    path: '/manufacturing',
    children: [
      { key: 'production', label: { zh: '生产服务', en: 'Production' }, path: '/manufacturing#production', description: { zh: '打样、试产、量产、出货', en: 'Samples, pilot run, mass production and shipment' } },
      { key: 'process', label: { zh: '工艺流程', en: 'Process' }, path: '/manufacturing#process', description: { zh: '芯片模组制造流程', en: 'Chip and module manufacturing process' } },
      { key: 'testing', label: { zh: '测试与交付', en: 'Testing & Delivery' }, path: '/manufacturing#testing', description: { zh: '测试标准与质检流程', en: 'Testing standards and QC flow' } }
    ]
  },
  {
    key: 'contact',
    label: { zh: '联系我们', en: 'Contact' },
    path: '/contact',
    children: [
      { key: 'info', label: { zh: '联系方式', en: 'Contact Info' }, path: '/contact#info', description: { zh: '办公城市与业务入口', en: 'Office cities and business entry' } },
      { key: 'inquiry', label: { zh: '业务咨询', en: 'Business Inquiry' }, path: '/contact#inquiry', description: { zh: '商务合作与来访预约', en: 'Business inquiry and visit booking' } }
    ]
  }
]

export const defaultChildRoutes: Record<string, string> = {
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
      description: { zh: '电子板卡与无线通信模块制造企业', en: 'Electronic board and wireless module manufacturer' },
      image: '',
      sections: [
        {
          type: 'text',
          eyebrow: { zh: '企业概况', en: 'Overview' },
          title: { zh: '从图纸到良品出货的制造中间环节。', en: 'The manufacturing link between drawings and qualified shipment.' },
          paragraphs: [
            { zh: '壹原理科技是一家电子板卡与无线通信模块制造企业。总部杭州，深圳负责量产与供应链，上海负责协议栈与射频研发。', en: 'YiYuanLi is an electronic board and wireless communication module manufacturer. Headquartered in Hangzhou, with production and supply chain in Shenzhen, protocol stack and RF R&D in Shanghai.' },
            { zh: '产品方向包括键鼠外设控制板、运动相机遥控器、充电宝通信模块、定制板卡加工。不做方案设计，不做品牌成品，只做从图纸到良品出货的中间制造环节。', en: 'Product directions include keyboard/mouse control boards, action camera remotes, power bank communication modules, and custom PCBA. No design services, no branded products — only the manufacturing link from drawings to qualified shipment.' }
          ]
        }
      ]
    },
    business: {
      title: { zh: '业务范围', en: 'Business Scope' },
      eyebrow: { zh: '产品与制造', en: 'Products & Manufacturing' },
      description: { zh: '四条产品线，按项目定制。', en: 'Four product lines, customized by project.' },
      image: '',
      sections: [
        {
          type: 'cards',
          eyebrow: { zh: '主营业务', en: 'Main Business' },
          title: { zh: '不卖标准品，一个项目一个方案。', en: 'No off-the-shelf products — one project, one solution.' },
          items: [
            { title: { zh: '键鼠外设控制板', en: 'Keyboard & Mouse Control Boards' }, text: { zh: '蓝牙/2.4G 双模，按键矩阵设计、主控适配、低功耗优化、固件烧录、整板功能测试。', en: 'Bluetooth/2.4G dual-mode. Key matrix design, MCU adaptation, low-power optimization, firmware flashing, full-board functional testing.' } },
            { title: { zh: '运动相机遥控器', en: 'Action Camera Remotes' }, text: { zh: '远程快门、模式切换、低功耗待机、按键自定义。样机调试到量产导入全程跟进。', en: 'Remote shutter, mode switching, low-power standby, custom key mapping. Full coverage from prototype debugging to mass production introduction.' } },
            { title: { zh: '充电宝通信模块', en: 'Power Bank Communication Modules' }, text: { zh: '蓝牙/WiFi/串口透传、电量采集、状态上报、APP 交互通信。', en: 'Bluetooth/WiFi/UART pass-through, battery data collection, status upload, app communication.' } },
            { title: { zh: '定制电子板卡加工', en: 'Custom Electronic Board Assembly' }, text: { zh: 'PCB 制板、SMT 贴片、DIP 插件焊接、程序烧录、功能测试。一单到底。', en: 'PCB fabrication, SMT mounting, DIP soldering, firmware flashing, functional testing. One order, end to end.' } }
          ]
        }
      ]
    },
    culture: {
      title: { zh: '企业文化', en: 'Corporate Culture' },
      eyebrow: { zh: '文化理念', en: 'Our Culture' },
      description: { zh: '四个基本原则。', en: 'Four core principles.' },
      image: '',
      sections: [
        {
          type: 'cards',
          eyebrow: { zh: '核心理念', en: 'Core Principles' },
          title: { zh: '不挂墙上，落在产线上。', en: 'Not on the wall — on the production line.' },
          items: [
            { title: { zh: '工匠精神', en: 'Craftsmanship' }, text: { zh: '每个参数有标准、有记录。不接受"差不多"。', en: 'Every parameter has a standard and a record. "Close enough" is not accepted.' } },
            { title: { zh: '务实沟通', en: 'Pragmatic Communication' }, text: { zh: '给方案、给排期、给结果。不画饼，不堆术语。', en: 'Deliver plans, schedules, and results. No empty promises, no jargon.' } },
            { title: { zh: '责任到人', en: 'Individual Accountability' }, text: { zh: '每个项目指定唯一工程负责人。问题在哪发现就在哪解决。', en: 'Every project has a single engineering owner. Issues resolved where they surface.' } },
            { title: { zh: '持续改进', en: 'Continuous Improvement' }, text: { zh: '每批次出货后复盘，工艺笔记驱动下一单更好。', en: 'Post-batch reviews feed process notes that improve the next order.' } }
          ]
        }
      ]
    }
  },
  products: {
    detail: {
      title: { zh: '产品详情', en: 'Product Detail' },
      eyebrow: { zh: '产品中心', en: 'Products' },
      description: { zh: '四类产品方向，按项目定制。', en: 'Four product directions, customized by project.' },
      image: '',
      sections: [
        {
          type: 'products',
          filterable: true,
          eyebrow: { zh: '产品线', en: 'Product Lines' },
          title: { zh: '不卖标准品，按项目确认规格与交付形态。', en: 'No off-the-shelf products. Specs and delivery confirmed per project.' },
          items: [
            {
              category: { zh: '键鼠外设类', en: 'Keyboard & Mouse' },
              title: { zh: '键鼠外设控制板', en: 'Keyboard & Mouse Control Board' },
              text: { zh: '蓝牙/2.4G 双模，面向无线键盘、鼠标、机械键盘及定制外设。按键矩阵设计、主控适配、低功耗优化、程序烧录与整板功能测试。', en: 'Bluetooth/2.4G dual-mode for wireless keyboards, mice, mechanical keyboards and custom peripherals. Key matrix design, MCU adaptation, low-power optimization, firmware flashing and full-board testing.' },
              image: images.keyboardMouse,
              tags: [{ zh: '蓝牙/2.4G', en: 'Bluetooth / 2.4G' }, { zh: '低功耗优化', en: 'Low-power tuning' }, { zh: '整板测试', en: 'Board testing' }],
              specs: [
                { label: { zh: '适用产品', en: 'Products' }, value: { zh: '键盘 / 鼠标 / 机械键盘 / 定制外设', en: 'Keyboard / mouse / mechanical keyboard / custom peripherals' } },
                { label: { zh: '核心能力', en: 'Core Capability' }, value: { zh: '按键矩阵、无线连接、低功耗与主控适配', en: 'Key matrix, wireless connectivity, low power and MCU adaptation' } },
                { label: { zh: '交付形态', en: 'Delivery Form' }, value: { zh: 'PCBA + 程序烧录 + 功能测试，按项目确认', en: 'PCBA + firmware flashing + functional testing, confirmed per project' } }
              ]
            },
            {
              category: { zh: '遥控器类', en: 'Remote Control' },
              title: { zh: '运动相机遥控器', en: 'Action Camera Remote' },
              text: { zh: '面向运动相机、影像辅助设备及小型手持遥控器。远程快门、模式切换、无线通信、按键控制、样机调试与量产导入。', en: 'For action cameras, imaging accessories and compact handheld remotes. Remote shutter, mode switching, wireless communication, key control, prototype debugging and production introduction.' },
              image: images.cameraControl,
              tags: [{ zh: '远程控制', en: 'Remote control' }, { zh: '按键控制', en: 'Key control' }, { zh: '量产导入', en: 'Production intro' }],
              specs: [
                { label: { zh: '适用产品', en: 'Products' }, value: { zh: '运动相机遥控器 / 影像控制设备 / 手持遥控器', en: 'Action camera remote / imaging control device / handheld remote' } },
                { label: { zh: '核心能力', en: 'Core Capability' }, value: { zh: '无线通信、按键控制、模式切换与样机调试', en: 'Wireless communication, key control, mode switching and prototype debugging' } },
                { label: { zh: '交付形态', en: 'Delivery Form' }, value: { zh: 'PCBA + 控制固件 + 测试支持', en: 'PCBA + control firmware + test support' } }
              ]
            },
            {
              category: { zh: '通信模块类', en: 'Communication Module' },
              title: { zh: '充电宝 APP 上传模块', en: 'Power Bank App-Upload Module' },
              text: { zh: '面向共享充电宝、移动电源及智能供电设备。蓝牙/WiFi/串口透传、电量采集、设备状态上传与 APP 交互通信。', en: 'For shared power banks, portable power supplies and smart power devices. Bluetooth/WiFi/UART pass-through, battery data collection, status upload and app communication.' },
              image: images.generalWireless,
              tags: [{ zh: 'APP上传', en: 'App upload' }, { zh: '状态采集', en: 'Status capture' }, { zh: '蓝牙透传', en: 'Bluetooth pass-through' }],
              specs: [
                { label: { zh: '适用产品', en: 'Products' }, value: { zh: '共享充电宝 / 移动电源 / 智能供电设备', en: 'Shared power bank / portable power supply / smart power device' } },
                { label: { zh: '核心能力', en: 'Core Capability' }, value: { zh: '电量采集、状态上报、APP通信与透传控制', en: 'Battery data collection, status upload, app communication and pass-through control' } },
                { label: { zh: '交付形态', en: 'Delivery Form' }, value: { zh: '通信模块 PCBA + 烧录测试 + 量产导入', en: 'Communication module PCBA + flashing test + production introduction' } }
              ]
            },
            {
              category: { zh: '定制加工类', en: 'Custom Assembly' },
              title: { zh: '定制板卡加工', en: 'Custom Board Assembly' },
              text: { zh: '承接消费电子、智能硬件、控制器及小型电子设备板卡加工。PCB 优化、元器件采购、SMT 贴片、插件焊接、程序烧录与功能测试。', en: 'PCBA for consumer electronics, smart hardware, controllers and compact electronic devices. PCB optimization, component sourcing, SMT mounting, DIP soldering, firmware flashing and functional testing.' },
              image: images.productAlt,
              tags: [{ zh: 'SMT贴片', en: 'SMT mounting' }, { zh: '程序烧录', en: 'Firmware flashing' }, { zh: '功能测试', en: 'Functional test' }],
              specs: [
                { label: { zh: '适用产品', en: 'Products' }, value: { zh: '消费电子 / 智能硬件 / 控制器 / 小型电子设备', en: 'Consumer electronics / smart hardware / controllers / compact electronic devices' } },
                { label: { zh: '核心能力', en: 'Core Capability' }, value: { zh: 'PCB优化、物料采购、SMT贴片、插件焊接与测试', en: 'PCB optimization, material sourcing, SMT mounting, DIP soldering and testing' } },
                { label: { zh: '交付形态', en: 'Delivery Form' }, value: { zh: '整板 PCBA 加工 + 测试交付，按项目资料确认', en: 'Full-board PCBA assembly + test delivery, confirmed per project' } }
              ]
            }
          ]
        }
      ]
    },
    scenarios: {
      title: { zh: '应用场景', en: 'Application Scenarios' },
      eyebrow: { zh: '行业方案', en: 'Industry Solutions' },
      description: { zh: '按实际应用场景匹配产品方案。', en: 'Match product solutions by real-world application scenario.' },
      image: '',
      sections: [
        {
          type: 'case',
          eyebrow: { zh: '场景方案', en: 'Scenario Solutions' },
          title: { zh: '从应用需求反推产品与制造路径。', en: 'Reverse-engineer product and manufacturing paths from application needs.' },
          items: [
            { title: { zh: '办公 / 电竞外设', en: 'Office & Gaming Peripherals' }, text: { zh: '键盘、鼠标和定制外设的控制板方案，蓝牙/2.4G 连接、按键矩阵、低功耗优化、程序烧录与整板测试。', en: 'Control board solutions for keyboards, mice and custom peripherals. Bluetooth/2.4G, key matrix, low-power tuning, firmware flashing and full-board testing.' }, metric: '01', tags: [{ zh: '键鼠外设控制板', en: 'Keyboard/mouse control boards' }] },
            { title: { zh: '运动相机 / 户外拍摄', en: 'Action Camera / Outdoor Shooting' }, text: { zh: '运动相机遥控器和影像辅助设备方案。远程快门、模式切换、无线通信、按键控制与量产导入。', en: 'Solutions for action camera remotes and imaging accessories. Remote shutter, mode switching, wireless communication, key control and production introduction.' }, metric: '02', tags: [{ zh: '运动相机遥控器', en: 'Action camera remote' }] },
            { title: { zh: '共享充电宝 / 移动电源', en: 'Shared Power Bank / Portable Power' }, text: { zh: '充电宝 APP 上传模块方案。蓝牙/WiFi/串口透传、电量采集、状态上传与 APP 交互通信。', en: 'Power bank app-upload module solutions. Bluetooth/WiFi/UART pass-through, battery data collection, status upload and app communication.' }, metric: '03', tags: [{ zh: '充电宝通信模块', en: 'Power bank communication module' }] },
            { title: { zh: '消费电子 / 智能硬件', en: 'Consumer Electronics / Smart Hardware' }, text: { zh: '定制板卡加工方案。PCB 优化、元器件采购、SMT 贴片、插件焊接、程序烧录与功能测试。', en: 'Custom PCBA solutions. PCB optimization, component sourcing, SMT mounting, DIP soldering, firmware flashing and functional testing.' }, metric: '04', tags: [{ zh: '定制 PCBA 加工', en: 'Custom PCBA assembly' }] }
          ]
        }
      ]
    },
    inquiry: {
      title: { zh: '产品咨询', en: 'Product Inquiry' },
      eyebrow: { zh: '提交需求', en: 'Submit Requirement' },
      description: { zh: '说明产品方向、应用场景和预计数量。', en: 'Share product direction, application scenario and expected quantity.' },
      image: '',
      sections: [
        {
          type: 'form',
          formKind: 'product',
          eyebrow: { zh: '咨询表单', en: 'Inquiry Form' },
          title: { zh: '让产品问题从清晰信息开始。', en: 'Start product questions with clear information.' }
        }
      ]
    }
  },
  manufacturing: {
    production: {
      title: { zh: '生产服务', en: 'Production Service' },
      eyebrow: { zh: '制造与服务', en: 'Manufacturing' },
      description: { zh: '从工程打样到批量出货的标准化流程。', en: 'Standardized flow from engineering sample to batch shipment.' },
      image: '',
      sections: [
        {
          type: 'process',
          eyebrow: { zh: '生产流程', en: 'Production Flow' },
          title: { zh: '四个阶段，一个标准。', en: 'Four stages, one standard.' },
          items: [
            { title: { zh: '工程打样', en: 'Engineering Sample' }, text: { zh: '根据客户规格提供工程样品和评估板，完成初步功能验证。', en: 'Provide engineering samples and evaluation boards per client specs for initial functional validation.' } },
            { title: { zh: '试产验证', en: 'Pilot Validation' }, text: { zh: '小批量试产，验证 SMT 参数和测试工装，固化工艺文件。', en: 'Small-batch pilot to validate SMT parameters and test fixtures, locking process documentation.' } },
            { title: { zh: '批量制造', en: 'Batch Manufacturing' }, text: { zh: '衔接供应链按标准流程排产，SMT 贴装、组装、成品测试。', en: 'Coordinate supply chain production. SMT mounting, assembly, finished-product testing.' } },
            { title: { zh: '质检出货', en: 'QC Shipment' }, text: { zh: '全检与抽检结合，出具批次检测记录，按包装规范出货。', en: 'Full inspection and sampling combined. Batch test records issued, shipped per packing standards.' } }
          ]
        }
      ]
    },
    process: {
      title: { zh: '工艺流程', en: 'Process Flow' },
      eyebrow: { zh: '技术路线', en: 'Technical Route' },
      description: { zh: '从规格到量产的标准化制程节点。', en: 'Standardized process steps from specification to production.' },
      image: '',
      sections: [
        {
          type: 'process',
          eyebrow: { zh: '制程说明', en: 'Process Steps' },
          title: { zh: '四个节点，每个都可追踪。', en: 'Four steps, each traceable.' },
          items: [
            { title: { zh: '规格确认', en: 'Specification Confirmation' }, text: { zh: '根据客户需求确定芯片选型、接口定义、功耗目标和射频参数。', en: 'Define chip selection, interfaces, power targets and RF parameters based on client requirements.' } },
            { title: { zh: '参考设计', en: 'Reference Design' }, text: { zh: '基于选定方案开发参考设计、射频匹配和 PCB 布局，完成工程验证。', en: 'Develop reference design, RF matching and PCB layout based on selected solution, complete engineering validation.' } },
            { title: { zh: '试产固化', en: 'Pilot Run & Process Lock' }, text: { zh: '小批量试产，固化 SMT 工艺参数、测试规范和验收标准。', en: 'Small-batch pilot to lock SMT process parameters, test specs and acceptance criteria.' } },
            { title: { zh: '量产品控', en: 'Production & Quality Control' }, text: { zh: '按固化工艺批量制造，持续监控良率和出货品质。', en: 'Mass production per locked process, continuous yield and shipment quality monitoring.' } }
          ]
        }
      ]
    },
    testing: {
      title: { zh: '测试与交付', en: 'Testing & Delivery' },
      eyebrow: { zh: '品质节点', en: 'Quality Nodes' },
      description: { zh: '围绕批次一致性建立质量闭环。', en: 'Quality closed loop built around batch consistency.' },
      image: '',
      sections: [
        {
          type: 'cards',
          eyebrow: { zh: '测试标准', en: 'Testing Standards' },
          title: { zh: '出货前每项测试都落在可核验的数据上。', en: 'Every pre-shipment test is backed by verifiable data.' },
          items: [
            { title: { zh: '功能测试', en: 'Functional Test' }, text: { zh: '射频发射功率、接收灵敏度、蓝牙配对、断连恢复、按键响应、功耗电流等关键项目验证。', en: 'Verification of RF transmit power, receive sensitivity, Bluetooth pairing, reconnection, key response and power current.' } },
            { title: { zh: '射频校准', en: 'RF Calibration' }, text: { zh: '2.4G / BLE 频段频偏校准和发射功率标定，确保批次一致性。', en: 'Frequency offset and transmit power calibration for 2.4G / BLE bands to ensure batch consistency.' } },
            { title: { zh: '环境可靠性', en: 'Environmental Reliability' }, text: { zh: '高低温循环、高温老化、ESD、跌落、防水或耐磨等验证，按产品类型执行。', en: 'Temperature cycling, high-temp aging, ESD, drop, waterproof or wear tests per product type.' } },
            { title: { zh: '出货检验', en: 'Shipment Inspection' }, text: { zh: '核对外观、数量、标签、包装规范与交付资料，形成批次出货记录。', en: 'Check appearance, quantity, labels, packing specs and delivery documents, forming batch shipment records.' } }
          ]
        }
      ]
    },
  },
  contact: {
    info: {
      title: { zh: '联系方式', en: 'Contact Info' },
      eyebrow: { zh: '联系我们', en: 'Contact Us' },
      description: { zh: '三城布局，通过业务咨询入口获取详细对接信息。', en: 'Three-city layout. Use the business inquiry entry for detailed contact information.' },
      image: '',
      sections: [
        {
          type: 'contact',
          eyebrow: { zh: '企业信息', en: 'Company Info' },
          title: { zh: '三个城市，三种职能。', en: 'Three cities, three functions.' },
          items: [
            { title: { zh: '杭州总部', en: 'Hangzhou Headquarters' }, text: { zh: '公司运营、客户沟通与项目统筹', en: 'Operations, client communication and project coordination' } },
            { title: { zh: '深圳量产中心', en: 'Shenzhen Production Center' }, text: { zh: '量产制造与供应链管理，详细地址通过业务咨询获取', en: 'Production and supply chain management. Detailed address via business inquiry' } },
            { title: { zh: '上海研发中心', en: 'Shanghai R&D Center' }, text: { zh: '无线通信协议栈与射频方向研发协同', en: 'Wireless protocol stack and RF R&D collaboration' } },
            { title: { zh: '工作时间', en: 'Business Hours' }, text: { zh: '工作日 09:00 - 18:00', en: 'Weekdays 09:00 - 18:00' } }
          ]
        }
      ]
    },
    inquiry: {
      title: { zh: '业务咨询', en: 'Business Inquiry' },
      eyebrow: { zh: '商务合作', en: 'Business Cooperation' },
      description: { zh: '提交合作背景、产品方向和咨询内容，我们会安排合适的对接。', en: 'Submit cooperation context, product direction and inquiry details for proper follow-up.' },
      image: '',
      sections: [
        {
          type: 'form',
          formKind: 'business',
          eyebrow: { zh: '咨询表单', en: 'Inquiry Form' },
          title: { zh: '把合作需求描述清楚。', en: 'Describe the cooperation need clearly.' }
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

export function usePageSeo(title: LocaleText, description: LocaleText, image?: string) {
  const { locale } = useI18n()
  useSeoMeta({
    title: () => `${localeText(title, locale.value)} | YiYuanLi`,
    description: () => localeText(description, locale.value),
    ogTitle: () => `${localeText(title, locale.value)} | YiYuanLi`,
    ogDescription: () => localeText(description, locale.value),
    ogImage: image ?? images.hero,
    ogType: 'website',
    twitterCard: 'summary_large_image'
  })
}
