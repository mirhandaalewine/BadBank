const Route =         ReactRouterDOM.Route;
const Link =          ReactRouterDOM.Link;
const HashRouter =    ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;

// Creating Context Variables
const UserContext = React.createContext(null);

const Card = (props) => {
    // setting background color and text color
    const classes = () => {
        const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
      };
    // setting header background color
    const headerClass = () => {
      const hbg = props.hbgcolor ? 'bg-' + props.hbgcolor : ' ';
      return 'card-header ' + hbg;
    };

    return (
        <div className={classes()} style={{maxWidth:props.width}}>
            {props.header && <div className={headerClass()}>{props.header}</div>}
            <div className="card-body">
                {props.title && <h5 className="card-title">{props.title}</h5>}
                {props.text && <p className="card-text">{props.text}</p>}
                {props.body && <div className="card-body">{props.body}</div>} 
                {props.body && <p className="card-text">{props.status}</p>} 
            </div>
      </div> 
    );
};
