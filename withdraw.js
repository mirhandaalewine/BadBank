const Withdraw = () => {
  const ctx = React.useContext(UserContext);
  let len = ctx.users.length - 1; // this should grab only the last item in the array
  // later will want to add an option to chose an account and then pick the last of that name in the array

  let {name, email, password, balance} = ctx.users[len]; // destructuring so have info to push back in later
  // becuase users is an object needed to have {} on the destructuring

  const [show, setShow]                       = React.useState(true);
  const [status, setStatus]                   = React.useState('');
  const [currentBalance, setCurrentBalance]   = React.useState(balance);
  const [withdrawal, setWithdrawal]           = React.useState(0);

  let titleHTML = `Balance: \$ ${currentBalance}`; 


  // VALIDATION SECTION  
  const validate = (field) => {
      let label = "";
      let num = Number(field);
      console.log("num>>>", num);
      let newBalance = balance - num;
      console.log("newBalance>>>", newBalance);
      if(!field) {
          label = "Withdrawal Amount may not be left blank.";
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''), 3000);
          alert(label);
          return false;
      };

      if (isNaN(num)) {
          label = "Withdrawal Amount must be a number";
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''), 3000);
          alert(label);
          return false;
      };

      if (Number(field) < 0){
          label = "Withdrawal Amount may not be negative.";
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''), 3000);
          alert(label);
          return false;
      };

      if(newBalance < 0) {
          label = "OverDraft Alert: Insuffience Funds for this withdrawal amount."
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''), 3000);
          alert(label);
          return false;
      }
      return true;
  };

  // Disable Button if field is empty
  const fieldsEntered = () => {
      if (!withdrawal) {
          console.log("all fields are empty");
          return true;
      } 
      return false;
  }; 

  const handleCreate = () => {
      if(!validate(withdrawal)) return;

      let newBalance = currentBalance - Number(withdrawal); // deposit from form reads as string so changed to number here
      setCurrentBalance(newBalance);
      ctx.users.push({name, email, password, balance:newBalance}); // use newBalance not currentBalance becuase of the way state works. (look this video up to refresh your mind)
      setShow(false);
  };

  const clearForm = () => {
      setWithdrawal(0);
      setShow(true);
  };

  return (
      <Card
          current = "withdraw"
          bgcolor = "dark bg-opacity-50"
          hbgcolor = "dark"
          txtcolor = "white"
          width = "18rem"
          header = "Withdrawal Page"
          title = {titleHTML}
          status={status}
          body = {show ? (
          <>
          Withdrawal Amount<br/>
          <input type="input" className="form-control" id="withdrawal" placeholder="0.00" value={withdrawal} onChange = {e => setWithdrawal(e.currentTarget.value)}></input><br/>
          <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={fieldsEntered()} >Withdraw Funds</button>
          </>
          ) : (
          <>
          <h5>Your withdrawal was successful.</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Withdrawal?</button>
          </>
          )}
      />
  );
};
