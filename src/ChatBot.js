// import React, { useState } from 'react';
// import './Userdashboard.css'; // Import CSS for additional styling
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const ChatBot = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedQuestion, setSelectedQuestion] = useState('');
//   const [answer, setAnswer] = useState('');

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//     setSelectedQuestion('');
//     setAnswer('');
//   };

//   const questions = [
//     { question: 'What services do you offer?', answer: 'We offer AC installation, repair, maintenance, and more.' },
//     { question: 'How do I book a service appointment?', answer: 'You can call us at [Your Phone Number] or visit our website to book an appointment.' },
//     { question: 'What are your service hours?', answer: 'Our service hours are Monday to Friday, 8:00 AM - 6:00 PM.' },
//     { question: 'How much do your services cost?', answer: 'Service costs vary based on the service type. Contact us for a detailed quote.' },
//     { question: 'Do you offer any guarantees?', answer: 'Yes, we offer a satisfaction guarantee on all our services.' },
//   ];

//   const handleQuestionClick = (question) => {
//     setSelectedQuestion(question.question);
//     setAnswer(question.answer);
//   };

//   return (
//     <div>
//       <button
//         className="chatbot-icon btn btn-primary rounded-circle"
//         onClick={toggleModal}
//       >
//         <i className="fas fa-comments fa-2x"></i>
//       </button>

//       {isModalOpen && (
//         <div className="chatbot-modal">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">AC Repair ChatBot</h5>
//               <button type="button" className="close" onClick={toggleModal}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               {selectedQuestion ? (
//                 <div>
//                   <h6>{selectedQuestion}</h6>
//                   <p>{answer}</p>
//                 </div>
//               ) : (
//                 <ul className="list-group">
//                   {questions.map((q, index) => (
//                     <li
//                       key={index}
//                       className="list-group-item question-item"
//                       onClick={() => handleQuestionClick(q)}
//                     >
//                       {q.question}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;
