const ExtraCard = ({ addons, isMonth, manageAddons }) => {
  const handleChangePrice = (item) => {
    if (isMonth) return item.monthlyPrice;
    else return (item.monthlyPrice * 12).toFixed(2);
  };
  return (
    <>
      {addons?.map((item, index) => (
        <div className='col-md-6 mt-4' key={index}>
          <div className='card extraCard'>
            <div className='extraCard-top'>
              <h3 className='extraCard-heading'>{item.title}</h3>
              <p>£{handleChangePrice(item)} {isMonth ? "per month" : "per year"}</p>
            </div>
            <div className='card-body px-0'>
              <p className='card-text'>{item.text}</p>
              <button
                type='button'
                className={`btn float-end ${item.isSelected ? "btn-success" : "btn-secondary"}`}
                onClick={() => {
                  manageAddons(index, item.isSelected);
                }}
              >
                {item.isSelected ? "Remove this extra" : "Select this extra"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExtraCard;
