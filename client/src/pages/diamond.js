import React, { useState } from "react";

const DiamondPattern = () => {
  const [str, setStr] = useState("FORMULAQSOLUTIONS");
  const [n, setN] = useState(null);
  const [showPattern, setShowPattern] = useState(false);

  const handleClick = () => {
    if (!isNaN(n) && n > 0 && n < 100) {
      setShowPattern(true);
    } else {
      setN(null);
      window.alert("Enter a number greater than 0 and less than 100.");
    }
  };

  const generateDiamond = () => {
    let output = "";
    let ch = 1,
      m = 0,
      l = 1,
      mm = 2;
    const s = "FORMULAQSOLUTIONS";
    const mid = Math.floor(n / 2);
    var sen = "";

    // the upper triangle formation is working till 25 number. Beyond that we are not getting the expected result.
    for (let i = 1; i <= mid + 1; i++) {
      for (let k = mid - 1; k >= i - 1; k--) {
        output += " ";
      }

      if (l > s.length) {
        sen = str.slice(m, str.length) + str.slice(0, mm);
        mm = mm + 3;
        ch = ch + 3;
      } else {
        sen = str.slice(m, l);
      }
      l = l + 3;
      m++;

      output += sen;
      output += "\n";
    }
    console.log(sen);
    //the lower traingle of the diamond is working perfectly fine as it depends upon the last word coming from the upper triangle.
    for (let i = 1; i <= mid + 1; i++) {
      for (let k = 0; k < i; k++) {
        output += " ";
      }
      output += sen.slice(1, -1);
      sen = sen.slice(1, -1);
      output += "\n";
    }
    return output;

    // second method which doesn't give the same output as required. But the diamond formation is working perfectly for any number.

    // for (let i = 1; i <= mid + 1; i++) {
    //   for (let k = mid - 1; k >= i - 1; k--) {
    //     output += " ";
    //   }
    //   for (let j = 1; j <= i * 2 - 1; j++) {
    //     output += str[ch % str.length];
    //     ch += 1;
    //   }
    //   output += "\n";
    // }

    // for (let i = 1; i <= mid + 1; i++) {
    //   for (let k = 0; k < i; k++) {
    //     output += " ";
    //   }
    //   for (let j = 1; j <= (mid + 1 - i) * 2 - 1; j++) {
    //     output += str[ch % str.length];
    //     ch += 1;
    //   }
    //   output += "\n";
    // }
    // return output;
  };

  return (
    <div className="container mx-auto  ml-[7rem] p-6 mt-[5rem]  bg-gray-200 rounded-md shadow-md">
      <div className="ml-[3rem]">
        <label className="block mb-2" htmlFor="inputN">
          Enter the number of lines for the design (less than 100):{" "}
        </label>
        <input
          className=" p-3 mb-4 border border-gray-300 rounded focus:border-blue-500"
          type="number"
          value={n}
          onChange={(e) => {
            setN(e.target.value);
            setShowPattern(false);
          }}
        />
        <button
          className="m-[2rem] p-3 bg-blue-500 text-white rounded hover:bg-blue-700 hover:scale-105"
          onClick={handleClick}
        >
          Display
        </button>
      </div>

      <div>
        {showPattern && (
          <div>
            <h2 className="ml-[3rem] text-xl font-bold mb-2">Output:</h2>
            <div className="mt-4 ml-[15rem]">
              <pre>{generateDiamond()}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiamondPattern;
