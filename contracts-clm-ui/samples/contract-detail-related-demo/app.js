const detailSections = [
  {
    id: "summary",
    label: "概要",
    icon: "info",
    caption: "",
  },
  {
    id: "terms",
    label: "項目",
    icon: "folder",
    caption: "",
    separatorAfter: true,
  },
  {
    id: "review",
    label: "契約審査",
    icon: "fact_check",
    caption: "",
  },
  {
    id: "tasks",
    label: "タスク",
    icon: "task_alt",
    caption: "",
    indicator: { type: "count", value: 99 },
  },
  {
    id: "comments",
    label: "コメント",
    icon: "comment",
    caption: "",
    indicator: { type: "dot" },
    separatorAfter: true,
  },
  {
    id: "approval",
    label: "承認",
    icon: "how_to_reg",
    caption: "",
  },
  {
    id: "conclusion",
    label: "締結",
    icon: "adjust",
    caption: "",
    separatorAfter: true,
  },
  {
    id: "rooms",
    label: "編集ルーム",
    icon: "groups",
    caption: "",
  },
  {
    id: "related",
    label: "関連契約書",
    icon: "description",
    caption: "",
  },
  {
    id: "files",
    label: "ファイル",
    icon: "attach_file",
    caption: "",
    indicator: { type: "dot" },
  },
  {
    id: "log",
    label: "ログ",
    icon: "schedule",
    caption: "",
  },
];

const viewerTabs = [
  { id: "document", label: "契約書" },
  { id: "history", label: "変更履歴" },
];

const currentContract = {
  managementCode: "contracts-00001",
  code: "DUMMY-2026-001",
  name: "ダミー秘密保持契約書",
  counterparty: "株式会社サンプルB",
  category: "秘密保持",
  owner: "担当者A",
  ownerRole: "法務部",
  department: "法務部",
  status: "締結進行中",
  signedAt: "2026-03-17",
  startDate: "2026-04-01",
  endDate: "2027-03-31",
  amount: 5000000,
  versionLabel: "第1版",
  updatedMeta: "更新日: 2026/03/18 10:00 （担当者A）",
  statusLabel: "契約期間中",
  renewalSetting: "自動更新する",
  renewalRefusalDeadline: "2027/02/28",
  renewalNote: "次回更新時に内容の見直しを検討",
  periodLabel: "1年",
  description: "株式会社サンプルBとのダミー秘密保持契約です。",
  storageLocation: "第一営業部",
  storageIcon: "domain",
  purpose:
    "画面確認用のダミー契約書です。本文、ファイル名、担当者名はいずれもサンプル表示専用の値を使用します。",
  memo:
    "このサンプルでは PDF 領域に常にダミー契約書を表示し、現在の詳細画面ルールに沿った右 panel の基本形を確認できるようにしています。",
};

const followers = [
  { name: "担当者B", role: "営業部" },
];

const relatedContracts = [
  {
    id: "dm1000349",
    name: "ダミー基本契約書_株式会社サンプルA",
    icon: "description",
    tags: ["元契約", "ダミープロジェクト"],
  },
];

const files = [
  {
    name: "DUMMY-2026-001_ダミー秘密保持契約書_第1版.pdf",
    meta: "主契約書 / 最終更新 2026/03/18 / 更新者 担当者A",
  },
  {
    name: "別紙A_ダミー条件一覧.pdf",
    meta: "添付資料 / 最終更新 2026/03/18 / 更新者 担当者B",
  },
  {
    name: "別紙B_ダミー添付資料.xlsx",
    meta: "関連資料 / 最終更新 2026/03/18 / 更新者 担当者C",
  },
  {
    name: "締結済みファイル_ダミー秘密保持契約書.pdf",
    meta: "締結後ファイル / 最終更新 2026/03/18 / 更新者 担当者A",
  },
];

const logs = [
  {
    actor: "担当者A",
    at: "2026/03/18 17:26",
    messagePrefix: "更新契約を作成しました。",
    messageLink: "ダミー秘密保持契約書_更新版",
    messageSuffix: "",
  },
  {
    actor: "担当者A",
    at: "2026/03/18 16:10",
    messagePrefix: "ダミー秘密保持契約書を自動更新しました。",
    messageLink: "",
    messageSuffix: "",
  },
  {
    actor: "担当者A",
    at: "2026/03/18 15:32",
    messagePrefix: "ダミー秘密保持契約書の締結依頼を承認しました。",
    messageLink: "",
    messageSuffix: "",
  },
  {
    actor: "担当者A",
    at: "2026/03/18 14:48",
    messagePrefix: "ダミー秘密保持契約書の締結依頼を発行しました。",
    messageLink: "",
    messageSuffix: "",
  },
  {
    actor: "担当者A",
    at: "2026/03/18 13:42",
    messagePrefix: "ダミー秘密保持契約書を承認しました。",
    messageLink: "",
    messageSuffix: "",
  },
  {
    actor: "担当者A",
    at: "2026/03/18 11:26",
    messagePrefix: "ダミー秘密保持契約書の承認を完了しました。",
    messageLink: "",
    messageSuffix: "",
  },
  {
    actor: "担当者A",
    at: "2026/03/18 10:41",
    messagePrefix: "ダミー秘密保持契約書の",
    messageLink: "承認フロー",
    messageSuffix: "を発行しました。",
  },
  {
    actor: "担当者A",
    at: "2026/03/18 09:22",
    messagePrefix: "ダミー秘密保持契約書の契約項目を変更しました。",
    messageLink: "",
    messageSuffix: "",
  },
  {
    actor: "担当者A",
    at: "2026/03/18 08:45",
    messagePrefix: "",
    messageLink: "内容確認",
    messageSuffix: "のタスクを完了しました。",
  },
  {
    actor: "担当者B",
    at: "2026/03/18 08:10",
    messagePrefix: "",
    messageLink: "内容確認",
    messageSuffix: "のタスクを作成しました。",
  },
];

const commentsByScope = {
  public: [
    {
      author: "担当者A",
      at: "2026/03/18 09:47",
      body:
        "サンプル確認用の公開コメントです。ダミー契約書の本文と関連契約の紐づけ表示を確認してください。",
      attachment: "dummy-comment-attachment.pdf",
      version: "第1版",
    },
  ],
  private: [
    {
      author: "担当者B",
      at: "2026/03/18 08:22",
      body:
        "限定公開のダミーコメントです。担当者名や契約名が実在データに見えないことを確認するための文面です。",
      attachment: null,
      version: "第1版",
    },
  ],
};

const tasks = [
  {
    title: "ダミー覚書A のレビュー依頼",
    category: "その他",
    requestAt: "2026/03/18 11:12",
    completedAt: "2026/03/18 14:31",
    requester: "担当者A",
    completer: "担当者A",
    assignee: "担当者A",
    status: "完了",
    dueDate: "2026/03/20",
    body:
      "ダミー覚書の並び順と編集モーダルを確認するためのサンプルタスクです。",
  },
  {
    title: "ダミー契約本文の確認",
    category: "審査依頼",
    requestAt: "2026/03/18 13:30",
    completedAt: "未完了",
    requester: "担当者B",
    completer: "未完了",
    assignee: "担当者C",
    status: "進行中",
    dueDate: "2026/03/22",
    body:
      "PDF 領域に常時表示するダミー契約本文の見え方を確認するためのサンプルタスクです。",
  },
];

const rooms = [
  {
    name: "ダミー編集ルームA",
    latestAt: "2026/03/18 15:28",
    latestActivity: "担当者Bがサンプルコメントを追加",
    participants: "参加者 5 名",
    unread: "未読 2 件",
    state: "進行中",
    members: ["担当者A", "担当者B", "担当者C"],
  },
  {
    name: "ダミー差分確認ルーム",
    latestAt: "2026/03/17 17:04",
    latestActivity: "担当者Cがダミー本文の更新を共有",
    participants: "参加者 3 名",
    unread: "未読 0 件",
    state: "確認待ち",
    members: ["担当者A", "担当者C"],
  },
];

const reviewItems = {
  type: "秘密保持契約",
  title: "再度、ダミー秘密保持契約書の契約審査をお願いします",
  status: "未完了",
  requestedAt: "2026/03/18 13:55",
  requester: "担当者A",
  requesterRole: "法務部 法人企画課",
  body: "ダミー秘密保持契約書の内容確認と契約期間設定のレビューをお願いします。",
  dueDate: "2026/03/30",
  assignee: "担当者C",
  assigneeRole: "法務部 法務チーム",
  reviewSetName: "法務相談",
  snapshot: [
    "契約日: 2026/03/17",
    "契約開始日: 2026/04/01",
    "契約終了日: 2027/03/31",
    "契約期間: 1年",
    "自動更新の有無: 自動更新あり",
    "自動更新の更新拒絶期限: 2か月前",
    "当事者: 株式会社サンプルA / 株式会社サンプルB",
    "文書管理番号: contracts-00001",
    "金額: 5,000,000",
  ],
};

const reviewRelatedContracts = [
  {
    id: "dm1000349",
    name: "ダミー基本契約書_株式会社サンプルA",
    icon: "description",
    tags: ["元契約", "ダミープロジェクト"],
  },
  {
    id: "dm1000350",
    name: "ダミー保守管理契約",
    icon: "description",
    tags: ["元契約", "ダミープロジェクト"],
  },
];

const reviewComments = [
  {
    author: "担当者C",
    role: "法務部 法務チーム",
    at: "2026/03/18 11:17",
    body:
      "@担当者A こちらの件、以前の案件で同様の指摘をしていたため、先方とのやり合わせ完了までこちらも共有させてください。",
  },
  {
    author: "担当者A",
    role: "営業部",
    at: "2026/03/18 11:17",
    body:
      "@担当者C 承知しました。先方とのやり合わせ完了後に、必要情報を共有します。",
  },
];

const approvalSteps = [
  {
    title: "起案",
    owner: "担当者A",
    at: "2026/03/16 10:14",
    status: "完了",
  },
  {
    title: "法務承認",
    owner: "担当者C",
    at: "2026/03/17 14:38",
    status: "完了",
  },
  {
    title: "部門承認",
    owner: "担当者D",
    at: "2026/03/18 16:15",
    status: "進行中",
  },
];

const conclusionSteps = [
  {
    title: "締結依頼送付",
    status: "完了",
    note: "2026/03/18 09:20 にダミー契約書の送付ステータスへ更新しました。",
  },
  {
    title: "署名回収",
    status: "進行中",
    note: "サンプル表示用の締結進行中ステータスです。実際の署名回収処理は行いません。",
  },
  {
    title: "締結済みファイル登録",
    status: "未着手",
    note: "締結済みファイル登録フローのサンプル表示用に未着手としています。",
  },
];

const signingServices = [
  { id: "contracts-sign", label: "ContractS SIGN", icon: "draw" },
  { id: "cloud-sign", label: "クラウドサイン", icon: "cloud" },
  { id: "docu-sign", label: "DocuSign", icon: "edit_document" },
  { id: "other-service", label: "その他電子契約サービス", icon: "description" },
  { id: "paper", label: "紙", icon: "article" },
];

const initialRelationTree = [
  {
    id: "original-master",
    code: "DUMMY-BASE-001",
    name: "ダミー原契約",
    type: "original",
    status: "締結済み",
    effectiveDate: "2023-04-01",
    summary: "サンプル全体に適用されるダミー原契約です。",
    children: [
      {
        id: "parent-renewal",
        code: "DUMMY-PARENT-001",
        name: "ダミー親契約",
        type: "parent",
        status: "締結済み",
        effectiveDate: "2025-04-01",
        summary: "ダミー契約書の基点になる親契約です。",
        children: [
          {
            id: "current-contract",
            code: "DUMMY-2026-001",
            name: "ダミー秘密保持契約書",
            type: "child",
            status: "締結進行中",
            effectiveDate: "2026-04-01",
            summary: "現在閲覧中のダミー契約です。",
            isCurrent: true,
            children: [
              {
                id: "memo-sla",
                code: "DUMMY-AK-001",
                name: "ダミー覚書A",
                type: "memorandum",
                status: "承認進行中",
                effectiveDate: "2026-03-20",
                summary: "サンプル用の覚書Aです。追加・編集動作の確認に使います。",
                children: [],
              },
              {
                id: "memo-security",
                code: "DUMMY-AK-002",
                name: "ダミー覚書B",
                type: "memorandum",
                status: "作成中",
                effectiveDate: "2026-03-25",
                summary: "サンプル用の覚書Bです。並び順変更後も階層が維持されます。",
                children: [],
              },
            ],
          },
          {
            id: "child-support",
            code: "DUMMY-CHILD-001",
            name: "ダミー子契約A",
            type: "child",
            status: "締結進行中",
            effectiveDate: "2026-06-01",
            summary: "同一親契約配下にあるダミー子契約です。",
            children: [],
          },
        ],
      },
    ],
  },
];

const state = {
  selectedSection: "summary",
  activeViewerTab: "document",
  detailPanelCollapsed: false,
  panelWidth: 408,
  isResizingPanel: false,
  resizeStartX: 0,
  resizeStartWidth: 408,
  commentScope: "public",
  taskFilter: "all",
  accordions: {
    summaryOverview: true,
    termsPeriod: true,
  },
  conclusionSource: "outgoing",
  signingService: "contracts-sign",
  relationTree: cloneTree(initialRelationTree),
  nextMemoSerial: 2,
  modal: {
    open: false,
    mode: "create",
    memoId: null,
    parentId: "current-contract",
  },
};

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

const elements = {
  supportColumn: document.querySelector("#supportColumn"),
  railResizeGutter: document.querySelector("#railResizeGutter"),
  detailPanel: document.querySelector("#detailPanel"),
  viewerTabs: document.querySelector("#viewerTabs"),
  viewerTabPanel: document.querySelector("#viewerTabPanel"),
  sectionRail: document.querySelector("#sectionRail"),
  railToggleButton: document.querySelector("#railToggleButton"),
  railToggleIcon: document.querySelector("#railToggleIcon"),
  panelTitle: document.querySelector("#panelTitle"),
  panelCaption: document.querySelector("#panelCaption"),
  panelHeaderActions: document.querySelector("#panelHeaderActions"),
  detailPanelBody: document.querySelector("#detailPanelBody"),
  toastStack: document.querySelector("#toastStack"),
  memoModalBackdrop: document.querySelector("#memoModalBackdrop"),
  memoForm: document.querySelector("#memoForm"),
  memoNodeId: document.querySelector("#memoNodeId"),
  memoTitleInput: document.querySelector("#memoTitleInput"),
  memoParentSelect: document.querySelector("#memoParentSelect"),
  memoEffectiveDateInput: document.querySelector("#memoEffectiveDateInput"),
  memoStatusSelect: document.querySelector("#memoStatusSelect"),
  memoSummaryInput: document.querySelector("#memoSummaryInput"),
  memoCodePreview: document.querySelector("#memoCodePreview"),
  memoModalTitle: document.querySelector("#memoModalTitle"),
  memoModalDescription: document.querySelector("#memoModalDescription"),
  closeMemoModalButton: document.querySelector("#closeMemoModalButton"),
  cancelMemoButton: document.querySelector("#cancelMemoButton"),
  saveMemoButton: document.querySelector("#saveMemoButton"),
};

function clampPanelWidth(value) {
  return Math.min(440, Math.max(380, value));
}

function cloneTree(nodes) {
  return nodes.map((node) => ({
    ...node,
    children: cloneTree(node.children || []),
  }));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseDate(value) {
  return new Date(`${value}T00:00:00`);
}

function formatDate(value) {
  return dateFormatter.format(parseDate(value));
}

function formatAmount(value) {
  return currencyFormatter.format(value);
}

function getStatusClass(status) {
  switch (status) {
    case "締結済み":
    case "完了":
      return "status-active";
    case "承認進行中":
    case "承認完了":
    case "レビュー中":
    case "依頼済み":
      return "status-review";
    case "締結進行中":
    case "進行中":
      return "status-renewal";
    case "締結差戻し":
    case "送信エラー":
      return "status-returned";
    default:
      return "status-draft";
  }
}

function getRelationBadgeLabel(type) {
  return {
    original: "原契約",
    parent: "親契約",
    child: "子契約",
    memorandum: "覚書",
  }[type];
}

function countNodes(nodes, predicate) {
  return nodes.reduce((count, node) => {
    const self = predicate(node) ? 1 : 0;
    return count + self + countNodes(node.children || [], predicate);
  }, 0);
}

function flattenNodes(nodes, depth = 0, result = []) {
  nodes.forEach((node) => {
    result.push({ node, depth });
    flattenNodes(node.children || [], depth + 1, result);
  });
  return result;
}

function findNodeContext(nodes, targetId, parent = null) {
  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    if (node.id === targetId) {
      return {
        node,
        parent,
        siblings: nodes,
        index,
      };
    }
    const childContext = findNodeContext(node.children || [], targetId, node);
    if (childContext) {
      return childContext;
    }
  }
  return null;
}

function findPath(nodes, targetId, trail = []) {
  for (const node of nodes) {
    const nextTrail = [...trail, node];
    if (node.id === targetId) {
      return nextTrail;
    }
    const childTrail = findPath(node.children || [], targetId, nextTrail);
    if (childTrail) {
      return childTrail;
    }
  }
  return null;
}

function getCurrentNode() {
  const flat = flattenNodes(state.relationTree);
  const match = flat.find(({ node }) => node.isCurrent);
  return match ? match.node : null;
}

function getNextMemoCode() {
  const next = String(state.nextMemoSerial + 1).padStart(3, "0");
  return `DUMMY-AK-${next}`;
}

function createMemoId() {
  if (window.crypto?.randomUUID) {
    return `memo-${window.crypto.randomUUID()}`;
  }
  return `memo-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

function renderViewerTabs() {
  elements.viewerTabs.innerHTML = viewerTabs
    .map(
      (tab) => `
        <button
          type="button"
          class="viewer-tab${tab.id === state.activeViewerTab ? " is-active" : ""}"
          role="tab"
          aria-selected="${tab.id === state.activeViewerTab ? "true" : "false"}"
          data-viewer-tab="${tab.id}"
        >
          ${escapeHtml(tab.label)}
        </button>
      `,
    )
    .join("");
}

function renderViewerUtilityRow() {
  return `
    <div class="viewer-utility-row">
      <div class="viewer-utility-right">
        <a href="#" class="helper-link" data-demo-toast="印影リンクはモックです。">
          締結済み契約書の印影について
        </a>
        <div class="viewer-action-icons">
          <button type="button" class="viewer-icon-button" aria-label="ダウンロード" data-demo-toast="ダウンロードはモックです。">
            <span class="material-symbols-rounded" aria-hidden="true">download</span>
          </button>
          <button type="button" class="viewer-icon-button" aria-label="再読み込み" data-demo-toast="再読み込みはモックです。">
            <span class="material-symbols-rounded" aria-hidden="true">refresh</span>
          </button>
          <button type="button" class="viewer-icon-button" aria-label="プレビュー" data-demo-toast="プレビュー切替はモックです。">
            <span class="material-symbols-rounded" aria-hidden="true">visibility</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderPdfToolbar() {
  return `
    <div class="pdf-toolbar">
      <div class="pdf-toolbar-group">
        <button type="button" class="pdf-toolbar-button" aria-label="表示切替">
          <span class="material-symbols-rounded" aria-hidden="true">view_sidebar</span>
        </button>
        <button type="button" class="pdf-toolbar-button" aria-label="検索">
          <span class="material-symbols-rounded" aria-hidden="true">search</span>
        </button>
      </div>
      <div class="pdf-toolbar-center">
        <button type="button" class="pdf-toolbar-button" aria-label="前ページ">
          <span class="material-symbols-rounded" aria-hidden="true">remove</span>
        </button>
        <span class="pdf-toolbar-pill">1 / 4</span>
        <button type="button" class="pdf-toolbar-button" aria-label="次ページ">
          <span class="material-symbols-rounded" aria-hidden="true">add</span>
        </button>
        <span class="pdf-toolbar-pill">自動ズーム</span>
      </div>
      <div class="pdf-toolbar-group">
        <button type="button" class="pdf-toolbar-button" aria-label="ごみ箱">
          <span class="material-symbols-rounded" aria-hidden="true">delete</span>
        </button>
        <button type="button" class="pdf-toolbar-button" aria-label="ブックマーク">
          <span class="material-symbols-rounded" aria-hidden="true">bookmark</span>
        </button>
        <button type="button" class="pdf-toolbar-button" aria-label="次へ">
          <span class="material-symbols-rounded" aria-hidden="true">last_page</span>
        </button>
      </div>
    </div>
  `;
}

function renderDocumentViewer() {
  return `
    <div class="viewer-header-strip">
      ${renderViewerUtilityRow()}
    </div>
    <div class="viewer-canvas-surface">
      <div class="pdf-shell">
        ${renderPdfToolbar()}
        <div class="pdf-body">
          <div class="pdf-side-tools">
            <button type="button" class="pdf-side-tool" aria-label="サムネイル">
              <span class="material-symbols-rounded" aria-hidden="true">menu</span>
            </button>
            <button type="button" class="pdf-side-tool" aria-label="検索">
              <span class="material-symbols-rounded" aria-hidden="true">search</span>
            </button>
          </div>
          <div class="pdf-stage">
            <div class="pdf-page pdf-page-contract">
              <article class="dummy-contract">
                <h2 class="dummy-contract-title">ダミー秘密保持契約書</h2>
                <div class="dummy-contract-section">
                  <p>契約当事者</p>
                  <p>甲：株式会社サンプルA</p>
                  <p>乙：株式会社サンプルB</p>
                </div>
                <div class="dummy-contract-section">
                  <h3>第1条（目的）</h3>
                  <p>
                    甲および乙は、サンプル画面確認のために開示される情報について、
                    本ダミー契約書に従って秘密情報を取り扱うものとします。
                  </p>
                </div>
                <div class="dummy-contract-section">
                  <h3>第2条（定義）</h3>
                  <p>
                    本契約における秘密情報とは、文書、口頭、電子データその他の媒体を問わず、
                    サンプル表示用に作成された一切の情報をいいます。
                  </p>
                </div>
                <div class="dummy-contract-section">
                  <h3>第3条（利用目的）</h3>
                  <p>
                    乙は、画面レイアウトの確認およびプロトタイプ検証の目的に限り秘密情報を使用し、
                    その目的以外に利用してはなりません。
                  </p>
                </div>
                <div class="dummy-contract-section">
                  <h3>第4条（有効期間）</h3>
                  <p>
                    本契約の有効期間は契約締結日から 1 年間とし、期間満了後も秘密保持義務は存続します。
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderHistoryViewer() {
  return `
    <div class="viewer-header-strip">
      ${renderViewerUtilityRow()}
    </div>
    <div class="viewer-canvas-surface">
      <div class="pdf-shell">
        ${renderPdfToolbar()}
        <div class="pdf-body">
          <div class="pdf-side-tools">
            <button type="button" class="pdf-side-tool" aria-label="一覧">
              <span class="material-symbols-rounded" aria-hidden="true">format_list_bulleted</span>
            </button>
            <button type="button" class="pdf-side-tool" aria-label="比較">
              <span class="material-symbols-rounded" aria-hidden="true">compare_arrows</span>
            </button>
          </div>
          <div class="pdf-stage">
            <div class="history-sheet">
              <article class="history-card">
                <h3>v1.2 ダミー契約本文の更新</h3>
                <p class="history-meta">2026/03/18 18:20 / 担当者A / 締結進行中</p>
                <p class="history-note">
                  ダミー契約書の本文をサンプル用の日本語条文に差し替えました。
                </p>
              </article>
              <article class="history-card">
                <h3>v1.1 ダミー覚書を追加</h3>
                <p class="history-meta">2026/03/17 11:08 / 担当者B / 承認進行中</p>
                <p class="history-note">
                  関連契約書タブの確認用にダミー覚書A、ダミー覚書Bを追加しました。
                </p>
              </article>
              <article class="history-card">
                <h3>v1.0 ダミー契約作成</h3>
                <p class="history-meta">2026/03/16 09:30 / 担当者C / 作成中</p>
                <p class="history-note">
                  プロトタイプ確認用のダミー契約書と関連契約の初期データを登録しました。
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderViewer() {
  elements.viewerTabPanel.innerHTML =
    state.activeViewerTab === "document"
      ? renderDocumentViewer()
      : renderHistoryViewer();
}

function renderSectionIndicator(section) {
  if (!section.indicator) {
    return "";
  }

  if (section.indicator.type === "count") {
    const label =
      section.indicator.value > 99 ? "99+" : String(section.indicator.value);
    return `<span class="rail-indicator rail-indicator-count">${label}</span>`;
  }

  return '<span class="rail-indicator rail-indicator-dot" aria-hidden="true"></span>';
}

function renderSectionRail() {
  elements.sectionRail.innerHTML = detailSections
    .map(
      (section) => `
        <button
          type="button"
          class="rail-button${section.id === state.selectedSection ? " is-active" : ""}${section.separatorAfter ? " has-group-separator" : ""}"
          data-section="${section.id}"
          aria-pressed="${section.id === state.selectedSection ? "true" : "false"}"
        >
          <span class="rail-icon-wrap">
            <span class="material-symbols-rounded rail-icon" aria-hidden="true">${section.icon}</span>
            ${renderSectionIndicator(section)}
          </span>
          <span class="rail-button-label">${escapeHtml(section.label)}</span>
        </button>
      `,
    )
    .join("");
}

function createDefinitionRows(rows) {
  return rows
    .map(
      (row) => `
        <div class="definition-row">
          <span class="definition-label">${escapeHtml(row.label)}</span>
          <p class="definition-value">${escapeHtml(row.value)}</p>
        </div>
      `,
    )
    .join("");
}

function isAccordionOpen(key) {
  return Boolean(state.accordions[key]);
}

function renderAccordionHeader(key, label) {
  const open = isAccordionOpen(key);
  return `
    <button
      type="button"
      class="panel-accordion-header"
      data-accordion="${key}"
      aria-expanded="${open ? "true" : "false"}"
    >
      <span>${escapeHtml(label)}</span>
      <span class="material-symbols-rounded" aria-hidden="true">${open ? "expand_less" : "expand_more"}</span>
    </button>
  `;
}

function renderPersonRow(person, editable = false) {
  return `
    <div class="person-row">
      <div class="person-avatar">
        <span class="material-symbols-rounded" aria-hidden="true">person</span>
      </div>
      <div class="person-content">
        <div class="person-line">
          <span class="person-name">${escapeHtml(person.name)}</span>
          ${
            editable
              ? '<button type="button" class="panel-link-action" data-demo-toast="編集はモックです。">編集</button>'
              : ""
          }
        </div>
        ${person.role ? `<p class="person-role">${escapeHtml(person.role)}</p>` : ""}
      </div>
    </div>
  `;
}

function getFileIcon(name) {
  const lower = name.toLowerCase();
  if (lower.endsWith(".pdf")) {
    return "picture_as_pdf";
  }
  if (lower.endsWith(".xlsx") || lower.endsWith(".xls") || lower.endsWith(".csv")) {
    return "table_view";
  }
  if (lower.endsWith(".doc") || lower.endsWith(".docx")) {
    return "description";
  }
  return "insert_drive_file";
}

function renderFileLinkChip(label) {
  return `
    <a href="#" class="file-link-chip" data-demo-toast="ファイル表示はモックです。">
      <span class="material-symbols-rounded" aria-hidden="true">attach_file</span>
      <span>${escapeHtml(label)}</span>
    </a>
  `;
}

function renderThreadCommentItem(comment, options = {}) {
  const metaParts = [comment.role, comment.version].filter(Boolean);
  const modifier = options.review ? " is-review" : "";
  return `
    <article class="thread-comment-item${modifier}">
      <div class="thread-comment-head">
        <div class="person-avatar is-thread">
          <span class="material-symbols-rounded" aria-hidden="true">person</span>
        </div>
        <div class="thread-comment-main">
          <div class="thread-comment-line">
            <p class="thread-comment-author">${escapeHtml(comment.author)}</p>
            <span class="thread-comment-time">${escapeHtml(comment.at)}</span>
          </div>
          ${
            metaParts.length
              ? `<p class="thread-comment-meta">${escapeHtml(metaParts.join(" / "))}</p>`
              : ""
          }
          <p class="thread-comment-body">${escapeHtml(comment.body)}</p>
          ${comment.attachment ? renderFileLinkChip(comment.attachment) : ""}
        </div>
      </div>
    </article>
  `;
}

function renderMiniAvatar(name) {
  return `<span class="mini-avatar" aria-hidden="true">${escapeHtml(String(name).slice(0, 1))}</span>`;
}

function renderRelatedContractCard(contract, compact = false) {
  return `
    <article class="related-contract-card${compact ? " is-compact" : ""}">
      <a href="#" class="related-contract-link" data-demo-toast="関連契約書遷移はモックです。">
        <div class="related-contract-icon">
          <span class="material-symbols-rounded" aria-hidden="true">${escapeHtml(contract.icon)}</span>
        </div>
        <div class="related-contract-content">
          <p class="related-contract-id">${escapeHtml(contract.id)}</p>
          <h3 class="related-contract-name">${escapeHtml(contract.name)}</h3>
          <div class="related-contract-tags">
            ${contract.tags
              .map(
                (tag) => `<span class="outline-tag">${escapeHtml(tag)}</span>`,
              )
              .join("")}
          </div>
        </div>
      </a>
    </article>
  `;
}

function renderLogMessage(log) {
  const prefix = log.messagePrefix ? escapeHtml(log.messagePrefix) : "";
  const suffix = log.messageSuffix ? escapeHtml(log.messageSuffix) : "";
  if (!log.messageLink) {
    return `${prefix}${suffix}`;
  }
  return `${prefix}<a href="#" class="inline-record-link" data-demo-toast="リンク遷移はモックです。">${escapeHtml(log.messageLink)}</a>${suffix}`;
}

function renderSummaryPanel() {
  const open = isAccordionOpen("summaryOverview");
  return `
    <section class="panel-accordion">
      ${renderAccordionHeader("summaryOverview", "契約書の概要")}
      ${
        open
          ? `
            <div class="panel-accordion-body">
              <section class="detail-stack-section">
                <p class="stack-label">契約書のステータス</p>
                <p class="stack-value stack-value-strong">${escapeHtml(currentContract.status)}</p>
                <span class="status-pill">${escapeHtml(currentContract.statusLabel)}</span>
                <div class="stack-meta-list">
                  <div class="stack-meta-row"><span class="stack-meta-label">終了日</span><span class="stack-meta-value">${formatDate(currentContract.endDate)}</span></div>
                  <div class="stack-meta-row"><span class="stack-meta-label">自動更新</span><span class="stack-meta-value">${escapeHtml(currentContract.renewalSetting)}</span></div>
                  <div class="stack-meta-row"><span class="stack-meta-label">自動更新の更新拒絶期限</span><span class="stack-meta-value">${escapeHtml(currentContract.renewalRefusalDeadline)}</span></div>
                </div>
              </section>
              <section class="detail-stack-section">
                <p class="stack-label">説明</p>
                <p class="stack-value">${escapeHtml(currentContract.description)}</p>
              </section>
              <section class="detail-stack-section">
                <p class="stack-label">担当者</p>
                ${renderPersonRow({ name: currentContract.owner, role: currentContract.ownerRole }, true)}
              </section>
              <section class="detail-stack-section">
                <p class="stack-label">フォロー中のメンバー</p>
                ${followers.map((person) => renderPersonRow(person, true)).join("")}
              </section>
              <section class="detail-stack-section">
                <p class="stack-label">契約書の保存場所</p>
                <a href="#" class="inline-record-link storage-link" data-demo-toast="保存場所遷移はモックです。">
                  ${escapeHtml(currentContract.storageLocation)}
                  <span class="material-symbols-rounded" aria-hidden="true">${escapeHtml(currentContract.storageIcon)}</span>
                </a>
              </section>
            </div>
          `
          : ""
      }
    </section>
    <button type="button" class="danger-link-button" data-demo-toast="削除はモックです。">この契約書を削除</button>
  `;
}

function renderTermsPanel() {
  const open = isAccordionOpen("termsPeriod");
  return `
    <section class="panel-accordion">
      ${renderAccordionHeader("termsPeriod", "契約期間")}
      ${
        open
          ? `
            <div class="panel-accordion-body">
              <section class="detail-stack-section">
                <p class="stack-label">契約日</p>
                <p class="stack-value">${formatDate(currentContract.signedAt)}</p>
              </section>
              <section class="detail-stack-section">
                <p class="stack-label">開始日</p>
                <p class="stack-value">${formatDate(currentContract.startDate)}</p>
              </section>
              <section class="detail-stack-section">
                <p class="stack-label">終了日</p>
                <p class="stack-value">${formatDate(currentContract.endDate)}</p>
              </section>
              <section class="detail-stack-section">
                <p class="stack-label">契約期間</p>
                <p class="stack-value">${escapeHtml(currentContract.periodLabel)}</p>
              </section>
              <section class="detail-stack-section">
                <p class="stack-label">自動更新</p>
                <p class="stack-value">${escapeHtml(currentContract.renewalSetting)}</p>
              </section>
              <section class="detail-stack-section">
                <p class="stack-label">自動更新の更新拒絶期限</p>
                <p class="stack-value">${escapeHtml(currentContract.renewalRefusalDeadline)}</p>
              </section>
              <section class="detail-stack-section">
                <p class="stack-label">更新に関する補足コメント</p>
                <p class="stack-value">${escapeHtml(currentContract.renewalNote)}</p>
              </section>
            </div>
          `
          : ""
      }
    </section>
  `;
}

function renderCommentsPanel() {
  const comments = commentsByScope[state.commentScope];
  return `
    <div class="scope-tabs-underline is-comment-scope">
      <button
        type="button"
        class="scope-tab-underline${state.commentScope === "public" ? " is-active" : ""}"
        data-comment-scope="public"
      >
        公開
      </button>
      <button
        type="button"
        class="scope-tab-underline${state.commentScope === "private" ? " is-active" : ""}"
        data-comment-scope="private"
      >
        限定公開
      </button>
    </div>
    <div class="comment-composer-card">
      <div class="comment-composer-main">
        <label class="comment-composer-label" for="commentComposerInput">
          コメント（@メンションで相手に通知）
        </label>
        <textarea
          id="commentComposerInput"
          class="comment-composer-input"
          rows="4"
          placeholder=""
        ></textarea>
      </div>
      <div class="comment-composer-footer">
        <div class="comment-composer-tools">
          <button
            type="button"
            class="composer-icon-button"
            aria-label="添付ファイルを追加"
            data-demo-toast="添付はモックです。"
          >
            <span class="material-symbols-rounded" aria-hidden="true">attach_file</span>
          </button>
          <button
            type="button"
            class="composer-icon-button"
            aria-label="メンションを追加"
            data-demo-toast="メンションはモックです。"
          >
            <span class="material-symbols-rounded" aria-hidden="true">alternate_email</span>
          </button>
        </div>
        <button type="button" class="button button-primary button-large" data-demo-toast="コメント投稿はモックです。">
          送信
        </button>
      </div>
    </div>
    <div class="comment-card-list">
      ${comments
        .map(
          (comment) => `
            <article class="comment-card comment-entry-card">
              ${renderThreadCommentItem(comment)}
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderTasksPanel() {
  const visibleTasks =
    state.taskFilter === "open"
      ? tasks.filter((task) => task.status !== "完了")
      : tasks;

  return `
    <div class="panel-block">
      <div class="scope-tabs">
        <button
          type="button"
          class="scope-tab${state.taskFilter === "all" ? " is-active" : ""}"
          data-task-filter="all"
        >
          すべてのタスク
        </button>
        <button
          type="button"
          class="scope-tab${state.taskFilter === "open" ? " is-active" : ""}"
          data-task-filter="open"
        >
          進行中
        </button>
      </div>
    </div>
    <div class="panel-block">
      <div class="task-list">
        ${visibleTasks
          .map(
            (task) => `
              <article class="task-card">
                <div class="task-head">
                  <span class="task-chip">${escapeHtml(task.category)}</span>
                  <span class="status-badge ${getStatusClass(task.status)}">${escapeHtml(task.status)}</span>
                </div>
                <h3>${escapeHtml(task.title)}</h3>
                ${createDefinitionRows([
                  { label: "依頼日", value: task.requestAt },
                  { label: "完了日", value: task.completedAt },
                  { label: "依頼者", value: task.requester },
                  { label: "完了者", value: task.completer },
                  { label: "担当者", value: task.assignee },
                  { label: "期限", value: task.dueDate },
                ])}
                <div class="task-body">${escapeHtml(task.body)}</div>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderFilesPanel() {
  return `
    <div class="panel-block">
      <div class="file-link-list">
        ${files
          .map(
            (file) => `
              <article class="file-link-row">
                <div class="file-link-icon">
                  <span class="material-symbols-rounded" aria-hidden="true">${getFileIcon(file.name)}</span>
                </div>
                <div class="file-link-content">
                  <p class="file-link-name">${escapeHtml(file.name)}</p>
                  <p class="file-link-meta">${escapeHtml(file.meta)}</p>
                </div>
                <button type="button" class="panel-link-action" data-demo-toast="ファイル表示はモックです。">表示</button>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderRoomsPanel() {
  return `
    <div class="panel-block">
      <div class="room-list">
        ${rooms
          .map(
            (room) => `
              <article class="room-card">
                <div class="room-card-top">
                  <div>
                    <h3>${escapeHtml(room.name)}</h3>
                    <p class="room-meta">${escapeHtml(room.latestAt)} / ${escapeHtml(room.state)}</p>
                  </div>
                  <span class="room-status-chip">${escapeHtml(room.unread)}</span>
                </div>
                <div class="room-members">
                  <div class="room-member-avatars">
                    ${room.members.map((member) => renderMiniAvatar(member)).join("")}
                  </div>
                  <p class="room-member-copy">${escapeHtml(room.participants)}</p>
                </div>
                <p class="room-activity">${escapeHtml(room.latestActivity)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderReviewPanel() {
  return `
    <div class="review-back-row">
      <button type="button" class="panel-back-link" data-demo-toast="一覧遷移はモックです。">
        <span class="material-symbols-rounded" aria-hidden="true">chevron_left</span>
        一覧に戻る
      </button>
    </div>
    <article class="review-detail-card">
      <div class="review-detail-top">
        <span class="review-type-tag">契約審査</span>
        <span class="review-limit-text">編集制限あり</span>
      </div>
      <h3 class="review-detail-title">${escapeHtml(reviewItems.title)}</h3>
      <section class="detail-stack-section">
        <p class="stack-label">依頼日</p>
        <p class="stack-value">${escapeHtml(reviewItems.requestedAt)}</p>
      </section>
      <section class="detail-stack-section">
        <p class="stack-label">依頼者</p>
        ${renderPersonRow({ name: reviewItems.requester, role: reviewItems.requesterRole })}
      </section>
      <section class="detail-stack-section">
        <p class="stack-label">内容</p>
        <p class="stack-value">${escapeHtml(reviewItems.body)}</p>
      </section>
      <section class="detail-stack-section">
        <p class="stack-label">ステータス</p>
        <p class="stack-value">${escapeHtml(reviewItems.status)}</p>
      </section>
      <div class="review-action-row">
        <button type="button" class="danger-link-button is-inline" data-demo-toast="削除はモックです。">削除</button>
        <button type="button" class="button button-outline" data-demo-toast="完了処理はモックです。">タスクを完了</button>
      </div>
      <section class="detail-stack-section">
        <p class="stack-label">期限</p>
        <div class="person-line">
          <p class="stack-value">${escapeHtml(reviewItems.dueDate)}</p>
          <button type="button" class="panel-link-action" data-demo-toast="期限編集はモックです。">編集</button>
        </div>
      </section>
      <section class="detail-stack-section">
        <p class="stack-label">担当者</p>
        ${renderPersonRow({ name: reviewItems.assignee, role: reviewItems.assigneeRole }, true)}
      </section>
      <section class="detail-stack-section">
        <p class="stack-label">審査項目セット名</p>
        <p class="stack-value">${escapeHtml(reviewItems.reviewSetName)}</p>
      </section>
      <section class="detail-stack-section">
        <p class="stack-label">契約項目のスナップショット</p>
        <div class="review-snapshot">
          ${reviewItems.snapshot
            .map((item) => `<p>${escapeHtml(item)}</p>`)
            .join("")}
        </div>
      </section>
      <section class="detail-stack-section">
        <p class="stack-label">同時に審査する契約書</p>
        <div class="review-related-list">
          ${reviewRelatedContracts
            .map((contract) => renderRelatedContractCard(contract, true))
            .join("")}
        </div>
      </section>
      <section class="detail-stack-section">
        <h4 class="review-comment-title">コメント</h4>
        <div class="review-comment-list">
          ${reviewComments
            .map((comment) => renderThreadCommentItem(comment, { review: true }))
            .join("")}
        </div>
        <label class="field review-comment-field">
          <span class="field-label">コメント（@メンションで相手に通知）</span>
          <textarea class="field-control textarea" rows="3" placeholder="コメントを入力"></textarea>
        </label>
        <div class="inline-actions">
          <button type="button" class="button button-primary" data-demo-toast="投稿はモックです。">投稿</button>
        </div>
      </section>
    </article>
  `;
}

function renderApprovalPanel() {
  return `
    <div class="panel-block">
      <div class="step-list">
        ${approvalSteps
          .map(
            (step) => `
              <article class="step-item${step.status === "進行中" ? " is-current" : ""}">
                <div class="step-marker"></div>
                <div class="step-content">
                  <div class="step-head">
                    <h3>${escapeHtml(step.title)}</h3>
                    <span class="status-badge ${getStatusClass(step.status)}">${escapeHtml(step.status)}</span>
                  </div>
                  <p class="step-meta">${escapeHtml(step.owner)} / ${escapeHtml(step.at)}</p>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderConclusionPanel() {
  const title =
    state.conclusionSource === "outgoing"
      ? "こちらからの締結依頼"
      : "相手からの締結依頼";
  return `
    <div class="conclusion-flow">
      <div class="scope-tabs-underline">
        <button
          type="button"
          class="scope-tab-underline${state.conclusionSource === "outgoing" ? " is-active" : ""}"
          data-conclusion-source="outgoing"
        >
          こちらからの締結依頼
        </button>
        <button
          type="button"
          class="scope-tab-underline${state.conclusionSource === "incoming" ? " is-active" : ""}"
          data-conclusion-source="incoming"
        >
          相手からの締結依頼
        </button>
      </div>
      <section class="panel-block">
        <p class="panel-section-title">${escapeHtml(title)}</p>
      </section>
      <section class="panel-block">
        <p class="panel-section-title">契約手段を選択</p>
        <div class="signing-service-list">
          ${signingServices
            .map(
              (service) => `
                <button
                  type="button"
                  class="signing-service-option${state.signingService === service.id ? " is-selected" : ""}"
                  data-signing-service="${service.id}"
                  aria-pressed="${state.signingService === service.id ? "true" : "false"}"
                >
                  <span class="signing-service-radio" aria-hidden="true"></span>
                  <span class="signing-service-icon">
                    <span class="material-symbols-rounded" aria-hidden="true">${escapeHtml(service.icon)}</span>
                  </span>
                  <span class="signing-service-label">${escapeHtml(service.label)}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </section>
      <div class="inline-actions inline-actions-end">
        <button type="button" class="button button-outline button-large" data-demo-toast="次のステップはモックです。">
          次へ
        </button>
      </div>
    </div>
  `;
}

function renderLogPanel() {
  return `
    <div class="activity-log-list">
      ${logs
        .map(
          (log) => `
            <article class="activity-log-item">
              <div class="activity-log-head">
                <div class="activity-log-actor">
                  <div class="person-avatar is-log">
                    <span class="material-symbols-rounded" aria-hidden="true">person</span>
                  </div>
                  <span class="activity-log-name">${escapeHtml(log.actor)}</span>
                </div>
                <span class="activity-log-time">${escapeHtml(log.at)}</span>
              </div>
              <p class="activity-log-message">${renderLogMessage(log)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderRelationBranch(nodes, isRoot = false) {
  if (!nodes.length) {
    return '<p class="empty-copy">関連契約書はまだ登録されていません。</p>';
  }

  return `
    <ul class="relation-branch${isRoot ? " is-root" : ""}">
      ${nodes
        .map((node, index) => renderRelationNode(node, index, nodes.length))
        .join("")}
    </ul>
  `;
}

function renderRelationNode(node, index, siblingCount) {
  const upDisabled = siblingCount <= 1 || index === 0;
  const downDisabled = siblingCount <= 1 || index === siblingCount - 1;
  const contextButton =
    node.type === "memorandum"
      ? `
          <button type="button" class="tree-action is-label" data-action="edit-memo" data-node-id="${node.id}">
            編集
          </button>
        `
      : `
          <button type="button" class="tree-action is-label" data-action="open-create-memo" data-parent-id="${node.id}">
            覚書追加
          </button>
        `;

  return `
    <li class="relation-node">
      <article class="relation-card${node.isCurrent ? " is-current" : ""}">
        <div class="tree-heading">
          <div class="tree-title-group">
            <div class="node-badges">
              <span class="node-badge badge-${node.type}">${escapeHtml(getRelationBadgeLabel(node.type))}</span>
              ${
                node.isCurrent
                  ? '<span class="node-badge badge-current">閲覧中</span>'
                  : ""
              }
              <span class="status-badge ${getStatusClass(node.status)}">${escapeHtml(node.status)}</span>
            </div>
            <h3>${escapeHtml(node.name)}</h3>
            <p class="tree-code">${escapeHtml(node.code)} / 発効日 ${formatDate(node.effectiveDate)}</p>
            <p class="relation-summary">${escapeHtml(node.summary)}</p>
          </div>
          <div class="tree-actions">
            ${contextButton}
            <button
              type="button"
              class="tree-action"
              data-action="move-up"
              data-node-id="${node.id}"
              aria-label="${escapeHtml(node.name)} を上へ移動"
              ${upDisabled ? "disabled" : ""}
            >
              <span class="material-symbols-rounded" aria-hidden="true">arrow_upward</span>
            </button>
            <button
              type="button"
              class="tree-action"
              data-action="move-down"
              data-node-id="${node.id}"
              aria-label="${escapeHtml(node.name)} を下へ移動"
              ${downDisabled ? "disabled" : ""}
            >
              <span class="material-symbols-rounded" aria-hidden="true">arrow_downward</span>
            </button>
          </div>
        </div>
      </article>
      ${node.children && node.children.length ? renderRelationBranch(node.children) : ""}
    </li>
  `;
}

function renderRelatedPanel() {
  return `
    <div class="related-contract-list">
      ${relatedContracts.map((contract) => renderRelatedContractCard(contract)).join("")}
    </div>
  `;
}

function getPanelActionMarkup(sectionId) {
  switch (sectionId) {
    case "terms":
      return `
        <button type="button" class="button button-outline button-large" data-demo-toast="自動反映はモックです。">
          自動反映
        </button>
        <button type="button" class="panel-link-action" data-demo-toast="編集はモックです。">
          編集
        </button>
      `;
    case "comments":
      return `
        <button type="button" class="button button-outline" data-demo-toast="コメント投稿はモックです。">
          コメントする
        </button>
      `;
    case "tasks":
      return `
        <button type="button" class="button button-outline" data-demo-toast="タスク作成はモックです。">
          タスクを作成
        </button>
      `;
    case "related":
      return `
        <button type="button" class="panel-link-action" data-demo-toast="関連契約書の追加はモックです。">
          <span class="material-symbols-rounded" aria-hidden="true">add</span>
          関連契約書の追加
        </button>
      `;
    default:
      return "";
  }
}

function renderPanel() {
  const section = detailSections.find((item) => item.id === state.selectedSection);
  if (!section) {
    return;
  }

  elements.panelTitle.textContent =
    section.id === "conclusion" ? "締結依頼" : section.label;
  elements.panelCaption.textContent = section.caption;
  elements.panelCaption.hidden = !section.caption;
  elements.panelHeaderActions.innerHTML = getPanelActionMarkup(section.id);

  switch (section.id) {
    case "summary":
      elements.detailPanelBody.innerHTML = renderSummaryPanel();
      break;
    case "terms":
      elements.detailPanelBody.innerHTML = renderTermsPanel();
      break;
    case "comments":
      elements.detailPanelBody.innerHTML = renderCommentsPanel();
      break;
    case "tasks":
      elements.detailPanelBody.innerHTML = renderTasksPanel();
      break;
    case "files":
      elements.detailPanelBody.innerHTML = renderFilesPanel();
      break;
    case "rooms":
      elements.detailPanelBody.innerHTML = renderRoomsPanel();
      break;
    case "review":
      elements.detailPanelBody.innerHTML = renderReviewPanel();
      break;
    case "approval":
      elements.detailPanelBody.innerHTML = renderApprovalPanel();
      break;
    case "conclusion":
      elements.detailPanelBody.innerHTML = renderConclusionPanel();
      break;
    case "log":
      elements.detailPanelBody.innerHTML = renderLogPanel();
      break;
    case "related":
    default:
      elements.detailPanelBody.innerHTML = renderRelatedPanel();
      break;
  }
}

function renderParentOptions(selectedParentId) {
  const options = flattenNodes(state.relationTree)
    .filter(({ node }) => node.type !== "memorandum")
    .map(({ node, depth }) => ({
      value: node.id,
      label: `${"　".repeat(depth)}${node.name}`,
    }));

  elements.memoParentSelect.innerHTML = options
    .map(
      (option) => `
        <option value="${option.value}" ${option.value === selectedParentId ? "selected" : ""}>
          ${escapeHtml(option.label)}
        </option>
      `,
    )
    .join("");
}

function openMemoModal({ mode, memoId = null, parentId = null } = {}) {
  const currentNode = getCurrentNode();
  state.modal.open = true;
  state.modal.mode = mode;
  state.modal.memoId = memoId;
  state.modal.parentId = parentId || currentNode?.id || "current-contract";

  if (mode === "edit" && memoId) {
    const context = findNodeContext(state.relationTree, memoId);
    if (!context || context.node.type !== "memorandum") {
      showToast("編集対象の覚書が見つかりませんでした。", true);
      closeMemoModal();
      return;
    }

    state.modal.parentId = context.parent?.id || state.modal.parentId;
    elements.memoModalTitle.textContent = "覚書を編集";
    elements.memoModalDescription.textContent =
      "関連先の変更を含めて覚書の内容を更新できます。";
    elements.saveMemoButton.textContent = "変更を保存";
    elements.memoNodeId.value = context.node.id;
    elements.memoTitleInput.value = context.node.name;
    renderParentOptions(context.parent?.id || state.modal.parentId);
    elements.memoEffectiveDateInput.value = context.node.effectiveDate;
    elements.memoStatusSelect.value = context.node.status;
    elements.memoSummaryInput.value = context.node.summary;
    elements.memoCodePreview.textContent = `契約番号: ${context.node.code}`;
  } else {
    elements.memoModalTitle.textContent = "覚書を追加";
    elements.memoModalDescription.textContent =
      "契約ツリーのどこに覚書を紐づけるかを選んで追加します。";
    elements.saveMemoButton.textContent = "保存する";
    elements.memoNodeId.value = "";
    elements.memoTitleInput.value = "";
    renderParentOptions(state.modal.parentId);
    elements.memoEffectiveDateInput.value = "2026-03-21";
    elements.memoStatusSelect.value = "作成中";
    elements.memoSummaryInput.value = "";
    elements.memoCodePreview.textContent = `採番予定: ${getNextMemoCode()}`;
  }

  elements.memoModalBackdrop.hidden = false;
  elements.memoTitleInput.focus();
}

function closeMemoModal() {
  state.modal.open = false;
  state.modal.mode = "create";
  state.modal.memoId = null;
  elements.memoModalBackdrop.hidden = true;
}

function moveNode(nodeId, direction) {
  const context = findNodeContext(state.relationTree, nodeId);
  if (!context) {
    showToast("並び替え対象の契約が見つかりませんでした。", true);
    return;
  }

  const nextIndex = direction === "up" ? context.index - 1 : context.index + 1;
  if (nextIndex < 0 || nextIndex >= context.siblings.length) {
    return;
  }

  const [moved] = context.siblings.splice(context.index, 1);
  context.siblings.splice(nextIndex, 0, moved);
  render();
  showToast(`「${moved.name}」の表示順を変更しました。`);
}

function submitMemoForm(event) {
  event.preventDefault();
  const formData = new FormData(elements.memoForm);
  const parentId = formData.get("parentId");
  const title = String(formData.get("title") || "").trim();
  const effectiveDate = String(formData.get("effectiveDate") || "").trim();
  const status = String(formData.get("status") || "").trim();
  const summary = String(formData.get("summary") || "").trim();

  if (!title || !effectiveDate || !status || !summary || !parentId) {
    showToast("覚書の必須項目を入力してください。", true);
    return;
  }

  const parentContext = findNodeContext(state.relationTree, parentId);
  if (!parentContext) {
    showToast("紐づけ先の契約が見つかりませんでした。", true);
    return;
  }

  if (state.modal.mode === "edit" && state.modal.memoId) {
    const memoContext = findNodeContext(state.relationTree, state.modal.memoId);
    if (!memoContext || memoContext.node.type !== "memorandum") {
      showToast("編集対象の覚書が見つかりませんでした。", true);
      return;
    }

    const updatedNode = {
      ...memoContext.node,
      name: title,
      effectiveDate,
      status,
      summary,
    };

    memoContext.siblings.splice(memoContext.index, 1);
    parentContext.node.children = parentContext.node.children || [];
    if (memoContext.parent?.id === parentContext.node.id) {
      parentContext.node.children.splice(memoContext.index, 0, updatedNode);
    } else {
      parentContext.node.children.push(updatedNode);
    }
    showToast(`「${updatedNode.name}」を更新しました。`);
  } else {
    const newMemo = {
      id: createMemoId(),
      code: getNextMemoCode(),
      name: title,
      type: "memorandum",
      status,
      effectiveDate,
      summary,
      children: [],
    };

    parentContext.node.children = parentContext.node.children || [];
    parentContext.node.children.push(newMemo);
    state.nextMemoSerial += 1;
    showToast(`「${newMemo.name}」を追加しました。`);
  }

  closeMemoModal();
  render();
}

function syncSupportColumn() {
  const panelWidth = clampPanelWidth(state.panelWidth);
  elements.supportColumn.style.setProperty("--detail-panel-width", `${panelWidth}px`);
  elements.supportColumn.classList.toggle(
    "is-panel-collapsed",
    state.detailPanelCollapsed,
  );
  elements.railToggleIcon.textContent = state.detailPanelCollapsed
    ? "first_page"
    : "last_page";
  elements.railToggleButton.setAttribute(
    "aria-label",
    state.detailPanelCollapsed ? "右詳細パネルを開く" : "右詳細パネルを閉じる",
  );
  elements.railResizeGutter.setAttribute("aria-valuemin", "380");
  elements.railResizeGutter.setAttribute("aria-valuemax", "440");
  elements.railResizeGutter.setAttribute("aria-valuenow", String(panelWidth));
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
  renderViewerTabs();
  renderViewer();
  renderSectionRail();
  renderPanel();
  syncSupportColumn();
}

function bindEvents() {
  elements.viewerTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-viewer-tab]");
    if (!button) {
      return;
    }
    state.activeViewerTab = button.dataset.viewerTab;
    render();
  });

  elements.sectionRail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-section]");
    if (!button) {
      return;
    }
    state.selectedSection = button.dataset.section;
    state.detailPanelCollapsed = false;
    render();
  });

  elements.railToggleButton.addEventListener("click", () => {
    state.detailPanelCollapsed = !state.detailPanelCollapsed;
    syncSupportColumn();
  });

  elements.railResizeGutter.addEventListener("mousedown", (event) => {
    event.preventDefault();
    state.isResizingPanel = true;
    state.resizeStartX = event.clientX;
    state.resizeStartWidth = state.panelWidth;
    document.body.classList.add("is-resizing-support");
  });

  elements.railResizeGutter.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }
    event.preventDefault();
    const delta = event.key === "ArrowLeft" ? 16 : -16;
    state.panelWidth = clampPanelWidth(state.panelWidth + delta);
    syncSupportColumn();
  });

  const handleBodyAction = (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      switch (actionButton.dataset.action) {
        case "move-up":
          moveNode(actionButton.dataset.nodeId, "up");
          return;
        case "move-down":
          moveNode(actionButton.dataset.nodeId, "down");
          return;
        case "open-create-memo":
          openMemoModal({
            mode: "create",
            parentId: actionButton.dataset.parentId || getCurrentNode()?.id,
          });
          return;
        case "edit-memo":
          openMemoModal({
            mode: "edit",
            memoId: actionButton.dataset.nodeId,
          });
          return;
        default:
          return;
      }
    }

    const accordionButton = event.target.closest("[data-accordion]");
    if (accordionButton) {
      const key = accordionButton.dataset.accordion;
      state.accordions[key] = !state.accordions[key];
      renderPanel();
      return;
    }

    const conclusionSourceButton = event.target.closest("[data-conclusion-source]");
    if (conclusionSourceButton) {
      state.conclusionSource = conclusionSourceButton.dataset.conclusionSource;
      renderPanel();
      return;
    }

    const signingServiceButton = event.target.closest("[data-signing-service]");
    if (signingServiceButton) {
      state.signingService = signingServiceButton.dataset.signingService;
      renderPanel();
      return;
    }

    const demoToastTarget = event.target.closest("[data-demo-toast]");
    if (demoToastTarget) {
      event.preventDefault();
      showToast(demoToastTarget.dataset.demoToast);
      return;
    }

    const scopeButton = event.target.closest("[data-comment-scope]");
    if (scopeButton) {
      state.commentScope = scopeButton.dataset.commentScope;
      renderPanel();
      return;
    }

    const taskFilterButton = event.target.closest("[data-task-filter]");
    if (taskFilterButton) {
      state.taskFilter = taskFilterButton.dataset.taskFilter;
      renderPanel();
    }
  };

  elements.viewerTabPanel.addEventListener("click", handleBodyAction);
  elements.panelHeaderActions.addEventListener("click", handleBodyAction);
  elements.detailPanelBody.addEventListener("click", handleBodyAction);

  elements.memoForm.addEventListener("submit", submitMemoForm);
  elements.closeMemoModalButton.addEventListener("click", closeMemoModal);
  elements.cancelMemoButton.addEventListener("click", closeMemoModal);
  elements.memoModalBackdrop.addEventListener("click", (event) => {
    if (event.target === elements.memoModalBackdrop) {
      closeMemoModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.modal.open) {
      closeMemoModal();
    }
  });

  document.addEventListener("mousemove", (event) => {
    if (!state.isResizingPanel) {
      return;
    }
    const delta = state.resizeStartX - event.clientX;
    state.panelWidth = clampPanelWidth(state.resizeStartWidth + delta);
    syncSupportColumn();
  });

  document.addEventListener("mouseup", () => {
    if (!state.isResizingPanel) {
      return;
    }
    state.isResizingPanel = false;
    document.body.classList.remove("is-resizing-support");
  });
}

bindEvents();
render();
