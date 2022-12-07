export interface Tickets {
    tickets: Ticket[]
}

export interface Ticket {
    details: string,
    name: string,
    date: string,
    priority: string,
    time: string,
    updated: string,
    onTime: string
}
