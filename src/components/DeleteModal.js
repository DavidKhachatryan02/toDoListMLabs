import { React } from "react";
import ReactModal from "react-modal";
import styles from "../Styles/deleteModal.module.css";

function DelateModal(props) {
  function delateTask(task) {
    props.deletePost(task);
    props.closeModal();
  }

  return (
    <>
      <ReactModal
        style={{content:{
          position: "absolute",
          width: "400px",
          height: "200px",
          top: "50%",
          left: "50%",
          background: "#FFFFFF",
          transform: "translate(-50%, -50%)",
          borderRadius: "4px",
        }}}
        isOpen={props.isModalOpen}
        preventScroll={false}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => {
          props.closeModal();
        }}
      >
        <p className={styles.modalText}>Are you sure you want to delate?</p>
        <button onClick={() => delateTask(props.taskToDelete)}>yes</button>
        <button onClick={() => props.closeModal()}>no</button>
      </ReactModal>
    </>
  );
}

export default DelateModal;
