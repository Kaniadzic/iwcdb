/**
 * Interface describing single card from game
 * name: name of card
 * artist: name and surname of card art creator
 * purity: purity requirement of card. Described as array of purity IDs
 * rarity: card rarity (Common, Uncommon, Rare, Epic, Legendary)
 * type: main typ of card (Character, Location, Ability, Artifact, Mission)
 * superType:  (Unique, Unlimited)
 * subTypes: array of subtypes (for example Human, Undead, Dragon)
 * resourceCost: cost of playing card
 * moraleCost: morale cost of losing card
 * health: hitpoints of character (null if not aplicable)
 * attack: damage of character (null if not aplicable)
 * attributes: attributes of character (for example: Flying, Charge; null in not aplicable)
 * abilityText: card text
 * flavorText: flavor text of card, not used in new IW
 * setName: name of set in which card was introduced
 * setNumber: card number in set in which it war introduced
 * imageUrl: url to card image
 */
export interface Card {
    name: string,
	artist: string,
	purity: number[] | null,
	rarity: string,
    type: string,
	superType: string,
	subTypes: string[] | null,
	resourceCost: number,
	moraleCost: number | null,
	health: number | null,
	attack: number | null,
	attributes: string[] | null,
	abilityText: string,
    flavorText: string | null,
	setName: string,
	setNumber: number,
	imageUrl: string
}