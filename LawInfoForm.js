import React, { useState } from 'react';
import styles from '../styles/LawInfoForm.module.css'

const LawInfoForm = ({ lawName, lawMakerName, currentState, lawType, onSave, onCancel }) => {
  const [editedLawName, setEditedLawName] = useState(lawName);
  const [editedLawMakerName, setEditedLawMakerName] = useState(lawMakerName);
  const [editedCurrentState, setEditedCurrentState] = useState(currentState);
  const [editedLawType, setEditedLawType] = useState(lawType);

  const handleSave = () => {
    onSave({
      lawName: editedLawName,
      lawMakerName: editedLawMakerName,
      currentState: editedCurrentState,
      lawType: editedLawType,
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Төслийн мэдээлэл засах</h2>
      <div className={styles.item} id={styles.item1}>
        <h4 className={styles.label}>Төслийн нэр:</h4>
        <input
          type="text"
          value={editedLawName}
          onChange={(e) => setEditedLawName(e.target.value)}
        />
      </div>
      <div className={styles.item} id={styles.item2}>
        <h4 className={styles.label}>Төслийн явц:</h4>
        <select
          value={editedCurrentState}
          onChange={(e) => setEditedCurrentState(e.target.value)}
        >
          <option value="Өргөн барьсан">Өргөн барьсан</option>
          <option value="Анхны хэлэлцүүлэг">Анхны хэлэлцүүлэг</option>
          <option value="Эцсийн хэлэлцүүлэг">Эцсийн хэлэлцүүлэг</option>
          <option value="Батлах">Батлах</option>
        </select>
      </div>
      <div className={styles.item} id={styles.item3}>
        <h4 className={styles.label}>Төслийн төрөл:</h4>
        <select
          value={editedLawType}
          onChange={(e) => setEditedLawType(e.target.value)}
        >
          <option value="Анхдагч хуулийн төсөл">Анхдагч хууль</option>
          <option value="Хуульд өөрчлөлт оруулах">Хуульд өөрчлөлт оруулах</option>
          <option value="Хуулийн шинэчилсэн найруулга">Хуулийн шинэчилсэн найруулга</option>
          <option value="Хууль хүчингүй болсонд тооцох">Хууль хүчингүй болсонд тооцох</option>
        </select>
      </div>
      <div className={styles.item} id={styles.item4}>
        <h4 className={styles.label}>Хууль санаачлагч:</h4>
        <input
          type="text"
          value={editedLawMakerName}
          onChange={(e) => setEditedLawMakerName(e.target.value)}
        />
      </div>
      <button onClick={handleSave} className={styles.btn} id={styles.save}>Save</button>
      <button onClick={onCancel} className={styles.btn} id={styles.cancel}>Cancel</button>
    </div>
  );
};

export default LawInfoForm;
