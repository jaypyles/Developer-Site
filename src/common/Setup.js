import React from "react";
const Setup = () => {
  return (
    <div className="prose">
      <div className="main-pc">
        <h1 className="underline">Main Gaming/Regular-Use PC</h1>
        <p>
          This is my main PC that I use for daily tasks. It is a custom built
          Windows 11 Pro gaming pc.
        </p>
        <h2 className="text-white text-center">Specifications</h2>
        <table class="table border-collapse: separate">
          <thead className="text-white">
            <tr>
              <th>Component</th>
              <th>Brand</th>
              <th>Specs</th>
            </tr>
          </thead>
          <tbody className="text-[#133fee]">
            <tr>
              <td>Operating System</td>
              <td>Windows 11 Pro</td>
              <td></td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>Corsair Vengence Pro-RGB</td>
              <td>32 GB, 3600MHz</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
        <h1>Main Server "Optimus"</h1>
        <h1>Mini PC "Pequeno"</h1>
      </div>
    </div>
  );
};

export default Setup;
