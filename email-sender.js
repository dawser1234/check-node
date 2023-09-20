const nodemailer = require('nodemailer');

async function sendEmail() {
  // Create a transporter object using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail', 'Yahoo', 'Outlook'
    auth: {
      user: 'dawserghzel987@gmail.com',
      pass: 'xxbu pvpt iveu qdii',
    },
  });

  // Define the email data
  const mailOptions = {
    from: 'dawserghzel987@gmail.com',
    to: 'dawserghzel987@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js using nodemailer.',
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Call the sendEmail function to send the email
sendEmail();

