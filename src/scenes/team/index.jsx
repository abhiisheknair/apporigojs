import React, { useState } from "react";
import "./TeamScreen.css";
import teamMembers from "../../data/teamdata"; // Adjust the path if necessary

const TeamScreen = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleKnowMoreClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const handleBookAppointment = (member) => {
    setSelectedMember(member);
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
    setAppointmentDate("");
    setAppointmentTime("");
  };

  const handleAppointmentSubmit = () => {
    alert(
      `Appointment booked with ${selectedMember.name} on ${appointmentDate} at ${appointmentTime}`
    );
    handleCloseAppointmentModal(); // Close the appointment modal
  };

  return (
    <div className="main-content">
      <div className="team-grid-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-specialization">{member.specialization}</p>
            <button className="team-button" onClick={() => handleKnowMoreClick(member)}>
              Know more
            </button>
            <button
              className="team-button"
              onClick={() => handleBookAppointment(member)}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {/* Modal for showing more information about the advocate */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              ×
            </button>
            <h2>{selectedMember.name}</h2>
            <p><strong>Email:</strong> {selectedMember.email}</p>
            <p><strong>Education:</strong> {selectedMember.education}</p>
            <p><strong>Court:</strong> {selectedMember.court}</p>
            <p><strong>Specialization:</strong> {selectedMember.specialization}</p>
            <p><strong>Additional Info:</strong> {selectedMember.additionalInfo || "N/A"}</p>
            <p><strong>Experience:</strong> {selectedMember.experience}</p>
            <p><strong>NGT Member:</strong> {selectedMember.ngt}</p>
          </div>
        </div>
      )}

      {/* Modal for booking appointment */}
      {isAppointmentModalOpen && (
        <div className="modal-overlay" onClick={handleCloseAppointmentModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseAppointmentModal}>
              ×
            </button>
            <h2>Book Appointment with {selectedMember.name}</h2>
            <div className="appointment-form">
              <label>
                Date:
                <input
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </label>
              <label>
                Time:
                <input
                  type="time"
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                />
              </label>
              <button className="team-button" onClick={handleAppointmentSubmit}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamScreen;
