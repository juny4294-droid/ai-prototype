const state = {
  panel: "signing",
  view: "default",
};

const panelMeta = {
  summary: {
    title: "概要",
    actions: '<a href="#" class="inline-text-action">編集</a>',
  },
  fields: {
    title: "項目",
    actions:
      '<button type="button" class="button button-secondary">自動反映</button><a href="#" class="inline-text-action">編集</a>',
  },
  review: {
    title: "契約審査",
    actions: "",
  },
  tasks: {
    title: "タスク",
    actions: '<button type="button" class="button button-secondary">タスクを作成</button>',
  },
  comments: {
    title: "コメント",
    actions: "",
  },
  approval: {
    title: "承認",
    actions: '<span class="tag-badge is-required">必須</span>',
  },
  signing: {
    title: "締結依頼",
    actions: '<a href="#" class="inline-text-action">編集</a>',
  },
  room: {
    title: "編集ルーム",
    actions: '<a href="#" class="inline-text-action">＋ 編集ルームを新規作成</a>',
  },
  related: {
    title: "関連契約書",
    actions: '<a href="#" class="inline-text-action">＋ 関連契約書の追加</a>',
  },
  files: {
    title: "ファイル",
    actions: "",
  },
  logs: {
    title: "ログ",
    actions: "",
  },
};

const railItems = [...document.querySelectorAll(".rail-item")];
const stateChips = [...document.querySelectorAll(".toolbar-chip")];
const panelTitle = document.getElementById("panelTitle");
const panelAction = document.getElementById("panelAction");
const panelBody = document.getElementById("panelBody");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderAvatar(name) {
  return `
    <div class="person-row">
      <span class="avatar-circle" aria-hidden="true">
        <span class="material-symbols-rounded">person</span>
      </span>
      <span class="person-name">${escapeHtml(name)}</span>
    </div>
  `;
}

function renderSummary() {
  return `
    <section class="panel-section">
      <button type="button" class="accordion-head is-open">
        <span>契約書の概要</span>
        <span class="material-symbols-rounded" aria-hidden="true">expand_less</span>
      </button>
      <div class="field-stack">
        <div class="field-row">
          <span class="field-label">契約書のステータス</span>
          <div class="field-value is-strong">締結済み</div>
          <div class="badge-row">
            <span class="status-badge">契約期間中</span>
          </div>
          <div class="detail-copy">
            <p>終了日：2026/12/31</p>
            <p>自動更新：あり</p>
            <p>自動更新の更新拒絶期限：2026/11/30</p>
          </div>
        </div>
        <div class="field-row">
          <span class="field-label">説明</span>
          <div class="field-value">デモ環境で利用する業務委託契約。</div>
        </div>
        <div class="field-row">
          <span class="field-label">担当者</span>
          <div class="inline-edit-row">
            ${renderAvatar("営業太郎")}
            <a href="#" class="inline-text-action">編集</a>
          </div>
        </div>
        <div class="field-row">
          <span class="field-label">フォロー中のメンバー</span>
          <div class="inline-edit-row">
            ${renderAvatar("課長太郎")}
            <a href="#" class="inline-text-action">編集</a>
          </div>
        </div>
        <div class="field-row">
          <span class="field-label">契約書の保存場所</span>
          <div class="inline-edit-row">
            <a href="#" class="folder-link">第一営業部</a>
            <span class="material-symbols-rounded muted-icon" aria-hidden="true">domain</span>
          </div>
        </div>
        <div class="field-row">
          <a href="#" class="destructive-link">この契約書を削除</a>
        </div>
      </div>
    </section>
  `;
}

function renderFields() {
  return `
    <section class="panel-section">
      <button type="button" class="accordion-head is-open">
        <span>契約期間</span>
        <span class="material-symbols-rounded" aria-hidden="true">expand_less</span>
      </button>
      <div class="field-stack">
        <div class="field-row">
          <span class="field-label">契約日</span>
          <div class="field-value">2026/01/15</div>
        </div>
        <div class="field-row">
          <span class="field-label">開始日</span>
          <div class="field-value">2026/02/01</div>
        </div>
        <div class="field-row">
          <span class="field-label">終了日</span>
          <div class="field-value">2026/12/31</div>
        </div>
        <div class="field-row">
          <span class="field-label">契約期間</span>
          <div class="field-value">11ヶ月</div>
        </div>
        <div class="field-row">
          <span class="field-label">自動更新</span>
          <div class="field-value">自動更新する</div>
        </div>
        <div class="field-row">
          <span class="field-label">自動更新の更新拒絶期限</span>
          <div class="field-value">1ヶ月</div>
        </div>
        <div class="field-row">
          <span class="field-label">更新に関する補足コメント</span>
          <div class="field-value">更新前に利用範囲の見直しを行う</div>
        </div>
      </div>
      <button type="button" class="accordion-head">
        <span>当事者</span>
        <span class="material-symbols-rounded" aria-hidden="true">expand_more</span>
      </button>
    </section>
  `;
}

function renderReview() {
  return `
    <section class="panel-section">
      <div class="button button-secondary">契約審査</div>
      <div class="field-value">依頼済みの契約審査はありません</div>
    </section>
  `;
}

function renderTasks() {
  return `
    <section class="panel-section">
      <div class="field-stack">
        <div class="field-row">
          <span class="field-label">内容確認のタスク</span>
          <div class="field-value">依頼日 2026/03/20 / 担当者 営業太郎</div>
        </div>
        <div class="field-row">
          <span class="field-label">押印設定の確認</span>
          <div class="field-value">完了日 2026/03/19 / 完了者 法務太郎</div>
        </div>
      </div>
    </section>
  `;
}

function renderComments() {
  return `
    <section class="panel-section">
      <textarea class="comment-input" rows="3" placeholder="プレースホルダー"></textarea>
      <div class="comment-stack">
        <article class="comment-card">
          <div class="comment-header">
            ${renderAvatar("法務太郎")}
            <span class="comment-time">2026/03/20 09:20</span>
          </div>
          <p>送付前に押印設定を再確認してください。</p>
        </article>
        <article class="comment-card">
          <div class="comment-header">
            ${renderAvatar("営業太郎")}
            <span class="comment-time">2026/03/20 09:42</span>
          </div>
          <p>確認しました。本文内容に問題ありません。</p>
        </article>
      </div>
    </section>
  `;
}

function renderApproval() {
  return `
    <section class="panel-section">
      <button type="button" class="accordion-head is-open">
        <span>現在の承認</span>
        <span class="material-symbols-rounded" aria-hidden="true">expand_less</span>
      </button>
      <div class="approval-timeline">
        <div class="approval-step is-current">
          <span class="approval-marker">申請</span>
          <article class="approval-card dark">
            <div class="comment-header">
              ${renderAvatar("赤羽佳祐")}
              <span class="comment-time">2026/03/20 10:10</span>
            </div>
          </article>
          <div class="field-row">
            <span class="field-label">コメント</span>
            <div class="field-value">株式会社○○との検証利用契約です。ご確認をお願いします。</div>
          </div>
        </div>
        <div class="approval-step">
          <span class="approval-marker">承認待ち</span>
          <article class="approval-card plain">
            ${renderAvatar("法務太郎")}
          </article>
        </div>
        <div class="field-row">
          <span class="field-label">同時に承認依頼がある契約書</span>
          <article class="related-card">
            <div class="related-card-head">
              <span class="checkbox-icon">✓</span>
              <span class="file-type-icon">W</span>
              <div>
                <div class="field-value">基本契約書_デモ環境向け</div>
                <div class="badge-row">
                  <span class="tag-badge outline">元契約</span>
                  <span class="tag-badge outline">テスト案件</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="footer-action-row footer-strip">
        <button type="button" class="button button-secondary">差戻し</button>
        <button type="button" class="button button-primary">承認</button>
      </div>
    </section>
  `;
}

function renderSigning() {
  return `
    <section class="panel-section">
      <div class="notice-box">まだ送信は完了していません。内容を確認して、送信してください。</div>
      <div class="activity-inline">
        ${renderAvatar("法務太郎")}
        <span class="field-value">法務太郎さんが2026/03/20 10:48に保存しました</span>
      </div>
      <div class="field-row">
        <span class="field-label">締結タイプ</span>
        <div class="field-value">自社からの締結依頼 / 紙</div>
      </div>
      <div class="approval-timeline">
        <div class="approval-step is-current">
          <span class="approval-marker">1</span>
          <div class="step-heading">押印依頼</div>
          <div class="detail-copy">
            <p><strong>締結依頼方法</strong> URL</p>
            <p><strong>署名者</strong> 甲</p>
            <p><strong>言語</strong> 日本語</p>
            <p><strong>押印位置</strong> 設定しない</p>
          </div>
          <div class="signer-card">法務太郎 様</div>
        </div>
        <div class="approval-step">
          <span class="approval-marker">2</span>
          <div class="step-heading">締結済み契約書（PDF）アップロード</div>
          <article class="related-card">
            <div class="field-value">ここにファイルをドロップ</div>
            <div class="footer-action-row" style="justify-content:center; padding-top: 18px;">
              <button type="button" class="button button-secondary">ファイルを選択</button>
            </div>
          </article>
          <div class="footer-action-row footer-strip">
            <button type="button" class="button button-primary wide">確定</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderRoom() {
  return `
    <section class="panel-section">
      <article class="room-card">
        <div class="field-label">ルームメンバー</div>
        <div class="field-value">営業太郎 / 法務太郎 / 契約担当</div>
      </article>
    </section>
  `;
}

function renderRelated() {
  return `
    <section class="panel-section">
      <article class="related-card">
        <div class="related-card-head">
          <span class="file-type-icon">W</span>
          <div>
            <div class="field-value">ab1000349</div>
            <div class="field-value">基本契約書_デモ環境向け</div>
            <div class="badge-row">
              <span class="tag-badge outline">元契約</span>
              <span class="tag-badge outline">ABCプロジェクト</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  `;
}

function renderFiles() {
  return `
    <section class="panel-section">
      <article class="file-card">
        <div class="related-card-head">
          <span class="file-type-icon">W</span>
          <div>
            <div class="field-value">秘密保持契約書.docx</div>
            <div class="meta-line">更新日 2026/03/20 / 第1版</div>
          </div>
        </div>
      </article>
    </section>
  `;
}

function renderLogs() {
  const rows = [
    "更新契約を作成しました。",
    "業務委託契約を自動更新しました。",
    "締結依頼を承認しました。",
    "承認フローを発行しました。",
  ];
  return `
    <section class="panel-section">
      <div class="activity-list">
        ${rows
          .map(
            (row) => `
              <article class="activity-row">
                <div class="activity-head">
                  ${renderAvatar("営業太郎")}
                  <span class="comment-time">2026/03/20 11:12</span>
                </div>
                <p class="activity-message">${row}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLoading() {
  return `
    <div class="panel-loading">
      <div class="loading-lines">
        <div class="loading-line"></div>
        <div class="loading-line short"></div>
        <div class="loading-line"></div>
      </div>
    </div>
  `;
}

function renderEmpty() {
  return `
    <div class="panel-empty">
      <strong>表示できるデータがありません</strong>
      <p>この state でも panel shell は維持します。</p>
    </div>
  `;
}

function renderError() {
  return `
    <div class="panel-error" role="alert">
      <strong>読み込みに失敗しました</strong>
      <p>再試行してください。</p>
    </div>
  `;
}

function renderDefaultPanel() {
  if (state.panel === "summary") return renderSummary();
  if (state.panel === "fields") return renderFields();
  if (state.panel === "review") return renderReview();
  if (state.panel === "tasks") return renderTasks();
  if (state.panel === "comments") return renderComments();
  if (state.panel === "approval") return renderApproval();
  if (state.panel === "signing") return renderSigning();
  if (state.panel === "room") return renderRoom();
  if (state.panel === "related") return renderRelated();
  if (state.panel === "files") return renderFiles();
  return renderLogs();
}

function renderPanel() {
  const meta = panelMeta[state.panel];
  panelTitle.textContent = meta.title;
  panelAction.innerHTML = meta.actions;

  if (state.view === "loading") {
    panelBody.innerHTML = renderLoading();
    return;
  }
  if (state.view === "empty") {
    panelBody.innerHTML = renderEmpty();
    return;
  }
  if (state.view === "error") {
    panelBody.innerHTML = renderError();
    return;
  }

  panelBody.innerHTML = renderDefaultPanel();
}

railItems.forEach((item) => {
  item.addEventListener("click", () => {
    state.panel = item.dataset.panel;
    railItems.forEach((node) => {
      node.classList.toggle("is-active", node === item);
      if (node === item) {
        node.setAttribute("aria-current", "page");
      } else {
        node.removeAttribute("aria-current");
      }
    });
    renderPanel();
  });
});

stateChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    state.view = chip.dataset.state;
    stateChips.forEach((node) => node.classList.toggle("is-active", node === chip));
    renderPanel();
  });
});

renderPanel();
