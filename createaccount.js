const CreateAccount = () => {

    const [show, setShow]                       = React.useState(true);
    const [status, setStatus]                   = React.useState('');
    const [name, setName]                       = React.useState('');
    const [email, setEmail]                     = React.useState('');
    const [password, setPassword]               = React.useState('');
    const [passwardValid, setPasswordValid]     = React.useState(true);
    const ctx = React.useContext(UserContext);

    let url = window.location.href

    // used to change className of password input based on validation
    const classes = () => {
        const val  = passwardValid ? 'form-control' : 'form-control is-invalid';
        return val;
      };

    // Disable Button if field is empty
    const fieldsEntered = () => {
        if (!name && !email && !password) {
            console.log("all fields are empty");
            return true;
        } 
        return false;
    }; 
    
    // validates that field is not blank
    const validate = (field, label) => {
        if(!field) {
            alert(`Please enter you ${label} on the form.`);
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    };
    // specific password validation -- must be minimum 8 characters
    const validatePassword = (field) => {
        if (field.length < 8) {
            setPasswordValid(false);
            alert('Password must be at least 8 characters long.')
            setStatus('Error: Password must be more than 8 characters');
            setTimeout(() => {
                setStatus('');
                setPassword('');
                setPasswordValid(true);
            }, 3000);
            return false;
        }
        return true;
    }
    
    // function that runs onSubmit of form inputs
    // runs validate functions and if pass pushes info to context and shows success page
    const handleCreate = () => {
        console.log(name, email, password);
        if( validate(name, "name") && validate(email, "email") && validatePassword(password)) {
            ctx.users.push({name, email, password, balance:100});
            setShow(false);
        }
        else return;
    };

    // resets form for new input -- fired by onClick on Success form
    const clearForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
        setPasswordValid(true);
    };

    

    return (
        <>
        <Card
        current = "create-account"
        bgcolor = "dark bg-opacity-50"
        hbgcolor = "dark"
        txtcolor = "white"
        header = "Create Account"
        width = "18rem"
        status={status}
        body = {show ? (
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange = {e => setName(e.currentTarget.value)}></input><br/>
            
            <input type="input" className="form-control" id="email" placeholder="name@example.com" value={email} onChange = {e => setEmail(e.currentTarget.value)}></input><br/>

            <div>
              <input type="input" className={classes()} id="password" placeholder="Enter password" value={password} onChange = {e => setPassword(e.currentTarget.value)}></input>
              <div className="invalid-feedback">Password must be more than 8 characters</div>
            </div><br/>
            
            <button type="submit" className="btn btn-light" disabled={fieldsEntered()} onClick={handleCreate}>Create Account</button>
            </>
        ) : (
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
        ) }
        /> 
        </>    
    );
};