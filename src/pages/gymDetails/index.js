import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GymClasses from "../gymClasses";
import GymInfo from "../gymInfo";

const GymDetails = () => {
  return (
    <div>
      <h1>GymDetails</h1>
      <Tabs
        defaultActiveKey="GymInfo"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="GymInfo" title="GymInfo">
          <GymInfo />
        </Tab>
        <Tab eventKey="GymClasses" title="GymClasses">
          <GymClasses />
        </Tab>
      </Tabs>
    </div>
  );
};

export default GymDetails;
