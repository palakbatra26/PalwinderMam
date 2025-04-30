const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

// Data file paths
const DATA_FILE = path.join(__dirname, 'data.json');
const COMMITTEE_FILE = path.join(__dirname, 'studentcommittee.json');

// PayU Money Configuration
const PAYU_MERCHANT_KEY = "YOUR_MERCHANT_KEY"; // Replace with your PayU merchant key
const PAYU_SALT = "YOUR_MERCHANT_SALT"; // Replace with your PayU salt key

// Initialize with some default data
const initializeData = async () => {
  const defaultData = {
    rooms: {
      "room101": {
        roomNumber: "101",
        floor: "First Floor",
        block: "Block A",
        roomType: "Double Sharing"
      }
    },
    notifications: [
      {
        title: "Welcome to Hostel No. 4",
        message: "Welcome to the new semester!",
        type: "info",
        date: new Date().toISOString()
      }
    ],
    facilities: [
      {
        name: "Gym",
        description: "Modern gym equipment",
        status: "operational"
      }
    ]
  };

  const defaultCommitteeData = {
    committeeMembers: []
  };

  try {
    // Initialize data.json if it doesn't exist
    try {
      await fs.access(DATA_FILE);
    } catch {
      await fs.writeFile(DATA_FILE, JSON.stringify(defaultData, null, 2));
    }

    // Initialize studentcommittee.json if it doesn't exist
    try {
      await fs.access(COMMITTEE_FILE);
    } catch {
      await fs.writeFile(COMMITTEE_FILE, JSON.stringify(defaultCommitteeData, null, 2));
    }
  } catch (error) {
    console.error('Error initializing data:', error);
  }
};

// Admin: Get all data
app.get('/api/admin/data', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    const committeeData = JSON.parse(await fs.readFile(COMMITTEE_FILE, 'utf8'));
    res.json({
      ...data,
      committeeMembers: committeeData.committeeMembers
    });
  } catch (error) {
    res.status(500).json({ error: 'Error reading data' });
  }
});

// Admin: Add room
app.post('/api/admin/rooms', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    const roomId = `room${Date.now()}`;
    data.rooms[roomId] = req.body;
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true, roomId });
  } catch (error) {
    res.status(500).json({ error: 'Error adding room' });
  }
});

// Admin: Delete room
app.delete('/api/admin/rooms/:roomId', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    delete data.rooms[req.params.roomId];
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting room' });
  }
});

// Admin: Add notification
app.post('/api/admin/notifications', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    data.notifications.unshift(req.body);
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error adding notification' });
  }
});

// Admin: Delete notification
app.delete('/api/admin/notifications/:index', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    data.notifications.splice(req.params.index, 1);
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting notification' });
  }
});

// Admin: Add facility
app.post('/api/admin/facilities', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    data.facilities.push(req.body);
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error adding facility' });
  }
});

// Admin: Delete facility
app.delete('/api/admin/facilities/:index', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    data.facilities.splice(req.params.index, 1);
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting facility' });
  }
});

// Public: Get room data
app.get('/api/rooms/:userId', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    const roomData = data.rooms[req.params.userId] || {
      roomNumber: "Not Assigned",
      floor: "Not Assigned",
      block: "Not Assigned",
      roomType: "Not Assigned"
    };
    res.json(roomData);
  } catch (error) {
    res.status(500).json({ error: 'Error reading room data' });
  }
});

// Public: Get notifications
app.get('/api/notifications', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    res.json(data.notifications);
  } catch (error) {
    res.status(500).json({ error: 'Error reading notifications' });
  }
});

// Public: Get facilities
app.get('/api/facilities', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    res.json(data.facilities);
  } catch (error) {
    res.status(500).json({ error: 'Error reading facilities' });
  }
});

// Committee Member endpoints
app.post('/api/admin/committee', async (req, res) => {
  try {
    const committeeData = JSON.parse(await fs.readFile(COMMITTEE_FILE, 'utf8'));
    if (!committeeData.committeeMembers) {
      committeeData.committeeMembers = [];
    }
    const newMember = req.body;
    committeeData.committeeMembers.push(newMember);
    await fs.writeFile(COMMITTEE_FILE, JSON.stringify(committeeData, null, 2));
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ error: 'Error adding committee member' });
  }
});

app.put('/api/admin/committee/:id', async (req, res) => {
  try {
    const committeeData = JSON.parse(await fs.readFile(COMMITTEE_FILE, 'utf8'));
    const id = parseInt(req.params.id);
    if (id >= 0 && id < committeeData.committeeMembers.length) {
      committeeData.committeeMembers[id] = req.body;
      await fs.writeFile(COMMITTEE_FILE, JSON.stringify(committeeData, null, 2));
      res.json(committeeData.committeeMembers[id]);
    } else {
      res.status(404).json({ error: 'Committee member not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating committee member' });
  }
});

app.delete('/api/admin/committee/:id', async (req, res) => {
  try {
    const committeeData = JSON.parse(await fs.readFile(COMMITTEE_FILE, 'utf8'));
    const id = parseInt(req.params.id);
    if (id >= 0 && id < committeeData.committeeMembers.length) {
      committeeData.committeeMembers.splice(id, 1);
      await fs.writeFile(COMMITTEE_FILE, JSON.stringify(committeeData, null, 2));
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Committee member not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting committee member' });
  }
});

// Public endpoint to get committee members
app.get('/api/committee', async (req, res) => {
  try {
    const committeeData = JSON.parse(await fs.readFile(COMMITTEE_FILE, 'utf8'));
    res.json(committeeData.committeeMembers || []);
  } catch (error) {
    res.status(500).json({ error: 'Error reading committee members' });
  }
});

// Stripe payment endpoint
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { feeType, amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: `${feeType.charAt(0).toUpperCase() + feeType.slice(1)} Fee`,
            },
            unit_amount: amount * 100, // Convert to paise
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:5173/payment-success',
      cancel_url: 'http://localhost:5173/payment-cancelled',
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Payment hash generation endpoint
app.post('/api/payment/hash', (req, res) => {
  try {
    const { txnid, amount, productinfo, firstname, email, phone } = req.body;

    // Generate hash sequence
    const hashString = `${PAYU_MERCHANT_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|${phone}|||||||||||${PAYU_SALT}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');

    res.json({
      key: PAYU_MERCHANT_KEY,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      phone,
      hash
    });
  } catch (error) {
    console.error('Error generating payment hash:', error);
    res.status(500).json({ error: 'Failed to generate payment hash' });
  }
});

// Initialize data on server start
initializeData().then(() => {
  app.listen(5000, () => {
    console.log('Backend server running on http://localhost:5000');
  });
}); 