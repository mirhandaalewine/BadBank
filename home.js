function Home() {
    return(
        <Card 
            bgcolor="dark"    
            txtcolor="light"
            width="18rem"
            header="Welcome to BadBank"
            title="Please Create an Account or Login to deposit or withdraw funds"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}