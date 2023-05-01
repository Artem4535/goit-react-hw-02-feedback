import css from './Feedback.module.css'
function FeedbackOptions({ options, onLeaveFeedback }) {
   return (<ul className={css.list}>
      {options.map(option => <li key={option}>
         <button className={css.btn} onClick={() => onLeaveFeedback(option)}>{option}</button>
      </li>)}
   </ul> )
}

export { FeedbackOptions }


