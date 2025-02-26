# 🧾 Offline Invoice Generation System

## 🎨 Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Contributors](#contributors)
- [Company Logo](#company-logo)
- [Badges](#badges)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Security](#security)

---

## 📌 About the Project
The **Offline Invoice Generation System** is a user-friendly, offline-capable application built using **Electron.js, MySQL, and Node.js**. It streamlines the invoice generation process, allowing businesses to efficiently create, manage, and store invoices securely without relying on an active internet connection.

## ✨ Features
- **Offline Invoice Generation** – Create invoices without an internet connection.
- **User-friendly Interface** – Simple and intuitive UI for seamless navigation.
- **MySQL Integration** – Secure database management for storing invoices and client details.
- **Automated Tax Calculations** – Supports GST, CGST, SGST, and IGST calculations.
- **Invoice Tracking** – View pending and paid invoices with a status management system.
- **Secure Data Handling** – Ensures encrypted storage of invoices and customer data.
- **Print & Export** – Generate and print invoices or export them as PDFs.

---

## 👨‍💻 Contributors
- [Parth Petkar](https://github.com/parthpetkar)
- [Parth Kalani](https://github.com/parth1899)
- 
---

## 🏢 Company Logo
![Company Logo](./Assets/company-logo.png)

---

## 🏆 Badges
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/parthpetkar/Invoice-Generator-using-Electron.js.svg?branch=main)](https://github.com/parthpetkar/Invoice-Generator-using-Electron.js)
[![GitHub issues](https://img.shields.io/github/issues/parthpetkar/Invoice-Generator-using-Electron.js)](https://github.com/parthpetkar/Invoice-Generator-using-Electron.js/issues)
[![GitHub stars](https://img.shields.io/github/stars/parthpetkar/Invoice-Generator-using-Electron.js)](https://github.com/parthpetkar/Invoice-Generator-using-Electron.js/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/parthpetkar/Invoice-Generator-using-Electron.js)](https://github.com/parthpetkar/Invoice-Generator-using-Electron.js/network)

---

## 🚀 Installation
To install and run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/parthpetkar/Invoice-Generator-using-Electron.js
   ```

2. **Navigate to the project directory**:
   ```bash
   cd invoice_generator
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up MySQL database**:
   - Create a MySQL database and import the schema from `database_schema.sql`.
   ```sql
   CREATE SCHEMA invoice;
   USE invoice;
   -- Customers Table
   CREATE TABLE `customers` (
      `customer_id` VARCHAR(255) NOT NULL,
      `company_name` VARCHAR(255),
      `address1` VARCHAR(255),
      `gstin` VARCHAR(255),
      PRIMARY KEY (`customer_id`)
   );
   ```
   
   - Update the MySQL connection details in `.env`:
   ```plaintext
   DB_HOST=your_host
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_DATABASE=invoice
   ```

5. **Run the application**:
   ```bash
   npm run watch
   ```

---

## 🖥️ Usage
1. Launch the application.
2. Create a new invoice by entering customer details, project details, and invoice amount.
3. Save, print, or export the invoice as a PDF.
4. Track pending and paid invoices from the dashboard.

---

## 🛠️ Contribution Guidelines
We welcome contributions from the community! To contribute, follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Make changes and commit**:
   ```bash
   git commit -am 'Add new feature'
   ```
4. **Push the changes**:
   ```bash
   git push origin feature/new-feature
   ```
5. **Create a Pull Request**.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 🔒 Security
If you discover any security-related issues, please email **[parth.petkar221@vit.edu](mailto:parth.petkar221@vit.edu)** instead of using the issue tracker.

---

🚀 Happy Coding!

