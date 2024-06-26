function Popoverindex() {
  return (
    <div className="flex justify-center">
      <button popovertarget="pop" className="ml-[-2px] py-2 px-5 text-sm relative before:rounded before:absolute before:inset-0 before:content-[''] before:border-2 before:border-state-2 before:-z-50 after:absolute after:inset-0 after:content-[''] after:-z-50 after:bg-state-2 after:w-full after:h-full hover:after:scale-y-[0.8] hover:after:scale-x-[0.95] after:transition after:duration-500 after:ease after:rounded">
        Hvad tester vi for?
      </button>
      <div popover="manual" id="pop" className="absolute bottom-[-440px] max-w-[400px] bg-state-1-light outline-state-1 outline outline-2 rounded px-5 pb-3">
        <div className="flex place-content-center gap-5 ">
          <p className="text-left">
            Vi sikrer jeres indholds tilgængelighed ved at teste efter WCAG 2.1 guidelines på Level A, AA, AAA og bedste praksis. For mere detaljeret information, besøg
            <span className="mr-2"></span>
            <a href="https://dequeuniversity.com/rules/axe/html/4.9" target="_blank" className="text-state-3 hover:text-state-3-light underline">
              Deque University
            </a>
            .
          </p>

          <button className="mb-5 mt-2" popovertarget="pop" popovertargetaction="hide">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FF7733" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popoverindex;
