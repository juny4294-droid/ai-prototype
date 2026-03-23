const state = {
  panel: "signing",
  view: "default",
};

const panelMeta = {
  summary: {
    title: "概要",
    caption: "",
    actions: '<a href="#" class="inline-text-action">編集</a>',
  },
  fields: {
    title: "項目",
    caption: "",
    actions:
      '<button type="button" class="button button-secondary">自動反映</button><a href="#" class="inline-text-action">編集</a>',
  },
  review: {
    title: "契約審査",
    caption: "",
    actions: "",
  },
  tasks: {
    title: "タスク",
    caption: "",
    actions: '<button type="button" class="button button-secondary">タスクを作成</button>',
  },
  comments: {
    title: "コメント",
    caption: "",
    actions: "",
  },
  approval: {
    title: "承認",
    caption: "",
    actions: '<span class="tag-badge is-required">必須</span>',
  },
  signing: {
    title: "締結依頼",
    caption: "",
    actions: '<a href="#" class="inline-text-action">編集</a>',
  },
  room: {
    title: "編集ルーム",
    caption: "",
    actions: '<a href="#" class="inline-text-action">＋ 編集ルームを新規作成</a>',
  },
  related: {
    title: "関連契約書",
    caption: "",
    actions: '<a href="#" class="inline-text-action">＋ 関連契約書の追加</a>',
  },
  files: {
    title: "ファイル",
    caption: "",
    actions: "",
  },
  logs: {
    title: "ログ",
    caption: "",
    actions: "",
  },
};

const railItems = [...document.querySelectorAll(".rail-item")];
const stateChips = [...document.querySelectorAll(".toolbar-chip")];
const panelTitle = document.getElementById("panelTitle");
const panelCaption = document.getElementById("panelCaption");
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

function renderSummaryDefault() {
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
          <div class="badge-row top-gap">
            <span class="status-badge">契約期間中</span>
          </div>
          <div class="detail-copy top-gap">
            <p>終了日：2023/12/31</p>
            <p>自動更新：あり</p>
            <p>自動更新の更新拒絶期限：2023/11/30</p>
          </div>
        </div>
        <div class="field-row">
          <span class="field-label">説明</span>
          <div class="field-value">株式会社○△との業務委託契約。</div>
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
          <div class="inline-link-row">
            <a href="#" class="folder-link">第一営業部</a>
            <span class="material-symbols-rounded muted-icon" aria-hidden="true">domain</span>
          </div>
        </div>
        <div class="field-row is-danger-row">
          <a href="#" class="destructive-link">この契約書を削除</a>
        </div>
      </div>
    </section>
  `;
}

function renderFieldsDefault() {
  return `
    <section class="panel-section">
      <button type="button" class="accordion-head is-open">
        <span>契約期間</span>
        <span class="material-symbols-rounded" aria-hidden="true">expand_less</span>
      </button>
      <div class="field-stack">
        <div class="field-row">
          <span class="field-label">契約日</span>
          <div class="field-value">2022/12/01</div>
        </div>
        <div class="field-row">
          <span class="field-label">開始日</span>
          <div class="field-value">2023/01/01</div>
        </div>
        <div class="field-row">
          <span class="field-label">終了日</span>
          <div class="field-value">2023/12/31</div>
        </div>
        <div class="field-row">
          <span class="field-label">契約期間</span>
          <div class="field-value">1年</div>
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
          <div class="field-value">次回更新時に内容の見直しを検討</div>
        </div>
      </div>
      <button type="button" class="accordion-head">
        <span>当事者</span>
        <span class="material-symbols-rounded" aria-hidden="true">expand_more</span>
      </button>
    </section>
  `;
}

function renderReviewDefault() {
  return `
    <section class="panel-section is-empty-state">
      <button type="button" class="button button-secondary">契約審査</button>
      <p class="empty-copy">依頼済みの契約審査はありません</p>
    </section>
  `;
}

function renderTasksDefault() {
  return `
    <section class="panel-section">
      <div class="task-stack">
        <article class="task-card">
          <div class="badge-row">
            <span class="tag-badge">依頼中</span>
          </div>
          <h3>内容確認のタスク</h3>
          <p class="meta-line">依頼日 2026/03/19 / 担当者 営業太郎</p>
          <p>法務確認後に相手方へ送付するため、契約内容を確認してください。</p>
        </article>
        <article class="task-card">
          <div class="badge-row">
            <span class="tag-badge">完了</span>
          </div>
          <h3>押印設定の確認</h3>
          <p class="meta-line">完了日 2026/03/18 / 完了者 法務太郎</p>
          <p>締結依頼に必要な押印位置と送付手段の確認を完了しました。</p>
        </article>
      </div>
    </section>
  `;
}

function renderTreeNode(node) {
  const tagClass = node.tag === "basic" ? "basic" : node.tag === "individual" ? "individual" : "memo";
  const collapse = node.children?.length
    ? `<button type="button" class="tree-collapse-button" aria-label="${node.collapsed ? "展開" : "折りたたむ"}" data-toggle="${escapeHtml(node.id)}">
         <span class="material-symbols-rounded" aria-hidden="true">${node.collapsed ? "chevron_right" : "expand_more"}</span>
       </button>`
    : "";

  return `
    <li class="tree-node">
      <article class="tree-card${node.current ? " is-current" : ""}">
        <div class="tree-card-head">
          <div class="tree-card-copy">
            <div class="tree-badges">
              <span class="tree-tag ${tagClass}">${escapeHtml(node.label)}</span>
            </div>
            <p class="tree-code">${escapeHtml(node.code)}</p>
            <h4 class="tree-title">${escapeHtml(node.title)}</h4>
            <p class="tree-meta">${escapeHtml(node.parties)}</p>
            <p class="tree-status">${escapeHtml(node.status)}</p>
          </div>
          <div class="tree-card-actions">
            ${collapse}
            <button type="button" class="tree-menu-button" aria-label="操作メニューを開く">
              <span class="material-symbols-rounded" aria-hidden="true">more_horiz</span>
            </button>
          </div>
        </div>
      </article>
      ${node.children?.length && !node.collapsed ? renderTree(node.children) : ""}
    </li>
  `;
}

function renderTree(nodes, isRoot = false) {
  return `
    <ul class="tree-branch${isRoot ? " is-root" : ""}">
      ${nodes.map(renderTreeNode).join("")}
    </ul>
  `;
}

function renderRelatedDefault() {
  return `
    <section class="panel-section">
      <article class="related-card compact">
        <div class="related-card-head">
          <span class="file-type-icon word">W</span>
          <div class="related-card-copy">
            <p class="tree-code">ab1000349</p>
            <h4>基本契約書_株式会社ContractS</h4>
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

function renderCommentsDefault() {
  return `
    <section class="panel-section">
      <div class="comment-composer">
        <textarea class="comment-input" rows="3" placeholder="プレースホルダー"></textarea>
      </div>
      <div class="comment-stack">
        <article class="comment-card">
          <div class="comment-header">
            ${renderAvatar("法務太郎")}
            <span class="comment-time">2024/03/14 11:17</span>
          </div>
          <p>@営業太郎 こちらの件、AAAAAとなります。以前の契約で同様の指摘をさせていただきました。よろしくお願いします。</p>
        </article>
        <article class="comment-card">
          <div class="comment-header">
            ${renderAvatar("営業太郎")}
            <span class="comment-time">2024/03/14 11:17</span>
          </div>
          <p>@法務太郎 そうでしたね。ご指摘ありがとうございます。先方とのすり合わせを完了しましたらまた共有させていただきます。</p>
        </article>
      </div>
    </section>
  `;
}

function renderApprovalDefault() {
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
              <span class="comment-time">2022/04/05 17:01</span>
            </div>
          </article>
          <div class="field-row">
            <span class="field-label">コメント</span>
            <div class="field-value">事前申請番号：12847683210 株式会社○○との○○プロジェクトの契約です。よろしくお願いします。</div>
          </div>
        </div>
        <div class="approval-step">
          <span class="approval-marker">承認待ち</span>
          <article class="approval-card plain">
            ${renderAvatar("赤羽佳祐")}
          </article>
        </div>
        <div class="field-row">
          <span class="field-label">同時に承認依頼がある契約書</span>
          <p class="field-value">関連契約書も承認する場合は以下のチェックボックスを選択して承認します。</p>
          <article class="related-card compact">
            <div class="related-card-head">
              <span class="checkbox-icon">✓</span>
              <span class="file-type-icon word">W</span>
              <div class="related-card-copy">
                <p class="tree-code">ab1000349</p>
                <h4>基本契約書_株式会社ContractS</h4>
                <div class="badge-row">
                  <span class="tag-badge outline">元契約</span>
                  <span class="tag-badge outline">ABCプロジェクト</span>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="footer-action-row">
          <button type="button" class="button button-secondary">差戻し</button>
          <button type="button" class="button button-primary">承認</button>
        </div>
      </div>
    </section>
  `;
}

function renderSigningDefault() {
  return `
    <section class="panel-section">
      <div class="notice-box">
        まだ送信は完了していません。内容を確認して、送信してください。
      </div>
      <div class="activity-inline">
        ${renderAvatar("法務太郎")}
        <span class="field-value">法務太郎さんが2024/04/05 16:48に保存しました</span>
      </div>
      <div class="field-row no-divider compact-row">
        <span class="field-label">締結タイプ</span>
        <div class="field-value">自社からの締結依頼 / ContractS SIGN</div>
      </div>
      <div class="approval-timeline signing-flow">
        <div class="approval-step is-current">
          <span class="approval-marker">1</span>
          <div class="step-heading">押印</div>
          <div class="detail-copy">
            <p><strong>押印依頼方法</strong> URL</p>
            <p><strong>署名者</strong> 甲</p>
            <p><strong>言語</strong> 日本語</p>
            <p><strong>押印位置</strong> 設定しない</p>
          </div>
          <div class="signer-card">法務太郎 様</div>
          <div class="field-row compact-row">
            <span class="field-label">申し送り事項</span>
            <div class="field-value">未設定</div>
          </div>
        </div>
        <div class="approval-step">
          <span class="approval-marker">2</span>
          <div class="step-heading">押印</div>
          <div class="detail-copy">
            <p><strong>押印依頼方法</strong> URL</p>
            <p><strong>署名者</strong> 乙</p>
            <p><strong>言語</strong> 日本語</p>
            <p><strong>押印位置</strong> 設定しない</p>
          </div>
          <div class="signer-card">法務太郎 様</div>
          <div class="field-row compact-row">
            <span class="field-label">申し送り事項</span>
            <div class="field-value">未設定</div>
          </div>
        </div>
      </div>
      <div class="footer-action-row footer-strip">
        <button type="button" class="button button-primary wide">この内容で送信</button>
      </div>
    </section>
  `;
}

function renderRoomDefault() {
  return `
    <section class="panel-section">
      <article class="room-card">
        <p class="meta-line">作成 2024/12/10 12:04</p>
        <div class="field-row no-divider">
          <span class="field-label">ルームメンバー</span>
          <div class="inline-edit-row">
            <div class="avatar-stack">
              <span class="avatar-circle small"><span class="material-symbols-rounded">person</span></span>
              <span class="avatar-circle small is-red"><span class="material-symbols-rounded">person</span></span>
              <span class="avatar-circle small is-blue"><span class="material-symbols-rounded">person</span></span>
            </div>
            <a href="#" class="inline-text-action">編集</a>
          </div>
        </div>
        <div class="field-row">
          <span class="field-label">利用期限</span>
          <div class="inline-edit-row">
            <span class="field-value">2024/12/12</span>
            <a href="#" class="inline-text-action">編集</a>
          </div>
        </div>
        <div class="field-row">
          <span class="field-label">URL</span>
          <div class="inline-edit-row spread">
            <span class="field-value">https://sandbox.clm.contracts-cloud.com/c</span>
            <a href="#" class="inline-text-action">コピー</a>
          </div>
        </div>
        <a href="#" class="room-link">ルームを開く</a>
      </article>
      <div class="subsection-title">完了したルーム</div>
      <article class="room-card compact">
        <div class="inline-edit-row spread">
          <p class="meta-line">作成 2024/12/10 12:04</p>
          <span class="field-value">完了</span>
        </div>
        <a href="#" class="room-link">ルームを開く</a>
      </article>
      <article class="room-card compact">
        <div class="inline-edit-row spread">
          <p class="meta-line">作成 2024/12/10 12:04</p>
          <span class="field-value">完了</span>
        </div>
        <a href="#" class="room-link">ルームを開く</a>
      </article>
    </section>
  `;
}

function renderFilesDefault() {
  return `
    <section class="panel-section">
      <div class="subsection-title">主契約書</div>
      <article class="file-row">
        <span class="file-type-icon word">W</span>
        <div class="file-copy">
          <h4>基本契約書_株式会社ContractS</h4>
          <p class="meta-line">更新日 2026/03/19 / 第1版</p>
        </div>
      </article>
      <div class="subsection-title">添付資料</div>
      <article class="file-row">
        <span class="file-type-icon pdf">P</span>
        <div class="file-copy">
          <h4>業務範囲整理メモ.pdf</h4>
          <p class="meta-line">更新日 2026/03/18 / 参考資料</p>
        </div>
      </article>
    </section>
  `;
}

function renderLogsDefault() {
  const rows = [
    '更新契約を作成しました。<a href="#" class="inline-link">業務委託契約_2024年3月以降</a>',
    "業務委託契約 を自動更新しました",
    "業務委託契約 の締結依頼を承認しました。",
    "業務委託契約 の締結依頼を発行しました。",
    "業務委託契約 を承認しました。",
    '業務委託契約 の<a href="#" class="inline-link">承認フロー</a>を発行しました。',
    "業務委託契約 の契約項目を変更しました。",
    ' <a href="#" class="inline-link">内容確認</a> のタスクを完了しました。',
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
                  <span class="comment-time">2023/12/15 17:26</span>
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
    <div class="panel-loading" aria-live="polite">
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
      <p>この state では panel shell は維持し、main area 側の本文を再利用しません。</p>
    </div>
  `;
}

function renderError() {
  return `
    <div class="panel-error" role="alert">
      <strong>関連情報の読み込みに失敗しました</strong>
      <p>読み込みに失敗した場合も rail と panel shell の構造は維持し、再試行導線を panel 内に閉じます。</p>
    </div>
  `;
}

function renderDefaultPanel() {
  if (state.panel === "summary") return renderSummaryDefault();
  if (state.panel === "fields") return renderFieldsDefault();
  if (state.panel === "review") return renderReviewDefault();
  if (state.panel === "tasks") return renderTasksDefault();
  if (state.panel === "comments") return renderCommentsDefault();
  if (state.panel === "approval") return renderApprovalDefault();
  if (state.panel === "signing") return renderSigningDefault();
  if (state.panel === "room") return renderRoomDefault();
  if (state.panel === "files") return renderFilesDefault();
  if (state.panel === "logs") return renderLogsDefault();
  return renderRelatedDefault();
}

function renderPanel() {
  const meta = panelMeta[state.panel];
  const panelAction = document.getElementById("panelAction");
  panelTitle.textContent = meta.title;
  panelCaption.textContent = meta.caption;
  panelCaption.hidden = !meta.caption;
  panelAction.outerHTML = `<div class="panel-actions" id="panelAction">${meta.actions || ""}</div>`;

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

panelBody.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-toggle]");
  if (!toggle) return;
  const icon = toggle.querySelector(".material-symbols-rounded");
  const expanded = icon.textContent === "expand_more";
  icon.textContent = expanded ? "chevron_right" : "expand_more";
  const node = toggle.closest(".tree-node");
  const branch = node && node.querySelector(":scope > .tree-branch");
  if (branch) {
    branch.hidden = expanded;
  }
});

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
