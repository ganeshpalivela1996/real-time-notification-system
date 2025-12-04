
import NotificationContextProvideComponent from "@/context/NotificationContextComponent";
import NotificationStream from "./NotificationStream";

export default function NotificationProviderWrapper({ children }) {
    return (
        <NotificationContextProvideComponent>
            <NotificationStream />
            {children}
        </NotificationContextProvideComponent>
    );
}
