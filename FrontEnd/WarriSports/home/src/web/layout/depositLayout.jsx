import "../components/assets/css/globalstyle.css";

const DepositLayout = () => {
  return (
    <>
      <div className="ws-depoit">
        <nav className="flex justify-center items-center">
          <ul className="ws-nav-item flex space-x-6 text-2xl mt-5">
            <li>
              <a
                className="hover:bg-[#00BC7D] hover:text-white px-8 py-5"
                href="../../client/dashboard/deposit/card"
              >
                Card
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#00BC7D] hover:text-white px-8 py-5"
                href="/tranfer"
              >
                Transfer
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#00BC7D] hover:text-white px-8 py-5"
                href="/bank"
              >
                Bank
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center p-10 mt-5">
          <form>
            <div className="card--info font-light flex gap-8 items-center">
              <label className="font-normal">Card Info</label>
              <input
                type="text"
                name="card number"
                id="card number"
                placeholder="Card Number"
                required
                className="h-10 w-65 border outline-0"
              />
              <label className="font-normal">Expiry</label>
              <input
                type="text"
                name="expiry"
                id="expiry"
                placeholder="Expiry"
                required
                className="h-10 w-40 border outline-0"
              />
            </div>
            <div className="ws--amount flex py-8 items-center gap-8">
              <label className="font-normal">Amount NGN</label>
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="Min. 100"
                required
                className="h-10 w-40 border outline-0"
              />
              <label className="font-normal">CVV</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                placeholder="CVV"
                required
                className="h-10 w-25 border outline-0"
              />
            </div>
            <div className="ws--btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DepositLayout;
