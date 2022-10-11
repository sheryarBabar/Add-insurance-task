const MainCard = ({ setIsMonth, isMonth, switchAnnual, switchMonthly, price }) => {
  const setCost = () => {
    setIsMonth(!isMonth);
    isMonth ? switchAnnual(price) : switchMonthly(price);
  };

  return (
    <div className='card quoteCard'>
      <h1>£{price !== 0 ? price?.toFixed(2) : Number(0).toFixed(2)}</h1>
      <h4>{isMonth ? "per month" : "per year"}</h4>
      <p className='quoteCard-text'>
        This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.
      </p>
      <button type='button' className='btn btn-primary btn-block' onClick={setCost}>
        {isMonth ? "Switch to annual" : " Switch to month"}
      </button>
    </div>
  );
};

export default MainCard;
