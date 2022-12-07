import axios from "axios";
import { useState, useEffect } from "react";
import { Tickets } from "../components/TicketItem/TichketItemData";

export const useGetTickets = () => {
    const [tickets, setTickets] = useState<Tickets>();
    const [error, setError] = useState<string>();
    useEffect(() => {
        const getTickets = async () => {
            try {
                const response = await axios.get<Tickets>('./tickets.json');
                if (response.status === 200) {
                    setTickets(response.data);
                }
            } catch (err: any) {
                setError(err)
            }
        }
        getTickets()
    }, [])
    return { tickets, error }
}