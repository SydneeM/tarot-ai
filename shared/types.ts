export interface Card {
  desc: string;
  meaning_rev: string;
  meaning_up: string;
  name: string;
  name_short: string;
  type: string;
  value: string;
  value_int: 1;
}

export interface CardData {
  nhits: number;
  cards: Card[];
}

export interface CardPosition {
  position: string;
  card: Card;
}
