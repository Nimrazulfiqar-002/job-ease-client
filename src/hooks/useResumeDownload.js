
import { jsPDF } from "jspdf";

const useResumeDownload = (formData) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Resume", 105, 15, { align: "center" });

    // Name
    doc.setFontSize(14);
    doc.text(formData.fullname || "Your Name", 105, 30, { align: "center" });

    // Contact Info
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`Email: ${formData.email}`, 20, 45);
    doc.text(`Phone: ${formData.phoneNo}`, 20, 52);
    doc.text(`LinkedIn: ${formData.linkedIn}`, 20, 59);

    // Education
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Education", 20, 75);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(formData.education || "-", 20, 82, { maxWidth: 170 });

    // Experience
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Experience", 20, 100);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(formData.experience || "-", 20, 107, { maxWidth: 170 });

    // Skills
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Skills", 20, 125);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    const skillsArray = formData.skills
      ? formData.skills.split(",").map((s) => s.trim())
      : [];
    doc.text(skillsArray.join(", ") || "-", 20, 132, { maxWidth: 170 });

    // Save file
    doc.save("resume.pdf");
  };

  return handleDownload;
};

export default useResumeDownload;
