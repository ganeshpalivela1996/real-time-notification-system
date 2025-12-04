"use client"

import { NotificationContext } from '@/context/NotificationContextComponent'
import { useContext } from 'react'

export default function useNotification() {
    return (
        useContext(NotificationContext)
    )
}
