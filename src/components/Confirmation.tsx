import ButtonCustom from "./Button";

export default function Confirmation({
  message,
  onCancel,
  onSave,
}: {
  message: string;
  onSave?: () => void;
  onCancel?: () => void;
}) {
  return (
    <div className="fixed bg-black/70 w-screen h-screen left-0 bottom-0 flex justify-center items-center">
      <div className="bg-white w-1/3 h-1/4 absolute z-10 shadow-sm flex flex-col gap-6 justify-center items-center">
        <p className="text-lg">{message}</p>
        <div className="flex gap-2 w-full justify-center">
          <ButtonCustom onClick={onSave}>Yes</ButtonCustom>
          <ButtonCustom onClick={onCancel} type="danger">
            No
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
}
