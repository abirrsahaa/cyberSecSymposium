import React from "react";

const TicketCard = ({ price, event, buttonText, d1, d2, d3 }) => {
  return (
    <div className="bg-[#101a24] rounded-lg shadow-lg p-14 m-2 flex flex-col items-center w-[350px] border-b-4 border-[#13FBD3]">
      <div className="text-5xl font-bold text-[#13FBD3] mb-14">₹{price}</div>
      <h1 className="text-2xl text-white font-bold">{event}</h1>
      <br></br>
      <ul className="text-white text-lg mb-14">
        <li>{d1}</li>
        <li>{d2}</li>
        <li>{d3}</li>
      </ul>
      {/* <a
        href="#dummy-link"
        className="text-blue-500 hover:underline mb-4"
        target="_blank"
        rel="noopener noreferrer"
    >
        More Info
    </a> */}
      <button className="text-white p-5 rounded-md focus:outline-none bookTicket">
        Book Tickets
      </button>
    </div>
  );
};
//  <button className="text-white p-5 rounded-md focus:outline-none bookTicket">
// Book Tickets
// </button>
{
  /* <div className="text-4xl font-bold text-white text-center mt-10 mb-10 ">
        Buy Tickets
      </div> */
}

const Tickets = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl font-bold text-[#13FBD3] text-center mt-10 mb-10 ">
        Buy Tickets
      </div>
      <div className="flex justify-center mb-10 gap-10">
        {/* <TicketCard price="0" buttonText="Register" /> */}
        <TicketCard
          price="199"
          buttonText="Register"
          event="Event Pass Standard"
          d1="-"
          d2="Out of Stock"
          d3="-"
        />
        <TicketCard
          price="299"
          event="Event Pass Standard"
          buttonText="Register"
          d1="-"
          d2="Available"
          d3="-"
        />
        <TicketCard
          price="399"
          event="Event Pass Standard"
          buttonText="Register"
          d1="-"
          d2="Out of Stock"
          d3="-"
        />
      </div>
    </div>
  );
};

export default Tickets;
