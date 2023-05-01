import css from './Notification.module.css'
function NotificationMessage({ message }) {
    return <h3 className={css.title}>{message}</h3>
}
export { NotificationMessage }