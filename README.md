# 🤖 Robot Battle Simulator

> A street fight between robots, in a world where humans are gone.

> 인간이 사라진 세계, 거리 위에서 벌어진 로봇들의 싸움을 관전하다.

## 🇬🇧 English

### World
Humans are gone. The world now belongs entirely to AI, and the cities keep running, empty of people, walked only by machines. One day, two robots collide in the middle of a street. No one knows why. Each fights according to its own logic and strategy, trying to overpower the other.

This project is a spectator simulator of that fight. The user doesn't intervene, just watches two AIs battle it out, each following its own "mind."

### Concept
Each robot combines a finite state machine for real time combat (attack, dodge, block) with periodic LLM API calls that decide higher level strategy, which then feeds back into real time behavior. Robots can have distinct "personalities," so every fight plays out differently.

### Tech Stack
| Area | Technology |
|------|------------|
| Rendering | Three.js |
| Physics | Cannon-es |
| Combat logic | FSM |
| Strategy | LLM API |
| Build / Deploy | Vite, Vercel |

### Status
🚧 Work in progress

## 🇰🇷 한국어

### 세계관
인류가 사라지고 AI들만 남은 세계. 도시는 여전히 돌아가고 있지만, 그 거리를 걷는 건 이제 로봇들뿐입니다. 어느 날, 두 대의 로봇이 길 한복판에서 충돌합니다. 이유는 알 수 없지만, 각자의 논리와 전략으로 서로를 제압하려 합니다.

이 프로젝트는 그 싸움을 관전하는 시뮬레이터입니다. 유저는 개입하지 않습니다. 그저 두 AI가 각자의 "생각"대로 싸우는 모습을 지켜볼 뿐입니다.

### Concept
각 로봇은 유한상태기계(FSM)로 실시간 전투 동작(공격, 회피, 방어)을 처리합니다. 몇 초 간격으로 LLM API를 호출해 상위 전략(공격적, 수비적 등)을 결정하고, 이 판단이 실시간 전투에 반영됩니다. 두 로봇은 서로 다른 "성격"을 가질 수 있어, 매번 다른 양상의 싸움이 벌어집니다.

### Tech Stack
| 영역 | 기술 |
|------|------|
| 3D 렌더링 | Three.js |
| 물리 엔진 | Cannon-es |
| 전투 로직 | FSM |
| 전략 결정 | LLM API |
| 번들링 | Vite |
| 배포 | Vercel |

### Status
🚧 개발 중
