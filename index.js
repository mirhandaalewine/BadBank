function Spa(){

    return(
     <HashRouter>
        <NavBar />
        <UserContext.Provider value={{users:[{name:'John Doe', email:'johndoe@gmail.com', password:'secret', balance:''}]}}>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" component={CreateAccount} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/alldata/" component={AllData} />
            </div>
        </UserContext.Provider>
    </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
);