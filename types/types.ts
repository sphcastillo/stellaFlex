// A tier access can only be one of these 3 string values
export type TierAccess = 'startStrong' | 'powerPulse' | 'elevateElite';
// respresenting the numberical level of access 
export type MembershipLevel = 1 | 2 | 3;

// this maps their names to their corresponding numeric level 
export const tierMap: Record<TierAccess, MembershipLevel> = {
    startStrong: 1,
    powerPulse: 2,
    elevateElite: 3,
}

// maps the numeric level back to user-facing level
export const membershipMap: Record<MembershipLevel, string> = {
    1: "Level 1: Start Strong",
    2: "Level 2: Power Pulse",
    3: "Level 3: Elevate Elite",
}

export const getTierFromLevel = (level: MembershipLevel) : TierAccess => {
    return Object.entries(tierMap).find(
        ([,value]) => value === level
    )?.[0] as TierAccess;
}

// Support legacy tier strings from older documents
export const legacyTierAccessMap: Record<string, TierAccess> = {
    start: "startStrong",
    pulse: "powerPulse",
    elite: "elevateElite",
    startStrong: "startStrong",
    powerPulse: "powerPulse",
    elevateElite: "elevateElite",
  };
  
  export function normalizeTierAccess(
    value: string
  ): TierAccess | undefined {
    return legacyTierAccessMap[value];
  }
  