# Asean Youth Forum (AYF) Front End

Dibuat dengan :

- Vite
- React
- Redux Tool Kit
- Tailwind

# How To Use Git Properly ( Please Read This )

### If you new in this project Read the Initial Setup Section

# Contribution Guide

# Please DO NOT Direct PUSH to production or development branch

## Braching Guide

- If you do improve

  ```bash
  > git checkout -b improvement/apa-yang-di-improve
  ```

- If you do bugfix

  ```bash
  > git checkout -b bugfix/apa-yang-di-fix
  ```

- If you do create a new feature

  ```bash
  > git checkout -b feature/fitur-apa-yang-di-buat
  ```

## Commit Message Guide

- If you do improve

  ```bash
  > git commit -m "improvement: apa yang di improve"
  ```

- If you do bugfix

  ```bash
  > git commit -m "bugfix: apa yang di fix"
  ```

- If you do create a new feature

  ```bash
  > git commit -m "feature: fitur apa yang di buat"
  ```

## Conflict Resolve Guide

    1. Stash dulu kerjaan kamu supaya gak ilang

      > git stash

    2. Setelah itu kamu perlu pull perubahan dari branch development

     > git pull origin development

    3. Setelah kamu berhasil melakukan pembaruan dari branch development selanjutnya kamu perlu mengembalikan pekerjaan mu sebelum nya yang ter stash

      > git stash pop

    4. Lanjutkan Pekerjaan dengan Semestinya

    5. Tapi jika ketika melakukan step kedua terjadi error conflitc atau karena kesalahan kamu, maka ikuti langkah yang bawah

## Conflict Resolve Guide V2

    1. Pindah dulu ke Branch development

     > git checkout development

    2. Kemudian pull perubahan terbaru dari branch development

     > git pull

    3. Kemudian Pindah lagi ke branch dirimu

     > git checkout <branch kamu>

    4. Selanjutnya kita perlu merge perubahan terbaru dari development

     > git merge development

## Recomendation Code Editor

Visual Studio Code

### Recomendation Extension

- TailwindCSS Intelesense
- Prettier
- Error Lens

## Initial Setup

- Clone Project ini ( Direkomendasikan menggunakan SSH )

  ```bash
  > git clone git@github.com:midnightanggel/ayo-fe-38.git
  ```

- Install dependencies

  ```bash
  > yarn or npm install
  ```

- Lalu mulai pekerjaanmu sebagai mestinya

## Run Development

```bash
> yarn dev or npm run dev
```

## Demo App

- [Development Build](https://asean-youth-forum-fe.vercel.app/)

- [Production Build](https://asean-youth-forum-fe.netlify.app/)
