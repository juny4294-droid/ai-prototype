const contractCatalog = [
  { id: "master-1", status: "締結済み", name: "業務委託基本契約書", code: "contracts-47241", parties: "株式会社A / 株式会社B" },
  { id: "child-1", status: "締結依頼中", name: "PoC実施個別契約 2026", code: "contracts-47622", parties: "株式会社A / 株式会社B" },
  { id: "memo-1", status: "承認済み", name: "検証環境利用に関する覚書", code: "contracts-47808", parties: "株式会社A / 株式会社B" },
  { id: "child-2", status: "承認済み", name: "追加発注個別契約 2026年4月", code: "contracts-47701", parties: "株式会社A / 株式会社B" },
  { id: "top-1", status: "作成中", name: "端末貸与に関する覚書", code: "contracts-48005", parties: "株式会社A / 株式会社C" },
  { id: "pool-1", status: "締結済み", name: "検証委託個別契約 2026", code: "contracts-48120", parties: "株式会社A / 株式会社D" },
  { id: "pool-2", status: "承認済み", name: "秘密情報持出しに関する覚書", code: "contracts-48144", parties: "株式会社A / 株式会社D" },
  { id: "pool-3", status: "締結済み", name: "保守サポート個別契約", code: "contracts-48177", parties: "株式会社A / 株式会社E" },
];

const initialTree = [
  {
    id: "master-1",
    relationTag: "basic",
    status: "締結済み",
    name: "業務委託基本契約書",
    code: "contracts-47241",
    parties: "株式会社A / 株式会社B",
    isCurrent: true,
    collapsed: false,
    children: [
      {
        id: "child-1",
        relationTag: "individual",
        status: "締結依頼中",
        name: "PoC実施個別契約 2026",
        code: "contracts-47622",
        parties: "株式会社A / 株式会社B",
        collapsed: false,
        children: [
          {
            id: "memo-1",
            relationTag: "memorandum",
            status: "承認済み",
            name: "検証環境利用に関する覚書",
            code: "contracts-47808",
            parties: "株式会社A / 株式会社B",
            collapsed: false,
            children: [],
          },
        ],
      },
      {
        id: "child-2",
        relationTag: "individual",
        status: "承認済み",
        name: "追加発注個別契約 2026年4月",
        code: "contracts-47701",
        parties: "株式会社A / 株式会社B",
        collapsed: false,
        children: [],
      },
    ],
  },
  {
    id: "top-1",
    relationTag: "",
    status: "作成中",
    name: "端末貸与に関する覚書",
    code: "contracts-48005",
    parties: "株式会社A / 株式会社C",
    collapsed: false,
    children: [],
  },
];

const state = {
  mode: "default",
  tree: structuredClone(initialTree),
  modalMode: "select",
  selectedContractId: "",
  editingNodeId: "",
  searchQuery: "",
  dragNodeId: "",
  dropTargetId: "",
  dropPosition: "",
};

const elements = {
  relatedPanel: document.getElementById("relatedPanel"),
  relationModal: document.getElementById("relationModal"),
  relationForm: document.getElementById("relationForm"),
  editingNodeId: document.getElementById("editingNodeId"),
  selectedContractId: document.getElementById("selectedContractId"),
  relationSearch: document.getElementById("relationSearch"),
  searchField: document.getElementById("searchField"),
  contractOptionList: document.getElementById("contractOptionList"),
  selectedContractCard: document.getElementById("selectedContractCard"),
  relationTag: document.getElementById("relationTag"),
  relationParent: document.getElementById("relationParent"),
  relationModalTitle: document.getElementById("relationModalTitle"),
  relationModalDescription: document.getElementById("relationModalDescription"),
  relationFormHint: document.getElementById("relationFormHint"),
  closeModalButton: document.getElementById("closeModalButton"),
  cancelModalButton: document.getElementById("cancelModalButton"),
  toastStack: document.getElementById("toastStack"),
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function badge(label, className, extraClass = "") {
  return `<span class="badge ${className}${extraClass ? ` ${extraClass}` : ""}">${escapeHtml(label)}</span>`;
}

function getRelationLabel(relationTag) {
  return {
    basic: "基本契約",
    individual: "個別契約",
    memorandum: "覚書",
  }[relationTag] || "";
}

function getRelationClass(relationTag) {
  return {
    basic: "badge-basic",
    individual: "badge-individual",
    memorandum: "badge-memorandum",
  }[relationTag] || "";
}

function cloneFromCatalog(contractId) {
  const contract = contractCatalog.find((item) => item.id === contractId);
  return {
    id: contract.id,
    relationTag: "",
    status: contract.status,
    name: contract.name,
    code: contract.code,
    parties: contract.parties,
    collapsed: false,
    children: [],
  };
}

function flatten(nodes, parentId = "", depth = 0, list = []) {
  nodes.forEach((node, index) => {
    list.push({ node, parentId, depth, index, siblings: nodes });
    flatten(node.children || [], node.id, depth + 1, list);
  });
  return list;
}

function findContext(nodeId) {
  return flatten(state.tree).find((item) => item.node.id === nodeId);
}

function isDescendantNode(ancestorId, targetId) {
  const ancestor = findContext(ancestorId)?.node;
  if (!ancestor) return false;

  function walk(nodes) {
    for (const child of nodes || []) {
      if (child.id === targetId) return true;
      if (walk(child.children || [])) return true;
    }
    return false;
  }

  return walk(ancestor.children || []);
}

function getLinkedIds() {
  return new Set(flatten(state.tree).map((item) => item.node.id));
}

function getAvailableContracts() {
  const linkedIds = getLinkedIds();
  const query = state.searchQuery.trim().toLowerCase();
  return contractCatalog.filter((contract) => {
    if (contract.id === "master-1") return false;
    if (linkedIds.has(contract.id)) return false;
    if (!query) return true;
    return (
      contract.name.toLowerCase().includes(query) ||
      contract.code.toLowerCase().includes(query) ||
      contract.parties.toLowerCase().includes(query)
    );
  });
}

function removeNode(nodes, nodeId) {
  for (let index = 0; index < nodes.length; index += 1) {
    if (nodes[index].id === nodeId) {
      return nodes.splice(index, 1)[0];
    }
    const found = removeNode(nodes[index].children || [], nodeId);
    if (found) return found;
  }
  return null;
}

function insertNode(nodes, parentId, node) {
  if (!parentId) {
    nodes.push(node);
    return true;
  }
  for (const current of nodes) {
    if (current.id === parentId) {
      current.children.push(node);
      return true;
    }
    if (insertNode(current.children || [], parentId, node)) return true;
  }
  return false;
}

function moveNodeByDrop(nodeId, targetId, position) {
  if (!nodeId || !targetId || nodeId === targetId) return;
  const moving = removeNode(state.tree, nodeId);
  if (!moving) return;
  const target = findContext(targetId);
  if (!target) {
    state.tree.push(moving);
    return;
  }
  if (position === "inside") {
    if (target.node.relationTag === "memorandum") {
      state.tree.push(moving);
      return;
    }
    target.node.children.push(moving);
    target.node.collapsed = false;
    return;
  }
  const insertIndex = position === "after" ? target.index + 1 : target.index;
  target.siblings.splice(insertIndex, 0, moving);
}

function toast(message, isDanger = false) {
  const element = document.createElement("div");
  element.className = `toast${isDanger ? " is-danger" : ""}`;
  element.textContent = message;
  elements.toastStack.appendChild(element);
  setTimeout(() => element.remove(), 2600);
}

function renderContractSummary(node) {
  return `
    <div class="tree-badges">
      ${node.relationTag ? badge(getRelationLabel(node.relationTag), getRelationClass(node.relationTag), "badge-compact") : ""}
    </div>
    <p class="tree-code">${escapeHtml(node.code)}</p>
    <h4 class="tree-title">${escapeHtml(node.name)}</h4>
    <p class="tree-parties">${escapeHtml(node.parties)}</p>
    <p class="tree-status">${escapeHtml(node.status)}</p>
  `;
}

function populateParentOptions(excludeId = "", selectedParentId = "") {
  const options = ['<option value="">最上位階層</option>']
    .concat(
      flatten(state.tree)
        .filter((item) => item.node.id !== excludeId && item.node.relationTag !== "memorandum")
        .map(
          (item) =>
            `<option value="${escapeHtml(item.node.id)}"${item.node.id === selectedParentId ? " selected" : ""}>${escapeHtml(
              "　".repeat(item.depth) + item.node.name,
            )}</option>`,
        ),
    )
    .join("");
  elements.relationParent.innerHTML = options;
}

function renderContractOptionList() {
  const contracts = getAvailableContracts();
  if (state.selectedContractId && !contracts.some((item) => item.id === state.selectedContractId)) {
    state.selectedContractId = "";
    elements.selectedContractId.value = "";
  }

  if (!contracts.length) {
    elements.contractOptionList.innerHTML = '<div class="contract-option-empty">条件に一致する契約書はありません。</div>';
    return;
  }

  elements.contractOptionList.innerHTML = contracts
    .map(
      (contract) => `
        <label class="contract-option${state.selectedContractId === contract.id ? " is-selected" : ""}">
          <div class="contract-option-head">
            <input class="contract-option-radio" type="radio" name="contractOption" value="${escapeHtml(contract.id)}" ${
              state.selectedContractId === contract.id ? "checked" : ""
            }>
            <div class="contract-option-copy">
              <div class="tree-badges">
                <p class="tree-status">${escapeHtml(contract.status)}</p>
              </div>
              <p class="contract-option-title">${escapeHtml(contract.name)}</p>
              <p class="contract-option-parties">${escapeHtml(contract.parties)}</p>
              <p class="contract-option-code">${escapeHtml(contract.code)}</p>
            </div>
          </div>
        </label>
      `,
    )
    .join("");
}

function openModal(mode, nodeId = "", parentId = "") {
  state.modalMode = mode;
  state.editingNodeId = nodeId;
  state.searchQuery = "";
  elements.relationSearch.value = "";

  if (mode === "select") {
    state.selectedContractId = "";
    elements.relationModalTitle.textContent = "関連契約を追加";
    elements.relationModalDescription.textContent = "既存の契約書を検索して、階層とタグだけを設定します。";
    elements.relationFormHint.textContent = "契約名やステータスはこの画面では変更しません。";
    elements.searchField.hidden = false;
    elements.selectedContractCard.hidden = true;
    elements.relationTag.value = "";
    populateParentOptions("", parentId);
    renderContractOptionList();
    setTimeout(() => elements.relationSearch.focus(), 0);
  }

  if (mode === "edit") {
    const context = findContext(nodeId);
    if (!context) return;
    state.selectedContractId = nodeId;
    elements.relationModalTitle.textContent = "関連契約を編集";
    elements.relationModalDescription.textContent = "選択中の契約書の階層とタグだけを更新します。";
    elements.relationFormHint.textContent = "タグは階層表示のための role として扱います。";
    elements.searchField.hidden = true;
    elements.selectedContractCard.hidden = false;
    elements.selectedContractCard.innerHTML = renderContractSummary(context.node);
    elements.relationTag.value = context.node.relationTag || "";
    populateParentOptions(nodeId, context.parentId);
  }

  elements.editingNodeId.value = nodeId;
  elements.selectedContractId.value = state.selectedContractId;
  elements.relationModal.hidden = false;
}

function closeModal() {
  elements.relationModal.hidden = true;
  state.selectedContractId = "";
  state.editingNodeId = "";
  state.searchQuery = "";
  elements.selectedContractId.value = "";
}

function collectDescendantTags(node, result = new Set()) {
  (node.children || []).forEach((child) => {
    if (child.relationTag) result.add(child.relationTag);
    collectDescendantTags(child, result);
  });
  return result;
}

function renderCollapsedSummary(node) {
  if (!node.collapsed || !node.children?.length) return "";
  const tags = collectDescendantTags(node);
  const labels = [];
  if (tags.has("individual")) labels.push("個別契約あり");
  if (tags.has("memorandum")) labels.push("覚書あり");
  if (tags.has("basic")) labels.push("基本契約あり");
  if (!labels.length) return "";
  return `<p class="tree-summary">${labels.map(escapeHtml).join(" / ")}</p>`;
}

function renderNode(node, isDisabled = false) {
  const context = findContext(node.id);
  const canCreate = !isDisabled && node.relationTag !== "memorandum";
  const canEdit = !isDisabled && !node.isCurrent;
  const canDetach = !isDisabled && !node.isCurrent && (Boolean(context.parentId) || Boolean(node.relationTag));
  const dropClass =
    state.dropTargetId === node.id ? ` is-drop-${state.dropPosition || "before"}` : "";

  return `
    <li class="tree-node${dropClass}" data-node-id="${escapeHtml(node.id)}">
      <article class="tree-card${node.isCurrent ? " is-current" : ""}" draggable="${!node.isCurrent && !isDisabled}">
        <div class="tree-card-head">
          <div>
            <div class="tree-badges">
              ${node.relationTag ? badge(getRelationLabel(node.relationTag), getRelationClass(node.relationTag), "badge-compact") : ""}
            </div>
            <p class="tree-code">${escapeHtml(node.code)}</p>
            <h4 class="tree-title">${escapeHtml(node.name)}</h4>
            <p class="tree-parties">${escapeHtml(node.parties)}</p>
            <p class="tree-status">${escapeHtml(node.status)}</p>
            ${renderCollapsedSummary(node)}
          </div>
          <div class="tree-card-head-actions">
            ${node.children?.length ? `
              <button type="button" class="collapse-button" data-action="toggle" data-node-id="${escapeHtml(node.id)}" aria-label="${
                node.collapsed ? "展開" : "折りたたむ"
              }">
                ${node.collapsed ? "▸" : "▾"}
              </button>
            ` : ""}
            <details class="tree-menu">
              <summary aria-label="操作メニュー">
                <span class="material-symbols-rounded" aria-hidden="true">more_horiz</span>
              </summary>
              <div class="tree-menu-panel">
                <a href="#" class="menu-action" data-toast="詳細ページへの遷移はモックです。">詳細ページへ</a>
                <button type="button" class="menu-action" data-action="create" data-parent-id="${escapeHtml(node.id)}" ${
                  canCreate ? "" : "disabled"
                }>追加</button>
                <button type="button" class="menu-action" data-action="edit" data-node-id="${escapeHtml(node.id)}" ${
                  canEdit ? "" : "disabled"
                }>編集</button>
                <button type="button" class="menu-action" data-action="detach" data-node-id="${escapeHtml(node.id)}" ${
                  canDetach ? "" : "disabled"
                }>解除</button>
              </div>
            </details>
          </div>
        </div>
      </article>
      ${node.children?.length && !node.collapsed ? renderTree(node.children, false, isDisabled) : ""}
    </li>
  `;
}

function renderTree(nodes, isRoot = false, isDisabled = false) {
  if (!nodes.length) {
    return `
      <div class="empty-card">
        <h3>関連契約は登録されていません</h3>
        <p>既存の契約書を選択して階層へ追加するとここに表示されます。</p>
      </div>
    `;
  }

  return `
    <ul class="tree-branch${isRoot ? " is-root" : ""}">
      ${nodes.map((node) => renderNode(node, isDisabled)).join("")}
    </ul>
  `;
}

function renderLoading() {
  return `
    <div class="panel-section">
      <div class="skeleton-card tree-card">
        <div class="skeleton-line is-short"></div>
        <div class="skeleton-line is-long"></div>
        <div class="skeleton-line is-medium"></div>
      </div>
      <div class="skeleton-card tree-card">
        <div class="skeleton-line is-short"></div>
        <div class="skeleton-line is-long"></div>
        <div class="skeleton-line is-medium"></div>
      </div>
    </div>
  `;
}

function renderError() {
  return `
    <div class="state-card is-error">
      <h3>関連契約の取得に失敗しました</h3>
      <p>依存関係の読み込みに失敗しています。再読み込み後も継続する場合は関連契約の設定画面で確認してください。</p>
      <button type="button" class="button button-secondary" data-action="retry">再試行</button>
    </div>
  `;
}

function renderDisabledHint() {
  return `
    <div class="state-card is-disabled">
      <h3>この状態サンプルでは編集できません</h3>
      <p>階層の確認だけ可能です。タグ変更、移動、解除は disabled にしています。</p>
    </div>
  `;
}

function renderRelatedPanel() {
  if (state.mode === "loading") return renderLoading();
  if (state.mode === "error") return renderError();

  const isDisabled = state.mode === "disabled";
  const isEmpty = state.mode === "empty";

  return `
    <section class="panel-section">
      <div class="panel-section-head">
        <h3>契約依存ツリー</h3>
        <p>契約の親子関係は階層構造だけで判断します。タグは role として選択し、紐づけ解除時には外れます。</p>
      </div>
      ${renderTree(isEmpty ? [] : state.tree, true, isDisabled)}
    </section>
    ${isDisabled ? renderDisabledHint() : ""}
  `;
}

function render() {
  elements.relatedPanel.innerHTML = renderRelatedPanel();
}

elements.relatedPanel.addEventListener("click", (event) => {
  const toastTarget = event.target.closest("[data-toast]");
  if (toastTarget) {
    event.preventDefault();
    toast(toastTarget.dataset.toast);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const { action, nodeId, parentId } = actionButton.dataset;

  if (action === "retry") {
    state.mode = "default";
    render();
    toast("関連契約を再読み込みしました。");
    return;
  }

  if (state.mode === "disabled") {
    toast("この状態サンプルでは編集できません。", true);
    return;
  }

  if (action === "toggle") {
    const context = findContext(nodeId);
    if (context) {
      context.node.collapsed = !context.node.collapsed;
      render();
    }
    return;
  }

  if (action === "create") {
    openModal("select", "", parentId);
    return;
  }

  if (action === "edit") {
    openModal("edit", nodeId);
    return;
  }

  if (action === "detach") {
    const context = findContext(nodeId);
    if (!context) return;
    const confirmed = window.confirm(`「${context.node.name}」の紐づけを解除します。関連契約一覧からも外れます。`);
    if (!confirmed) return;
    const node = removeNode(state.tree, nodeId);
    if (node) {
      node.relationTag = "";
      render();
      toast("紐づけを解除しました。再度追加する場合は関連契約を追加してください。");
    }
  }
});

elements.relatedPanel.addEventListener("dragstart", (event) => {
  const card = event.target.closest(".tree-card");
  if (!card) return;
  const nodeElement = event.target.closest(".tree-node");
  if (!nodeElement) return;
  state.dragNodeId = nodeElement.dataset.nodeId;
  event.dataTransfer.effectAllowed = "move";
});

elements.relatedPanel.addEventListener("dragover", (event) => {
  const nodeElement = event.target.closest(".tree-node");
  if (!nodeElement || !state.dragNodeId || nodeElement.dataset.nodeId === state.dragNodeId) return;
  const dragContext = findContext(state.dragNodeId);
  const targetContext = findContext(nodeElement.dataset.nodeId);
  if (!dragContext || !targetContext) return;
  if (isDescendantNode(state.dragNodeId, nodeElement.dataset.nodeId)) return;
  if (targetContext.node.relationTag === "memorandum") {
    const rect = nodeElement.getBoundingClientRect();
    const ratio = (event.clientY - rect.top) / rect.height;
    if (ratio > 0.34 && ratio < 0.66) return;
  }
  event.preventDefault();
  const rect = nodeElement.getBoundingClientRect();
  const ratio = (event.clientY - rect.top) / rect.height;
  state.dropTargetId = nodeElement.dataset.nodeId;
  if (ratio < 0.34) {
    state.dropPosition = "before";
  } else if (ratio > 0.66) {
    state.dropPosition = "after";
  } else {
    state.dropPosition = "inside";
  }
  render();
});

elements.relatedPanel.addEventListener("drop", (event) => {
  const nodeElement = event.target.closest(".tree-node");
  if (!nodeElement || !state.dragNodeId || nodeElement.dataset.nodeId === state.dragNodeId) return;
  const dragContext = findContext(state.dragNodeId);
  const targetContext = findContext(nodeElement.dataset.nodeId);
  if (!dragContext || !targetContext) return;
  if (isDescendantNode(state.dragNodeId, nodeElement.dataset.nodeId)) return;
  if (state.dropPosition === "inside" && targetContext.node.relationTag === "memorandum") return;
  event.preventDefault();
  moveNodeByDrop(state.dragNodeId, nodeElement.dataset.nodeId, state.dropPosition || "before");
  state.dragNodeId = "";
  state.dropTargetId = "";
  state.dropPosition = "";
  render();
  toast("紐づけ先または並び順を更新しました。");
});

elements.relatedPanel.addEventListener("dragend", () => {
  state.dragNodeId = "";
  state.dropTargetId = "";
  state.dropPosition = "";
  render();
});

elements.relationSearch.addEventListener("input", (event) => {
  state.searchQuery = event.target.value;
  renderContractOptionList();
});

elements.contractOptionList.addEventListener("change", (event) => {
  const radio = event.target.closest('input[name="contractOption"]');
  if (!radio) return;
  state.selectedContractId = radio.value;
  elements.selectedContractId.value = radio.value;
  renderContractOptionList();
});

elements.relationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedId = state.selectedContractId || elements.selectedContractId.value;
  const relationTag = elements.relationTag.value;
  const parentId = elements.relationParent.value;

  if (!selectedId) {
    toast("対象の契約書を選択してください。", true);
    return;
  }

  if (state.modalMode === "select") {
    const node = cloneFromCatalog(selectedId);
    node.relationTag = relationTag;
    insertNode(state.tree, parentId, node);
    toast("関連契約を追加しました。");
  }

  if (state.modalMode === "edit") {
    const node = removeNode(state.tree, selectedId);
    if (!node) {
      toast("対象契約が見つかりませんでした。", true);
      return;
    }
    node.relationTag = relationTag;
    insertNode(state.tree, parentId, node);
    toast("関連契約を更新しました。");
  }

  closeModal();
  render();
});

elements.closeModalButton.addEventListener("click", closeModal);
elements.cancelModalButton.addEventListener("click", closeModal);

elements.relationModal.addEventListener("click", (event) => {
  if (event.target === elements.relationModal) closeModal();
});

document.body.addEventListener("click", (event) => {
  if (!event.target.closest(".tree-menu")) {
    document.querySelectorAll(".tree-menu[open]").forEach((menu) => {
      menu.removeAttribute("open");
    });
  }
  const target = event.target.closest("[data-toast]");
  if (target && !target.closest("#relatedPanel")) {
    event.preventDefault();
    toast(target.dataset.toast);
  }
});

render();
