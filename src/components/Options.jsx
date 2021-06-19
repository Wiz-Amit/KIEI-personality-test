import OptionsA from "./Options/OptionsA";
import OptionsB from "./Options/OptionsB";
import OptionsC from "./Options/OptionsC";
import OptionsD from "./Options/OptionsD";
import OptionsE from "./Options/OptionsE";

const Options = ({ question, onChange }) => {
  switch (question.block) {
    case "a":
      return <OptionsA question={question} onChange={onChange} />;

    case "b":
      return <OptionsB question={question} onChange={onChange} />;

    case "c":
      return <OptionsC question={question} onChange={onChange} />;

    case "d":
      return <OptionsD question={question} onChange={onChange} />;

    case "e":
      return <OptionsE question={question} onChange={onChange} />;

    default:
      break;
  }
};

export default Options;
