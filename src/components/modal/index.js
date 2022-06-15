import React, { useContext, useEffect, useRef } from "react";
import { Modalize } from "react-native-modalize";
import ItemDetail from "../item-detail";
import Context from "../../context/context";
import { isNotValid } from "../../utils/common";

const Modal = ({ selectedItem }) => {
  const modalizeRef = useRef(null);
  const context = useContext(Context);

  if (isNotValid(selectedItem)) {
    modalizeRef && modalizeRef.current && modalizeRef.current.close();
  } else modalizeRef && modalizeRef.current && modalizeRef.current.open();

  return (
    <Modalize ref={modalizeRef}>
      <ItemDetail item={context.selectedItem} />
    </Modalize>
  );
};

export default Modal;
