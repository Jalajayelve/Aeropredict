# 🛫 **AeroPredict - Airline Customer Satisfaction Prediction**

![License](https://img.shields.io/badge/license-MIT-green)
![Python](https://img.shields.io/badge/python-3.9+-blue)
![Node.js](https://img.shields.io/badge/node.js-18+-green)
![React](https://img.shields.io/badge/react-18+-blue)
![ML Model](https://img.shields.io/badge/model-XGBoost-orange)
![Accuracy](https://img.shields.io/badge/accuracy-94%25-brightgreen)

An advanced machine learning system for predicting airline customer satisfaction with a beautiful real-time dashboard.

---

## 📋 **Features**

✨ **94% Accuracy XGBoost Model**  
🎯 **Real-time Predictions** with confidence scores  
📊 **Interactive Dashboard** with analytics  
🚀 **Production-Ready API** (REST endpoints)  
💻 **Modern UI** built with React & TypeScript  
🔄 **Batch Predictions** from CSV files  
📈 **Real-time Analytics** and trends  

---

## 🛠️ **Tech Stack**

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Shadcn UI** component library

### Backend
- **Node.js** with Express.js
- **Python** for ML inference
- **XGBoost** classifier

### ML/Data Science
- **XGBoost** - Gradient Boosting Classifier
- **scikit-learn** - ML utilities & metrics
- **pandas** - Data manipulation
- **joblib** - Model serialization

---

## 📊 **Model Performance**

| Metric | Score |
|--------|-------|
| **Accuracy** | 94% |
| **F1-Score** | 0.94 |
| **Precision** | 94% |
| **Recall** | 94% |
| **Training Samples** | 4,156 |
| **Test Samples** | 1,039 |

**Per-Class Performance:**
- **Neutral/Dissatisfied (Class 0):** Precision 0.94, Recall 0.95, F1 0.95
- **Satisfied (Class 1):** Precision 0.93, Recall 0.93, F1 0.93

---

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+
- Python 3.9+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/aeropredict.git
cd aeropredict
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd server
npm install
pip install pandas numpy scikit-learn xgboost joblib
```

### Running the Application

**Terminal 1 - Backend Server:**
```bash
cd server
node index.js
# Server running at http://localhost:5000
```

**Terminal 2 - Frontend Dev Server:**
```bash
npm run dev
# Frontend running at http://localhost:3000
```

**Terminal 3 (Optional) - Train the Model:**
```bash
cd server
python xgboost_test.py
```

---

## 📝 **API Documentation**

### Prediction Endpoint

**URL:** `POST /predict`

**Request:**
```json
{
  "inflight_wifi": 5,
  "online_booking": 5,
  "seat_comfort": 5,
  "inflight_entertainment": 5,
  "onboard_service": 5,
  "leg_room_service": 5,
  "baggage_handling": 5,
  "checkin_service": 5,
  "inflight_service": 5,
  "cleanliness": 5
}
```

**Response:**
```json
{
  "prediction": "satisfied",
  "confidence": 94
}
```

**Possible Predictions:** `satisfied`, `neutral`, `dissatisfied`

---

## 📁 **Project Structure**

```
aeropredict/
├── src/
│   ├── components/
│   │   ├── PredictionForm.tsx
│   │   ├── ResultsDisplay.tsx
│   │   ├── Dashboard.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server/
│   ├── index.js (Express server)
│   ├── python_predict.py (ML inference)
│   ├── xgboost_test.py (Model training)
│   ├── model.joblib (Trained model)
│   ├── label_encoder.joblib (Label mappings)
│   ├── test.csv (Training data)
│   └── package.json
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## 🧠 **ML Model Details**

### Algorithm
**XGBoost Classifier** (Extreme Gradient Boosting)

### Training Configuration
```python
XGBClassifier(
    random_state=42,
    use_label_encoder=False,
    eval_metric='logloss'
)
```

### Input Features (10 Service Ratings)
1. Inflight Wifi Service
2. Online Booking
3. Seat Comfort
4. Inflight Entertainment
5. On-board Service
6. Leg Room Service
7. Baggage Handling
8. Checkin Service
9. Inflight Service
10. Cleanliness

### Data Preprocessing
- Missing value imputation (median)
- Categorical encoding
- Feature standardization
- 80/20 train-test split

---

## 🧪 **Testing**

### Manual Testing

**Test with Low Ratings:**
```bash
$body = @{
  inflight_wifi = 2
  online_booking = 2
  seat_comfort = 2
  inflight_entertainment = 2
  onboard_service = 2
  leg_room_service = 2
  baggage_handling = 2
  checkin_service = 2
  inflight_service = 2
  cleanliness = 2
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:5000/predict" -Method Post -Body $body -ContentType "application/json"
```

**Expected Output:** `{"prediction":"dissatisfied","confidence":85-95}`

---

## 📊 **Dashboard Features**

- 📈 **Analytics Dashboard** with real-time metrics
- 📊 **Satisfaction Distribution** chart
- ✈️ **Airlines Performance** comparison
- 📋 **Recent Predictions** table
- 🎯 **Satisfaction Rate** KPI
- 📱 **Responsive Design** for all devices

---

## 🔄 **Batch Predictions**

Process multiple records from CSV:
```bash
cd server
node batch_predict.js ../test.csv
```

---

## 📦 **Model Files**

- `model.joblib` (317 KB) - Trained XGBoost model
- `label_encoder.joblib` (511 B) - Label encoder for predictions

> **Note:** Model files are not included in git (listed in .gitignore). Run `python xgboost_test.py` to generate them.

---

## 🔧 **Configuration**

### Backend Port
Default: `5000`  
Modify in `server/index.js`

### Frontend Port
Default: `3000`  
Modify in `vite.config.ts`

### Environment Variables
Create `.env` file if needed for production deployment

---

## 🚢 **Deployment**

### Docker (Optional)

```dockerfile
# Backend
FROM node:18-alpine
WORKDIR /app
COPY server/ .
RUN npm install
EXPOSE 5000
CMD ["node", "index.js"]
```

### Production Build
```bash
npm run build
```

---

## 🐛 **Troubleshooting**

**Model not loading?**
- Run: `python xgboost_test.py` to generate model files

**Port already in use?**
- Change port in code or kill existing process

**Python not found?**
- Ensure Python is installed and in PATH
- Run: `python --version`

**Dependencies missing?**
- Run: `npm install` and `pip install -r requirements.txt`

---

## 📈 **Performance Optimization**

- ✅ Vite for fast dev server
- ✅ React lazy loading
- ✅ API response caching
- ✅ Optimized ML inference
- ✅ Efficient database queries

---

## 🤝 **Contributing**

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 **License**

MIT License - see LICENSE file for details

---

## 👨‍💻 **Author**

**Naresh Yelev**  
ML Engineer | Full-Stack Developer

---

## 📞 **Support**

For issues or questions:
- Open an issue on GitHub
- Check existing documentation
- Review model performance metrics

---

## 🎯 **Future Enhancements**

- [ ] Add more classification models (LightGBM, CatBoost)
- [ ] Implement A/B testing framework
- [ ] Add real-time model monitoring
- [ ] Deploy to cloud (AWS/Azure)
- [ ] Add user authentication
- [ ] Implement data versioning
- [ ] Add automated retraining pipeline
- [ ] Create API documentation (Swagger)

---

## 📊 **Dataset Information**

**Source:** Airline Passenger Satisfaction Dataset  
**Total Records:** 5,196  
**Features:** 22  
**Classes:** 2 (Satisfied vs. Neutral/Dissatisfied)  
**Missing Values:** Handled via median imputation  

---

**Made with ❤️ using ML & Full-Stack Development**
