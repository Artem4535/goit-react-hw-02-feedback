import css from './Section.module.css'
function Section({ title, children }) {
    return (
        <section>{title && <h2 className={css.title}>{title}</h2>}
            {children}
        </section>
    )
}

export {Section}