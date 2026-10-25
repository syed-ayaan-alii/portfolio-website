# Syed Ayaan Ali - DevOps Engineer Portfolio

A responsive portfolio website showcasing my DevOps experience, projects, and resume.

**Live Portfolio:** [syed-ayaan-alii.github.io/portfolio-website](https://syed-ayaan-alii.github.io/portfolio-website)

---

## About Me

DevOps Engineer with hands-on internship experience at KUBICL, working with AWS cloud infrastructure, Docker, and Kubernetes for deploying and managing applications. I use Terraform for Infrastructure as Code and GitHub Actions with ArgoCD to automate deployments.

**Skills**

- **Cloud:** Amazon Web Services (AWS) - EC2, S3, IAM, VPC
- **Containers and Orchestration:** Docker, Kubernetes
- **Infrastructure as Code:** Terraform
- **CI/CD and GitOps:** GitHub, GitHub Actions, ArgoCD
- **Monitoring and Observability:** Prometheus, Grafana
- **Operating Systems:** Linux

---

## Portfolio Features

- **Responsive design** - works on desktop, tablet, and mobile
- **Single-page navigation** - About, Resume, and Contact sections
- **Resume download** - one-click PDF download
- **Projects** - details of my DevOps projects
- **Contact page** - contact details and location map

---

## Projects

### Cloud-Native Microservices Deployment
**AWS, Docker, Kubernetes, Terraform, GitHub Actions, ArgoCD**

- Packaged 5 small services into Docker containers and stored them in a container registry
- Used Terraform to set up AWS infrastructure and deployed the services on Kubernetes, cutting environment setup time from hours to minutes
- Automated building and testing of Docker images with GitHub Actions on every code change
- Used ArgoCD so deployments updated automatically whenever code changed, cutting manual deployment work by around 70%

### End-to-End CI/CD Pipeline
**GitHub Actions, Docker, Terraform**

- Used GitHub Actions to build the Dockerized application automatically on every code commit
- Added automated tests and basic checks to catch issues before deployment
- Used Terraform to create 3 separate environments (dev, staging, production), cutting manual setup work by around 65%

### Monitoring and Alerting Stack
**Prometheus, Grafana**

- Set up Prometheus and Grafana to collect and display system and application performance data
- Set up alerts for high CPU usage, high memory usage, and unhealthy pods
- Built Grafana dashboards to track response time, resource usage, uptime, and traffic

---

## Experience

**DevOps Engineer Intern** | KUBICL  
*February 2025 - May 2025*

- Set up AWS infrastructure (EC2, VPC, IAM, S3) using Terraform, so environments could be created quickly and consistently instead of manually
- Deployed applications using Docker and managed them with Kubernetes on Linux servers
- Built CI/CD pipelines with GitHub Actions to automatically build and deploy code changes
- Used ArgoCD so that changes pushed to GitHub were automatically deployed to Kubernetes
- Set up Prometheus and Grafana to monitor application performance and system health

---

## Education

**Master of Technology (MTech) in Computer Science and Engineering**  
Lakshmi Narain College of Technology University, Bhopal  
2026 - Present

**Bachelor of Technology (BTech) in Computer Science and Engineering**  
Sagar Institute of Research and Technology - Excellence, Bhopal  
2021 - 2025 | CGPA: 7.49 / 10

---

## Built With

HTML5, CSS3, JavaScript, Ion Icons, Google Maps embed. Hosted on GitHub Pages.

---

## Project Structure

```
portfolio-website/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── script.js
│   │   └── nav-fix.js
│   ├── images/
│   └── files/
│       └── SYED_AYAAN_ALI_RESUME.pdf
└── README.md
```

---

## Run Locally

1. Clone the repository:
```bash
git clone https://github.com/syed-ayaan-alii/portfolio-website.git
cd portfolio-website
```

2. Open `index.html` in your browser, or start a local server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## Deploy to GitHub Pages

1. Push the repository to GitHub
2. Go to **Settings** > **Pages**
3. Under **Source**, select the **main** branch and the **/ (root)** folder
4. Click **Save**
5. The site will be live at `https://YOUR-USERNAME.github.io/portfolio-website`

---

## Contact

- **Email:** ali.ayaan1107@gmail.com
- **Location:** Bhopal, Madhya Pradesh, India
- **LinkedIn:** [linkedin.com/in/syed-ayaan-ali](https://www.linkedin.com/in/syed-ayaan-ali)
- **GitHub:** [github.com/syed-ayaan-alii](https://github.com/syed-ayaan-alii)

---

## License

This project is open source and available for personal use.
