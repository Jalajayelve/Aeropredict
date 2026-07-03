import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder
import joblib

# Load data
df = pd.read_csv("test.csv")

# Data cleaning as in notebook
df['Arrival Delay in Minutes'].fillna(df['Arrival Delay in Minutes'].median(), inplace=True)
df.drop(columns=['Unnamed: 0', 'id'], inplace=True)
categorical_cols = ['Gender', 'Customer Type', 'Type of Travel', 'Class', 'satisfaction']
for col in categorical_cols:
    df[col] = df[col].astype('category')
df.columns = df.columns.str.strip().str.lower().str.replace(' ', '_')
df['satisfaction'] = df['satisfaction'].replace({'satisfied': 1,'neutral or dissatisfied': 0})
df[["arrival_delay_in_minutes"]] = df[["arrival_delay_in_minutes"]].astype("int")

# Select features
new_df = df[["age", "flight_distance", "inflight_wifi_service", "departure/arrival_time_convenient", "ease_of_online_booking",
             "gate_location", "food_and_drink", "online_boarding", "seat_comfort", "inflight_entertainment", "on-board_service",
             "leg_room_service", "baggage_handling", "checkin_service", "inflight_service", "cleanliness", "departure_delay_in_minutes",
             "arrival_delay_in_minutes", "satisfaction"]]

X = new_df.drop(["satisfaction"],axis=1)
y = new_df["satisfaction"]

# Split data
x_train,x_test,y_train,y_test = train_test_split(X,y,test_size=0.2, random_state=42)

# Train XGBoost
xgb = XGBClassifier(random_state=42, use_label_encoder=False, eval_metric='logloss')
xgb.fit(x_train, y_train)

# Predict
xgb_pred = xgb.predict(x_test)

# Get accuracy
accuracy = accuracy_score(y_test, xgb_pred)
print(f"XGBoost Accuracy: {accuracy:.2f}")

# Classification report
print("Classification Report - XGBoost:")
print(classification_report(y_test, xgb_pred))

# Save model and label encoder
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
le.fit(['satisfied', 'neutral or dissatisfied'])
joblib.dump(xgb, 'model.joblib')
joblib.dump(le, 'label_encoder.joblib')
print("\n✅ Model saved: model.joblib")
print("✅ Label encoder saved: label_encoder.joblib")
