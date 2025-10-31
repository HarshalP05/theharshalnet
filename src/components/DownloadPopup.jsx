import { useState } from "react";
import "./DownloadPopup.css";

export default function DownloadPopup({ onClose, fileUrl }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, organization } = formData;

    if (!name || !email || !organization) {
      setError("⚠️ Please fill in all fields before downloading.");
      return;
    }

    // ✅ Trigger file download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Harshal_Patil_Resume.pdf"; // force download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onClose(); // close popup
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-title">Download Resume</h2>
        <p className="popup-subtitle">Please fill out the form to continue</p>

        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Organization</label>
            <input
              type="text"
              name="organization"
              placeholder="Your company or institute"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <div className="popup-buttons">
            <button type="submit" className="popup-btn download">
              Download
            </button>
            <button type="button" className="popup-btn close" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
