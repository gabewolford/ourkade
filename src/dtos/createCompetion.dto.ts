export interface CreateCompetitionDto {
	gameId: number;
	entryFee: number;
	prizes: number[];
	startTime: number;
	endTime: number;
}