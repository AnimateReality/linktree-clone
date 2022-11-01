import "./Profile.css";
import { IoMdShareAlt } from 'react-icons/io';

function Profile() {
  return (
    <section className="profile">
    <img id="profile__img" src="https://github.com/AnimateReality.png" alt="pfp" />
      <button className="profile_btn">
      <IoMdShareAlt/>
      </button>
      <h2>Ronald Chittinappilly</h2>
      <p id="twitter">@AnimateReality</p>
      <p id="slack">Ronald Chittinappilly</p>
    </section>
  );
}

export default Profile;