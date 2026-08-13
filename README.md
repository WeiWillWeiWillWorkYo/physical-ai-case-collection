# Physical AI Case Collection / Physical AI 事例集

Private collection of customer-facing Physical AI simulation videos.

日本の顧客向け説明を含む Physical AI シミュレーション事例集です。

## Contents

| Directory | Contents |
|---|---|
| `01_isaac_picking` | Isaac Lab picking demo versions v1-v3, Japanese and English where available |
| `02_snow_vehicle/ja` | Snow-road vehicle visibility and sensor-risk evaluation |
| `03_agriculture_spray/ja` | Agricultural drone spray coverage and drift evaluation |
| `04_genesis_drone` | Genesis drone control, RL workflow, robustness, and mission videos in Japanese and English |
| `05_genesis_franka_arm` | Genesis Franka arm control and workflow videos in Japanese and English |
| `06_genesis_openarm_ppo` | Genesis OpenArm PPO policy rollouts |
| `07_isaaclab_4arm_sorting` | Isaac Lab four-arm collaborative recycling sorting: global scheduler, dynamic target assignment/reassignment, moving-belt picking with wood-chip stream |

The collection contains 42 MP4 files. `SHA256SUMS` records their integrity hashes.

## Showcase page

`index.html` is a self-contained bilingual (EN primary / JA secondary) showcase
page with an embedded player, title, and engagement summary for every video.
GitHub cannot stream repository files and GitHub Pages would make the content
public, so view it from a local clone:

```bash
git clone git@github.com:WeiWillWeiWillWorkYo/physical-ai-case-collection.git
cd physical-ai-case-collection
python3 -m http.server 8080   # or simply open index.html in a browser
# → http://localhost:8080
```

Works fully offline — suitable for interviews and customer meetings.

## Notes

- Videos are stored directly in Git because every individual file is below GitHub's 100 MB file limit.
- Source projects, checkpoints, raw captures, previews, and intermediate renders are not included.
- This repository is private and the videos should not be redistributed without an explicit review of customer-facing claims.
