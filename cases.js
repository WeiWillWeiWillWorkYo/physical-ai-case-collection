// Case metadata and original video paths. No external service is required.
window.SHOWCASE_CASES = [
  {
    id: "c04",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "From Motor Control to Autonomous Flight",
      ja: "モータ制御から自律飛行へ",
    },
    description: {
      en: "A drone turns a destination into coordinated changes in motor RPM, then has to keep flying when disturbances hit. These Genesis demos follow that chain from direct motor and keyboard control to waypoint flight and parallel reinforcement learning (RL). They compare policies before and after training, test their response to disturbances and bring the pieces together in an inspection mission.",
      ja: "目的地へ向かうドローンは、各モータのRPMを調整し、外乱を受けても飛行を保つ必要があります。Genesis上でモータの直接制御、キーボード操縦、経路指定飛行を試し、並列RLで飛行方策を学習しました。学習前後の動きや外乱への応答を比べながら、巡検ミッションまで一連の動作を確かめています。",
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
          en: "Inspection flight",
          ja: "巡検飛行",
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
      en: "Drone Control and Autonomous Flight",
      ja: "ドローンの制御と自律飛行",
    },
    summary: {
      en: "Motor RPM control, waypoint flight and parallel RL, brought together in a drone inspection mission.",
      ja: "モータRPM制御から経路飛行、並列RLまで。巡検ミッションで飛行方策の動きを確かめる。",
    },
    number: "01",
    previewClip: 7,
  },
  {
    id: "c05",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "Franka Simulation and Control in Genesis",
      ja: "GenesisでFrankaをシミュレーション制御",
    },
    description: {
      en: "The arm has to reach the part, close the gripper and control contact as it places or assembles it. In Genesis, these Franka demos connect joint-space servo control and IK-based TCP tracking with grasping, contact monitoring and assembly. Parallel RL training and domain randomization explore how the learned policy behaves as task conditions change.",
      ja: "部品に手を伸ばし、グリッパでつかみ、接触を確かめながら置く・組み立てる。Genesis上のFrankaで、関節サーボ制御とIKによるTCP経路追従から、把持・接触モニタリング・組立までを試しています。並列RLとドメインランダム化では条件を変え、学習した方策の動作を比較しました。",
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
          en: "Assembly task",
          ja: "組立タスク",
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
      en: "Franka Simulation and Control in Genesis",
      ja: "GenesisでFrankaをシミュレーション制御",
    },
    summary: {
      en: "Controlling Franka in Genesis through joint servoing, IK-based TCP tracking, contact monitoring and parallel RL.",
      ja: "GenesisでFrankaの関節制御、IKによるTCP経路追従、接触モニタリング、並列RLを試す。",
    },
    number: "02",
    previewClip: 2,
  },
  {
    id: "c06",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "Learning Dual-Arm Control with PPO",
      ja: "PPOで学ぶ双腕制御",
    },
    description: {
      en: "The two OpenArm arms need to coordinate their motion while handling objects with different material properties. PPO policies trained in Genesis are evaluated on outward, lift and split tasks using rubber, POM, resin and metal objects. The clips compare selected runs across tasks, materials and random seeds.",
      ja: "2本のOpenArmを協調させ、素材の異なる物体を動かします。Genesis上でPPO方策を学習し、ゴム・POM・樹脂・金属を使ったoutward・lift・splitの各タスクで動作を比較しました。各映像に素材と乱数シードを添え、どの条件でどんな動きになったかを見られるようにしています。",
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
      en: "Learning Dual-Arm Control with PPO",
      ja: "PPOで学ぶ双腕制御",
    },
    summary: {
      en: "Comparing PPO dual-arm policies across rubber, POM, resin and metal objects.",
      ja: "ゴム・POM・樹脂・金属を扱うOpenArm。PPO方策の双腕動作を比較。",
    },
    number: "03",
    previewClip: 1,
  },
  {
    id: "c02",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "Driving Through Snow with DEM",
      ja: "DEMで見る雪道走行と巻き上げ",
    },
    description: {
      en: "As a vehicle drives through snow, the spray it throws up can obscure the road ahead and affect its sensors. This simulation models the snow with DEM (discrete element method) and tracks the resulting loss of forward visibility and sensor risk during high-speed driving.",
      ja: "車が雪道を走ると、巻き上がった雪が前方の視界やセンサーの見え方を変えます。このシミュレーションでは雪をDEM（離散要素法）の粒子として扱い、高速走行で雪が舞い上がる様子を再現しました。前方視界の低下とセンサーリスクを指標に、走行中の影響を見ています。",
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
      en: "Snow Driving with DEM",
      ja: "DEMで見る雪道走行",
    },
    summary: {
      en: "DEM snow particles show how vehicle spray reduces forward visibility and affects sensors.",
      ja: "DEMで雪の巻き上げを再現。高速走行時の視界とセンサーへの影響を見る。",
    },
    number: "04",
    previewClip: 0,
  },
  {
    id: "c03",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "Drone Spraying Simulation with SPH",
      ja: "SPHによるドローン散布シミュレーション",
    },
    description: {
      en: "A spraying drone needs to cover a field evenly while limiting spray that drifts away from the target area. This simulation uses SPH (smoothed-particle hydrodynamics) to model the spray plume and measures field coverage and drift. The spray distribution is shown alongside those measurements to make uneven coverage visible.",
      ja: "圃場全体にむらなく散布し、狙った場所の外へ流れる量を抑える。ドローンの噴霧をSPH（平滑粒子流体力学）によるシミュレーションで再現し、圃場の被覆率とドリフトを計測しています。散布の分布と評価指標を同じ画面で見ながら、被覆の偏りを確かめます。",
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
      en: "Drone Spraying Simulation with SPH",
      ja: "SPHによるドローン散布シミュレーション",
    },
    summary: {
      en: "SPH simulation of drone spraying, field coverage and drift.",
      ja: "SPHで噴霧の広がりを追い、圃場の被覆率と散布の偏り、ドリフトを見る。",
    },
    number: "05",
    previewClip: 0,
  },
  {
    id: "c01",
    addedAt: "2026-08-03T17:18:52+09:00",
    title: {
      en: "OpenArm Picking with RL",
      ja: "RLで学ぶOpenArmのピッキング",
    },
    description: {
      en: "OpenArm learns to grasp and lift objects through reinforcement learning (RL) in NVIDIA Isaac. The films show repeatable picking in simulation and the Sim-to-Real workflow for moving the learned policy toward a physical robot. The simulated scene uses open assets.",
      ja: "OpenArmが物体をつかんで持ち上げる動きを、NVIDIA Isaac上の強化学習（RL）で学びます。映像では、学習した方策による繰り返しのピッキングと、シミュレーションから実機へつなぐSim-to-Realの流れを紹介しています。シーンにはオープンアセットを使っています。",
    },
    clips: [
      {
        title: {
          en: "RL picking and the Sim-to-Real workflow",
          ja: "RLピッキングとSim-to-Realの流れ",
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
      en: "OpenArm Picking with RL",
      ja: "RLで学ぶOpenArmのピッキング",
    },
    summary: {
      en: "RL picking with OpenArm, from training in NVIDIA Isaac to the Sim-to-Real workflow.",
      ja: "NVIDIA IsaacでOpenArmの把持をRL学習。繰り返しのピッキングとSim-to-Realへの流れを紹介。",
    },
    number: "06",
    previewClip: 0,
  },
  {
    id: "c07",
    addedAt: "2026-08-13T02:07:17+09:00",
    title: {
      en: "Four Arms Sorting a Moving Wood-Chip Stream",
      ja: "流れる木屑から4本のアームで資源を拾う",
    },
    description: {
      en: "Four arms share the work as recyclable glass, metal and solid wood move past in a stream of wood chips. The proposed system pairs VLA-based perception with a master scheduling policy: a shared target pool, intercept prediction and cost-based assignment determine who picks what. A 24-second storyboarded Isaac Lab demo illustrates load balancing, reassignment to a downstream arm and simultaneous picks, with collision-aware parallel execution.",
      ja: "流れてくる木屑の中から、4本のアームでガラス・金属・無垢材を拾い出します。想定するシステムは、VLAベースの認識とマスター方策によるスケジューリングを組み合わせ、共有ターゲットプール、把持位置・タイミングの予測、コストに基づく動的割当・再割当で作業を分けます。Isaac Labによる24秒のコンセプト映像で、負荷分散、下流アームへの引継ぎ、衝突を考慮した並列動作と同時ピックを示しました。",
    },
    clips: [
      {
        title: {
          en: "Four-arm scheduling concept (24 s)",
          ja: "4アームの作業割当コンセプト（24秒）",
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
      en: "Four Arms on the Sorting Line",
      ja: "選別ラインで働く4本のアーム",
    },
    summary: {
      en: "A four-arm sorting concept with shared targets, dynamic reassignment and parallel picks.",
      ja: "ターゲットを共有し、担当を引き継ぎ、同時に拾う。4本のアームによる資源回収のコンセプト。",
    },
    number: "07",
    previewClip: 0,
  },
  {
    id: "c08",
    addedAt: "2026-10-19T13:15:14+09:00",
    title: {
      en: "Robot Arms on the Production Line",
      ja: "生産ラインにロボットアームを",
    },
    description: {
      en: "Robot arms load machines, move parts and inspect finished pieces. The challenge is getting each step to fit into the rhythm of the production line. In this Isaac Sim demo, the arms work alongside transport robots and inspection stations to show how the line could run before equipment is installed.",
      ja: "工作機械に部品を入れ、加工した部品を運び、仕上がりを確かめる。生産ラインにロボットアームを取り入れるには、一つひとつの動きを前後の工程につなげる必要があります。このデモでは、アームや搬送ロボット、検査装置が連携する様子をIsaac Simで再現し、導入後のラインの動きを描いています。",
    },
    clips: [
      {
        title: {
          en: "Production-line simulation",
          ja: "生産ラインのシミュレーション",
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
    tags: ["Production line", "Robot integration", "Automation"],
    shortTitle: {
      en: "Robot Arms on the Production Line",
      ja: "生産ラインにロボットアームを",
    },
    summary: {
      en: "From loading machines to checking quality, robot arms become part of the production line.",
      ja: "部品の投入から搬送、検査まで。ロボットアームが加わる生産ラインをシミュレーション。",
    },
    number: "08",
    previewClip: 0,
  },
  {
    id: "c09",
    addedAt: "2026-10-19T13:15:14+09:00",
    title: {
      en: "Subsea Pipeline Repair",
      ja: "海底パイプラインの補修",
    },
    description: {
      en: "An underwater robot needs to hold its position while the current pushes against it and its arm presses on a pipe. This concept demo follows the robot as it approaches a damaged pipeline, finds the worksite and traces a repair seam around the joint. The vehicle keeps correcting its position throughout the task, then inspects the result.",
      ja: "海流の中で機体を止めたまま、アームを伸ばしてパイプを補修する。水中では、アームがパイプに触れた反力も機体を動かします。このコンセプトデモでは、海底のパイプラインに近づき、作業箇所を見つけ、継ぎ目に沿って補修経路をたどるまでを再現しました。作業中は姿勢を保ち、最後に仕上がりを確認します。",
    },
    clips: [
      {
        title: {
          en: "Underwater repair concept",
          ja: "水中補修のコンセプトデモ",
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
      en: "Subsea Pipeline Repair",
      ja: "海底パイプラインの補修",
    },
    summary: {
      en: "An underwater robot holds steady in the current while its arm follows a repair seam.",
      ja: "海流に流されずに姿勢を保ち、アームでパイプの継ぎ目をたどる水中ロボット。",
    },
    number: "09",
    previewClip: 0,
  },
];
