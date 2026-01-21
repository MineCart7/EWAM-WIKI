const buttons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        tabs.forEach(t => t.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});

const downloadToggle = document.getElementById("downloadToggle");
const downloadMenu = document.getElementById("downloadMenu");
const versionList = document.getElementById("versionList");

const versions = {
    "achievements": [
        { version: "1.21.130", url: "https://www.curseforge.com/minecraft-bedrock/addons/explorers-world-map" },
        { version: "1.21.120", url: "https://www.curseforge.com/minecraft-bedrock/addons/explorers-world-map" },
        { version: "1.21.110", url: "https://www.curseforge.com/minecraft-bedrock/addons/explorers-world-map" },
        { version: "1.21.100", url: "https://www.curseforge.com/minecraft-bedrock/addons/explorers-world-map" },
        { version: "1.21.90", url: "https://www.curseforge.com/minecraft-bedrock/addons/explorers-world-map" },

    ],
    "no-achievements": [
        { version: "1.21.90 and up", url: "https://www.curseforge.com/minecraft-bedrock/addons/explorers-world-map" },
    ]
};

const feature_buttons = document.querySelectorAll(".feature-tab-btn");
const feature_contents = document.querySelectorAll(".feature-tab-content");

feature_buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        feature_buttons.forEach(b => b.classList.remove("active"));
        feature_contents.forEach(t => t.classList.remove("active"));

        btn.classList.add("active");
        document
            .getElementById("feature-" + btn.dataset.feature)
            .classList.add("active");

    });
});

document.querySelectorAll(".download-option").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        versionList.innerHTML = "";

        versions[type].forEach(v => {
            const item = document.createElement("a");
            item.href = v.url;
            item.target = "_blank";
            item.className = "version-item";
            item.textContent = "Version " + v.version;
            versionList.appendChild(item);
        });

        downloadMenu.style.display = "none";
    });
});
