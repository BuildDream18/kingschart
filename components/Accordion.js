import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Accordion(props) {
  const [lid, setLid] = useState(false);

  return (
    <div className="bg-white m-2">
      <div
        onClick={() => setLid(!lid)}
        className="flex w-full border border-gray-700 py-2 px-4 rounded-md justify-between items-center cursor-pointer"
      >
        <h4 className="text-sm text-gray-700 mr-5">{props.title}</h4>
        <span>
          {lid === true ? (
            <FontAwesomeIcon width="10" icon={faArrowDown} />
          ) : (
            <FontAwesomeIcon width="10" icon={faArrowRight} />
          )}
        </span>
      </div>
      <p className={`p-5 opacity-80 ${lid === true ? "block" : "hidden"}`}>
        {props.children}
      </p>
    </div>
  );
}
