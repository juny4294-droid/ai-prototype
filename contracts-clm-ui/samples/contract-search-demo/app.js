const contracts = [
  {
    code: "CT-2026-001",
    name: "機密保持契約（Alpha Analytics）",
    status: "締結済み",
    category: "NDA",
    counterparty: "Alpha Analytics株式会社",
    owner: "田中 亮",
    department: "法務",
    signedAt: "2026-01-10",
    startDate: "2026-01-15",
    endDate: "2027-01-14",
    updatedAt: "2026-03-15",
    amount: null,
    note: "新規プロダクト連携のための機密保持契約。相互開示あり。",
  },
  {
    code: "CT-2026-002",
    name: "業務委託基本契約（北都システム）",
    status: "承認進行中",
    category: "業務委託",
    counterparty: "北都システム株式会社",
    owner: "佐藤 美咲",
    department: "コーポレートIT",
    signedAt: "2026-02-03",
    startDate: "2026-04-01",
    endDate: "2027-03-31",
    updatedAt: "2026-03-16",
    amount: 8400000,
    note: "SLA 条項と再委託条件のレビュー中。",
  },
  {
    code: "CT-2026-003",
    name: "SaaS利用契約（Ledger Flow）",
    status: "締結進行中",
    category: "SaaS",
    counterparty: "Ledger Flow Japan合同会社",
    owner: "中村 花",
    department: "経理",
    signedAt: "2025-04-20",
    startDate: "2025-05-01",
    endDate: "2026-04-30",
    updatedAt: "2026-03-12",
    amount: 1920000,
    note: "自動更新条項あり。更新条件の確認が必要。",
  },
  {
    code: "CT-2026-004",
    name: "販売代理店契約（Orion Devices）",
    status: "締結済み",
    category: "販売代理店",
    counterparty: "Orion Devices Pte. Ltd.",
    owner: "小林 翔",
    department: "営業企画",
    signedAt: "2025-03-01",
    startDate: "2025-03-15",
    endDate: "2026-03-28",
    updatedAt: "2026-03-11",
    amount: 26500000,
    note: "管轄条項の修正要望あり。期日までに更新判断が必要。",
  },
  {
    code: "CT-2026-005",
    name: "データ提供契約（Phoenix Insight）",
    status: "締結差戻し",
    category: "データ提供",
    counterparty: "Phoenix Insight株式会社",
    owner: "伊藤 未来",
    department: "事業開発",
    signedAt: "2026-02-14",
    startDate: "2026-04-01",
    endDate: "2027-03-31",
    updatedAt: "2026-03-14",
    amount: 5400000,
    note: "利用目的の限定条件について差戻し。再レビュー待ち。",
  },
  {
    code: "CT-2026-006",
    name: "保守契約（West Harbor Networks）",
    status: "締結済み",
    category: "保守",
    counterparty: "West Harbor Networks株式会社",
    owner: "井上 健太",
    department: "情報システム",
    signedAt: "2025-12-18",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    updatedAt: "2026-03-10",
    amount: 6800000,
    note: "保守窓口の変更あり。緊急対応 SLA は維持。",
  },
  {
    code: "CT-2026-007",
    name: "購買基本契約（Green Field Supply）",
    status: "作成中",
    category: "売買",
    counterparty: "Green Field Supply株式会社",
    owner: "高橋 望",
    department: "購買",
    signedAt: "2026-03-01",
    startDate: "2026-04-01",
    endDate: "2027-03-31",
    updatedAt: "2026-03-09",
    amount: 12400000,
    note: "初回ドラフト。検収条件と損害賠償上限を調整中。",
  },
  {
    code: "CT-2026-008",
    name: "共同研究契約（Arc Bio Labs）",
    status: "承認進行中",
    category: "共同研究",
    counterparty: "Arc Bio Labs株式会社",
    owner: "山田 彩",
    department: "研究開発",
    signedAt: "2026-02-08",
    startDate: "2026-05-01",
    endDate: "2028-04-30",
    updatedAt: "2026-03-08",
    amount: 18000000,
    note: "成果帰属と特許出願フローを法務レビュー中。",
  },
  {
    code: "CT-2026-009",
    name: "広告出稿契約（North Peak Media）",
    status: "締結済み",
    category: "マーケティング",
    counterparty: "North Peak Media株式会社",
    owner: "松本 真央",
    department: "マーケティング",
    signedAt: "2025-11-07",
    startDate: "2026-01-01",
    endDate: "2026-06-30",
    updatedAt: "2026-03-05",
    amount: 9600000,
    note: "月次レポート提出条項あり。キャンセル通知期限に注意。",
  },
  {
    code: "CT-2026-010",
    name: "業務提携契約（Blue Ridge Partners）",
    status: "締結済み",
    category: "提携",
    counterparty: "Blue Ridge Partners合同会社",
    owner: "渡辺 誠",
    department: "経営企画",
    signedAt: "2025-09-12",
    startDate: "2025-10-01",
    endDate: "2026-09-30",
    updatedAt: "2026-03-04",
    amount: null,
    note: "紹介手数料率の見直しが来期更新論点。",
  },
  {
    code: "CT-2026-011",
    name: "クラウド保管契約（Nimbus Vault）",
    status: "締結進行中",
    category: "SaaS",
    counterparty: "Nimbus Vault株式会社",
    owner: "田中 亮",
    department: "法務",
    signedAt: "2025-05-15",
    startDate: "2025-06-01",
    endDate: "2026-05-31",
    updatedAt: "2026-03-02",
    amount: 3840000,
    note: "保存リージョン条項の確認待ち。",
  },
  {
    code: "CT-2026-012",
    name: "派遣基本契約（East Line Staffing）",
    status: "締結済み",
    category: "人材",
    counterparty: "East Line Staffing株式会社",
    owner: "佐藤 美咲",
    department: "人事",
    signedAt: "2025-10-21",
    startDate: "2025-11-01",
    endDate: "2026-10-31",
    updatedAt: "2026-02-28",
    amount: 15200000,
    note: "派遣個別契約のひな形と連携して運用中。",
  },
  {
    code: "CT-2026-013",
    name: "ソフトウェア利用許諾契約（Core Grid）",
    status: "締結済み",
    category: "ライセンス",
    counterparty: "Core Grid株式会社",
    owner: "井上 健太",
    department: "情報システム",
    signedAt: "2025-04-05",
    startDate: "2025-04-15",
    endDate: "2026-03-25",
    updatedAt: "2026-02-26",
    amount: 7200000,
    note: "追加ライセンス数の調整が未確定。期日が近い。",
  },
  {
    code: "CT-2026-014",
    name: "販売店契約（Sunrise Retail）",
    status: "作成中",
    category: "売買",
    counterparty: "Sunrise Retail株式会社",
    owner: "小林 翔",
    department: "営業企画",
    signedAt: "2026-03-06",
    startDate: "2026-04-15",
    endDate: "2027-04-14",
    updatedAt: "2026-03-07",
    amount: 14800000,
    note: "価格改定条項を営業側で確認中。",
  },
  {
    code: "CT-2026-015",
    name: "秘密保持契約（Kestrel Robotics）",
    status: "締結済み",
    category: "NDA",
    counterparty: "Kestrel Robotics株式会社",
    owner: "山田 彩",
    department: "研究開発",
    signedAt: "2026-01-22",
    startDate: "2026-01-22",
    endDate: "2027-01-21",
    updatedAt: "2026-02-22",
    amount: null,
    note: "共同 PoC 前提の双務 NDA。",
  },
  {
    code: "CT-2026-016",
    name: "外部委託契約（Maple Service Design）",
    status: "締結差戻し",
    category: "業務委託",
    counterparty: "Maple Service Design株式会社",
    owner: "伊藤 未来",
    department: "事業開発",
    signedAt: "2026-02-18",
    startDate: "2026-04-01",
    endDate: "2026-12-31",
    updatedAt: "2026-03-13",
    amount: 11200000,
    note: "成果物検収定義の再修正が必要。",
  },
  {
    code: "CT-2026-017",
    name: "物流委託契約（Harbor Logistics）",
    status: "締結済み",
    category: "物流",
    counterparty: "Harbor Logistics株式会社",
    owner: "高橋 望",
    department: "購買",
    signedAt: "2025-08-30",
    startDate: "2025-09-01",
    endDate: "2026-08-31",
    updatedAt: "2026-02-24",
    amount: 22600000,
    note: "配送 SLA と再委託の承認手順を明記。",
  },
  {
    code: "CT-2026-018",
    name: "基本取引契約（Harbor Foods）",
    status: "締結済み",
    category: "売買",
    counterparty: "Harbor Foods株式会社",
    owner: "松本 真央",
    department: "マーケティング",
    signedAt: "2025-07-11",
    startDate: "2025-07-20",
    endDate: "2026-07-19",
    updatedAt: "2026-02-20",
    amount: 9100000,
    note: "販促協賛条項あり。中途解約条件は標準条項。",
  },
  {
    code: "CT-2026-019",
    name: "利用規約個別同意書（Vertex Cloud）",
    status: "承認進行中",
    category: "SaaS",
    counterparty: "Vertex Cloud Japan株式会社",
    owner: "中村 花",
    department: "経理",
    signedAt: "2026-03-02",
    startDate: "2026-04-01",
    endDate: "2027-03-31",
    updatedAt: "2026-03-17",
    amount: 2460000,
    note: "個人情報の国外移転条項を法務確認中。",
  },
  {
    code: "CT-2026-020",
    name: "共同販促契約（Lumen Studio）",
    status: "締結済み",
    category: "マーケティング",
    counterparty: "Lumen Studio株式会社",
    owner: "渡辺 誠",
    department: "経営企画",
    signedAt: "2025-12-01",
    startDate: "2026-01-01",
    endDate: "2026-05-31",
    updatedAt: "2026-03-01",
    amount: 3200000,
    note: "成果測定レポートの提出期限を月末に設定。",
  },
];

const documentTypeByCode = {
  "CT-2026-001": "word",
  "CT-2026-002": "pdf",
  "CT-2026-003": "template",
  "CT-2026-004": "pdf",
  "CT-2026-005": "word",
  "CT-2026-006": "word",
  "CT-2026-007": "pdf",
  "CT-2026-008": "template",
  "CT-2026-009": "pdf",
  "CT-2026-010": "word",
  "CT-2026-011": "word",
  "CT-2026-012": "pdf",
  "CT-2026-013": "template",
  "CT-2026-014": "pdf",
  "CT-2026-015": "word",
  "CT-2026-016": "word",
  "CT-2026-017": "pdf",
  "CT-2026-018": "template",
  "CT-2026-019": "pdf",
  "CT-2026-020": "word",
};

const CONTRACT_STATUSES = [
  "作成中",
  "共同編集中",
  "締結差戻し",
  "承認進行中",
  "承認完了",
  "締結進行中",
  "送信エラー",
  "締結済み",
  "契約満了",
];

const today = new Date("2026-03-17T00:00:00");
const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const currencyFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

const state = {
  search: "",
  status: "all",
  category: "all",
  department: "all",
  deadline: "all",
  sortKey: null,
  sortDirection: null,
  page: 1,
  pageSize: 10,
  filterPanelOpen: true,
  selectedCode: null,
  sidebarOpen: false,
};

const elements = {
  searchLayout: document.querySelector(".search-layout"),
  filterSidebar: document.querySelector("#filterSidebar"),
  filterSidebarBottom: document.querySelector(".filter-sidebar-bottom"),
  filterToggleButton: document.querySelector("#filterToggleButton"),
  filterRailButton: document.querySelector("#filterRailButton"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  departmentFilter: document.querySelector("#departmentFilter"),
  deadlineFilter: document.querySelector("#deadlineFilter"),
  sortSelect: document.querySelector("#sortSelect"),
  tableBody: document.querySelector("#tableBody"),
  pagination: document.querySelector("#pagination"),
  activeFilters: document.querySelector("#activeFilters"),
  resultCount: document.querySelector("#resultCount"),
  pageSizeSelect: document.querySelector("#pageSizeSelect"),
  paginationTotalCount: document.querySelector("#paginationTotalCount"),
  sortSummary: document.querySelector("#sortSummary"),
  detailContent: document.querySelector("#detailContent"),
  detailDrawer: document.querySelector("#detailDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerCloseButton: document.querySelector("#drawerCloseButton"),
  statTotal: document.querySelector("#statTotal"),
  statTotalMeta: document.querySelector("#statTotalMeta"),
  statActive: document.querySelector("#statActive"),
  statExpiring: document.querySelector("#statExpiring"),
  statReview: document.querySelector("#statReview"),
  toastStack: document.querySelector("#toastStack"),
  sortButtons: Array.from(document.querySelectorAll(".sort-button")),
  resetButtons: Array.from(document.querySelectorAll("#resetFilterButton")),
  exportButtons: Array.from(document.querySelectorAll("#exportFilterButton")),
};

function parseDate(value) {
  return new Date(`${value}T00:00:00`);
}

function daysUntil(value) {
  const diff = parseDate(value).getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function formatDate(value) {
  return dateFormatter.format(parseDate(value));
}

function formatAmount(value) {
  return value == null ? "金額未設定" : currencyFormatter.format(value);
}

function getDocumentType(contract) {
  return documentTypeByCode[contract.code] || "word";
}

function getDocumentIconMarkup(type) {
  const icons = {
    word: `
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9.2" y="4.6" width="12.8" height="18.8" rx="2" fill="white" stroke="#2E9FD8" stroke-width="1"/>
        <path d="M4.7 6.2L10.7 5V23L4.7 21.8V6.2Z" fill="#2E9FD8"/>
        <path d="M7.1 10.5L8 15L8.9 10.9L10.1 10.8L8.5 17.2L7.4 17.1L6.1 10.6L7.1 10.5Z" fill="white"/>
        <path d="M12.9 10.1H18.8" stroke="#2E9FD8" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M12.9 13.5H18.8" stroke="#2E9FD8" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M12.9 16.9H17.3" stroke="#2E9FD8" stroke-width="1.2" stroke-linecap="round"/>
      </svg>
    `,
    pdf: `
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 4.7H16.4L21 9.3V22.2C21 23.2 20.2 24 19.2 24H9C8 24 7.2 23.2 7.2 22.2V6.5C7.2 5.5 8 4.7 9 4.7Z" fill="white" stroke="#A8ADBA" stroke-width="1"/>
        <path d="M16.3 4.8V8.8C16.3 9.36 16.74 9.8 17.3 9.8H21" stroke="#A8ADBA" stroke-width="1" stroke-linejoin="round"/>
        <rect x="7.7" y="6.2" width="6.3" height="3.3" rx="0.6" fill="#ED1C24"/>
        <path d="M9.2 18.8C10.4 17.4 11.3 15.4 11.9 13.3C12.5 15 13.5 16.7 14.8 18C13.4 18.1 11.4 18.4 9.9 19.2C9.5 19.4 9.1 19.2 9.2 18.8Z" stroke="#ED1C24" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.8 7.85H12.95" stroke="white" stroke-width="0.9" stroke-linecap="round"/>
        <path d="M8.8 8.95H11.6" stroke="white" stroke-width="0.9" stroke-linecap="round"/>
      </svg>
    `,
    template: `
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.7 4.7H16.3L20.8 9.3V22.1C20.8 23.15 19.95 24 18.9 24H8.7C7.65 24 6.8 23.15 6.8 22.1V6.6C6.8 5.55 7.65 4.7 8.7 4.7Z" fill="white" stroke="#A8ADBA" stroke-width="1"/>
        <path d="M16.1 4.8V8.8C16.1 9.35 16.55 9.8 17.1 9.8H20.7" stroke="#A8ADBA" stroke-width="1" stroke-linejoin="round"/>
        <rect x="9.2" y="12" width="9.2" height="1.8" rx="0.9" fill="#1FAA9C"/>
        <rect x="9.2" y="15.6" width="9.2" height="1.8" rx="0.9" fill="#1FAA9C"/>
        <rect x="9.2" y="19.2" width="7.1" height="1.8" rx="0.9" fill="#1FAA9C"/>
      </svg>
    `,
  };

  return `<span class="document-icon document-icon-${type}" aria-hidden="true">${icons[type] || icons.word}</span>`;
}

function getStatusClass(status) {
  switch (status) {
    case "締結済み":
      return "status-active";
    case "承認進行中":
    case "承認完了":
      return "status-review";
    case "締結進行中":
      return "status-renewal";
    case "契約満了":
      return "status-expiring";
    case "締結差戻し":
    case "送信エラー":
      return "status-returned";
    case "共同編集中":
      return "status-collaborating";
    default:
      return "status-draft";
  }
}

function getSortLabel(key, direction) {
  if (!key || !direction) {
    return "指定なし";
  }

  const labels = {
    updatedAt: "最終更新日",
    endDate: "終了日",
    amount: "契約金額",
    name: "契約名",
    counterparty: "契約先",
    status: "ステータス",
  };
  const dirLabel = direction === "asc" ? "昇順" : "降順";
  return `${labels[key] || key} ${dirLabel}`;
}

function isWithinDeadline(contract, deadline) {
  const remaining = daysUntil(contract.endDate);
  if (deadline === "expired") {
    return remaining <= 0;
  }
  const range = Number(deadline);
  return remaining >= 0 && remaining <= range;
}

function filterContracts(source) {
  const query = state.search.trim().toLowerCase();
  return source.filter((contract) => {
    const matchesSearch =
      query === "" ||
      [
        contract.code,
        contract.name,
        contract.counterparty,
        contract.owner,
        contract.department,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);

    const matchesStatus =
      state.status === "all" || contract.status === state.status;
    const matchesCategory =
      state.category === "all" || contract.category === state.category;
    const matchesDepartment =
      state.department === "all" || contract.department === state.department;
    const matchesDeadline =
      state.deadline === "all" || isWithinDeadline(contract, state.deadline);

    return (
      matchesSearch &&
      matchesStatus &&
      matchesCategory &&
      matchesDepartment &&
      matchesDeadline
    );
  });
}

function compareValues(a, b, key, direction) {
  const multiplier = direction === "asc" ? 1 : -1;
  let left = a[key];
  let right = b[key];

  if (key === "amount") {
    left = left ?? -1;
    right = right ?? -1;
  }

  if (["signedAt", "startDate", "endDate", "updatedAt"].includes(key)) {
    left = parseDate(left).getTime();
    right = parseDate(right).getTime();
  }

  if (typeof left === "string") {
    return left.localeCompare(right, "ja") * multiplier;
  }

  return (left - right) * multiplier;
}

function sortContracts(source) {
  if (!state.sortKey || !state.sortDirection) {
    return [...source];
  }

  return [...source].sort((a, b) =>
    compareValues(a, b, state.sortKey, state.sortDirection),
  );
}

function paginateContracts(source) {
  const pageCount = Math.max(1, Math.ceil(source.length / state.pageSize));
  if (state.page > pageCount) {
    state.page = pageCount;
  }
  const start = (state.page - 1) * state.pageSize;
  return {
    pageCount,
    visible: source.slice(start, start + state.pageSize),
  };
}

function getSelectedContract(sortedContracts, visibleContracts) {
  if (!state.sidebarOpen || !state.selectedCode) {
    return null;
  }

  const selected = sortedContracts.find(
    (contract) => contract.code === state.selectedCode,
  );
  if (selected) {
    return selected;
  }

  state.sidebarOpen = false;
  return null;
}

function renderOptions() {
  const datasets = {
    statusFilter: CONTRACT_STATUSES,
    categoryFilter: [...new Set(contracts.map((contract) => contract.category))],
    departmentFilter: [...new Set(contracts.map((contract) => contract.department))],
  };

  Object.entries(datasets).forEach(([key, values]) => {
    const select = elements[key];
    const sourceValues =
      key === "statusFilter"
        ? values
        : [...values].sort((left, right) => left.localeCompare(right, "ja"));

    sourceValues.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.append(option);
    });
  });
}

function renderStats(filteredContracts, visibleContracts) {
  const activeCount = filteredContracts.filter(
    (contract) => contract.status === "締結済み",
  ).length;
  const expiringCount = filteredContracts.filter(
    (contract) => daysUntil(contract.endDate) >= 0 && daysUntil(contract.endDate) <= 30,
  ).length;
  const reviewCount = filteredContracts.filter((contract) =>
    ["承認進行中", "締結差戻し"].includes(contract.status),
  ).length;

  elements.statTotal.textContent = String(filteredContracts.length);
  elements.statTotalMeta.textContent = `現在ページ ${visibleContracts.length} 件を表示`;
  elements.statActive.textContent = String(activeCount);
  elements.statExpiring.textContent = String(expiringCount);
  elements.statReview.textContent = String(reviewCount);
}

function createChip(label, value, clearKey) {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = `${label}: ${value}`;

  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "chip-remove";
  remove.setAttribute("aria-label", `${label} の絞り込みを解除`);
  remove.textContent = "×";
  remove.addEventListener("click", () => {
    state[clearKey] = "all";
    if (clearKey === "search") {
      state.search = "";
      elements.searchInput.value = "";
    }
    if (clearKey !== "search") {
      elements[`${clearKey}Filter`]?.value && (elements[`${clearKey}Filter`].value = "all");
    }
    state.page = 1;
    syncSortControl();
    render();
  });

  chip.append(remove);
  return chip;
}

function renderActiveFilters() {
  const container = elements.activeFilters;
  container.innerHTML = "";

  const chips = [];
  if (state.search) {
    chips.push(createChip("検索", state.search, "search"));
  }
  if (state.status !== "all") {
    chips.push(createChip("ステータス", state.status, "status"));
  }
  if (state.category !== "all") {
    chips.push(createChip("契約種別", state.category, "category"));
  }
  if (state.department !== "all") {
    chips.push(createChip("担当部署", state.department, "department"));
  }
  if (state.deadline !== "all") {
    const label =
      state.deadline === "expired" ? "期限切れ含む" : `${state.deadline}日以内`;
    chips.push(createChip("終了期限", label, "deadline"));
  }

  if (chips.length === 0) {
    const placeholder = document.createElement("p");
    placeholder.className = "filter-placeholder";
    placeholder.textContent = "現在適用中の絞り込み条件はありません。";
    container.append(placeholder);
    return;
  }

  chips.forEach((chip) => container.append(chip));
}

function renderSortIndicators() {
  elements.sortButtons.forEach((button) => {
    const isActive = button.dataset.sortKey === state.sortKey;
    button.dataset.active = isActive ? "true" : "false";
    button.dataset.direction = isActive ? state.sortDirection : "";
  });
  elements.sortSummary.textContent = `並び順: ${getSortLabel(
    state.sortKey,
    state.sortDirection,
  )}`;
}

function isFilterPanelCollapsible() {
  return window.innerWidth > 1120;
}

function syncFilterPanel() {
  const canCollapse = isFilterPanelCollapsible();
  const isOpen = !canCollapse || state.filterPanelOpen;

  elements.searchLayout.classList.toggle(
    "is-filter-collapsed",
    canCollapse && !isOpen,
  );
  elements.filterSidebar.classList.toggle("is-collapsed", canCollapse && !isOpen);
  elements.filterSidebarBottom.hidden = !canCollapse;
  elements.filterToggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  elements.filterToggleButton.setAttribute(
    "aria-label",
    isOpen ? "検索条件を閉じる" : "検索条件を開く",
  );
  elements.filterRailButton.tabIndex = canCollapse && !isOpen ? 0 : -1;
}

function renderTable(visibleContracts, totalCount) {
  elements.tableBody.innerHTML = "";

  if (visibleContracts.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.innerHTML = `
      <div class="empty-state">
        <strong>条件に一致する契約がありません</strong>
        <span>キーワードやフィルタ条件を見直してください。</span>
      </div>
    `;
    row.append(cell);
    elements.tableBody.append(row);
    elements.resultCount.textContent = "0件";
    elements.paginationTotalCount.textContent = "0 件";
    return;
  }

  visibleContracts.forEach((contract) => {
    const row = document.createElement("tr");
    row.className = "table-row";
    row.dataset.code = contract.code;
    row.tabIndex = 0;
    row.setAttribute("aria-label", `${contract.name} の詳細を表示`);
    if (state.sidebarOpen && contract.code === state.selectedCode) {
      row.classList.add("is-selected");
    }

    const deadline = daysUntil(contract.endDate);
    const deadlineLabel =
      deadline < 0
        ? `${Math.abs(deadline)}日前に終了`
        : `${deadline}日後に終了`;

    row.innerHTML = `
      <td>
        <div class="contract-cell">
          ${getDocumentIconMarkup(getDocumentType(contract))}
          <div>
            <span class="primary-text">${contract.name}</span>
            <span class="secondary-text">${contract.code}</span>
          </div>
        </div>
      </td>
      <td><span class="status-badge ${getStatusClass(contract.status)}">${contract.status}</span></td>
      <td>
        <span class="primary-text">${contract.counterparty}</span>
      </td>
      <td><span class="tag">${contract.category}</span></td>
      <td>
        <div class="assignee-cell">
          <span class="primary-text">${contract.owner}</span>
          <span class="secondary-text">${contract.department}</span>
        </div>
      </td>
      <td class="is-right">
        <span class="primary-text">${formatDate(contract.endDate)}</span>
        <span class="secondary-text">${deadlineLabel}</span>
      </td>
      <td class="is-right">
        <span class="primary-text">${formatDate(contract.updatedAt)}</span>
        <span class="secondary-text">更新</span>
      </td>
    `;

    row.addEventListener("click", () => {
      state.selectedCode = contract.code;
      state.sidebarOpen = true;
      render();
    });
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        state.selectedCode = contract.code;
        state.sidebarOpen = true;
        render();
      }
    });
    elements.tableBody.append(row);
  });
  elements.resultCount.textContent = `${totalCount}件`;
  elements.paginationTotalCount.textContent = `${totalCount} 件`;
}

function createPaginationButton(
  label,
  page,
  disabled = false,
  current = false,
  className = "",
) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `pagination-button ${className}`.trim();
  button.textContent = label;
  button.disabled = disabled;
  if (current) {
    button.setAttribute("aria-current", "page");
  }
  button.addEventListener("click", () => {
    if (!disabled) {
      state.page = page;
      render();
    }
  });
  return button;
}

function renderPagination(pageCount) {
  elements.pagination.innerHTML = "";
  elements.pagination.append(
    createPaginationButton("« 最初", 1, state.page === 1, false, "is-edge"),
  );
  elements.pagination.append(
    createPaginationButton("‹ 前へ", state.page - 1, state.page === 1, false, "is-edge"),
  );

  const pages = [];
  for (let page = 1; page <= pageCount; page += 1) {
    if (
      page === 1 ||
      page === pageCount ||
      Math.abs(page - state.page) <= 1
    ) {
      pages.push(page);
    }
  }

  const compactPages = [];
  pages.forEach((page, index) => {
    compactPages.push(page);
    if (pages[index + 1] && pages[index + 1] - page > 1) {
      compactPages.push("...");
    }
  });

  compactPages.forEach((page) => {
    if (page === "...") {
      const gap = document.createElement("span");
      gap.className = "pagination-button is-gap";
      gap.textContent = "...";
      gap.setAttribute("aria-hidden", "true");
      elements.pagination.append(gap);
      return;
    }

    elements.pagination.append(
      createPaginationButton(String(page), page, false, page === state.page),
    );
  });

  elements.pagination.append(
    createPaginationButton("次へ ›", state.page + 1, state.page === pageCount, false, "is-edge"),
  );
  elements.pagination.append(
    createPaginationButton("最後 »", pageCount, state.page === pageCount, false, "is-edge"),
  );
}

function renderDetail(contract) {
  if (!contract) {
    elements.detailContent.innerHTML =
      '<div class="detail-empty">一覧の行を選択すると<br>詳細サイドバーが開きます。</div>';
    return;
  }

  const deadline = daysUntil(contract.endDate);
  const deadlineText =
    deadline < 0
      ? `${Math.abs(deadline)}日前に終了`
      : `終了まで ${deadline} 日`;

  elements.detailContent.innerHTML = `
    <div class="detail-section">
      <div class="detail-header">
        <div>
          <h3>Selected Contract</h3>
          <p class="detail-title">${contract.name}</p>
          <p class="detail-code">${contract.code}</p>
        </div>
        <span class="status-badge ${getStatusClass(contract.status)}">${contract.status}</span>
      </div>
      <p class="detail-note">${contract.note}</p>
    </div>

    <div class="detail-section">
      <h3>契約情報</h3>
      <dl class="detail-grid">
        <div class="detail-item">
          <dt>契約先</dt>
          <dd>${contract.counterparty}</dd>
        </div>
        <div class="detail-item">
          <dt>契約種別</dt>
          <dd>${contract.category}</dd>
        </div>
        <div class="detail-item">
          <dt>担当部署</dt>
          <dd>${contract.department}</dd>
        </div>
        <div class="detail-item">
          <dt>担当者</dt>
          <dd>${contract.owner}</dd>
        </div>
        <div class="detail-item">
          <dt>締結日</dt>
          <dd>${formatDate(contract.signedAt)}</dd>
        </div>
        <div class="detail-item">
          <dt>契約金額</dt>
          <dd>${formatAmount(contract.amount)}</dd>
        </div>
      </dl>
    </div>

    <div class="detail-section">
      <h3>期限・更新</h3>
      <dl class="detail-grid">
        <div class="detail-item">
          <dt>開始日</dt>
          <dd>${formatDate(contract.startDate)}</dd>
        </div>
        <div class="detail-item">
          <dt>終了日</dt>
          <dd>${formatDate(contract.endDate)}</dd>
        </div>
        <div class="detail-item">
          <dt>残日数</dt>
          <dd>${deadlineText}</dd>
        </div>
        <div class="detail-item">
          <dt>最終更新</dt>
          <dd>${formatDate(contract.updatedAt)}</dd>
        </div>
      </dl>
    </div>

    <div class="detail-actions">
      <button type="button" class="button button-outline" data-demo-action="preview">
        契約詳細を開く
      </button>
      <button type="button" class="button button-light" data-demo-action="memo">
        レビュー依頼を作成
      </button>
    </div>
  `;

  elements.detailContent
    .querySelectorAll("[data-demo-action]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        showToast("このサンプルでは詳細遷移とレビュー依頼はモック動作です。");
      });
    });
}

function syncSidebar(contract) {
  const isOpen = Boolean(state.sidebarOpen && contract);
  elements.detailDrawer.classList.toggle("is-open", isOpen);
  elements.detailDrawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
  elements.drawerBackdrop.classList.toggle("is-open", isOpen);
  elements.drawerBackdrop.hidden = !isOpen;
}

function closeSidebar() {
  state.sidebarOpen = false;
  render();
}

function syncSortControl() {
  if (!state.sortKey || !state.sortDirection) {
    elements.sortSelect.value = "none";
    return;
  }

  const value = `${state.sortKey}:${state.sortDirection}`;
  const optionExists = Array.from(elements.sortSelect.options).some(
    (option) => option.value === value,
  );
  if (optionExists) {
    elements.sortSelect.value = value;
  }
}

function cycleSortState(clickedKey) {
  if (state.sortKey !== clickedKey) {
    state.sortKey = clickedKey;
    state.sortDirection = "desc";
    return;
  }

  if (state.sortDirection === "desc") {
    state.sortDirection = "asc";
    return;
  }

  if (state.sortDirection === "asc") {
    state.sortKey = null;
    state.sortDirection = null;
    return;
  }

  state.sortKey = clickedKey;
  state.sortDirection = "desc";
}

function exportCsv(rows) {
  if (rows.length === 0) {
    showToast("出力対象の契約がありません。条件を変更してください。", true);
    return;
  }

  const headers = [
    "契約コード",
    "契約名",
    "ステータス",
    "契約種別",
    "契約先",
    "担当部署",
    "担当者",
    "締結日",
    "開始日",
    "終了日",
    "契約金額",
    "最終更新日",
  ];

  const csvRows = rows.map((contract) => [
    contract.code,
    contract.name,
    contract.status,
    contract.category,
    contract.counterparty,
    contract.department,
    contract.owner,
    formatDate(contract.signedAt),
    formatDate(contract.startDate),
    formatDate(contract.endDate),
    contract.amount == null ? "" : String(contract.amount),
    formatDate(contract.updatedAt),
  ]);

  const escapeCell = (value) => `"${String(value).replace(/"/g, '""')}"`;
  const content = [headers, ...csvRows]
    .map((row) => row.map(escapeCell).join(","))
    .join("\r\n");
  const blob = new Blob([`\uFEFF${content}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `contract-search-${today.toISOString().slice(0, 10)}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(`${rows.length} 件の契約を CSV に出力しました。`);
}

function showToast(message, isError = false) {
  const toast = document.createElement("div");
  toast.className = `toast${isError ? " is-error" : ""}`;
  toast.textContent = message;
  elements.toastStack.append(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 3200);
}

function render() {
  const filteredContracts = filterContracts(contracts);
  const sortedContracts = sortContracts(filteredContracts);
  const { visible, pageCount } = paginateContracts(sortedContracts);
  const selected = getSelectedContract(sortedContracts, visible);

  elements.pageSizeSelect.value = String(state.pageSize);

  renderStats(filteredContracts, visible);
  renderActiveFilters();
  renderSortIndicators();
  renderTable(visible, sortedContracts.length);
  renderPagination(pageCount);
  renderDetail(selected);
  syncFilterPanel();
  syncSidebar(selected);
  syncSortControl();
}

function bindEvents() {
  let debounceTimer = null;

  elements.searchInput.addEventListener("input", (event) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(() => {
      state.search = event.target.value;
      state.page = 1;
      render();
    }, 180);
  });

  elements.statusFilter.addEventListener("change", (event) => {
    state.status = event.target.value;
    state.page = 1;
    render();
  });

  elements.categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    state.page = 1;
    render();
  });

  elements.departmentFilter.addEventListener("change", (event) => {
    state.department = event.target.value;
    state.page = 1;
    render();
  });

  elements.deadlineFilter.addEventListener("change", (event) => {
    state.deadline = event.target.value;
    state.page = 1;
    render();
  });

  elements.sortSelect.addEventListener("change", (event) => {
    if (event.target.value === "none") {
      state.sortKey = null;
      state.sortDirection = null;
    } else {
      const [sortKey, sortDirection] = event.target.value.split(":");
      state.sortKey = sortKey;
      state.sortDirection = sortDirection;
    }
    state.page = 1;
    render();
  });

  elements.pageSizeSelect.addEventListener("change", (event) => {
    state.pageSize = Number(event.target.value);
    state.page = 1;
    render();
  });

  elements.sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const { sortKey } = button.dataset;
      cycleSortState(sortKey);
      state.page = 1;
      render();
    });
  });

  elements.resetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.search = "";
      state.status = "all";
      state.category = "all";
      state.department = "all";
      state.deadline = "all";
      state.sortKey = null;
      state.sortDirection = null;
      state.page = 1;

      elements.searchInput.value = "";
      elements.statusFilter.value = "all";
      elements.categoryFilter.value = "all";
      elements.departmentFilter.value = "all";
      elements.deadlineFilter.value = "all";
      elements.sortSelect.value = "none";
      render();
    });
  });

  elements.exportButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filteredContracts = sortContracts(filterContracts(contracts));
      exportCsv(filteredContracts);
    });
  });

  elements.filterToggleButton.addEventListener("click", () => {
    if (!isFilterPanelCollapsible()) {
      return;
    }

    state.filterPanelOpen = !state.filterPanelOpen;
    render();
  });

  elements.filterRailButton.addEventListener("click", () => {
    if (!isFilterPanelCollapsible()) {
      return;
    }

    state.filterPanelOpen = true;
    render();
  });

  elements.drawerBackdrop.addEventListener("click", closeSidebar);
  elements.drawerCloseButton.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.sidebarOpen) {
      closeSidebar();
    }
  });

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      render();
    }, 80);
  });
}

function initialize() {
  renderOptions();
  bindEvents();
  syncSortControl();
  render();
}

initialize();
