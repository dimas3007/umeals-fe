import React from "react";

import CardSettings from "../../components/card/CardSettings";
import CardProfile from "../../components/card/CardProfile";

const Settings = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
};

export default Settings;
