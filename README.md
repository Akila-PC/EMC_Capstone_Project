# EMC_Capstone_Project
EMC_Capstone_Project
Introduction:
Calculator.js App
•	A lightweight Node.js web application that performs basic arithmetic (add, subtract, multiply, divide).
•	Exposes REST endpoints (/add, /subtract, etc.) and a health check (/health).
•	Ideal for learning CI/CD because it’s simple, stateless, and container friendly.
⚙️ Why CI/CD Matters
•	Continuous Integration (CI): Every code push to GitHub triggers Jenkins to build and test automatically, ensuring no broken code reaches production.
•	Continuous Deployment (CD): Jenkins deploys the latest Docker image to AWS EC2, reducing manual effort and speeding up delivery.
🐳 Why Docker Is Essential
•	Consistency: The app runs the same way everywhere (local, Jenkins, EC2).
•	Portability: Docker images can be pushed to DockerHub and pulled on any server.
•	Isolation: Keeps dependencies contained, avoiding conflicts with other apps.
☁️ Why AWS EC2
•	Scalable hosting: Even on free tier micro/small instances, you can deploy and test real workloads.
•	Flexibility: EC2 lets you run Docker containers, configure networking, and integrate monitoring tools.
•	Accessibility: Public IP makes your app reachable from anywhere.
📊 Why Monitoring (Prometheus)
•	Prometheus: Scrapes metrics from your app and system (via Node Exporter).
•	Benefit: You’ll know immediately if the calculator app crashes, slows down, or consumes too many resources.
Architecture Diagram Flow:
Stage	Tool / Service	Purpose	Flow Direction
 Source Control	GitHub	Stores your calculator app code and Jenkinsfile.	Developer pushes code → triggers Jenkins build
CI/CD Automation	Jenkins	Pulls code from GitHub, builds Docker image, runs tests, pushes image to DockerHub, and deploys container to EC2.	Jenkins → DockerHub → EC2
 Container Registry	DockerHub	Stores built Docker images for deployment.	Jenkins pushes → EC2 pulls
 Deployment Environment	AWS EC2	Hosts the running container (your calculator app).	EC2 runs container → exposes port 5000
 Monitoring Stack	Prometheus + Grafana	Prometheus scrapes metrics from the app and Node Exporter; Grafana visualizes them.	Prometheus → Grafana dashboards
 Maintenance Automation	Cron Jobs + Shell Scripts	Automates backups and log cleanup on EC2.	Cron executes scripts daily

Tools & Services Used:
  GitHub: Developer commits code.
  Jenkins: Automatically builds, tests, and deploys the Docker image.
  DockerHub: Stores versioned images.
  EC2: Pulls and runs the containerized app.
  Prometheus: Monitors container and system metrics.
  SonarQube : Code Quality check

