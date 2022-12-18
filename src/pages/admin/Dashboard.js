import {
  // CardBarChart,
  CardLineChart,
  // CardSocialTraffic,
} from "../../components/card";

import CardPageVisits from "../../components/card/CardPageVisits";
import CardBarChart from "../../components/card/CardBarChart";
import CardSocialTraffic from "../../components/card/CardSocialTraffic";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart /> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
