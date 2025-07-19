[# Web Monitoring System: Track Uptime, Downtime & Get Alerts in Real-Time

## 🛡️ Introduction

Website uptime and reliability are critical for businesses, organizations, and individual users. Even a single instance of downtime can lead to revenue loss, a damaged reputation, and unhappy users.

To address this, we built a **Web Monitoring App** that continuously checks website status and alerts users in real-time about any issues—helping ensure minimal disruption and faster response times.

### Why Web Monitoring Matters

- **For developers**: To catch downtime or server errors before users do.
- **For businesses**: To maintain customer trust and avoid revenue loss.
- **For system admins**: To track server health and act instantly when things go wrong.

### What Our Tool Does

Our tool allows users to:

- Add and monitor multiple websites.
- Perform health checks periodically.
- Receive real-time alerts through email.
- View region-based status and response time.
- Analyze historical data through graphs.

## 🔍 Motivation Behind the Project

**We didn’t set out to reinvent the wheel—we set out to understand how the wheel works**.

***(Sometime we didn’t build unique - we build to be unique and  knowledge full***.)

Our main motivation was to **learn how monitoring tools like Better Stack work under the hood**. We were curious, and curiosity led us to build our own version. Initially, we didn’t know what technologies Better Stack used—we just studied the outcome and reverse-engineered the behavior using our own planning, experimentation, and logic.

This project was about:

- Exploring how real-time website monitoring works.
- Automating uptime checks and notification delivery.
- Building something meaningful, not just unique.

---

## ⚙️ Tech Stack Used

- **Frontend**: Next.js with Zu-stand for state management.
- **Backend**: Node.js, Express, Node-Cron, and Celery for scheduled jobs.
- **Database**: PostgreSQL with Prisma ORM.
- **Deployment**: Kubernetes (deployed across multiple regions using Azure and AWS).
- **Notifications**: Email via SMTP.

## 🚀 Key Features

- Add & monitor **multiple websites** from one dashboard.
- Perform **periodic health checks** (custom intervals like 5, 10, or 15 minutes).
- Send **real-time alerts** via email.
- Run **regional checks** using instances deployed in different data centers for more accurate response time.
- Display **historical logs** using interactive graphs and charts.
- Calculate **uptime/downtime percentages**.

---

## ⚠️ Challenges Faced

- **False positives**: Random network delays occasionally triggered false downtime alerts.
- **Choosing the right technologies**:
    - Opted for **long polling** instead of WebSocket's due to simplicity and reliability.
    - Used **Kubernetes over Docker** for better scalability and regional deployment flexibility.
- **Notification spam**: Solved by adding thresholds and intelligent alerting logic.
- **Regional latency**: Tackled using Kubernetes deployments in multiple regions for localized health checks.

---

## 📱 Future Improvements

- Develop a **mobile app** to monitor websites on the go. & Implement **push notifications** for instant mobile alerts.
- Add **Slack and Telegram integrations**.
- Provide more precise information about why Issue is caused

![WhatsApp Image 2024-11-28 at 12.58.28_756ca42b.jpg]([attachment:c3069a9a-7956-428c-a0bc-0ac7cfde0dd2:WhatsApp_Image_2024-11-28_at_12.58.28_756ca42b.jpg](https://www.notion.so/image/attachment%3Ac3069a9a-7956-428c-a0bc-0ac7cfde0dd2%3AWhatsApp_Image_2024-11-28_at_12.58.28_756ca42b.jpg?table=block&id=21d195d7-9ea5-808e-a5e3-cfb7f1dff6c2&spaceId=1678bce3-d970-415c-8f32-b6a3df168813&width=2000&userId=cfd5cf81-3261-407a-baff-18813abf389b&cache=v2))

![WhatsApp Image 2024-11-28 at 12.58.28_7dddd48c.jpg](attachment:7e97e02f-9137-4dc1-a60d-f73822acb32e:WhatsApp_Image_2024-11-28_at_12.58.28_7dddd48c.jpg)

![WhatsApp Image 2024-11-28 at 12.58.31_61f8684b.jpg](attachment:9320f8eb-8ec8-438e-a41e-2a5b4b43bc2a:WhatsApp_Image_2024-11-28_at_12.58.31_61f8684b.jpg)

Noted : - Made 2 version of this app so earlier version is hosted but later version i not but source code is available on GitHub 
version 2 has kubernative has  scaling & regional deployment features to maintain latency but we  deployed it for some time but azure credits are not enough for us to live it life time so
](https://www.notion.so/image/attachment%3Ac3069a9a-7956-428c-a0bc-0ac7cfde0dd2%3AWhatsApp_Image_2024-11-28_at_12.58.28_756ca42b.jpg?table=block&id=21d195d7-9ea5-808e-a5e3-cfb7f1dff6c2&spaceId=1678bce3-d970-415c-8f32-b6a3df168813&width=2000&userId=cfd5cf81-3261-407a-baff-18813abf389b&cache=v2)
