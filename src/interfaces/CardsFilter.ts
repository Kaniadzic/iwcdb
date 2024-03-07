export interface CardsFilter {
    attackValues: (number | null)[],
    healthValues: number[],
    costValues: number[],
    moraleValues: number[],
    rarities: string[],
    sets: string[],
    types: string[],
    superType: string
};