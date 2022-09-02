import "./styles.css"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function Topbar(){
    return (
      <div className="container">
        <div className="topbarLeft">
          <div className="logo">
            <AccountBalanceWalletIcon />
            <h2>Bill Split</h2>
          </div>
        </div>
        <div className="topbarRight">
          <a href="/">Home</a>
          <a href="/">Profile</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
      </div>
    );
}

export default Topbar;