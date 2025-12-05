"use client";

import { useEffect } from "react";
import useNotification from "@/hooks/useNotification";

export default function NotificationStream() {
    const { addNotification } = useNotification();

    // new notification will be created for every 1 minute
    useEffect(() => {
        function start() {
            const messages = [
                "New user signed up!",
                "Server load increased",
                "New comment received",
                "Payment completed",
                "New message from support",
                "New update"
            ];

            setInterval(() => {
                const msg = messages[Math.floor(Math.random() * messages.length)];
                addNotification(msg);
            }, 60000);
        }

        start();
    }, []);

    return null;
}
