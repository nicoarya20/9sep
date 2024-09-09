### DATABASE

**intall**:

`yarn add @prisma/client prisma`

selanjutnya ketik perintah 

`npx prisma init`

ubah pengaturan di .env

`DATABASE_URL="postgresql://bip:Production_123@localhost:5433/9sep?schema=public"`

pada file prisma/cchema.prisma masukkan model database

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// tambahan model lain jika diperlukan
```

lalu jalankan perintah 

`npx prisma db push` untuk sync model ke database


