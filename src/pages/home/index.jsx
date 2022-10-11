import { useEffect, useState } from "react";
import { ExtraCard, MainCard, UserDetail } from "../../Components/home";
import { AppLoader } from "../../Components/common";
import axios from "axios";

const Home = () => {
  const [quote, setQuote] = useState();
  const [cost, setCost] = useState(0);
  const [addons, setAddons] = useState([]);
  const [isMonth, setIsMonth] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (process.env.NODE_ENV === "development") {
      const { data: quote } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/quote`);
      setQuote(quote[0]);
      setCost(quote[0].monthlyPrice);
      const { data: addons } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/addons`);
      setAddons(addons);
    }
  };

  const addAddon = (monthPrice, annualPrice) => {
    isMonth ? setCost(monthPrice + cost) : setCost(annualPrice + cost);
  };

  const removeAddon = (monthPrice, annualPrice) => {
    isMonth ? setCost(cost - monthPrice) : setCost(cost - annualPrice);
  };

  const manageAddons = (index, isSelected) => {
    if (isSelected) {
      removeAddon(addons[index].monthlyPrice, addons[index].annualPrice);
    } else {
      addAddon(addons[index].monthlyPrice, addons[index].annualPrice);
    }
    let newData = [...addons];
    newData[index].isSelected = !isSelected;
    setAddons(newData);
  };

  return (
    <div className='main-document'>
      <div className='container'>
        <h3 className='fw-normal p-3 text-uppercase bg-white mb-0 border border-dark'>Home Insurance</h3>
        <div className='content py-3'>
          <div className='container my-4'>
            <div className='row'>
              <div className='col-md-6'>
                <UserDetail data={quote} />
              </div>
              <div className='col-md-6'>
                <MainCard
                  price={cost}
                  switchMonthly={(cost) => setCost(cost / 12)}
                  switchAnnual={(cost) => setCost(cost * 12)}
                  isMonth={isMonth}
                  setIsMonth={setIsMonth}
                />
              </div>
            </div>
          </div>
          <div className='container mb-5'>
            <h1 className='heading'>Tailor your cover with our optional extra</h1>
            <div className='row'>
              {addons.length > 0 ? (
                <ExtraCard addons={addons} isMonth={isMonth} manageAddons={manageAddons} />
              ) : (
                <AppLoader />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
