const NavBar = (props) => {

  return(
      <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#CCCCFF"}} >
      <div className="container-fluid">
          <a className="navbar-brand" href="#">
              <img src="bank.png" alt="banking symbol" width="30" height="24"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link" id="home" href="#">Home <p className="tooltiptext">Your Bank Homepage</p></a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="create-account" href="#/createaccount/">Create Account <p className="tooltiptext">Create a New Account</p></a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="deposit" href="#/deposit/">Deposit <p className="tooltiptext">Make a Deposit</p></a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="withdraw" href="#/withdraw/">Withdraw <p className="tooltiptext">Make a Withdrawal</p></a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="all-data" href="#/alldata">All Data <p className="tooltiptext">View Banking History</p></a>
              </li>
          </ul>
          </div>
      </div>
      </nav>

      </>
      )
};