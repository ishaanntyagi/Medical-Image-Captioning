# Medical-Image-Captioning

# 🧠 Medical Image Caption Generation using Generative Transformers

A full-stack AI-powered system for automated brain tumor **prediction** and **caption generation** from MRI scans. This project integrates **Vision Transformers (ViT)**, **Knowledge-Aware Networks (KAN)**, **Grad-CAM**, and a modern **Flask + React** interface to make deep learning results interpretable and interactive.

---

## 📸 Visual Preview

<p align="center">
  <img src="./1.png" alt="Step 1" width="100%"/>
  <img src="./2.png" alt="Step 2" width="100%"/>
  <img src="./3.png" alt="Step 3" width="100%"/>
  <img src="./4.png" alt="Step 4" width="100%"/>
  <img src="./5.png" alt="Step 5" width="100%"/>
</p>

---

## 🚀 Features

- 🧠 Tumor prediction from MRI using **ViT + KAN**
- 📝 Automatic generation of **domain-specific medical captions**
- 🔍 Visual explainability via **Grad-CAM**
- 🖼️ Real-time web interface (React + Tailwind CSS)
- 🔗 Fully integrated backend using **Flask** and **PyTorch**

---

## 🛠️ Tech Stack

| Layer          | Tools                                      |
|----------------|--------------------------------------------|
| **Model**      | PyTorch, Vision Transformer (ViT), KAN     |
| **Explainability** | Grad-CAM                              |
| **Backend**    | Flask, Torchvision, Pillow, Joblib         |
| **Frontend**   | React, TypeScript, Tailwind CSS, Dropzone  |
| **Storage**    | LocalStorage (frontend), `.pth`, `.pkl`    |

---

## 📂 Project Structure

```plaintext
Medical-Image-Captioning/
├── frontend/           # React app for UI
├── backend/            # Flask app with model + API
├── 1.png–5.png         # Screenshots (used in README)
├── model.pth           # Trained model
├── label_encoder.pkl   # Class mapping
├── app2.py             # Flask API script
├── README.md
