
export interface paginationState {
    page: number;
    pageSize: number;
    searchTerm: string;
}

export interface paginationStateAdvanced {
    page: number;
    pageSize: number;
    searchTerm: string;
    reportCountThreshold: number|null
}