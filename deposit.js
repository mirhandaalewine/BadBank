const Deposit = () => {
  const ctx = React.useContext(UserContext);

  // this should grab only the last item in the array
  // later will want to add an option to chose an account and then pick the last of that name in the array
  let len = ctx.users.length - 1; 

  // destructuring so have info to push back in later
  // becuase users is an object needed to have {} on the destructuring
  let {name, email, password, balance} = ctx.users[len]; 
  
  // state varibles
  const [show, setShow]           = React.useState(true);
  const [status, setStatus]       = React.useState('');
  const [currentBalance, setCurrentBalance]     = React.useState(balance);
  const [deposit, setDeposit]     = React.useState(0);

  let url = window.location.href

  let titleHTML = `Balance: \$ ${currentBalance}`; 


  // VALIDATION SECTION  
  const validate = (field) => {
      let label = "";
      let num = Number(field);
      console.log(num);
      if(!field) {
          label = "Deposit Amount may not be left blank.";
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''), 3000);
          alert(label);
          return false;
      };
      
      if (isNaN(num)) {
          label = "Deposit Amount must be a number";
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''), 3000);
          alert(label);
          return false;
      };

      if (Number(field) < 0){
          label = "Deposit Amount may not be negative.";
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''), 3000);
          alert(label);
          return false;
      };
      return true;
  };

  
  const handleCreate = () => {
      if(!validate(deposit)) return;

      let newBalance = currentBalance + Number(deposit); // deposit from form reads as string so changed to number here
      setCurrentBalance(newBalance);
      ctx.users.push({name, email, password, balance:newBalance}); // use newBalance not currentBalance because of the way state works. (look this video up to refresh your mind)
      setShow(false);
  };

  const clearForm = () => {
      setDeposit(0);
      setShow(true);
  };

  // Disable Button if field is empty
  const fieldsEntered = () => {
      if (!deposit) {
          console.log("all fields are empty");
          return true;
      } 
      return false;
  }; 

  return (
      <Card
          current = "deposit"
          bgcolor = "dark bg-opacity-50"
          hbgcolor = "dark"
          txtcolor = "white"
          width = "18rem"
          header = "Deposit Page"
          title = {titleHTML}
          status={status}
          body = {show ? (
          <>
          Deposit Amount<br/>
          <input type="input" className="form-control" id="deposit" placeholder="0.00" value={deposit} onChange = {e => setDeposit(e.currentTarget.value)}></input><br/>
          <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={fieldsEntered()} >Deposit Funds</button>
          </>
          ) : (
          <>
          <h5>Your deposit was successful.</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Deposit?</button>
          </>
          )}
      />
  );
};