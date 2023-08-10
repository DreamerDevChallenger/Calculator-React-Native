const conditionOperator = ({
  draft,
  result,
}: {
  draft: string;
  result: string | Function;
}) => {
  if (draft.length === 0) {
    return draft;
  } else if (draft.slice(draft.length - 1) === "÷") {
    return draft;
  } else if (draft.slice(draft.length - 1) === "+") {
    return draft;
  } else if (draft.slice(draft.length - 1) === "-") {
    return draft;
  } else if (draft.slice(draft.length - 1) === "x") {
    return draft;
  } else if (draft.slice(draft.length - 1) === "%") {
    return draft;
  } else {
    if (typeof result === "string") {
      return result;
    } else {
      return result();
    }
  }
};

export const calculAction = {
  zero: (draft: string) => {
    return draft + "0";
  },
  one: (draft: string) => {
    return draft + "1";
  },
  two: (draft: string) => {
    return draft + "2";
  },
  three: (draft: string) => {
    return draft + "3";
  },
  four: (draft: string) => {
    return draft + "4";
  },
  five: (draft: string) => {
    return draft + "5";
  },
  six: (draft: string) => {
    return draft + "6";
  },
  seven: (draft: string) => {
    return draft + "7";
  },
  eight: (draft: string) => {
    return draft + "8";
  },
  nine: (draft: string) => {
    return draft + "9";
  },
  dot: (draft: string) => {
    if (draft.includes(".")) {
      return draft;
    } else {
      return draft + ".";
    }
  },
  plus: (draft: string) => {
    return conditionOperator({ draft, result: draft + "+" });
  },
  less: (draft: string) => {
    return conditionOperator({ draft, result: draft + "-" });
  },
  multiply: (draft: string) => {
    return conditionOperator({ draft, result: draft + "x" });
  },
  divide: (draft: string) => {
    return conditionOperator({ draft, result: draft + "÷" });
  },
  remove: (draft: string) => {
    return draft.slice(0, -1);
  },
  percent: (draft: string) => {
    return draft + "%";
  },
  reset: (draft: string) => {
    return (draft = "");
  },
  result: (draft: string) => {
    const replace = draft.replace(/x/g, "*").replace(/÷/g, "/");

    function result() {
      const value = Function("return " + replace)();
      console.log(value);
      return (draft = JSON.stringify(value));
    }

    return conditionOperator({
      draft,
      result: result,
    });
  },
};
