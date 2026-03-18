const teams = [
  {
    id: "team-legal-ops",
    name: "法務オペレーション",
    department: "法務",
    memberCount: 12,
    approvalFlow: "標準稟議 3段階",
    status: "active",
    members: [
      { name: "田中 亮", role: "チーム管理者", email: "ryo.tanaka@example.com", location: "東京" },
      { name: "小川 真由", role: "承認者", email: "mayu.ogawa@example.com", location: "大阪" },
      { name: "林 裕介", role: "メンバー", email: "yusuke.hayashi@example.com", location: "東京" },
      { name: "吉田 菜月", role: "メンバー", email: "natsuki.yoshida@example.com", location: "福岡" },
    ],
  },
  {
    id: "team-sales-east",
    name: "営業第一部",
    department: "営業",
    memberCount: 28,
    approvalFlow: "営業特例 2段階",
    status: "active",
    members: [
      { name: "小林 翔", role: "チーム管理者", email: "sho.kobayashi@example.com", location: "東京" },
      { name: "村上 美優", role: "承認者", email: "miyu.murakami@example.com", location: "名古屋" },
      { name: "井口 駿", role: "メンバー", email: "shun.iguchi@example.com", location: "東京" },
      { name: "中原 朱里", role: "メンバー", email: "akari.nakahara@example.com", location: "仙台" },
    ],
  },
  {
    id: "team-procurement",
    name: "購買統括",
    department: "購買",
    memberCount: 9,
    approvalFlow: "購買レビュー 2段階",
    status: "inactive",
    members: [
      { name: "高橋 望", role: "チーム管理者", email: "nozomi.takahashi@example.com", location: "東京" },
      { name: "西村 翔子", role: "承認者", email: "shoko.nishimura@example.com", location: "札幌" },
      { name: "佐々木 匠", role: "メンバー", email: "takumi.sasaki@example.com", location: "東京" },
    ],
  },
  {
    id: "team-corporate-it",
    name: "コーポレートIT",
    department: "情報システム",
    memberCount: 16,
    approvalFlow: "システム変更審査",
    status: "active",
    members: [
      { name: "井上 健太", role: "チーム管理者", email: "kenta.inoue@example.com", location: "東京" },
      { name: "青木 一真", role: "承認者", email: "kazuma.aoki@example.com", location: "東京" },
      { name: "坂井 風花", role: "メンバー", email: "fuka.sakai@example.com", location: "福岡" },
      { name: "島田 仁", role: "メンバー", email: "jin.shimada@example.com", location: "大阪" },
    ],
  },
  {
    id: "team-finance",
    name: "経理財務",
    department: "経理",
    memberCount: 11,
    approvalFlow: "支払承認フロー",
    status: "active",
    members: [
      { name: "中村 花", role: "チーム管理者", email: "hana.nakamura@example.com", location: "東京" },
      { name: "大谷 悠介", role: "承認者", email: "yusuke.otani@example.com", location: "大阪" },
      { name: "柴田 美玲", role: "メンバー", email: "mirei.shibata@example.com", location: "東京" },
    ],
  },
  {
    id: "team-business-dev",
    name: "事業開発",
    department: "事業開発",
    memberCount: 22,
    approvalFlow: "新規案件レビュー",
    status: "inactive",
    members: [
      { name: "伊藤 未来", role: "チーム管理者", email: "miku.ito@example.com", location: "東京" },
      { name: "荒木 大和", role: "承認者", email: "yamato.araki@example.com", location: "名古屋" },
      { name: "神谷 結衣", role: "メンバー", email: "yui.kamiya@example.com", location: "東京" },
      { name: "森岡 慎", role: "メンバー", email: "shin.morioka@example.com", location: "京都" },
    ],
  },
  {
    id: "team-rd",
    name: "研究開発",
    department: "研究開発",
    memberCount: 35,
    approvalFlow: "研究案件 4段階",
    status: "active",
    members: [
      { name: "山田 彩", role: "チーム管理者", email: "aya.yamada@example.com", location: "東京" },
      { name: "石川 拓海", role: "承認者", email: "takumi.ishikawa@example.com", location: "つくば" },
      { name: "秋元 澪", role: "メンバー", email: "mio.akimoto@example.com", location: "東京" },
      { name: "河野 岳", role: "メンバー", email: "gaku.kono@example.com", location: "横浜" },
    ],
  },
  {
    id: "team-hr",
    name: "人事企画",
    department: "人事",
    memberCount: 7,
    approvalFlow: "人事例外申請",
    status: "active",
    members: [
      { name: "佐藤 美咲", role: "チーム管理者", email: "misaki.sato@example.com", location: "東京" },
      { name: "安田 奈央", role: "承認者", email: "nao.yasuda@example.com", location: "大阪" },
      { name: "木村 優太", role: "メンバー", email: "yuta.kimura@example.com", location: "東京" },
    ],
  },
];

const state = {
  teamSearch: "",
  status: "all",
  flow: "all",
  size: "all",
  sort: "name:asc",
  page: 1,
  pageSize: 10,
  selectedTeamId: teams[0].id,
  drawerOpen: false,
  drawerMode: "preview",
  drawerDraft: null,
  memberSearch: "",
};

const elements = {
  teamSearchInput: document.querySelector("#teamSearchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  flowFilter: document.querySelector("#flowFilter"),
  sizeFilter: document.querySelector("#sizeFilter"),
  sortSelect: document.querySelector("#sortSelect"),
  resetButton: document.querySelector("#resetButton"),
  activeFilters: document.querySelector("#activeFilters"),
  teamTableBody: document.querySelector("#teamTableBody"),
  resultSummary: document.querySelector("#resultSummary"),
  pagination: document.querySelector("#pagination"),
  pageSizeSelect: document.querySelector("#pageSizeSelect"),
  detailDrawer: document.querySelector("#detailDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerCloseButton: document.querySelector("#drawerCloseButton"),
  drawerModeButton: document.querySelector("#drawerModeButton"),
  cancelEditButton: document.querySelector("#cancelEditButton"),
  saveEditButton: document.querySelector("#saveEditButton"),
  detailList: document.querySelector("#detailList"),
  drawerForm: document.querySelector("#drawerForm"),
  editTeamName: document.querySelector("#editTeamName"),
  editDepartment: document.querySelector("#editDepartment"),
  editApprovalFlow: document.querySelector("#editApprovalFlow"),
  editStatus: document.querySelector("#editStatus"),
  memberSearchInput: document.querySelector("#memberSearchInput"),
  selectedTeamDescription: document.querySelector("#selectedTeamDescription"),
  selectedTeamName: document.querySelector("#selectedTeamName"),
  memberList: document.querySelector("#memberList"),
};

function getStatusLabel(status) {
  return status === "active" ? "有効" : "無効";
}

function getSizeBucket(memberCount) {
  if (memberCount >= 30) {
    return "large";
  }
  if (memberCount >= 10) {
    return "medium";
  }
  return "small";
}

function renderFlowOptions() {
  const flows = [...new Set(teams.map((team) => team.approvalFlow))].sort((left, right) =>
    left.localeCompare(right, "ja")
  );

  elements.flowFilter.innerHTML = `
    <option value="all">すべて</option>
    ${flows.map((flow) => `<option value="${flow}">${flow}</option>`).join("")}
  `;

  elements.editApprovalFlow.innerHTML = flows
    .map((flow) => `<option value="${flow}">${flow}</option>`)
    .join("");
}

function filterTeams() {
  const search = state.teamSearch.trim().toLowerCase();

  return teams.filter((team) => {
    const matchesSearch =
      search.length === 0 ||
      [team.name, team.department, team.approvalFlow].some((value) =>
        value.toLowerCase().includes(search)
      );
    const matchesStatus = state.status === "all" || team.status === state.status;
    const matchesFlow = state.flow === "all" || team.approvalFlow === state.flow;
    const matchesSize = state.size === "all" || getSizeBucket(team.memberCount) === state.size;

    return matchesSearch && matchesStatus && matchesFlow && matchesSize;
  });
}

function sortTeams(filteredTeams) {
  const [sortKey, sortDirection] = state.sort.split(":");
  const direction = sortDirection === "desc" ? -1 : 1;

  return [...filteredTeams].sort((left, right) => {
    if (sortKey === "members") {
      return (left.memberCount - right.memberCount) * direction;
    }

    if (sortKey === "status") {
      return left.status.localeCompare(right.status, "ja") * direction;
    }

    return left.name.localeCompare(right.name, "ja") * direction;
  });
}

function paginateTeams(sortedTeams) {
  const pageCount = Math.max(1, Math.ceil(sortedTeams.length / state.pageSize));
  if (state.page > pageCount) {
    state.page = pageCount;
  }

  const startIndex = (state.page - 1) * state.pageSize;
  const visibleTeams = sortedTeams.slice(startIndex, startIndex + state.pageSize);
  return { visibleTeams, pageCount };
}

function ensureSelectedTeam(filteredTeams) {
  const teamExists = filteredTeams.some((team) => team.id === state.selectedTeamId);
  if (!teamExists) {
    state.selectedTeamId = filteredTeams[0]?.id ?? null;
  }
}

function renderFilterChips() {
  const chips = [];

  if (state.teamSearch.trim()) {
    chips.push(`検索: ${state.teamSearch.trim()}`);
  }
  if (state.status !== "all") {
    chips.push(`ステータス: ${getStatusLabel(state.status)}`);
  }
  if (state.flow !== "all") {
    chips.push(`承認フロー: ${state.flow}`);
  }
  if (state.size !== "all") {
    const sizeLabelMap = { small: "1-9名", medium: "10-29名", large: "30名以上" };
    chips.push(`チーム規模: ${sizeLabelMap[state.size]}`);
  }

  elements.activeFilters.innerHTML =
    chips.length === 0
      ? '<span class="panel-note">現在、絞り込み条件はありません。</span>'
      : chips.map((chip) => `<span class="filter-chip">${chip}</span>`).join("");
}

function renderTeamRows(visibleTeams) {
  if (visibleTeams.length === 0) {
    elements.teamTableBody.innerHTML = `
      <tr>
        <td colspan="4">
          <div class="empty-state">一致するチームがありません。<br>検索条件を調整してください。</div>
        </td>
      </tr>
    `;
    return;
  }

  elements.teamTableBody.innerHTML = visibleTeams
    .map((team) => {
      const isSelected = team.id === state.selectedTeamId;
      return `
        <tr class="team-row${isSelected ? " is-selected" : ""}" data-team-id="${team.id}" tabindex="0">
          <td>
            <div class="team-name">
              <strong>${team.name}</strong>
              <span>${team.department}</span>
            </div>
          </td>
          <td class="is-right">${team.memberCount}名</td>
          <td><span class="flow-badge">${team.approvalFlow}</span></td>
          <td><span class="status-badge is-${team.status}">${getStatusLabel(team.status)}</span></td>
        </tr>
      `;
    })
    .join("");

  elements.teamTableBody.querySelectorAll(".team-row").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedTeamId = row.dataset.teamId;
      state.drawerOpen = true;
      state.drawerMode = "preview";
      state.drawerDraft = null;
      render();
    });

    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        state.selectedTeamId = row.dataset.teamId;
        state.drawerOpen = true;
        state.drawerMode = "preview";
        state.drawerDraft = null;
        render();
      }
    });
  });
}

function renderPagination(pageCount) {
  const buttons = [];

  buttons.push(
    `<button type="button" class="pagination-button" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>前へ</button>`
  );

  for (let page = 1; page <= pageCount; page += 1) {
    buttons.push(
      `<button type="button" class="pagination-button${page === state.page ? " is-active" : ""}" data-page="${page}">${page}</button>`
    );
  }

  buttons.push(
    `<button type="button" class="pagination-button" data-page="${state.page + 1}" ${state.page === pageCount ? "disabled" : ""}>次へ</button>`
  );

  elements.pagination.innerHTML = buttons.join("");

  elements.pagination.querySelectorAll(".pagination-button[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) {
        return;
      }
      state.page = Number(button.dataset.page);
      render();
    });
  });
}

function getSelectedTeam(filteredTeams) {
  return filteredTeams.find((team) => team.id === state.selectedTeamId) ?? null;
}

function filterMembers(team) {
  if (!team) {
    return [];
  }

  const search = state.memberSearch.trim().toLowerCase();
  if (!search) {
    return team.members;
  }

  return team.members.filter((member) =>
    [member.name, member.role, member.email].some((value) => value.toLowerCase().includes(search))
  );
}

function createDraft(team) {
  return {
    name: team.name,
    department: team.department,
    approvalFlow: team.approvalFlow,
    status: team.status,
  };
}

function renderDetailList(team) {
  if (!team) {
    elements.detailList.innerHTML = "";
    return;
  }

  elements.detailList.innerHTML = [
    ["メンバー数", `${team.memberCount}名`],
    ["部門", team.department],
    ["承認フロー", team.approvalFlow],
    ["ステータス", getStatusLabel(team.status)],
  ]
    .map(
      ([label, value]) => `
        <div class="detail-item">
          <p class="detail-item-label">${label}</p>
          <p class="detail-item-value">${value}</p>
        </div>
      `
    )
    .join("");
}

function renderEditForm(team) {
  if (!team) {
    return;
  }

  if (!state.drawerDraft) {
    state.drawerDraft = createDraft(team);
  }

  elements.editTeamName.value = state.drawerDraft.name;
  elements.editDepartment.value = state.drawerDraft.department;
  elements.editApprovalFlow.value = state.drawerDraft.approvalFlow;
  elements.editStatus.value = state.drawerDraft.status;
}

function renderMembers(team) {
  if (!team) {
    elements.selectedTeamDescription.textContent = "チームを選択すると所属メンバーを確認できます。";
    elements.selectedTeamName.textContent = "未選択";
    elements.memberList.innerHTML = '<div class="empty-state">表示対象のチームがありません。</div>';
    return;
  }

  const visibleMembers = filterMembers(team);

  elements.selectedTeamDescription.textContent =
    state.drawerMode === "edit"
      ? `${team.name} の設定を編集できます。`
      : `${team.name} の設定内容と所属メンバーを確認できます。`;
  elements.selectedTeamName.textContent = team.name;
  renderDetailList(team);
  renderEditForm(team);

  if (visibleMembers.length === 0) {
    elements.memberList.innerHTML = `
      <div class="empty-state">一致するメンバーが見つかりません。<br>検索キーワードを変更してください。</div>
    `;
    return;
  }

  elements.memberList.innerHTML = visibleMembers
    .map(
      (member) => `
        <article class="member-card">
          <div class="member-card-header">
            <div>
              <p class="member-name">${member.name}</p>
              <p class="member-role">${member.role}</p>
            </div>
            <span class="status-badge is-active">${team.name}</span>
          </div>
          <p class="member-email">${member.email}</p>
          <p class="member-meta">拠点: ${member.location}</p>
        </article>
      `
    )
    .join("");
}

function syncDrawer(team) {
  const isOpen = state.drawerOpen && Boolean(team);
  elements.detailDrawer.classList.toggle("is-open", isOpen);
  elements.detailDrawer.classList.toggle("is-editing", isOpen && state.drawerMode === "edit");
  elements.detailDrawer.setAttribute("aria-hidden", String(!isOpen));
  elements.drawerBackdrop.hidden = !isOpen;
  elements.drawerModeButton.hidden = !isOpen || state.drawerMode === "edit";
}

function render() {
  const filteredTeams = sortTeams(filterTeams());
  const { visibleTeams, pageCount } = paginateTeams(filteredTeams);
  ensureSelectedTeam(filteredTeams);
  const selectedTeam = getSelectedTeam(filteredTeams);

  renderFilterChips();
  renderTeamRows(visibleTeams);
  renderPagination(pageCount);
  renderMembers(selectedTeam);
  syncDrawer(selectedTeam);
  elements.pageSizeSelect.value = String(state.pageSize);
  elements.resultSummary.textContent = `${filteredTeams.length}件表示`;
}

function bindEvents() {
  let teamSearchTimer = null;
  let memberSearchTimer = null;

  elements.teamSearchInput.addEventListener("input", (event) => {
    window.clearTimeout(teamSearchTimer);
    teamSearchTimer = window.setTimeout(() => {
      state.teamSearch = event.target.value;
      state.page = 1;
      render();
    }, 160);
  });

  elements.memberSearchInput.addEventListener("input", (event) => {
    window.clearTimeout(memberSearchTimer);
    memberSearchTimer = window.setTimeout(() => {
      state.memberSearch = event.target.value;
      render();
    }, 160);
  });

  elements.drawerBackdrop.addEventListener("click", () => {
    state.drawerOpen = false;
    state.drawerMode = "preview";
    state.drawerDraft = null;
    render();
  });

  elements.drawerCloseButton.addEventListener("click", () => {
    state.drawerOpen = false;
    state.drawerMode = "preview";
    state.drawerDraft = null;
    render();
  });

  elements.drawerModeButton.addEventListener("click", () => {
    const selectedTeam = teams.find((team) => team.id === state.selectedTeamId);
    if (!selectedTeam) {
      return;
    }
    state.drawerMode = "edit";
    state.drawerDraft = createDraft(selectedTeam);
    render();
  });

  elements.cancelEditButton.addEventListener("click", () => {
    state.drawerMode = "preview";
    state.drawerDraft = null;
    render();
  });

  elements.saveEditButton.addEventListener("click", () => {
    const selectedTeam = teams.find((team) => team.id === state.selectedTeamId);
    if (!selectedTeam) {
      return;
    }

    selectedTeam.name = elements.editTeamName.value.trim() || selectedTeam.name;
    selectedTeam.department = elements.editDepartment.value.trim() || selectedTeam.department;
    selectedTeam.approvalFlow = elements.editApprovalFlow.value;
    selectedTeam.status = elements.editStatus.value;

    state.drawerMode = "preview";
    state.drawerDraft = null;
    renderFlowOptions();
    render();
  });

  elements.statusFilter.addEventListener("change", (event) => {
    state.status = event.target.value;
    state.page = 1;
    render();
  });

  elements.flowFilter.addEventListener("change", (event) => {
    state.flow = event.target.value;
    state.page = 1;
    render();
  });

  elements.sizeFilter.addEventListener("change", (event) => {
    state.size = event.target.value;
    state.page = 1;
    render();
  });

  elements.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    state.page = 1;
    render();
  });

  elements.pageSizeSelect.addEventListener("change", (event) => {
    state.pageSize = Number(event.target.value);
    state.page = 1;
    render();
  });

  elements.resetButton.addEventListener("click", () => {
    state.teamSearch = "";
    state.status = "all";
    state.flow = "all";
    state.size = "all";
    state.sort = "name:asc";
    state.page = 1;
    state.pageSize = 10;
    state.memberSearch = "";
    state.selectedTeamId = teams[0].id;
    state.drawerOpen = false;
    state.drawerMode = "preview";
    state.drawerDraft = null;

    elements.teamSearchInput.value = "";
    elements.statusFilter.value = "all";
    elements.flowFilter.value = "all";
    elements.sizeFilter.value = "all";
    elements.sortSelect.value = "name:asc";
    elements.pageSizeSelect.value = "10";
    elements.memberSearchInput.value = "";
    render();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.drawerOpen) {
      state.drawerOpen = false;
      state.drawerMode = "preview";
      state.drawerDraft = null;
      render();
    }
  });
}

function initialize() {
  renderFlowOptions();
  bindEvents();
  render();
}

initialize();
