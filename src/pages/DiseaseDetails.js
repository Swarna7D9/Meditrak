import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DiseaseDetails.css'; // Importing CSS

export default function DiseaseDetails() {
  const { name } = useParams();

  const diseaseDetails = {
    Diabetes: {
      description: "Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. When you have diabetes, your body either doesn't make enough insulin or can't use it as well as it should. Insulin helps blood sugar enter your cells for energy. Too much blood sugar can damage organs over time.",
      symptoms: "• Increased thirst and hunger\n• Frequent urination\n• Extreme fatigue\n• Blurred vision\n• Slow-healing sores\n• Weight loss\n• Numbness in hands/feet",
      causes: "• Genetics\n• Obesity\n• Inactivity\n• High blood pressure\n• Autoimmune destruction (Type 1)\n• Insulin resistance (Type 2)",
      treatment: "• Healthy eating\n• Exercise\n• Blood sugar monitoring\n• Medications\n• Insulin therapy\n• Regular check-ups",
      image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiaWhoLWhlYWx0aGNhcmUtYmVyaGFkXC9maWxlXC81MzIxRHBVbzFlVWdERXU5ckJLTS5qcGcifQ:ihh-healthcare-berhad:-i8RrXaJJIdmdlceLxd8Il4ue4NrTuVAQyTmwi-DHpA?format=webp"
    },
    Hypertension: {
      description: "Hypertension (high blood pressure) occurs when the force of blood against artery walls is too high, risking heart disease, stroke, and kidney issues. Often called the 'silent killer', it can damage the body for years before symptoms appear.",
      symptoms: "• Headaches\n• Shortness of breath\n• Nosebleeds\n• Fatigue\n• Chest pain\n• Irregular heartbeat",
      causes: "• High salt intake\n• Obesity\n• Alcohol\n• Kidney disease\n• Stress\n• Genetics",
      treatment: "• Low-sodium diet\n• Exercise\n• Weight control\n• Medications\n• Stress reduction\n• Limit alcohol",
      image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiaWhoLWhlYWx0aGNhcmUtYmVyaGFkXC9maWxlXC9jNURid0JTdVRlY1g3SGk0NzlIbi5qcGcifQ:ihh-healthcare-berhad:SvobNGKOVw2zs2BGmvpbUpcyGYN6JAzBJOUxC3L6hHU?format=webp"
    },
    Asthma: {
      description: "Asthma is a chronic disease where airways narrow and swell, making breathing difficult. Triggers include allergens, exercise, cold air, or stress. Proper management can prevent attacks and improve quality of life.",
      symptoms: "• Shortness of breath\n• Chest tightness\n• Wheezing\n• Nighttime coughing\n• Difficulty breathing",
      causes: "• Allergens\n• Respiratory infections\n• Exercise\n• Cold air\n• Smoke\n• Stress\n• Genetics",
      treatment: "• Inhalers\n• Avoid triggers\n• Anti-inflammatory meds\n• Air purifiers\n• Monitor lung function",
      image: "https://charlestonallergy.com/wp-content/uploads/2022/01/pathology-of-asthma.jpg"
    },
  };

  const data = diseaseDetails[name];

  if (!data) return <h2>Disease not found</h2>;

  return (
    <div className="details-container">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h1 className="disease-title">{name}</h1>

      <img src={data.image} alt={`${name} Diagram`} className="disease-image" />

      <section className="detail-section">
        <h2>Description</h2>
        <p>{data.description}</p>
      </section>

      <section className="detail-section">
        <h2>Symptoms</h2>
        <ul>
          {data.symptoms.split('\n').map((item, idx) => (
            <li key={idx}>{item.replace(/^•\s*/, '')}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section">
        <h2>Causes</h2>
        <ul>
          {data.causes.split('\n').map((item, idx) => (
            <li key={idx}>{item.replace(/^•\s*/, '')}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section">
        <h2>Treatment</h2>
        <ul>
          {data.treatment.split('\n').map((item, idx) => (
            <li key={idx}>{item.replace(/^•\s*/, '')}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
