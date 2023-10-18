import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { ContactsBlock } from './components/contacts-block/contacts-block';

const Contacts = () => {
  return (
    <div>
      <Header />
      <ContactsBlock />
      <Footer />
    </div>
  );
};

export { Contacts };
