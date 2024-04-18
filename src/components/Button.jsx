/* eslint-disable react/prop-types */
function Button({ styles, cssClasses, text }) {

    return (
        // <button className={`bg-secondary p-1 rounded [font-size:${fontSize}] [padding:${padding}] [width:${width}]`} >
        <button style={styles} className={cssClasses} >
            {text || '---'}
        </button>
    )
}

export default Button