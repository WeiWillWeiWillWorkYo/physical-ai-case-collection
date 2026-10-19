// Case metadata and original video paths. No external service is required.
window.SHOWCASE_CASES = [
  {
    id: "c04",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "Genesis Drone Simulation Capability Assessment",
      ja: "Genesis ドローンシミュレーション適性評価",
    },
    description: {
      en: "For a client's drone-simulation solution, I assessed Genesis against the required control, reinforcement-learning and robustness capabilities. I evaluated direct motor control, interactive and waypoint flight, parallel RL training, policy improvement, disturbance response and the client's inspection mission.",
      ja: "顧客向けドローンシミュレーションソリューションの開発として、Genesisが要求される制御・強化学習・ロバスト性に対応できるかを評価しました。モータの直接制御、対話操縦、経路指定飛行、並列RL学習、方策改善、外乱への応答、顧客の巡検ミッションまで検証しました。",
    },
    clips: [
      {
        title: {
          en: "API motor-RPM control",
          ja: "APIからモータRPMを直接制御",
        },
        videos: [
          {
            lang: "en",
            src: "04_genesis_drone/en/01_api_motor_rpm_control.mp4",
            poster: "assets/posters/c04-01-en.jpg",
          },
          {
            lang: "ja",
            src: "04_genesis_drone/ja/01_API%E3%81%8B%E3%82%89%E3%83%A2%E3%83%BC%E3%82%BFRPM%E3%82%92%E7%9B%B4%E6%8E%A5%E5%88%B6%E5%BE%A1.mp4",
            poster: "assets/posters/c04-01-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Keyboard interactive control",
          ja: "キーボード入力によるインタラクティブ操縦",
        },
        videos: [
          {
            lang: "en",
            src: "04_genesis_drone/en/02_keyboard_interactive_control.mp4",
            poster: "assets/posters/c04-02-en.jpg",
          },
          {
            lang: "ja",
            src: "04_genesis_drone/ja/02_%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E5%85%A5%E5%8A%9B%E3%81%AB%E3%82%88%E3%82%8B%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E6%93%8D%E7%B8%A6.mp4",
            poster: "assets/posters/c04-02-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Destination auto-flight",
          ja: "目的地指定による自動飛行",
        },
        videos: [
          {
            lang: "en",
            src: "04_genesis_drone/en/03_destination_auto_flight.mp4",
            poster: "assets/posters/c04-03-en.jpg",
          },
          {
            lang: "ja",
            src: "04_genesis_drone/ja/03_%E7%9B%AE%E7%9A%84%E5%9C%B0%E6%8C%87%E5%AE%9A%E3%81%AB%E3%82%88%E3%82%8B%E8%87%AA%E5%8B%95%E9%A3%9B%E8%A1%8C.mp4",
            poster: "assets/posters/c04-03-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "RL flight environment",
          ja: "強化学習向け飛行環境",
        },
        videos: [
          {
            lang: "en",
            src: "04_genesis_drone/en/04_learning_environment.mp4",
            poster: "assets/posters/c04-04-en.jpg",
          },
          {
            lang: "ja",
            src: "04_genesis_drone/ja/04_%E5%BC%B7%E5%8C%96%E5%AD%A6%E7%BF%92%E5%90%91%E3%81%91%E9%A3%9B%E8%A1%8C%E7%92%B0%E5%A2%83.mp4",
            poster: "assets/posters/c04-04-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Parallel RL training",
          ja: "並列環境で方策を学習",
        },
        videos: [
          {
            lang: "en",
            src: "04_genesis_drone/en/05_parallel_rl_training.mp4",
            poster: "assets/posters/c04-05-en.jpg",
          },
          {
            lang: "ja",
            src: "04_genesis_drone/ja/05_%E4%B8%A6%E5%88%97%E7%92%B0%E5%A2%83%E3%81%A7%E6%96%B9%E7%AD%96%E3%82%92%E5%AD%A6%E7%BF%92.mp4",
            poster: "assets/posters/c04-05-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Policy before / after",
          ja: "学習前後の方策比較",
        },
        videos: [
          {
            lang: "en",
            src: "04_genesis_drone/en/06_policy_before_after.mp4",
            poster: "assets/posters/c04-06-en.jpg",
          },
          {
            lang: "ja",
            src: "04_genesis_drone/ja/06_%E5%AD%A6%E7%BF%92%E5%89%8D%E5%BE%8C%E3%81%AE%E6%96%B9%E7%AD%96%E6%AF%94%E8%BC%83.mp4",
            poster: "assets/posters/c04-06-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Robustness stress test",
          ja: "外乱下のロバスト性検証",
        },
        videos: [
          {
            lang: "en",
            src: "04_genesis_drone/en/07_robustness_stress_test.mp4",
            poster: "assets/posters/c04-07-en.jpg",
          },
          {
            lang: "ja",
            src: "04_genesis_drone/ja/07_%E5%A4%96%E4%B9%B1%E4%B8%8B%E3%81%AE%E3%83%AD%E3%83%90%E3%82%B9%E3%83%88%E6%80%A7%E6%A4%9C%E8%A8%BC.mp4",
            poster: "assets/posters/c04-07-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Customer inspection mission",
          ja: "顧客業務の巡検ミッション評価",
        },
        videos: [
          {
            lang: "en",
            src: "04_genesis_drone/en/08_customer_mission_inspection.mp4",
            poster: "assets/posters/c04-08-en.jpg",
          },
          {
            lang: "ja",
            src: "04_genesis_drone/ja/08_%E9%A1%A7%E5%AE%A2%E6%A5%AD%E5%8B%99%E3%81%AE%E5%B7%A1%E6%A4%9C%E3%83%9F%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E8%A9%95%E4%BE%A1.mp4",
            poster: "assets/posters/c04-08-ja.jpg",
          },
        ],
      },
    ],
    category: "robotics",
    engine: "Genesis",
    tags: ["Control", "RL", "Robustness"],
    shortTitle: {
      en: "Drone simulation & control",
      ja: "ドローンのシミュレーション・制御",
    },
    summary: {
      en: "Client drone-simulation solution: motor control, parallel RL, robustness and inspection capability assessment.",
      ja: "顧客向けドローンシミュレーション開発。制御・並列RL・外乱対応・巡検業務への適用性を検証。",
    },
    number: "01",
    previewClip: 7,
  },
  {
    id: "c05",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "Genesis Manipulator Capability Assessment (Franka)",
      ja: "Genesis マニピュレータ適性評価(Franka)",
    },
    description: {
      en: "For the same client's robot-arm solution, I assessed Genesis from joint control through manipulation and learning. The work covered joint-space servoing, IK path tracking, gripper pick-and-place, contact and quality monitoring, parallel RL training, policy comparison, domain-randomization robustness and the client's assembly mission.",
      ja: "同じ顧客向けソリューション開発のロボットアーム案件として、Genesisの関節制御からマニピュレーション・学習までの適用性を評価しました。関節サーボ、IK経路追従、ピックアンドプレース、接触・品質モニタリング、並列RL学習、方策比較、ドメインランダム化によるロバスト性、顧客の組立ミッションまで検証しました。",
    },
    clips: [
      {
        title: {
          en: "Joint-space servo control",
          ja: "関節空間サーボ制御",
        },
        videos: [
          {
            lang: "en",
            src: "05_genesis_franka_arm/en/01_joint_space_servo_control.mp4",
            poster: "assets/posters/c05-01-en.jpg",
          },
          {
            lang: "ja",
            src: "05_genesis_franka_arm/ja/01_%E9%96%A2%E7%AF%80%E7%A9%BA%E9%96%93%E3%82%B5%E3%83%BC%E3%83%9C%E5%88%B6%E5%BE%A1.mp4",
            poster: "assets/posters/c05-01-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Inverse-kinematics TCP path",
          ja: "逆運動学によるTCP経路追従",
        },
        videos: [
          {
            lang: "en",
            src: "05_genesis_franka_arm/en/02_inverse_kinematics_tcp_path.mp4",
            poster: "assets/posters/c05-02-en.jpg",
          },
          {
            lang: "ja",
            src: "05_genesis_franka_arm/ja/02_%E9%80%86%E9%81%8B%E5%8B%95%E5%AD%A6%E3%81%AB%E3%82%88%E3%82%8BTCP%E7%B5%8C%E8%B7%AF%E8%BF%BD%E5%BE%93.mp4",
            poster: "assets/posters/c05-02-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Gripper pick-and-place workflow",
          ja: "グリッパによるピックアンドプレース",
        },
        videos: [
          {
            lang: "en",
            src: "05_genesis_franka_arm/en/03_gripper_pick_place_workflow.mp4",
            poster: "assets/posters/c05-03-en.jpg",
          },
          {
            lang: "ja",
            src: "05_genesis_franka_arm/ja/03_%E3%82%B0%E3%83%AA%E3%83%83%E3%83%91%E3%81%AB%E3%82%88%E3%82%8B%E3%83%94%E3%83%83%E3%82%AF%E3%82%A2%E3%83%B3%E3%83%89%E3%83%97%E3%83%AC%E3%83%BC%E3%82%B9.mp4",
            poster: "assets/posters/c05-03-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Sensor contact & quality monitoring",
          ja: "接触・品質モニタリング",
        },
        videos: [
          {
            lang: "en",
            src: "05_genesis_franka_arm/en/04_sensor_contact_quality_monitoring.mp4",
            poster: "assets/posters/c05-04-en.jpg",
          },
          {
            lang: "ja",
            src: "05_genesis_franka_arm/ja/04_%E6%8E%A5%E8%A7%A6%E3%83%BB%E5%93%81%E8%B3%AA%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%AA%E3%83%B3%E3%82%B0.mp4",
            poster: "assets/posters/c05-04-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Parallel RL policy training",
          ja: "並列RL方策トレーニング",
        },
        videos: [
          {
            lang: "en",
            src: "05_genesis_franka_arm/en/05_parallel_rl_policy_training.mp4",
            poster: "assets/posters/c05-05-en.jpg",
          },
          {
            lang: "ja",
            src: "05_genesis_franka_arm/ja/05_%E4%B8%A6%E5%88%97RL%E6%96%B9%E7%AD%96%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0.mp4",
            poster: "assets/posters/c05-05-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Policy before / after comparison",
          ja: "学習前後の方策比較",
        },
        videos: [
          {
            lang: "en",
            src: "05_genesis_franka_arm/en/06_policy_before_after_comparison.mp4",
            poster: "assets/posters/c05-06-en.jpg",
          },
          {
            lang: "ja",
            src: "05_genesis_franka_arm/ja/06_%E5%AD%A6%E7%BF%92%E5%89%8D%E5%BE%8C%E3%81%AE%E6%96%B9%E7%AD%96%E6%AF%94%E8%BC%83.mp4",
            poster: "assets/posters/c05-06-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Domain-randomization robustness",
          ja: "ドメインランダム化によるロバスト性検証",
        },
        videos: [
          {
            lang: "en",
            src: "05_genesis_franka_arm/en/07_robustness_domain_randomization.mp4",
            poster: "assets/posters/c05-07-en.jpg",
          },
          {
            lang: "ja",
            src: "05_genesis_franka_arm/ja/07_%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E5%8C%96%E3%81%AB%E3%82%88%E3%82%8B%E3%83%AD%E3%83%90%E3%82%B9%E3%83%88%E6%80%A7%E6%A4%9C%E8%A8%BC.mp4",
            poster: "assets/posters/c05-07-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Customer assembly mission",
          ja: "顧客向け組立ミッション",
        },
        videos: [
          {
            lang: "en",
            src: "05_genesis_franka_arm/en/08_customer_assembly_mission.mp4",
            poster: "assets/posters/c05-08-en.jpg",
          },
          {
            lang: "ja",
            src: "05_genesis_franka_arm/ja/08_%E9%A1%A7%E5%AE%A2%E5%90%91%E3%81%91%E7%B5%84%E7%AB%8B%E3%83%9F%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3.mp4",
            poster: "assets/posters/c05-08-ja.jpg",
          },
        ],
      },
    ],
    category: "robotics",
    engine: "Genesis",
    tags: ["Manipulation", "RL", "Contact"],
    shortTitle: {
      en: "Franka manipulation solution",
      ja: "Franka マニピュレーションソリューション",
    },
    summary: {
      en: "Client robot-arm solution development: joint control, IK, pick-and-place and assembly capability assessment.",
      ja: "顧客向けロボットアームソリューション開発。関節制御・IK・把持・組立への適用性を検証。",
    },
    number: "02",
    previewClip: 2,
  },
  {
    id: "c06",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "Genesis OpenArm Dual-Arm Control with PPO",
      ja: "Genesis OpenArm 双腕PPO制御",
    },
    description: {
      en: "As part of the client's Genesis assessment, I trained PPO policies for dual-arm OpenArm control and evaluated their behavior across object materials, tasks and random seeds to check policy consistency.",
      ja: "顧客向けGenesis適性評価の一環として、双腕OpenArm制御のPPO方策を学習しました。対象物の素材・タスク・乱数シードを変えて動作を評価し、方策の一貫性を確認しました。",
    },
    clips: [
      {
        title: {
          en: "Dual outward — rubber / POM (seed 5)",
          ja: "双腕アウトワード — ゴム/POM(seed 5)",
        },
        videos: [
          {
            lang: "neutral",
            src: "06_genesis_openarm_ppo/v5_01_openarm_dual_outward_rubber_pom_seed5.mp4",
            poster: "assets/posters/c06-01-neutral.jpg",
          },
        ],
      },
      {
        title: {
          en: "Dual lift — resin / rubber (seed 1)",
          ja: "双腕リフト — 樹脂/ゴム(seed 1)",
        },
        videos: [
          {
            lang: "neutral",
            src: "06_genesis_openarm_ppo/v5_02_openarm_dual_lift_resin_rubber_seed1.mp4",
            poster: "assets/posters/c06-02-neutral.jpg",
          },
        ],
      },
      {
        title: {
          en: "Dual split — metal / resin (seed 9)",
          ja: "双腕スプリット — 金属/樹脂(seed 9)",
        },
        videos: [
          {
            lang: "neutral",
            src: "06_genesis_openarm_ppo/v5_03_openarm_dual_split_metal_resin_seed9.mp4",
            poster: "assets/posters/c06-03-neutral.jpg",
          },
        ],
      },
    ],
    category: "robotics",
    engine: "Genesis",
    tags: ["Dual-arm", "PPO"],
    shortTitle: {
      en: "Dual-arm control with PPO",
      ja: "PPOによる双腕ロボット制御",
    },
    summary: {
      en: "Dual-arm control for a client solution, with PPO policies evaluated across materials, tasks and random seeds.",
      ja: "顧客向け双腕制御の開発。素材・タスク・乱数シードを変えてPPO方策の一貫性を評価。",
    },
    number: "03",
    previewClip: 1,
  },
  {
    id: "c02",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "High-Speed Driving on Snow — DEM Snow Simulation",
      ja: "雪道高速走行 — DEMによる雪のシミュレーション",
    },
    description: {
      en: "Client engagement: develop an API that reproduces Rocky-DEM-class capability to simulate vehicles driving at high speed on snow. The snow in this video is fully DEM-based (discrete element method). The scenario evaluates forward visibility degradation and sensor-risk under snow spray thrown up by the vehicle.",
      ja: "顧客案件:Rocky DEM 相当の機能を再現するAPIを開発し、雪道での高速走行をシミュレーション。映像中の雪はすべてDEM(離散要素法)で実装。巻き上げられた雪による前方視界の劣化とセンサーリスクを評価します。",
    },
    clips: [
      {
        title: {
          en: "Forward-visibility & sensor-risk evaluation",
          ja: "前方視界・センサーリスク評価",
        },
        videos: [
          {
            lang: "ja",
            src: "02_snow_vehicle/ja/%E9%9B%AA%E9%81%93%E8%B5%B0%E8%A1%8C_%E5%89%8D%E6%96%B9%E8%A6%96%E7%95%8C%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%AA%E3%82%B9%E3%82%AF%E8%A9%95%E4%BE%A1.mp4",
            poster: "assets/posters/c02-01-ja.jpg",
          },
        ],
      },
    ],
    category: "mobility",
    engine: "DEM",
    tags: ["Snow", "Sensors"],
    shortTitle: {
      en: "Driving through snow",
      ja: "雪道走行とセンサーリスク",
    },
    summary: {
      en: "Developed DEM snow simulation for a client's vehicle visibility and sensor-risk assessment.",
      ja: "顧客向けにDEM雪道走行シミュレーションを開発。前方視界とセンサーリスクを評価。",
    },
    number: "04",
    previewClip: 0,
  },
  {
    id: "c03",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "Agricultural Drone Spraying — SPH Coverage and Drift",
      ja: "農業ドローン散布 — SPHによる被覆率・ドリフト評価",
    },
    description: {
      en: "Client engagement: prototype a simulator for drone pesticide spraying with quantitative coverage testing. The spray plume is modeled with SPH (smoothed-particle hydrodynamics); the video evaluates field coverage ratio and drift.",
      ja: "顧客案件:ドローン農薬散布と被覆率テストのプロトタイプ開発。噴霧はSPH(平滑粒子流体力学)で実装し、圃場の被覆率とドリフトを評価しています。",
    },
    clips: [
      {
        title: {
          en: "Coverage-ratio & drift evaluation",
          ja: "被覆率・ドリフト評価",
        },
        videos: [
          {
            lang: "ja",
            src: "03_agriculture_spray/ja/%E8%BE%B2%E5%9C%B0%E6%95%A3%E5%B8%83_%E8%A2%AB%E8%A6%86%E7%8E%87%E3%83%89%E3%83%AA%E3%83%95%E3%83%88%E8%A9%95%E4%BE%A1.mp4",
            poster: "assets/posters/c03-01-ja.jpg",
          },
        ],
      },
    ],
    category: "multiphysics",
    engine: "SPH",
    tags: ["Spray", "Coverage"],
    shortTitle: {
      en: "Agricultural spraying simulator",
      ja: "農業ドローン散布シミュレータ",
    },
    summary: {
      en: "Developed an SPH spraying simulator prototype for a client's coverage and drift evaluation.",
      ja: "顧客向け散布シミュレータのプロトタイプを開発。SPHで被覆率とドリフトを評価。",
    },
    number: "05",
    previewClip: 0,
  },
  {
    id: "c01",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "OpenArm Pick-and-Place in NVIDIA Isaac — RL to Sim-to-Real",
      ja: "OpenArm ピッキング(NVIDIA Isaac)— RLからSim-to-Realへ",
    },
    description: {
      en: "For a client's robot-picking solution, I evaluated OpenArm and developed grasping policies with reinforcement learning using open assets in NVIDIA Isaac. The policies achieved stable, repeatable picking and can be deployed to the physical unit for sim-to-real transfer.",
      ja: "顧客向けピッキングソリューションの開発として、OpenArmを評価し、NVIDIA Isaac上でオープンアセットを用いたRL把持方策を開発しました。安定したピッキングを実現し、得られた方策はSim-to-Realによる実機展開が可能です。",
    },
    clips: [
      {
        title: {
          en: "Physical AI solution overview (v3)",
          ja: "Physical AI ソリューション概要(v3)",
        },
        videos: [
          {
            lang: "en",
            src: "01_isaac_picking/openarm_physical_ai_solution_en_1080p50_v3.mp4",
            poster: "assets/posters/c01-01-en.jpg",
          },
          {
            lang: "ja",
            src: "01_isaac_picking/openarm_physical_ai_solution_ja_1080p50_v3.mp4",
            poster: "assets/posters/c01-01-ja.jpg",
          },
        ],
      },
      {
        title: {
          en: "Picking demo",
          ja: "ピッキングデモ",
        },
        videos: [
          {
            lang: "ja",
            src: "01_isaac_picking/openarm_physical_ai_picking_ja_1080p.mp4",
            poster: "assets/posters/c01-02-ja.jpg",
          },
        ],
      },
    ],
    category: "robotics",
    engine: "NVIDIA Isaac",
    tags: ["OpenArm", "RL", "Sim-to-Real"],
    shortTitle: {
      en: "OpenArm picking solution",
      ja: "OpenArm ピッキングソリューション",
    },
    summary: {
      en: "Developed an OpenArm picking solution with RL-trained grasping policies for a client's sim-to-real application.",
      ja: "顧客向けにRL把持方策を用いたOpenArmピッキングソリューションを開発。Sim-to-Realに対応。",
    },
    number: "06",
    previewClip: 0,
  },
  {
    id: "c07",
    addedAt: "2026-08-13T02:07:17+09:00",
    title: {
      en: "Four-Arm Collaborative Recycling Sorting on a Wood-Chip Stream",
      ja: "木屑流からの資源回収 — 4アーム協調ソーティング",
    },
    description: {
      en: "Client engagement: build a solution that detects and picks recyclable objects (glass, metal, solid wood) out of a moving wood-chip stream. The proposed architecture combines VLA-based perception with multi-arm collaboration coordinated by a master scheduling policy: a shared global target pool, intercept prediction, cost-based dynamic assignment and reassignment, and collision-aware parallel execution across four identical arms. The 24-second storyboarded demo (Isaac Lab) visualizes the scheduler making assignment decisions live, including workload balancing, a mid-task reservation transfer to a downstream arm, and simultaneous picks.",
      ja: "顧客案件:流動する木屑ストリームからガラス・金属・木材などのリサイクル対象を認識・把持するソリューション。VLAベースの認識と、マスター方策による多腕協調(共有ターゲットプール/迎撃予測/コストベースの動的割当・再割当/衝突回避並列実行)を組み合わせた構成です。絵コンテに基づく24秒のコンセプトデモ(Isaac Lab)では負荷分散、下流アームへの予約移譲、同時ピックなどスケジューラの意思決定を可視化しています。",
    },
    clips: [
      {
        title: {
          en: "Storyboarded 24 s concept demo (EN)",
          ja: "絵コンテに基づく24秒コンセプトデモ(英語版)",
        },
        videos: [
          {
            lang: "en",
            src: "07_isaaclab_4arm_sorting/isaaclab_4arm_collaborative_sorting_720p24.mp4",
            poster: "assets/posters/c07-01-en.jpg",
          },
        ],
      },
    ],
    category: "robotics",
    engine: "Isaac Lab",
    tags: ["Multi-arm", "Scheduling"],
    shortTitle: {
      en: "Four-arm recycling sorting",
      ja: "4アーム協調による資源回収",
    },
    summary: {
      en: "Engineering solution for a client's recycling process, with a concept demo of four-arm scheduling.",
      ja: "顧客の資源回収工程に向けた4アーム協調ソリューション。作業割当をコンセプト映像で提示。",
    },
    number: "07",
    previewClip: 0,
  },
  {
    id: "c08",
    addedAt: "2026-10-19T13:15:14+09:00",
    title: {
      en: "KIPtech Solution — Industrial Robotics",
      ja: "KIPtech Solution — 産業用ロボティクス",
    },
    description: {
      en: "An industrial robotics solution showcase developed for KIPtech with NVIDIA Isaac Sim. The combined film demonstrates machine tending, warehouse transport, visual inspection and multi-robot collaboration, bringing several factory automation workflows together in one presentation.",
      ja: "KIPtech向けにNVIDIA Isaac Simで開発した産業用ロボティクスのソリューション映像です。工作機械へのワーク供給・搬出、倉庫内搬送、外観検査、複数ロボットの協調動作など、工場自動化のワークフローを1本の映像にまとめています。",
    },
    clips: [
      {
        title: {
          en: "KIPtech Solution — combined showcase",
          ja: "KIPtech Solution — 総合デモ映像",
        },
        videos: [
          {
            lang: "en",
            src: "08_kiptech_solution/Kiptech-solution.mp4",
            poster: "assets/posters/c08-01-en.jpg",
          },
        ],
      },
    ],
    category: "robotics",
    engine: "NVIDIA Isaac Sim",
    tags: ["Industrial robotics", "Automation", "Multi-robot"],
    shortTitle: {
      en: "KIPtech Solution",
      ja: "KIPtech Solution",
    },
    summary: {
      en: "Industrial robotics showcase: machine tending, warehouse transport, visual inspection and multi-robot collaboration.",
      ja: "工作機械へのワーク供給・搬出、倉庫内搬送、外観検査、複数ロボットの協調動作を紹介。",
    },
    number: "08",
    previewClip: 0,
  },
  {
    id: "c09",
    addedAt: "2026-10-19T13:15:14+09:00",
    title: {
      en: "Giga Ocean Robotics — Subsea Pipeline Intervention Concept",
      ja: "Giga 海洋ロボティクス — 海底パイプライン作業コンセプト",
    },
    description: {
      en: "A subsea intervention concept demo developed in NVIDIA Isaac Sim for the proposed KIPtech collaboration with Giga (Gigala / Ocean Intella). An ROV approaches a seabed pipeline, holds station against currents, localizes the worksite and positions its manipulator to trace a circumferential repair seam at a pipe joint. The demo includes contact-force feedback to the floating ROV body and post-task verification; welding is visualized at concept level.",
      ja: "Giga（Gigala / Ocean Intella）とKIPtechの協業提案に向け、NVIDIA Isaac Simで開発した海底作業のコンセプトデモです。ROVが海底パイプラインへ接近し、海流下で定点保持しながら作業箇所を認識し、マニピュレータで管継手の円周方向の補修経路を追従します。接触力が浮遊するROV本体へ及ぼす影響と作業後の確認も示し、溶接はコンセプトとして可視化しています。",
    },
    clips: [
      {
        title: {
          en: "Ocean robotics — ROV pipeline intervention concept demo",
          ja: "海洋ロボティクス — ROVによるパイプライン作業コンセプトデモ",
        },
        videos: [
          {
            lang: "en",
            src: "09_giga_ocean_robotics/ocean-robotics-concept-demo.mp4",
            poster: "assets/posters/c09-01-en.jpg",
          },
        ],
      },
    ],
    category: "robotics",
    engine: "NVIDIA Isaac Sim",
    tags: ["ROV", "Marine robotics", "Contact control"],
    shortTitle: {
      en: "Giga ocean robotics",
      ja: "Giga 海洋ロボティクス",
    },
    summary: {
      en: "Subsea ROV concept: station keeping, worksite localization and manipulator tracking along a pipeline repair seam.",
      ja: "海底ROVのコンセプトデモ。定点保持、作業箇所の認識、パイプライン補修経路への追従を実演。",
    },
    number: "09",
    previewClip: 0,
  },
];
