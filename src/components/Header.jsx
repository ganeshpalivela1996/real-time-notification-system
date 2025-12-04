"use client";

import { Bell } from "lucide-react";
import useNotification from "@/hooks/useNotification";
import { useState } from "react";
import NotificationList from "./NotificationList";

export default function Header() {
    const { unreadCount } = useNotification();
    const [open, setOpen] = useState(false);

    return (
        <header className="flex justify-between bg-blue-400 px-10 py-5 relative">
            <h1 className="font-semibold italic text-2xl text-white">Notification Tracker</h1>
            <div className="relative inline-block">
                {unreadCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {unreadCount}
                    </span>
                )}

                <Bell
                    className="text-white cursor-pointer w-7 h-7"
                    role="button"
                    onClick={() => setOpen(!open)}
                />

                {open && (
                    <div className="absolute right-0 top-16 max-h-[80vh] overflow-auto z-50! bg-white">
                        <NotificationList />
                    </div>
                )}
            </div>
        </header>
    );
}
