"use client";

import useNotification from "@/hooks/useNotification";
import { Trash } from "lucide-react";
export default function NotificationList() {
    const {
        notificationsList,
        markAsRead,
        markAllRead,
        deleteNotification,
        deleteAllNotifications
    } = useNotification();

    return (
        <div className="w-80 bg-blue-100/20 shadow-lg! rounded-lg!">
            <div className="flex justify-between items-center mb-3 border-b py-2 sticky top-0 bg-white px-3">
                <h2 className="text-blue-400 font-semibold">Notifications</h2>
                <div className="flex items-center gap-x-3">
                    <button onClick={deleteAllNotifications} className="text-gray-300 text-sm cursor-pointer">Clear all</button>
                    <button onClick={markAllRead} className="text-amber-300 text-sm cursor-pointer">Mark all read</button>
                </div>
            </div>
            <div className="px-3">
                {/* fall back when no notifications */}
                {notificationsList?.length === 0 && <p>No notifications</p>}

                {/* notifications list */}
                {notificationsList?.map((n) => (
                    <div key={n.id} className="border-b border-gray-200 py-2 flex justify-between">
                        <div onClick={() => markAsRead(n.id)}>
                            <p className={n.read ? "text-gray-500" : "font-semibold"}>
                                {n.message}
                            </p>
                            <small>{n.time}</small>
                        </div>
                        <button onClick={() => deleteNotification(n.id)}>
                            <Trash size={"20"} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
