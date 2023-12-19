import React from 'react';
import Container from '../ui/Container/Container';
import HomeBanner from '../Page/HomeNews/HomeBanner/HomeBanner';
import ContactInfo from './ContactInfo';
import SocialNetwork from './SocialNetwork';
import faceBookIcon from "../../assets/icons/icons8-facebook 1.svg"
import linkedenIcon from "../../assets/icons/icons8-linkedin 1.svg"
import twitterIcon from "../../assets/icons/icons8-twitter-circled 1.svg"
import instaGramIcon from "../../assets/icons/icons8-instagram 1.svg"
import whatsAppIcon from "../../assets/icons/whatsup.svg"
import shareIcon from "../../assets/icons/sharelink.png"
import youtubeIcon from "../../assets/icons/icons8-youtube 1.svg"
import gmailIcon from "../../assets/icons/email.png"
import Title from '../ui/Title/Title';
import ContactForm from './ContactForm';


const Contact = () => {
  return (
    <div className='my-16'>
      <HomeBanner />
      <ContactInfo />
      <Container>
        <div className='my-10'>
          <Title>Social Network</Title>
          <div className='w-56 h-1 bg-secondary'></div>
          <div className='grid lg:grid-cols-2 gap-10 my-10'>
            <div className='grid lg:grid-cols-2 gap-10'>
              <SocialNetwork image={faceBookIcon} title="Facebook" className="bg-gray-100 shadow-xl" />
              <SocialNetwork image={linkedenIcon} title="Linkeden" className="bg-gray-100 shadow-xl" />
              <SocialNetwork image={twitterIcon} title="Twitter" className="bg-gray-100 shadow-xl" />
              <SocialNetwork image={instaGramIcon} title="Instagram" className="bg-gray-100 shadow-xl" />
              <SocialNetwork image={whatsAppIcon} title="What's App" className="bg-gray-100 shadow-xl" />
              <SocialNetwork image={shareIcon} title="Share Link" className="bg-gray-100 shadow-xl" />
              <SocialNetwork image={youtubeIcon} title="Youtube" className="bg-gray-100 shadow-xl" />
              <SocialNetwork image={gmailIcon} title="Gmail" className="bg-gray-100 shadow-xl" />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;