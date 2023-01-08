import configBase from "@devsoutinho/common-test/base";
import configNative from "@devsoutinho/common-test/native";

const isWeb = process.env.UI_ENV === "web";

const config = isWeb
  ? {
      ...configBase,
    }
  : {
      ...configNative,
    };

console.log(config);

export default config;
