const Pagination = ({ page, last_page, set_page }) => {
  const scroll_top = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handle_next_page = () => {
    set_page((prev_state) => prev_state + 1);
    scroll_top();
  };
  const handle_prev_page = () => {
    set_page((prev_state) => {
      if (prev_state === 1) {
        return prev_state;
      } else {
        return prev_state - 1;
      }
    });
    scroll_top();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl">
      <button
        className="transition-all hover:text-color-accent"
        onClick={handle_prev_page}
      >
        Previous
      </button>
      <p>
        {page} of {last_page}
      </p>
      <button
        className="transition-all hover:text-color-accent"
        onClick={handle_next_page}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
