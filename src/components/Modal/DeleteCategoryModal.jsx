import Modal from "./Modal";
import { forwardRef } from "react";
const DeleteCategoryModal = forwardRef(function DeleteCategoryModal(
  { onApply, onClose },
  ref,
) {
  return (
    <Modal onApply={onApply} ref={ref} onClose={onClose}>
      <>
        <h2 className="font-bold text-2xl text-red-600 ">Are you sure?</h2>
        <p className="font-bold text-lg mb-4">
          Do you really want to remove this category?
        </p>
      </>
    </Modal>
  );
});
export default DeleteCategoryModal;
