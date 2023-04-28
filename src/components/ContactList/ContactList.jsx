import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemove, children }) => {
  return (
    <div className={styles.contacts}>
      <h2>CONTACTS</h2>
      {children}
      <ul>
        {contacts.length === 0 ? null : (
          <>
            {contacts.map(contact => {
              return (
                <li key={contact.id}>
                  <p>
                    <span>{contact.name} : </span>
                    {contact.number}
                  </p>
                  <button
                    onClick={() => {
                      onRemove(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default ContactList;