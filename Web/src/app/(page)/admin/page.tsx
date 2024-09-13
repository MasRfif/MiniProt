export default function adminPg() {
  return (
    <>
      <section className="flex w-full h-screen justify-center items-center bg-gradient-to-t from-black to-red-700/90">
        <div className="justify-center w-[80rem] h-[40rem] rounded-xl bg-white">
          <div className="p-10 w-full ">
            <div className="label font-bold pb-10">
              <span className="label-text text-2xl ">Add Your Event-Photo</span>
            </div>
            <input
              type="file"
              className="file-input file-input-ghost w-full max-w-xs"
            />
          </div>
          <div>
            <h1>event name</h1>
          </div>
          <div>
            <h1>description</h1>
          </div>
          <div>
            <h1>date</h1>
          </div>
          <div>
            <h1>time</h1>
          </div>
          <div>
            <h1>location</h1>
          </div>
          <div>
            <h1>availableSeat</h1>
          </div>
          <div>
            <h1>eventTypeId</h1>
          </div>
        </div>
      </section>
    </>
  );
}
