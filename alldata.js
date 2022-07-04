const AllData = () => {
    const ctx = React.useContext(UserContext);

    let userData = ctx.users;
    let len = userData.length;
    
    
    return (
        <Card
        current = "all-data"
        bgcolor = "light"
        txtcolor = "black"
        hbgcolor = "light"
        width = "auto"
        header = "All Data"
        title = "Your Banking History"
        body = {(
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Transaction #</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((transaction, index) => (
                    <tr key={index}>
                    <th scope="col">{index}</th>
                    <th scope="col">{transaction.name}</th>
                    <th scope="col">{transaction.email}</th>
                    <th scope="col">{transaction.password}</th>
                    <th scope="col">${transaction.balance}</th>
                </tr>
                ))}
            </tbody>
        </table>
        )}
        />       
    );
};