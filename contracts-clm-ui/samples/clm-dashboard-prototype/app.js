const state = {
  range: "week",
  view: "default",
  selectedContractId: "C-1042",
};

const dashboardData = {
  week: {
    summary: [
      {
        label: "今週対応が必要",
        value: 12,
        unit: "件",
        note: "期限7日以内または停止5営業日超",
        alert: true,
      },
      {
        label: "承認進行中",
        value: 18,
        unit: "件",
        note: "うち SLA 超過 4 件",
      },
      {
        label: "締結差戻し",
        value: 6,
        unit: "件",
        note: "再送前チェック待ち 3 件",
      },
      {
        label: "更新拒絶通知の準備",
        value: 5,
        unit: "件",
        note: "30日以内に通知期限到来",
      },
    ],
    priorities: [
      {
        id: "C-1042",
        title: "業務委託基本契約書 更新版",
        status: "承認進行中",
        lane: "法務確認待ち",
        owner: "法務担当A",
        dueLabel: "本日中",
        dueTone: "danger",
        note: "承認者 2 名のうち 1 名が 6 営業日停止。更新拒絶期限まで 4 日です。",
        company: "販売パートナーX",
        amount: "年間想定取引 2,400 万円",
        nextAction: "承認者へ催促し、拒絶期限の通知文面を準備する",
        risks: [
          "承認完了が遅れると自動更新停止の通知期限に間に合わない",
          "添付ファイルに見積改定版が未反映",
        ],
      },
      {
        id: "C-1108",
        title: "秘密保持契約書 テンプレート派生",
        status: "締結差戻し",
        lane: "差戻し再送待ち",
        owner: "営業担当C",
        dueLabel: "1日後",
        dueTone: "danger",
        note: "相手方署名依頼がメール差戻し。宛先修正だけで再送可能です。",
        company: "検証先ユニットB",
        amount: "取引前",
        nextAction: "送信先を再確認して締結依頼を再送する",
        risks: [
          "共同編集中の添付資料と署名依頼先の差分あり",
        ],
      },
      {
        id: "C-0966",
        title: "販売代理店契約書",
        status: "締結済み",
        lane: "更新拒絶期限",
        owner: "事業責任者D",
        dueLabel: "3日後",
        dueTone: "warning",
        note: "自動更新あり。拒絶通知期限まで 3 日で、担当未設定のままです。",
        company: "販売網ユニットQ",
        amount: "年間想定取引 5,800 万円",
        nextAction: "担当者を確定し、継続可否の判断会議を設定する",
        risks: [
          "担当未設定のため通知責任が曖昧",
          "更新判断の根拠メモが未登録",
        ],
      },
      {
        id: "C-1115",
        title: "業務提携基本契約書",
        status: "承認進行中",
        lane: "部門承認待ち",
        owner: "事業開発担当B",
        dueLabel: "5日後",
        dueTone: "warning",
        note: "承認開始から 8 営業日経過。金額条件の再確認コメントが未返信です。",
        company: "提携先クラスタM",
        amount: "初年度想定 1,200 万円",
        nextAction: "条件差分を確認し、コメント返信の担当を確定する",
        risks: [
          "コメント未解消のまま承認完了に進めない",
        ],
      },
      {
        id: "C-1001",
        title: "共同研究契約書",
        status: "送信エラー",
        lane: "締結再送待ち",
        owner: "法務担当A",
        dueLabel: "今週中",
        dueTone: "warning",
        note: "電子締結の送信エラーが発生。押印欄の設定に不整合があります。",
        company: "研究先ラボR",
        amount: "共同開発案件",
        nextAction: "押印欄を修正し、締結依頼を再作成する",
        risks: [
          "締結期限を超えると案件開始日へ影響",
        ],
      },
    ],
    flow: [
      { label: "作成中", count: 9, stalled: 2, ratio: 32 },
      { label: "承認進行中", count: 18, stalled: 4, ratio: 68 },
      { label: "締結進行中", count: 11, stalled: 3, ratio: 46 },
      { label: "締結済み", count: 37, stalled: 5, ratio: 54 },
    ],
    renewals: [
      {
        title: "販売代理店契約書",
        meta: "更新拒絶期限 2026/03/23",
        badge: "通知要",
      },
      {
        title: "業務委託基本契約書 更新版",
        meta: "承認完了希望日 2026/03/20",
        badge: "本日",
      },
      {
        title: "共同研究契約書",
        meta: "締結予定日 2026/03/24",
        badge: "再送待ち",
      },
    ],
    rules: [
      {
        title: "担当未設定の更新案件",
        detail: "更新拒絶期限 30 日以内の契約で担当者が未設定 2 件。",
        badge: "即時補正",
      },
      {
        title: "承認経路に法務未設定",
        detail: "承認進行中の 1 件で法務レビュアーが空欄です。",
        badge: "要確認",
      },
      {
        title: "送信エラー後の再送未実施",
        detail: "送信エラー発生から 24 時間以上経過した案件が 1 件あります。",
        badge: "SLA超過",
      },
    ],
    owners: [
      { name: "法務担当A", stalled: 3, dueSoon: 4 },
      { name: "営業担当C", stalled: 2, dueSoon: 3 },
      { name: "事業開発担当B", stalled: 1, dueSoon: 2 },
    ],
    summaryText: "今週は承認停滞と更新拒絶期限が集中しています。",
  },
  month: {
    summary: [
      {
        label: "今月対応が必要",
        value: 29,
        unit: "件",
        note: "期限30日以内または停止5営業日超",
        alert: true,
      },
      {
        label: "承認進行中",
        value: 34,
        unit: "件",
        note: "うち SLA 超過 7 件",
      },
      {
        label: "締結差戻し",
        value: 11,
        unit: "件",
        note: "差戻し理由は送付先不整合が最多",
      },
      {
        label: "契約満了予定",
        value: 8,
        unit: "件",
        note: "更新判断会議未設定 3 件",
      },
    ],
    priorities: [
      {
        id: "C-2104",
        title: "販売業務委託契約書",
        status: "締結済み",
        lane: "満了前判断",
        owner: "事業責任者D",
        dueLabel: "6日後",
        dueTone: "warning",
        note: "契約満了まで 14 日。継続可否の判断者が未確定です。",
        company: "代理店ユニットF",
        amount: "月額 320 万円",
        nextAction: "事業責任者と営業責任者で更新判断を確定する",
        risks: [
          "更新判断が遅れると相手方通知に間に合わない",
        ],
      },
      {
        id: "C-2118",
        title: "データ利用契約書",
        status: "共同編集中",
        lane: "編集停滞",
        owner: "営業担当E",
        dueLabel: "7日後",
        dueTone: "warning",
        note: "相手方差分コメントへの返信が 9 日止まっています。",
        company: "分析先ユニットH",
        amount: "月額 85 万円",
        nextAction: "未返信コメントを整理し、次回版を確定する",
        risks: [
          "案件開始日が次月へずれ込む可能性",
        ],
      },
    ],
    flow: [
      { label: "作成中", count: 18, stalled: 5, ratio: 36 },
      { label: "承認進行中", count: 34, stalled: 7, ratio: 72 },
      { label: "締結進行中", count: 20, stalled: 4, ratio: 48 },
      { label: "締結済み", count: 96, stalled: 8, ratio: 60 },
    ],
    renewals: [
      {
        title: "販売業務委託契約書",
        meta: "契約満了日 2026/04/03",
        badge: "判断待ち",
      },
      {
        title: "データ利用契約書",
        meta: "相手方返信期限 2026/03/28",
        badge: "停滞",
      },
    ],
    rules: [
      {
        title: "更新判断会議なし",
        detail: "契約満了 30 日以内で判断会議が未設定 3 件。",
        badge: "運用不足",
      },
      {
        title: "必須項目未入力",
        detail: "作成中の 4 件で契約終了日が未入力です。",
        badge: "入力不足",
      },
    ],
    owners: [
      { name: "営業担当E", stalled: 4, dueSoon: 5 },
      { name: "法務担当A", stalled: 3, dueSoon: 4 },
      { name: "事業責任者D", stalled: 2, dueSoon: 4 },
    ],
    summaryText: "30日では満了判断と共同編集の停止案件が増えています。",
  },
  quarter: {
    summary: [
      {
        label: "90日で要対処",
        value: 61,
        unit: "件",
        note: "満了・承認停滞・送信エラーを合算",
        alert: true,
      },
      {
        label: "承認進行中",
        value: 51,
        unit: "件",
        note: "超過率 18%",
      },
      {
        label: "契約満了",
        value: 14,
        unit: "件",
        note: "うち更新判断未記録 5 件",
      },
      {
        label: "送信エラー",
        value: 4,
        unit: "件",
        note: "押印欄設定起因が 3 件",
      },
    ],
    priorities: [
      {
        id: "C-3010",
        title: "共同販売契約書",
        status: "契約満了",
        lane: "再契約判断",
        owner: "営業責任者F",
        dueLabel: "今月中",
        dueTone: "warning",
        note: "満了済みだが再契約判断が未記録で、関連案件が継続中です。",
        company: "販売先セグメントT",
        amount: "四半期売上 9,000 万円",
        nextAction: "再契約するか終了するかの判断ログを残す",
        risks: [
          "既存案件の請求条件と契約状態が乖離",
        ],
      },
    ],
    flow: [
      { label: "作成中", count: 26, stalled: 6, ratio: 34 },
      { label: "承認進行中", count: 51, stalled: 9, ratio: 76 },
      { label: "締結進行中", count: 28, stalled: 6, ratio: 52 },
      { label: "締結済み", count: 142, stalled: 14, ratio: 66 },
    ],
    renewals: [
      {
        title: "共同販売契約書",
        meta: "再契約判断未記録",
        badge: "要整理",
      },
    ],
    rules: [
      {
        title: "満了後運用の未整理",
        detail: "契約満了後も関連案件が継続している契約が 2 件。",
        badge: "監査対象",
      },
    ],
    owners: [
      { name: "営業責任者F", stalled: 3, dueSoon: 6 },
      { name: "法務担当A", stalled: 3, dueSoon: 5 },
    ],
    summaryText: "90日では満了後運用の未整理が監査論点になっています。",
  },
};

const summaryGrid = document.getElementById("summaryGrid");
const priorityList = document.getElementById("priorityList");
const flowTable = document.getElementById("flowTable");
const renewalList = document.getElementById("renewalList");
const detailPanel = document.getElementById("detailPanel");
const ruleList = document.getElementById("ruleList");
const ownerList = document.getElementById("ownerList");
const headerSummary = document.getElementById("headerSummary");
const priorityMeta = document.getElementById("priorityMeta");

const rangeButtons = [...document.querySelectorAll(".segment-button")];
const stateButtons = [...document.querySelectorAll(".toolbar-chip")];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getCurrentData() {
  return dashboardData[state.range];
}

function renderSummary(items) {
  return items
    .map(
      (item) => `
        <article class="summary-card${item.alert ? " is-alert" : ""}">
          <span class="summary-label">${escapeHtml(item.label)}</span>
          <div class="summary-value-row">
            <span class="summary-value">${escapeHtml(item.value)}</span>
            <span class="summary-caption">${escapeHtml(item.unit)}</span>
          </div>
          <p class="summary-note">${escapeHtml(item.note)}</p>
        </article>
      `
    )
    .join("");
}

function renderPriorities(items) {
  return items
    .map(
      (item) => `
        <button
          type="button"
          class="priority-item${item.id === state.selectedContractId ? " is-selected" : ""}"
          data-contract-id="${escapeHtml(item.id)}"
          role="option"
          aria-selected="${item.id === state.selectedContractId ? "true" : "false"}"
        >
          <div class="priority-topline">
            <div class="badge-row">
              <span class="status-badge">${escapeHtml(item.status)}</span>
              <span class="tag-badge">${escapeHtml(item.lane)}</span>
            </div>
            <span class="due-badge${item.dueTone === "danger" ? " is-danger" : ""}">${escapeHtml(item.dueLabel)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <div class="priority-meta-row">
            <span>${escapeHtml(item.owner)}</span>
            <span>${escapeHtml(item.company)}</span>
          </div>
          <p class="priority-note">${escapeHtml(item.note)}</p>
        </button>
      `
    )
    .join("");
}

function renderFlow(items) {
  return items
    .map(
      (item) => `
        <div class="flow-row">
          <div class="flow-label">
            <strong>${escapeHtml(item.label)}</strong>
            <span>SLA 超過 ${escapeHtml(item.stalled)}件</span>
          </div>
          <div class="flow-bar" aria-hidden="true">
            <span style="width: ${escapeHtml(item.ratio)}%"></span>
          </div>
          <div class="flow-count">${escapeHtml(item.count)}件</div>
        </div>
      `
    )
    .join("");
}

function renderTimeline(items) {
  return items
    .map(
      (item) => `
        <div class="timeline-row">
          <div class="timeline-copy">
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.meta)}</p>
          </div>
          <span class="tag-badge">${escapeHtml(item.badge)}</span>
        </div>
      `
    )
    .join("");
}

function renderRules(items) {
  return items
    .map(
      (item) => `
        <div class="rule-row">
          <div class="rule-head">
            <strong>${escapeHtml(item.title)}</strong>
            <span class="tag-badge">${escapeHtml(item.badge)}</span>
          </div>
          <p>${escapeHtml(item.detail)}</p>
        </div>
      `
    )
    .join("");
}

function renderOwners(items) {
  return items
    .map(
      (item) => `
        <div class="owner-row">
          <div>
            <strong class="owner-name">${escapeHtml(item.name)}</strong>
            <p class="owner-meta">停止案件 ${escapeHtml(item.stalled)}件 / 今週期限 ${escapeHtml(item.dueSoon)}件</p>
          </div>
          <div class="owner-stats">
            <strong>${escapeHtml(item.dueSoon)}件</strong>
            <span class="detail-muted">期限集中</span>
          </div>
        </div>
      `
    )
    .join("");
}

function renderDetail(item) {
  if (!item) {
    return `
      <div class="detail-body">
        <div class="state-card">
          <p class="empty-copy">対象の契約がありません。</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="detail-body">
      <div class="detail-section">
        <div class="badge-row">
          <span class="status-badge">${escapeHtml(item.status)}</span>
          <span class="tag-badge">${escapeHtml(item.lane)}</span>
        </div>
        <h3 class="detail-title">${escapeHtml(item.title)}</h3>
        <p class="detail-muted">${escapeHtml(item.company)} / ${escapeHtml(item.amount)}</p>
      </div>
      <div class="detail-section">
        <div class="detail-key-row">
          <span>担当者</span>
          <strong>${escapeHtml(item.owner)}</strong>
        </div>
        <div class="detail-key-row">
          <span>期限</span>
          <strong>${escapeHtml(item.dueLabel)}</strong>
        </div>
      </div>
      <div class="detail-section">
        <strong>次のアクション</strong>
        <p class="detail-muted">${escapeHtml(item.nextAction)}</p>
      </div>
      <div class="detail-section">
        <strong>リスク</strong>
        <ul class="detail-list">
          ${item.risks.map((risk) => `<li>${escapeHtml(risk)}</li>`).join("")}
        </ul>
      </div>
      <div class="detail-actions">
        <button type="button" class="button-secondary">詳細を確認</button>
        <button type="button" class="button-text">担当を変更</button>
      </div>
    </div>
  `;
}

function renderLoading() {
  summaryGrid.innerHTML = `
    <div class="loading-state">
      <div class="skeleton-grid">
        <div class="skeleton-block"></div>
        <div class="skeleton-block"></div>
        <div class="skeleton-block"></div>
        <div class="skeleton-block"></div>
      </div>
    </div>
  `;
  priorityList.innerHTML = `
    <div class="loading-state">
      <div class="skeleton-list">
        <div class="skeleton-row"></div>
        <div class="skeleton-row"></div>
        <div class="skeleton-row"></div>
      </div>
    </div>
  `;
  flowTable.innerHTML = `
    <div class="loading-state">
      <div class="skeleton-list">
        <div class="skeleton-line"></div>
        <div class="skeleton-line is-mid"></div>
        <div class="skeleton-line is-short"></div>
      </div>
    </div>
  `;
  renewalList.innerHTML = "";
  ruleList.innerHTML = "";
  ownerList.innerHTML = "";
  detailPanel.innerHTML = `
    <div class="loading-state">
      <div class="skeleton-list">
        <div class="skeleton-line is-mid"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line is-short"></div>
      </div>
    </div>
  `;
  priorityMeta.textContent = "読み込み中";
}

function renderEmpty() {
  summaryGrid.innerHTML = `
    <div class="empty-state">
      <div class="state-card">
        <p class="empty-copy">この期間では優先対応が必要な契約はありません。次回の満了通知と承認滞留が発生するとここに表示されます。</p>
      </div>
    </div>
  `;
  priorityList.innerHTML = `
    <div class="empty-state">
      <div class="state-card">
        <p class="empty-copy">優先対応レーンは空です。</p>
      </div>
    </div>
  `;
  flowTable.innerHTML = `
    <div class="empty-state">
      <div class="state-card">
        <p class="empty-copy">滞留データはありません。</p>
      </div>
    </div>
  `;
  renewalList.innerHTML = `
    <div class="empty-state">
      <div class="state-card">
        <p class="empty-copy">更新・満了予定はありません。</p>
      </div>
    </div>
  `;
  ruleList.innerHTML = `
    <div class="empty-state">
      <div class="state-card">
        <p class="empty-copy">検知中のルール逸脱はありません。</p>
      </div>
    </div>
  `;
  ownerList.innerHTML = `
    <div class="empty-state">
      <div class="state-card">
        <p class="empty-copy">担当負荷は平準化されています。</p>
      </div>
    </div>
  `;
  detailPanel.innerHTML = `
    <div class="detail-body">
      <div class="state-card">
        <p class="empty-copy">選択中の契約はありません。</p>
      </div>
    </div>
  `;
  priorityMeta.textContent = "0件を表示";
}

function renderError() {
  summaryGrid.innerHTML = `
    <div class="error-state">
      <div class="state-card">
        <p class="error-copy">集計に失敗しました。承認ステータスの取得と満了予定の再計算をやり直してください。</p>
      </div>
    </div>
  `;
  priorityList.innerHTML = `
    <div class="error-state">
      <div class="state-card">
        <p class="error-copy">優先対応レーンを読み込めませんでした。</p>
      </div>
    </div>
  `;
  flowTable.innerHTML = "";
  renewalList.innerHTML = "";
  ruleList.innerHTML = "";
  ownerList.innerHTML = "";
  detailPanel.innerHTML = `
    <div class="detail-body">
      <div class="state-card">
        <p class="error-copy">選択中の契約詳細を表示できません。</p>
      </div>
    </div>
  `;
  priorityMeta.textContent = "エラー";
}

function renderDashboard() {
  const data = getCurrentData();
  headerSummary.textContent = data.summaryText;

  if (state.view === "loading") {
    renderLoading();
    return;
  }

  if (state.view === "empty") {
    renderEmpty();
    return;
  }

  if (state.view === "error") {
    renderError();
    return;
  }

  const selected = data.priorities.find((item) => item.id === state.selectedContractId) || data.priorities[0];
  if (selected) {
    state.selectedContractId = selected.id;
  }

  summaryGrid.innerHTML = renderSummary(data.summary);
  priorityList.innerHTML = renderPriorities(data.priorities);
  flowTable.innerHTML = renderFlow(data.flow);
  renewalList.innerHTML = renderTimeline(data.renewals);
  ruleList.innerHTML = renderRules(data.rules);
  ownerList.innerHTML = renderOwners(data.owners);
  detailPanel.innerHTML = renderDetail(selected);
  priorityMeta.textContent = `${data.priorities.length}件を表示`;
}

rangeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.range = button.dataset.range;
    const data = getCurrentData();
    if (!data.priorities.some((item) => item.id === state.selectedContractId)) {
      state.selectedContractId = data.priorities[0]?.id || "";
    }

    rangeButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
    });

    renderDashboard();
  });
});

stateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.state;
    stateButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderDashboard();
  });
});

priorityList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-contract-id]");
  if (!button) {
    return;
  }

  state.selectedContractId = button.dataset.contractId;
  renderDashboard();
});

renderDashboard();
