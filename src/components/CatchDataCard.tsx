import React from "react";
import { strings } from "../_data";

export const CatchDataTable = () => (
  <div>
    {strings.prompt_landingConfirm}
    <hr />
    <table>
      <tbody>
        <tr>
          <td>📅</td>
          <td>{strings.date}</td>
          <td>2016-12-14</td>
        </tr>
        <tr>
          <td>⌚</td>
          <td>{strings.time}</td>
          <td>11:33:00.125+08:00</td>
        </tr>
        <tr>
          <td>🐟</td>
          <td>{strings.catch}</td>
          <td>Atlantic Cod</td>
        </tr>
        <tr>
          <td>🔢</td>
          <td>{strings.quantity}</td>
          <td>302</td>
        </tr>
        <tr>
          <td>🔢</td>
          <td>{strings.preservation_method}</td>
          <td>{strings.salted}</td>
        </tr>
        <tr>
          <td>📍</td>
          <td>{strings.geoLocation}</td>
          <td>geo:22.58425,120.31815</td>
        </tr>
      </tbody>
    </table>
  </div>
);
