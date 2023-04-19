const express = require('express');
const app = express();

app.use(express.json()); // middleware untuk membaca body request sebagai JSON

// Data dummy
let data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 40 },
    { id: 4, name: 'Emily Brown', age: 35 }
];

// Menampilkan pesan Hello World
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Menampilkan semua data
app.get('/data', (req, res) => {
    res.send(data);
});

// Menampilkan data berdasarkan ID
app.get('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = data.find(d => d.id === id);
    if (!result) {
        res.status(404).send('Data tidak ditemukan');
    } else {
        res.send(result);
    }
});

// Menambahkan data
app.post('/data', (req, res) => {
    const newData = req.body;
    if (!newData.name || !newData.age) {
        res.status(400).send('Properti name dan age harus diisi');
    } else {
        newData.id = data.length + 1;
        data.push(newData);
        res.send(newData);
    }
});

// Mengupdate data berdasarkan ID
app.put('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    const index = data.findIndex(d => d.id === id);
    if (index === -1) {
        res.status(404).send('Data tidak ditemukan');
    } else {
        data[index] = { ...updatedData, id };
        res.send(data[index]);
    }
});

// Menghapus data berdasarkan ID
app.delete('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(d => d.id === id);
    if (index === -1) {
        res.status(404).send('Data tidak ditemukan');
    } else {
        data.splice(index, 1);
        res.send('Data berhasil dihapus');
    }
});

// Menjalankan server pada port 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
