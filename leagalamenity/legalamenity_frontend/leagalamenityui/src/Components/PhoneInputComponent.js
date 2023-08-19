import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";

// Usually you only need to import ConfigProvider & CSS once in App.js/App.tsx
// CSS order is important!
import "antd/dist/antd.css";
import "antd-country-phone-input/dist/index.css";

const Phone = () => {
  return (
    <ConfigProvider locale={en}>
      <CountryPhoneInput />
    </ConfigProvider>
  );
};
export default Phone;
