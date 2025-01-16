import { useNavigate } from 'react-router-dom';

function StockAbout({ name }) {
  return (
    <div className="mb-8 h-full">
      <h2 className="text-2xl font-bold mb-4">About {name}</h2>
      <p className="text-gray-300 leading-relaxed">
        {name} PLC provides telecommunication services. The Company offers postpaid and prepaid plans, 
        transfer of credit, conference call, mobile Internet, messaging, voicemail, and roaming facilities. 
        {name} serves customers worldwide.
      </p>
    </div>
  );
}

export default StockAbout;