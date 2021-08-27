
const mainNavigation  = (props) =>{
    return (
        <nav className="flex justify between bg-red-100">
            <div>Coin Portfolio Logo</div>
            <div className="flex">
                <p>Total Balance: 999 usd</p>
                <p>Profit / Loss: +132 usd</p>
            </div>
                <ul className="flex">
                    <li>Log In</li>
                    <li>Sign Up</li>
                </ul>
        </nav>
    );
}
export default mainNavigation;