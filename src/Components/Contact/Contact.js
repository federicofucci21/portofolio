import React from 'react';
import * as ReactRedux from 'react-redux';
import style from './Contact.module.css';
import { contact } from '../../Assets/data';

function Contact() {
  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="contact" className={theme === 'light' ? style.div : style.divD}>
      <section className={style.section}>
        <div className={theme === 'light' ? style.tittle : style.tittleD}>
          {lang === 'eng' ? 'Contact' : 'Contacto'}
        </div>
        <div className={style.contacts}>
          {contact.map((e) => (
            <div
              className={
                  theme === 'light' ? style.contactsDiv : style.contactsDivD
                }
            >
              <a href={e.url} target="_blank" rel="noreferrer">
                <img src={e.img} alt={e.name} />
                <p>{e.name}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
