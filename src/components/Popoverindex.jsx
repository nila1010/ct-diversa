function Popoverindex() {
  return (
    <div className="flex justify-center">
      <button popovertarget="pop" className="bg-state-1 py-2 px-4 rounded">
        Hvad tester vi for?
      </button>
      <div popover="manual" id="pop" className="absolute bottom-[-392px] max-w-[400px] bg-state-1 rounded px-5 pb-3">
        <button className="mb-5 mt-2 justify-self-end" popovertarget="pop" popovertargetaction="hide">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FF7733" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </button>
        <p>Vi tester sitet for om det overholder standarder og giver dig en raport tilbage med mere overblik</p>
      </div>
    </div>
  );
}

export default Popoverindex;
