import './Card.css';
//Reusable wrapper component using arrow function syntax
const Card = (props) => {
//Anything recieved as class name is added to below string
    const classes = 'card ' + props.className;
//children prop will always be content between opening and closing tags of custom component- dynamically point at 'classes' const
    return <div className={classes}>{props.children}</div>;
}

export default Card;