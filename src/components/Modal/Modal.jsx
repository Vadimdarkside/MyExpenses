import { forwardRef, useImperativeHandle, useRef } from "react";
const Modal = forwardRef(function Modal({ children, onApply }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      Open() {
        dialog.current.showModal();
      },
      Close() {
        dialog.current.close();
      },
    };
  });
  return (
    <dialog className="p-5 rounded-lg backdrop:bg-black/90" ref={dialog}>
      <div className="">
        {children}
        <div className="flex flex-row justify-end">
          <button
            className="p-1 px-4 mr-2 border-black border-2 rounded-xl hover:bg-gray-400/70"
            onClick={() => {
              onApply();
              dialog.current.close();
            }}
          >
            Ok
          </button>
          <button
            className="p-1 px-4 mr-2 border-black border-2 rounded-xl hover:bg-gray-400/70"
            onClick={() => {
              dialog.current.close();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
});
export default Modal;
