# ExpressJS API

Ini adalah contoh implementasi sederhana API dengan menggunakan ExpressJS. Berikut adalah end-point yang tersedia:

## GET /

End-point ini akan mengembalikan pesan `Hello World!`.

## GET /data

End-point ini akan mengembalikan seluruh data.

## GET /data/:id

End-point ini akan mengembalikan data berdasarkan ID yang dimasukkan pada parameter URL.

## POST /data

End-point ini akan menambahkan data baru ke dalam list.

Request Body:

```json
{
  "name": "John Doe",
  "age": 20
}
```

## PUT /data/:id

End-point ini akan mengubah data berdasarkan ID yang dimasukkan pada parameter URL.

Request Body:

```json
{
  "name": "John Doe",
  "age": 20
}
```

## DELETE /data/:id

End-point ini akan menghapus data berdasarkan ID yang dimasukkan pada parameter URL.