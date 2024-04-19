import CardCustom from "@/components/CardCustom";
import LabelCustom from "@/components/Label";

export default function CuUsers() {
  return (
    <div>
      <CardCustom type="display">
        <div className="w-fit">
          <LabelCustom>Name</LabelCustom>
          <input className=""></input>
          <LabelCustom>Email</LabelCustom>
          <input className=""></input>
          <LabelCustom>Gender</LabelCustom>
          <select className="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
      </CardCustom>
    </div>
  );
}
