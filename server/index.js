import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const recordsFile = path.join(__dirname, 'records.json');

// Initialize records.json if it doesn't exist
if (!fs.existsSync(recordsFile)) {
  fs.writeFileSync(recordsFile, JSON.stringify([]));
}

app.post('/api/inquiry', (req, res) => {
  try {
    const data = req.body;
    
    // Add timestamp and ID
    const inquiry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...data
    };
    
    // Read existing records
    const fileContent = fs.readFileSync(recordsFile, 'utf8');
    const records = JSON.parse(fileContent);
    
    // Add new record
    records.push(inquiry);
    
    // Save to file
    fs.writeFileSync(recordsFile, JSON.stringify(records, null, 2));
    
    console.log('New project inquiry saved:', inquiry.email);
    res.status(200).json({ success: true, id: inquiry.id });
  } catch (error) {
    console.error('Error saving inquiry:', error);
    res.status(500).json({ success: false, error: 'Failed to save inquiry' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
