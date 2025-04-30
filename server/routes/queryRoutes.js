const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred email service
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS  // Your email password or app-specific password
  }
});

// Handle query form submissions
router.post('/submit-query', async (req, res) => {
  try {
    const { name, classBranch, mobile, email, problem, adminEmail } = req.body;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: 'New Hostel Query Submission',
      html: `
        <h2>New Query Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Class/Branch:</strong> ${classBranch}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Problem/Description:</strong></p>
        <p>${problem}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.status(200).json({ message: 'Query submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to submit query' });
  }
});

module.exports = router; 