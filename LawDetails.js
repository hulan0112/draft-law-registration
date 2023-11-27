import React, {useState} from "react";
import LawInfo from "./LawInfo";
import LawInfoForm from "./LawInfoForm";
import Modal from "react-modal";

const LawDetails =() =>{
    const initialLawInfo = {
        lawName: 'МОНГОЛ УЛСЫН ИХ ХУРЛЫН ТУХАЙ ХУУЛЬД ӨӨРЧЛӨЛТ ОРУУЛАХ ТУХАЙ',
        lawMakerName: 'Цэндийн МӨНХ-ОРГИЛ',
        currentState: 'Өргөн барьсан',
        lawType: 'Хуульд өөрчлөлт оруулах',
      };
      const [lawInfo, setLawInfo] = useState(initialLawInfo);
      const [isOpen, setIsOpen] = useState(false);
      const handleSaveEdit = (editedLawInfo) => {
        setLawInfo(editedLawInfo);
        setIsOpen(false);
      };
      const customStyles = {
        overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
           top: '50%',
           left: '50%',
           right: 'auto',
           bottom: 'auto',
           marginRight: '-50%',
           transform: 'translate(-50%, -50%)'
        }
     }
return(
    <div>
        <LawInfo
          {...lawInfo}
          onEditClick={() => setIsOpen(true)}/>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}> 
      <LawInfoForm {...lawInfo}
          onSave={handleSaveEdit}
          onCancel={() => setIsOpen(false)}/>
      </Modal>
    </div>
);
};
export default LawDetails;