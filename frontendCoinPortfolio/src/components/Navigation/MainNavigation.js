
const mainNavigation  = (props) =>{
    return (
        <nav className="flex bg-red-100">
            <div className="w-1/4">Coin Portfolio Logo</div>
            <div className="flex justify-around w-2/4">
                <p>Total Balance: 999 usd</p>
                <p>Profit / Loss: +132 usd</p>
            </div>
                <ul className="flex justify-end w-2/4">
                    <li>Log In</li>
                    <li>Sign Up</li>
                </ul>
        </nav>
    );
}
export default mainNavigation;