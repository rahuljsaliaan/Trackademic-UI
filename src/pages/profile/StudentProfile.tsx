import Footer from '@/layouts/Footer';

export default function StudentProfile() {
  return (
      <div className="dashboard">
        <div className="dashboard-contents">
            <div className="profile-nav-container">
                <img src="src/assets/icons/goBackIcon.svg" alt="" />
            </div>
            <div className="profile-picture-container-div">
                <div className="profile-picture-container">
                    <img src="src/assets/images/profile.png" alt="" />
                </div>
                <p>John Doe</p>
            </div>
            <div className="profile-content-container">
                <p className="profile-content-header">Academic Details</p>
                <hr className="profile-content-hr"></hr>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">USN</p>
                    <p className="profile-content-list-value">4SO22MC001</p>
                </div>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">Course</p>
                    <p className="profile-content-list-value">Master of Computer Applications</p>
                </div>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">Course Group</p>
                    <p className="profile-content-list-value">Post Graduation</p>
                </div>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">Batch</p>
                    <p className="profile-content-list-value">2022-2024</p>
                </div>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">Section</p>
                    <p className="profile-content-list-value">A</p>
                </div>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">Current Semester</p>
                    <p className="profile-content-list-value">3</p>
                </div>
            </div>

            <div className="profile-content-container">
                <p className="profile-content-header">Personal Details</p>
                <hr className="profile-content-hr"></hr>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">USN</p>
                    <p className="profile-content-list-value">4SO22MC001</p>
                </div>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">Course</p>
                    <p className="profile-content-list-value">Master of Computer Applications</p>
                </div>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">Course Group</p>
                    <p className="profile-content-list-value">Post Graduation</p>
                </div>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">Batch</p>
                    <p className="profile-content-list-value">2022-2024</p>
                </div>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">Section</p>
                    <p className="profile-content-list-value">A</p>
                </div>
                <div className="profile-content-list">
                    <p className="profile-content-list-header">Current Semester</p>
                    <p className="profile-content-list-value">3</p>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
  );
}
