"use client"

import React, { createContext, useEffect, useState } from 'react'

export const NotificationContext = createContext(null)

function NotificationContextProvideComponent({ children }) {
    // states
    const [notificationsList, setNotificationsList] = useState([])
    const [unreadCount, setUnreadCount] = useState(0)

    // get notifications from local storage
    useEffect(() => {
        const savedNotificationsFromLocalStorage = JSON.parse(localStorage.getItem("notifications")) || []
        setNotificationsList(savedNotificationsFromLocalStorage)
        const updateUnreadCount = savedNotificationsFromLocalStorage?.filter(c => !c?.read)?.length
        setUnreadCount(updateUnreadCount)
    }, [])

    // set notifications to local storage
    useEffect(() => {
        localStorage.setItem("notifications", JSON.stringify(notificationsList))
        const updateUnreadCount = notificationsList?.filter(c => !c?.read)?.length
        setUnreadCount(updateUnreadCount)
    }, [notificationsList])

    // add notification logic
    function addNotification(textMsg) {
        const newNofication = {
            id: Date.now(),
            message: textMsg,
            time: new Date().toLocaleTimeString(),
            read: false
        }

        setNotificationsList(prev => [newNofication, ...prev])
    }

    // mark as read logic
    function markAsRead(id) {
        setNotificationsList((prev) =>
            prev.map((n) => (n.id === id ? { ...n, read: true } : n))
        );
    }

    // mark all read logic
    function markAllRead() {
        setNotificationsList((prev) => prev.map((n) => ({ ...n, read: true })));
    };

    // delete notification logic
    function deleteNotification(id) {
        setNotificationsList((prev) => prev.filter((n) => n.id !== id));
    };

    // clear all notifications logic
    function deleteAllNotifications() {
        setNotificationsList([])
    }


    return (
        <NotificationContext.Provider value={
            {
                addNotification, markAsRead, markAllRead, deleteNotification, deleteAllNotifications, notificationsList, unreadCount
            }
        }>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvideComponent
