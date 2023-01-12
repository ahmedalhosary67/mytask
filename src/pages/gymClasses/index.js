import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Table, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";

const GymClasses = () => {
  const [state, setstate] = useState({});
  const { id } = useParams();

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { data } = await axios.get(
      `https://staging.algym.com/api/v1/gyms/${id}/gym_classes`
    );
    setstate(data.data[0]);
    // console.log(data.data[0]);
  }
  return (
    <div>
      <h1>GymClasses</h1>
      <Table striped bordered hover>
        <tbody>
          {Object.entries(state)?.map((key) => (
            <tr key={key}>
              <td>{key[0]}</td>
              <td>
                <ol>
                  {typeof key[1] == "string" ||
                  typeof key[1] == "number" ||
                  typeof key[1] == "boolean"
                    ? key[1]
                    : key[1]?.map((key2) => (
                        <li>
                          <ul>
                            {Object.entries(key2)?.map((key3) => (
                              <li>
                                <span>{key3[0]}</span> : &nbsp;
                                <span>
                                  {typeof key3[1] == "string" ||
                                  typeof key3[1] == "number" ||
                                  typeof key3[1] == "boolean"
                                    ? key3[1]
                                    : key3[1]?.map((item) => (
                                        <ul className="mb-3">
                                          {Object.entries(item)?.map((key4) => (
                                            <li>
                                              <span>{key4[0]}</span> : &nbsp;
                                              <span>{key4[1]}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      ))}
                                </span>
                              </li>
                            ))}
                            <br />
                          </ul>
                        </li>
                      ))}
                </ol>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <ul>
        {Object.entries(state)?.map((key) => (
          <div key={key}>
            <span>{key[0]}</span>
          </div>
        ))}
      </ul> */}
    </div>
  );
};

export default GymClasses;
