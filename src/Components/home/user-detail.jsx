const UserDetail = ({ data }) => {
  return (
    <div className='quoteDetails'>
      <h3 className='heading'>{data ? `Hey ${data?.firstName + " " + data?.lastName},` : "Loading..."}</h3>
      <p className='quoteDetails-text'>
        Here is your quote for Royal &amp; Sun Alliance,
        {data?.address1 + ", " + data?.address2}
      </p>
      <p>Quote reference: {data?.quoteRef}</p>
      <p>Covers starts on {new Date(data?.startDate).toDateString()}</p>
    </div>
  );
};

export default UserDetail;
