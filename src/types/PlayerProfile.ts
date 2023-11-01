export interface PlayerProfile {
	id: number;

	authId: string;

	referredBy: string;

	tickets: number;

	dailyTickets: number;

	kade: number;

	kadeEarnedToday: number;

	joinTimestamp: number; // Unix timestamp in seconds

	lastGameTimestamp: number; // Unix timestamp in seconds

	lastSystemProfileUpdateTimestamp: number // Unix timestamp in seconds

	status: PlayerProfileStatus;
}

export enum PlayerProfileStatus {
    Disabled,
    Created,
}