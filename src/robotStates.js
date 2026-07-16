export const ROBOT_STATE = {
  IDLE: "idle",
  APPROACH: "approach",
  ATTACK: "attack", // 나중에 좀 더 세분화 할것
  DODGE: "dodge",
  BLOCK: "block",
  STAGGERED: "staggered", // 스턴 맞은 상태
  DESTROYED: "destroyed",
};

export const PERSONALITY = { // robot stance types (needed for AI extension in future)
  AGGRESSIVE: "aggressive",
  DEFENSIVE: "defensive",
  BASIC: "basic",
};

export const ATTACK_TYPE = {
  HEAD: "head", // critical attack
  BODY: "body", // basic attack
  LEGS: "legs", // stagger attack
  ARMS: "arms", // stagger attack
};