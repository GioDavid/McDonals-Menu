import React, { useEffect, useRef } from "react";
import { Modalize } from "react-native-modalize";
import ItemDetail from "../item-detail";
import { isNotValid } from "../../utils/common";

const Modal = ({ selectedItem, setSelectedItem }) => {
  const modalizeRef = useRef(null);

  useEffect(() =>{
    if (isNotValid(selectedItem)) {
      modalizeRef && modalizeRef.current && modalizeRef.current.close();
    } else modalizeRef && modalizeRef.current && modalizeRef.current.open();
  
  }, [selectedItem]);

  return (
    <Modalize ref={modalizeRef} modalTopOffset={50} closeOnOverlayTap onClosed={() => {setSelectedItem(null)}}>
      {selectedItem && <ItemDetail item={selectedItem} />}
    </Modalize>
  );
};

export default Modal;
