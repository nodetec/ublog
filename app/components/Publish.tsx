import { useId, useState } from "react";
import Popup from "@/app/components/Popup";
import Input from "@/app/settings/Input";
import Select from "@/app/components/Select";

const Publish = () => {
  const popupId = useId();

  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [selectValue, setSelectValue] = useState<string>("");
  const [tagsList, setTagsList] = useState<string[]>([]);

  const STEPS = [
    {
      Details: (
        <>
          <Input
            value={summary ?? ""}
            onChange={(evn) => setSummary(evn.target.value)}
            label="Summary"
          />
          <Input
            value={image ?? ""}
            onChange={(e) => setImage(e.target.value)}
            label="Hero Image"
          />
          <>
            <Select
              value={selectValue}
              setValue={setSelectValue}
              items={tagsList}
              setItems={setTagsList}
              label="Add topics (up to 5)"
            />
          </>
        </>
      ),
    },
    {
      "Choose relays": <></>,
    },
  ];
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  return (
    <div className="sticky bottom-2 z-30">
      <label htmlFor={popupId} className="btn btn-primary">
        Publish
      </label>

      <Popup id={popupId} title="Publish">
        <ul className="steps w-full">
          {STEPS.map((step, idx) => (
            <li
              key={idx}
              className={`step ${idx <= activeStepIdx ? "step-primary" : ""}`}
            >
              {Object.keys(step)[0]}
            </li>
          ))}
        </ul>
        {Object.values(STEPS[activeStepIdx])[0]}

        <div className="flex items-center justify-between gap-4 mt-4">
          {activeStepIdx > 0 ? (
            <button
              className="btn"
              onClick={() =>
                setActiveStepIdx((currentState) => currentState - 1)
              }
            >
              Back
            </button>
          ) : (
            activeStepIdx < STEPS.length - 1 && (
              <button
                className="btn btn-primary ml-auto"
                onClick={() =>
                  setActiveStepIdx((currentState) => currentState + 1)
                }
              >
                Next
              </button>
            )
          )}
        </div>
      </Popup>
    </div>
  );
};

export default Publish;
