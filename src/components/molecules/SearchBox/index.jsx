import Button from "src/components/atoms/Button";
import Input from "src/components/atoms/Input";

const SearchBox = () => {
  return (
    <div className="bg-wht rounded-md">
      <Input />
      <Button label={`Search`} classname={`rounded-md`} />
    </div>
  );
};

export default SearchBox;
