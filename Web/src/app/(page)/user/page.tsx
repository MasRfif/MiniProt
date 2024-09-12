export default function UserPage() {
  return (
    <>
      <section className=" w-full h-screen flex  justify-center items-center font-bold  bg-gradient-to-b from-black to-red-700/90">
        <div className="flex w-7/12 h-1/2 rounded-3xl bg-white">
          <div className="w-[250rem] p-10">
            <h1 className="font-extrabold">Username:</h1>
            <div className="flex  items-center space-x-2">
              <p>iwan</p>
              <p>Bildi</p>
            </div>
            <p className="mt-2">Email: a</p>

            <div className="mt-10 border border-gray-300 rounded-lg p-5">
              <h2 className="font-semibold">Wallet Info</h2>
              <div className="flex items-center space-x-2">
                <p>Balance:</p>
                <p>a</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <p>Transactions:</p>
                <p>a</p>
              </div>
            </div>

            <div className="mt-5 border border-gray-300 rounded-lg p-5">
              <h2 className="font-semibold">Point Info</h2>
              <div className="flex items-center space-x-2">
                <p>Total Points:</p>
                <p>a</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <p>Redeemed Points:</p>
                <p>a</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
