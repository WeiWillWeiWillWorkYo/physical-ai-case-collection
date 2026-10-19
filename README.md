# Physical AI Case Studies / Physical AI 事例集

[Live showcase / 展示ページ](https://weiwillweiwillworkyo.github.io/physical-ai-case-collection/)

Robot control, reinforcement learning and DEM/SPH simulation, brought together
in a collection of projects and videos by WEI / 崔 煒.

ロボットの制御や強化学習、DEM・SPHによる粒子シミュレーションの事例を、映像とともにまとめています。

The public GitHub Pages site is organized into three sections:

- **Simulation Cases / シミュレーション事例** — nine client projects, with field filters, date sorting, descriptions and video players.
- **Solvers / ソルバー** — currently empty; content will be selected later.
- **Papers / 論文** — currently empty; content will be selected later.

The EN / 日本語 control switches the interface, case descriptions and clip titles,
and selects the corresponding video version where available. Single-language
clips show their actual language. The preference is saved in the browser;
`?lang=en` or `?lang=ja` can be used for a language-specific link.

EN / 日本語ボタンで表示言語を切り替えます。対応する言語の映像がある場合は自動で選択し、
単一言語の映像には実際の言語を表示します。ソルバー・論文の欄は現在空です。

Cases default to **newest first**; the sort control also offers **oldest first**.
Dates are when each case's media was first added to this repository, rather than
later page edits or video watermark updates. Cases added in the same commit
follow the existing curated timeline, reversed for newest first. Switching
language, filtering or returning from a case preserves the current sort choice;
opening or reloading the page starts with newest first.

事例は追加日の新しい順で表示します。「並び順」から古い順にも変更できます。
同時に追加された事例は、既存の時間軸に沿って並びます。

## Cases and media

| Directory | Contents |
|---|---|
| `04_genesis_drone` | Drone motor control, autonomous flight and parallel RL in Genesis |
| `05_genesis_franka_arm` | Franka simulation and control in Genesis |
| `06_genesis_openarm_ppo` | OpenArm dual-arm control with PPO across materials and tasks |
| `02_snow_vehicle/ja` | DEM snow spray, forward visibility and sensor risk during driving |
| `03_agriculture_spray/ja` | SPH drone-spraying simulation for field coverage and drift |
| `01_isaac_picking` | OpenArm picking with RL in NVIDIA Isaac and a Sim-to-Real workflow |
| `07_isaaclab_4arm_sorting` | Four-arm recycling concept with VLA-based perception and shared scheduling |
| `08_kiptech_solution` | Case 08: Robot arms on the production line |
| `09_giga_ocean_robotics` | Case 09: Subsea pipeline repair concept |

There are 26 demonstrations with 43 MP4 files including language variants.
`SHA256SUMS` records their hashes.
The case descriptions distinguish evaluation work, prototypes and concept demos.
Source projects, checkpoints and raw captures are not included.

## Local viewing

No build step, package installation or external service is required. A full clone
includes the videos and works offline:

```bash
git clone https://github.com/WeiWillWeiWillWorkYo/physical-ai-case-collection.git
cd physical-ai-case-collection
python3 -m http.server 8080
# Open http://localhost:8080
```

You can also open `index.html` directly. Browser storage availability may vary for
local files; language switching still works without storage.

## Site files

- `index.html` — shared page structure and navigation.
- `styles.css` — responsive layout and visual styles.
- `app.js` — Japanese/English interface, case filtering, navigation and players.
- `cases.js` — bilingual case metadata and original video paths.
- `assets/posters/` — preview images extracted from the existing case videos.

Case links use `#cases/c04` (for example). Legacy links such as `#c04` continue to
work. GitHub Pages publishes the repository root from `main`.

When adding a case, set `addedAt` to its original addition timestamp (ISO 8601
with a timezone). Keep the case `number` stable: it also records the curated
timeline used to break ties between cases added together.
