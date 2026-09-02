# Jenkins Tutorial Full Course (CI/CD Pipeline Project)

โปรเจกต์นี้ถอดแบบเนื้อหาและการตั้งค่าทั้งหมดจากคอร์สเรียน **"Jenkins Tutorial For Beginners | Jenkins Full Course"** โดย Piyush Sachdeva

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
jenkins-cicd-tutorial/
├── src/
│   ├── main/java/com/example/App.java    # Source code หลักของ Java Application
│   └── test/java/com/example/AppTest.java # JUnit 5 Unit Test Suite
├── tests/
│   └── app.test.js                        # Jest Unit Test Suite
├── Dockerfile                             # Multi-stage Dockerfile สำหรับ Build & Containerize
├── Jenkinsfile                            # Declarative Jenkins CI/CD Pipeline
├── pom.xml                                # Maven build configuration
└── package.json                           # Jest test suite package definition
```

---

## 🚀 ขั้นตอนการตั้งค่าร่วมกับ Jenkins (ตามบทเรียนในคอร์ส)

### 1. การสร้าง Freestyle / Pipeline Job ใน Jenkins
1. เข้าไปที่ **Jenkins Dashboard** -> เลือก **New Item**
2. ตั้งชื่อ Job เช่น `jenkins-maven-pipeline` แล้วเลือก **Pipeline**
3. ในส่วน **Definition**:
   - เลือก **Pipeline script from SCM**
   - **SCM**: เลือก `Git`
   - **Repository URL**: ใส่ URL ของ GitHub Repository นี้
   - **Script Path**: ระบุ `Jenkinsfile`

### 2. การตั้งค่า GitHub Webhook (Build Triggers)
1. ไปที่ repository ใน **GitHub Settings** -> **Webhooks** -> **Add webhook**
2. **Payload URL**: `http://<YOUR_JENKINS_SERVER_IP>:8080/github-webhook/`
3. **Content type**: `application/json`
4. เลือก event **Just the push event** แล้วกด Add webhook

---

## 🧪 การทดสอบโปรเจกต์ในเครื่อง (Local Testing)

```bash
# ทดสอบด้วย Jest
npm test

# ทดสอบด้วย Maven (หากติดตั้ง Maven ในเครื่อง)
mvn test
```
